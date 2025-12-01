// app/api/apply/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const applicationSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7).max(15),
  track: z.enum(["full-stack", "ai-automation"]),
  experience: z.string().min(10),
  motivation: z.string().min(10),
  linkedin: z.string().optional().or(z.literal("")),
  github: z.string().optional().or(z.literal("")),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = applicationSchema.parse(body);

    const msg = {
      to: data.email,
      from: process.env.SENDGRID_FROM!,
      subject: `Launchera Application: ${data.fullName} (${data.track})`,
      text: `
Full name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Track: ${data.track}

Experience:
${data.experience}

Motivation:
${data.motivation}

LinkedIn: ${data.linkedin || "N/A"}
GitHub: ${data.github || "N/A"}
      `,
      html: `<h2>New Application</h2>
<ul>
  <li><strong>Name:</strong> ${data.fullName}</li>
  <li><strong>Email:</strong> ${data.email}</li>
  <li><strong>Phone:</strong> ${data.phone}</li>
  <li><strong>Track:</strong> ${data.track}</li>
</ul>
<h3>Experience</h3><p>${data.experience}</p>
<h3>Motivation</h3><p>${data.motivation}</p>
<p>LinkedIn: ${data.linkedin || "N/A"}</p>
<p>GitHub: ${data.github || "N/A"}</p>`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ ok: true, message: "Email sent" }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ ok: false, errors: err.errors }, { status: 422 });
    }
    console.error("SendGrid /apply error:", err);
    return NextResponse.json({ ok: false, message: "Internal server error" }, { status: 500 });
  }
}
