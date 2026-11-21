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
      from: `"Leonida.net Dispatch VI" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.MAIL_FROM_ADDRESS,
      replyTo: email,
      subject: subject || `[GTA VI Portfolio Dispatch] New Briefing from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0d0816; color: #f8fafc; border: 2px solid #ff5db1; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #ff5db1 0%, #ff944d 55%, #ffd166 100%); padding: 28px 32px; text-align: center;">
            <p style="margin: 0 0 6px; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #0d0816; font-weight: 800;">LEONIDA.NET // VICE COMMS VI</p>
            <h1 style="margin: 0; font-size: 26px; letter-spacing: 1.5px; text-transform: uppercase; color: #0d0816; font-weight: 900;">NEW MISSION BRIEFING</h1>
          </div>
          <div style="padding: 30px 32px;">
            <div style="margin-bottom: 18px; border-left: 3px solid #ffd166; padding-left: 12px;">
              <p style="color: #ffd166; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px; font-weight: 700;">CONTACT</p>
              <p style="margin: 0; font-size: 16px; font-weight: 700; color: #ffffff;">${name}</p>
            </div>
            <div style="margin-bottom: 18px; border-left: 3px solid #2ee6d6; padding-left: 12px;">
              <p style="color: #2ee6d6; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px; font-weight: 700;">REPLY CHANNEL</p>
              <p style="margin: 0;"><a href="mailto:${email}" style="color: #ff5db1; font-weight: 600;">${email}</a></p>
            </div>
            <div style="margin-bottom: 18px; border-left: 3px solid #ff5db1; padding-left: 12px;">
              <p style="color: #ff5db1; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px; font-weight: 700;">MISSION TOPIC</p>
              <p style="margin: 0; color: #ffffff;">${subject || "General Inquiry"}</p>
            </div>
            <div style="background: #171024; padding: 20px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.12); border-top: 2px solid #ff944d;">
              <p style="color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 8px; font-weight: 700;">BRIEFING DETAILS</p>
              <p style="margin: 0; line-height: 1.7; white-space: pre-wrap; color: #e2e8f0;">${message}</p>
            </div>
          </div>
          <div style="padding: 18px 32px; text-align: center; border-top: 1px solid rgba(255,255,255,0.08); background: #0a0612;">
            <p style="color: #94a3b8; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; margin: 0;">TRANSMITTED FROM SHUBHAM BRAMHANE // GRAND THEFT CODE VI (LEONIDA)</p>
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
