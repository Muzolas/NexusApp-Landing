export const siteConfig = {
  name: "NexusApp",
  description: "High-Performance Desktop Control Center for Indie Developers. Unify CI/CD, Coolify, Stripe & PostgreSQL telemetry in a pure monochrome cockpit.",
  url: "https://nexus.beishang.dev",
  released: false, // Pre-launch flag
  earlyAccessLabel: "EARLY ACCESS · IN DEVELOPMENT",
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
