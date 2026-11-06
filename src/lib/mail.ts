// Sends a notification email to the site owner through Resend's HTTP API.
//
// Environment (set in Vercel):
//   RESEND_API_KEY    required to send; without it every send returns "not_configured"
//   CONTACT_TO_EMAIL  where messages go (default: contact@beishang.dev)
//   MAIL_FROM         sender, must be on a domain verified in Resend
//                     (default: "NexusApp <onboarding@resend.dev>", Resend's test sender)

export type MailResult = "sent" | "not_configured" | "failed";

export async function sendOwnerMail(opts: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<MailResult> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return "not_configured";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.MAIL_FROM || "NexusApp <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL || "contact@beishang.dev"],
        subject: opts.subject,
        text: opts.text,
        ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
      }),
    });
    if (!res.ok) {
      console.error("[mail] Resend error", res.status, await res.text());
      return "failed";
    }
    return "sent";
  } catch (e) {
    console.error("[mail] send failed", e);
    return "failed";
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const isEmail = (v: unknown): v is string => typeof v === "string" && v.length <= 254 && EMAIL_RE.test(v.trim());
