import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export const revalidate = 600; // 10 minutes cache

export async function GET() {
  if (!siteConfig.released) {
    return NextResponse.json({
      released: false,
      tag_name: "v1.0.0-beta",
      status: siteConfig.earlyAccessLabel,
      assets: [],
    });
  }

  try {
    const res = await fetch(
      "https://api.github.com/repos/Muzolas/NexusApp/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({
        released: false,
        tag_name: "v1.0.0-beta",
      });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "GitHub release sorgulanamadı." },
      { status: 500 }
    );
  }
}
