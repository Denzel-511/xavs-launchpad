import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const applicationSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7).max(15),
  track: z.enum(["full-stack", "ai-automation"]),
  experience: z.string().min(10),
  motivation: z.string().min(10),
  linkedin: z.string().url().optional().or(z.literal("")),
  github: z.string().url().optional().or(z.literal("")),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = applicationSchema.parse(body);

    // Send confirmation to applicant
    await resend.emails.send({
      from: "Launchra <onboarding@resend.dev>",
      to: [data.email],
      subject: `Your Launchra Application Received!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #22c55e;">Thank you for applying to Launchra!</h1>
          <p>Hi ${data.fullName},</p>
          <p>We've received your application for the <strong>${data.track === 'full-stack' ? 'Full-Stack Engineering' : 'AI & Automation'}</strong> track.</p>
          <p>Our team will review your application and get back to you within 5-7 business days.</p>
          <p>In the meantime, feel free to reach out to us at <a href="mailto:joinlaunchra@xavslabs.com">joinlaunchra@xavslabs.com</a> if you have any questions.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The Launchra Team</strong></p>
          <p style="color: #666; font-size: 12px;">Powered by XAVS Labs</p>
        </div>
      `,
    });

    // Send application details to admin
    await resend.emails.send({
      from: "Launchra Applications <onboarding@resend.dev>",
      to: ["xavslabs@gmail.com"],
      subject: `New Launchra Application: ${data.fullName} (${data.track})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #22c55e;">New Application Received</h1>
          <h2>${data.fullName}</h2>
          <p><strong>Track:</strong> ${data.track === 'full-stack' ? 'Full-Stack Engineering' : 'AI & Automation'}</p>
          <hr/>
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <hr/>
          <h3>Experience</h3>
          <p>${data.experience}</p>
          <hr/>
          <h3>Motivation</h3>
          <p>${data.motivation}</p>
          <hr/>
          <h3>Profiles</h3>
          <p><strong>LinkedIn:</strong> ${data.linkedin || 'Not provided'}</p>
          <p><strong>GitHub:</strong> ${data.github || 'Not provided'}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true, message: "Application submitted successfully" }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ ok: false, errors: err.issues }, { status: 422 });
    }
    console.error("Resend /apply error:", err);
    return NextResponse.json({ ok: false, message: "Internal server error" }, { status: 500 });
  }
}
