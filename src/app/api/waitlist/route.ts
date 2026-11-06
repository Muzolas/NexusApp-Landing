import { NextResponse } from "next/server";
import { isEmail, sendOwnerMail } from "@/lib/mail";

// Early access / demo requests: each one is emailed to the owner, so nothing
// depends on server memory. Without email set up the client uses mailto:.
export async function POST(req: Request) {
  try {
    const { email, locale } = await req.json();
    if (!isEmail(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    const clean = email.trim().toLowerCase();
    const result = await sendOwnerMail({
      subject: `[NexusApp] Early access / demo request: ${clean}`,
      text: `New early access and demo request.\n\nEmail: ${clean}\nLanguage: ${locale ?? "-"}\nTime: ${new Date().toISOString()}`,
      replyTo: clean,
    });

    if (result !== "sent") {
      return NextResponse.json({ error: "Email delivery unavailable.", fallback: "mailto" }, { status: 503 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
