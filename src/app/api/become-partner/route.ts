import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);


export async function POST(req: Request) {


  try {
    const data = await req.json();
    console.log("api key", process.env.SENDGRID_API_KEY, "req", req.json());

    const {
      companyName,
      contactName,
      email,
      phone,
      industry,
      companySize,
      website,
      challenge
    } = data;

    // Email to YOU (the admin)
    const adminMessage = {
      to: "zoubjd19@gmail.com",
      from: "zoubjd19@gmail.com",
      subject: `New Partnership Inquiry from ${companyName}`,
      html: `
  <div style="font-family:Arial, sans-serif; color:#333;">
    <h2 style="color:#007bff;">New Partnership Inquiry</h2>
    <p>A new partner company filled the form:</p>

    <table cellpadding="6" style="border-collapse: collapse; width: 100%;">
      <tr><td><strong>Company Name:</strong></td><td>${companyName}</td></tr>
      <tr><td><strong>Contact Person:</strong></td><td>${contactName}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
      <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
      <tr><td><strong>Industry:</strong></td><td>${industry}</td></tr>
      <tr><td><strong>Company Size:</strong></td><td>${companySize}</td></tr>

      <tr>
        <td><strong>Website:</strong></td>
        <td>
          ${
            website
              ? `<a href="${website}"
                  style="
                    display:inline-block;
                    padding:10px 16px;
                    background:#007bff;
                    color:#fff;
                    text-decoration:none;
                    border-radius:6px;
                    font-weight:600;
                  "
                 >
                   Visit Website
                </a>`
              : `<span style="color:#888;">Not provided</span>`
          }
        </td>
      </tr>

      <tr><td valign="top"><strong>Technical Challenge:</strong></td><td>${challenge}</td></tr>
    </table>
  </div>
  `,
    };

    // Optional: confirmation email to the applicant
    const applicantMessage = {
      to: email,
      from: "zoubjd19@gmail.com",
      subject: "Your Partnership Inquiry Has Been Received",
      html: `
  <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding: 20px;">
    <div style="max-width:600px; margin:0 auto; background:white; border-radius:10px; padding:20px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      
      <div style="text-align:center; margin-bottom:20px;">
        <img src="https://media.licdn.com/dms/image/v2/D560BAQFdGkx2pB2WhA/company-logo_100_100/B56ZWzNKxvHoAU-/0/1742468329563?e=1766016000&v=beta&t=gPMxg6UUeSOBTTT_ysmeugfQvqgAkDLCIg-rapAdw9s" alt="Logo" style="width:120px; margin-bottom:10px;" />
        <h2 style="color:#333; margin:0;">Thank You for Reaching Out</h2>
      </div>

      <p style="font-size:16px; color:#555;">
        Hi <strong>${contactName}</strong>,
      </p>

      <p style="font-size:16px; color:#555;">
        Thank you for submitting your partnership inquiry. We will get back to you shortly!
      </p>

      <h3 style="margin-top:20px; color:#333;">Your Challenge:</h3>

      <p style="background:#fafafa; border-left:4px solid #4f46e5; padding:15px; border-radius:5px; color:#555; white-space:pre-line;">
        ${challenge}
      </p>

      <p style="text-align:center; margin-top:30px; color:#999; font-size:12px;">
        We appreciate your interest in collaborating with us!
      </p>

    </div>
  </div>
  `,
    };

    // Send the emails
    await sgMail.send(adminMessage);
    

    // Toggle this ON if you want to notify them too:
    await sgMail.send(applicantMessage);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("SENDGRID ERROR:", err.message);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
