import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import fs from "fs";
import path from "path";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, expertise, experience } = data;

    const html = `
      <div style="font-family:Arial, sans-serif; color:#333;">
        <img 
          src="https://media.licdn.com/dms/image/v2/D560BAQFdGkx2pB2WhA/company-logo_200_200/B56ZWzNKxvHoAM-/0/1742468329563?e=1766016000&v=beta&t=-c02gSvoFZirKdQ2sArjQgQJGLxctcqjawcT27kQL-s" 
          alt="Logo" 
          style="width:150px; margin-bottom:20px;"
        />

        <h2 style="color:#007bff;">New Mentor Application</h2>

        <p>A new mentor is interested in joining:</p>

        <table cellpadding="6" style="border-collapse: collapse; width: 100%;">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Expertise:</strong></td><td>${expertise}</td></tr>
          <tr>
            <td valign="top"><strong>Experience:</strong></td>
            <td>${experience}</td>
          </tr>
        </table>
      </div>
    `;

    await sgMail.send({
      to: "zoubjd19@gmail.com",
      from: "zoubjd19@gmail.com",
      subject: `New Mentor Application from ${name}`,
      html,
    });

    const mentorMessage = {
      to: email,
      from: "zoubjd19@gmail.com",
      subject: `Thanks for applying to Launchera!`,
      html: `
        <div style="font-family:Arial, sans-serif; color:#333;">
          <img 
            src="https://media.licdn.com/dms/image/v2/D560BAQFdGkx2pB2WhA/company-logo_200_200/B56ZWzNKxvHoAM-/0/1742468329563?e=1766016000&v=beta&t=-c02gSvoFZirKdQ2sArjQgQJGLxctcqjawcT27kQL-s" 
            alt="Logo" 
            style="width:120px; margin-bottom:20px;"
          />

          <h2 style="color:#007bff;">Thanks for applying!</h2>
          <p>We’ve received your application and we’ll be in touch soon.</p>
        </div>
      `,
    };

    await sgMail.send(mentorMessage);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("SENDGRID ERROR:", err.message);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
