import { NextResponse } from "next/server";

// Fallback in-memory set for waitlist during pre-launch local testing
const waitlistEmails = new Set<string>();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Geçersiz e-posta adresi." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    waitlistEmails.add(cleanEmail);

    // If DATABASE_URL is configured (e.g. Neon or Postgres), insert record
    if (process.env.DATABASE_URL) {
      // Integration hook ready for pg/pgxpool
    }

    return NextResponse.json({
      success: true,
      message: "Waitlist kaydı başarılı.",
      totalRegistered: waitlistEmails.size,
    });
  } catch {
    return NextResponse.json(
      { error: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    count: waitlistEmails.size,
  });
}
