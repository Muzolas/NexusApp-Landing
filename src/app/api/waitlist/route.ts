import { NextResponse } from "next/server";
import { isEmail, sendOwnerMail } from "@/lib/mail";
import { siteConfig } from "@/config/site";

// Early access / demo requests.
//
// When LANDING_SHARED_SECRET is set (Vercel), the lead is stored in the
// Orkhon API's waitlist (POST /api/v1/public/waitlist/join), which also
// emails the founder and sends the visitor a confirmation. If the API is not
// configured or does not answer, the request is emailed to the owner instead,
// and without email the client falls back to mailto:.
//
// Environment (set in Vercel):
//   LANDING_SHARED_SECRET     same value as LANDING_SHARED_SECRET on the API
//   NEXT_PUBLIC_API_BASE_URL  API origin (default: https://api.orkhon.beishang.dev)

const API_TIMEOUT_MS = 8000;

class RateLimited extends Error {}

function clientIP(req: Request): string {
  // On Vercel x-real-ip / the first x-forwarded-for entry is set by the platform.
  const real = req.headers.get("x-real-ip")?.trim();
  if (real) return real;
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
}

async function joinViaApi(req: Request, email: string, locale: string): Promise<boolean> {
  const secret = process.env.LANDING_SHARED_SECRET?.trim();
  if (!secret) return false;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-Landing-Key": secret,
  };
  const ip = clientIP(req);
  if (ip) headers["X-Client-IP"] = ip;

  try {
    const res = await fetch(`${siteConfig.apiBaseUrl.replace(/\/$/, "")}/api/v1/public/waitlist/join`, {
      method: "POST",
      headers,
      // The form only asks for an email; the API requires a name.
      body: JSON.stringify({ email, name: email.split("@")[0], locale }),
      signal: AbortSignal.timeout(API_TIMEOUT_MS),
      cache: "no-store",
    });
    if (res.status === 429) throw new RateLimited();
    if (!res.ok) {
      console.error(`[waitlist] API answered ${res.status}`);
      return false;
    }
    return true;
  } catch (err) {
    if (err instanceof RateLimited) throw err;
    console.error("[waitlist] API unreachable");
    return false;
  }
}

export async function POST(req: Request) {
  let email: unknown;
  let locale: unknown;
  try {
    ({ email, locale } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  const clean = (email as string).trim().toLowerCase();
  const lang = locale === "tr" ? "tr" : "en";

  try {
    if (await joinViaApi(req, clean, lang)) {
      return NextResponse.json({ success: true });
    }
  } catch (err) {
    if (err instanceof RateLimited) {
      return NextResponse.json({ error: "Too many requests." }, { status: 429 });
    }
  }

  // Fallback: email the owner.
  const result = await sendOwnerMail({
    subject: `[Orkhon] Early access / demo request: ${clean}`,
    text: `New early access and demo request.\n\nEmail: ${clean}\nLanguage: ${lang}\nTime: ${new Date().toISOString()}`,
    replyTo: clean,
  });
  if (result !== "sent") {
    return NextResponse.json({ error: "Email delivery unavailable.", fallback: "mailto" }, { status: 503 });
  }
  return NextResponse.json({ success: true });
}
