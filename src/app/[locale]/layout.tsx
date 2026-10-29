import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexusApp — Indie Desktop Control Center",
  description:
    "High-Performance Desktop Control Center for Indie Developers. Unify GitHub CI/CD, Coolify deployments, Stripe telemetry, and PostgreSQL in a pure monochrome cockpit.",
  metadataBase: new URL("https://nexus.beishang.dev"),
  keywords: [
    "NexusApp",
    "Indie Control Center",
    "Flutter Desktop",
    "Go Fiber BFF",
    "Developer Dashboard",
    "PostgreSQL Telemetry",
    "Coolify",
    "Stripe MRR",
  ],
  authors: [{ name: "beishang.dev" }],
  openGraph: {
    title: "NexusApp — Indie Desktop Control Center",
    description:
      "High-Performance Desktop Control Center for Indie Developers. Unify CI/CD, Coolify, Stripe & PostgreSQL telemetry in a pure monochrome cockpit.",
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
    title: "NexusApp — Indie Desktop Control Center",
    description:
      "High-Performance Desktop Control Center for Indie Developers.",
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
        className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased bg-canvas text-primary min-h-screen flex flex-col font-sans`}
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
