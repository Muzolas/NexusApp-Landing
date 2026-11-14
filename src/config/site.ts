export const siteConfig = {
  name: "NexusApp",
  description:
    "Web control console for indie developers. Monitor Vercel and Coolify deployments, GitHub Actions CI, Stripe revenue, expenses, logs, PostgreSQL/Supabase and Autopilot rules in one quiet workspace.",
  url: "https://nexus.beishang.dev",
  released: false, // Pre-launch flag
  earlyAccessLabel: "Early access · Invite-only preview",
  links: {
    github: "https://github.com/Muzolas/NexusApp",
    twitter: "https://x.com/beishangdev",
    releases: "https://github.com/Muzolas/NexusApp/releases",
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
