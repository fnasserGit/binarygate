import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    const { firstName, lastName, email, phone, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ──────────────────────────────────────────────
    // TODO: Wire up your email service here.
    //
    // Options:
    //   1. Resend  — https://resend.com
    //   2. SendGrid — https://sendgrid.com
    //   3. Nodemailer with SMTP
    //   4. AWS SES
    //
    // Example with Resend:
    //
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //
    //   await resend.emails.send({
    //     from: "BinaryGate Contact <noreply@binary-gate.com>",
    //     to: ["contact@binary-gate.com"],
    //     subject: `New inquiry from ${firstName} ${lastName}`,
    //     text: [
    //       `Name: ${firstName} ${lastName}`,
    //       `Email: ${email}`,
    //       `Phone: ${phone || "N/A"}`,
    //       ``,
    //       `Message:`,
    //       message,
    //     ].join("\n"),
    //   });
    //
    // ──────────────────────────────────────────────

    // For now, log to server console so you can verify it works
    console.log("📩 Contact form submission:", {
      firstName,
      lastName,
      email,
      phone: phone || "N/A",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
export const runtime = "edge";
