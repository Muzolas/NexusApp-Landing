export const siteConfig = {
  name: "Orkhon",
  description:
    "Orkhon is the Indie Control Center. Monitor Vercel and Coolify deployments, GitHub Actions CI, Stripe revenue, expenses, logs, PostgreSQL/Supabase and Autopilot rules in one quiet workspace.",
  // Public site URL. The final domain is not decided yet; override with NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nexus.beishang.dev",
  // Product API base URL (Gateway). Override with NEXT_PUBLIC_API_BASE_URL.
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.nexus.beishang.dev",
  tagline: { en: "Orchestrate your indie stack.", tr: "Altyapın taşa yazılı, kontrol sende." },
  released: false, // Pre-launch flag
  earlyAccessLabel: "Early access · Invite-only preview",
  links: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/Muzolas/Orkhon",
    twitter: "https://x.com/beishangdev",
    releases: `${process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/Muzolas/Orkhon"}/releases`,
    contactEmail: "contact@beishang.dev",
  },
  telemetryItems: [
    { key: "vault", labelKey: "TelemetryBar.vault" },
    { key: "argon", labelKey: "TelemetryBar.argon" },
    { key: "jwt", labelKey: "TelemetryBar.jwt" },
    { key: "bff", labelKey: "TelemetryBar.bff" },
    { key: "postgres", labelKey: "TelemetryBar.postgres" },
    { key: "webhook", labelKey: "TelemetryBar.webhook" },
  ],
};
