import { NextResponse } from "next/server";
import { isEmail, sendOwnerMail } from "@/lib/mail";

// Contact form and demo requests. The message is emailed to the owner; when
// email is not set up (or fails) the client falls back to a mailto: link.
export async function POST(req: Request) {
  try {
    const { email, message, name, locale } = await req.json();

    if (!isEmail(email) || typeof message !== "string" || !message.trim() || message.length > 5000) {
      return NextResponse.json({ error: "Valid email and message are required." }, { status: 400 });
    }

    const who = typeof name === "string" && name.trim() ? `${name.trim().slice(0, 100)} <${email.trim()}>` : email.trim();
    const result = await sendOwnerMail({
      subject: `[NexusApp] Message from ${who}`,
      text: `${message.trim()}\n\n— ${who}${locale ? ` (${locale})` : ""}`,
      replyTo: email.trim(),
    });

    if (result !== "sent") {
      return NextResponse.json({ error: "Email delivery unavailable.", fallback: "mailto" }, { status: 503 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
