import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: "E-posta ve mesaj alanları zorunludur." },
        { status: 400 }
      );
    }

    // In production, dispatch via Resend or webhook
    return NextResponse.json({
      success: true,
      message: "Mesaj başarıyla alındı.",
    });
  } catch {
    return NextResponse.json(
      { error: "Mesaj gönderilirken hata oluştu." },
      { status: 500 }
    );
  }
}
