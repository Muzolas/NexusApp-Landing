import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "@/app/globals.css";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexusApp — Control Console for Indie Developers",
  description:
    "Web control console for indie developers. Monitor Vercel and Coolify deployments, GitHub Actions CI, Stripe revenue, expenses, logs, PostgreSQL/Supabase and Autopilot rules in one quiet workspace.",
  metadataBase: new URL("https://nexus.beishang.dev"),
  keywords: [
    "NexusApp",
    "Indie Control Console",
    "Web Control Center",
    "Go Fiber BFF",
    "Developer Console",
    "PostgreSQL Telemetry",
    "Supabase",
    "Coolify",
    "Vercel",
    "Stripe MRR",
  ],
  authors: [{ name: "beishang.dev" }],
  openGraph: {
    title: "NexusApp — Control Console for Indie Developers",
    description:
      "Web control console for indie developers. Monitor Vercel and Coolify deployments, GitHub Actions CI, Stripe revenue, expenses, logs, PostgreSQL/Supabase and Autopilot rules in one quiet workspace.",
    url: "https://nexus.beishang.dev",
    siteName: "NexusApp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexusApp Preview",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusApp — Control Console for Indie Developers",
    description:
      "Web control console for indie developers. Monitor deploys, CI, Stripe revenue, expenses, logs, PostgreSQL/Supabase and Autopilot in one place.",
    images: ["/og-image.png"],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "tr" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${interSans.variable} ${jetbrainsMono.variable} antialiased bg-canvas text-primary min-h-screen flex flex-col font-sans`}
      >
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
