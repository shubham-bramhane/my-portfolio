import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.MAIL_FROM_ADDRESS,
      replyTo: email,
      subject: subject || `Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #f0f0f5; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6c63ff, #ff6b9d, #00d2ff); padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: white;">New Portfolio Message</h1>
          </div>
          <div style="padding: 32px;">
            <div style="margin-bottom: 20px;">
              <p style="color: #6b6b80; font-size: 12px; text-transform: uppercase; margin: 0 0 4px;">From</p>
              <p style="margin: 0; font-size: 16px; font-weight: 600;">${name}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #6b6b80; font-size: 12px; text-transform: uppercase; margin: 0 0 4px;">Email</p>
              <p style="margin: 0;"><a href="mailto:${email}" style="color: #6c63ff;">${email}</a></p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #6b6b80; font-size: 12px; text-transform: uppercase; margin: 0 0 4px;">Subject</p>
              <p style="margin: 0;">${subject || "No subject"}</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.06);">
              <p style="color: #6b6b80; font-size: 12px; text-transform: uppercase; margin: 0 0 8px;">Message</p>
              <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 20px 32px; text-align: center; border-top: 1px solid rgba(255,255,255,0.06);">
            <p style="color: #6b6b80; font-size: 12px; margin: 0;">Sent from shubhambramhane.in portfolio</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
