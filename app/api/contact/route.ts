import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contact } from "@/lib/content";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
    let body: { name?: string; email?: string; company?: string; message?: string };

    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
        return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    if (!EMAIL_RE.test(email)) {
        return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // Requires SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local.
    // CONTACT_TO_EMAIL is optional and falls back to the address in lib/content.
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
        console.error("Contact form: SMTP env vars are not configured.");
        return NextResponse.json(
            { error: "Contact form is not yet configured. Please email us directly." },
            { status: 500 },
        );
    }

    try {
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT),
            secure: Number(SMTP_PORT) === 465,
            auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        await transporter.sendMail({
            from: `"${name} via website" <${SMTP_USER}>`,
            to: CONTACT_TO_EMAIL || contact.email,
            replyTo: email,
            subject: `New contact form message from ${name}${company ? ` (${company})` : ""}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                company ? `Company: ${company}` : null,
                "",
                message,
            ]
                .filter(Boolean)
                .join("\n"),
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Contact form: failed to send email", err);
        return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }
}