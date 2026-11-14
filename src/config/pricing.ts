export interface PricingFeature {
  text: string;
  soon?: boolean;
}

export interface PricingTier {
  id: "free" | "starter" | "creator" | "pro" | "scale";
  name: string;
  monthlyPrice: number;
  annualPrice: number; // monthly * 10
  description: {
    tr: string;
    en: string;
  };
  features: {
    tr: PricingFeature[];
    en: PricingFeature[];
  };
  popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: {
      tr: "Tek proje üzerinde konsolu deneyen bağımsız geliştiriciler için.",
      en: "For solo builders testing the console on a single project.",
    },
    features: {
      tr: [
        { text: "1 çalışma alanı" },
        { text: "Vercel ve Coolify deploy takibi" },
        { text: "GitHub Actions CI çalışmaları ve iş akışları" },
        { text: "Loglar ve hatalar tek yerde" },
        { text: "Stripe geliri ve gider takibi" },
      ],
      en: [
        { text: "1 workspace" },
        { text: "Deploys from Vercel and Coolify" },
        { text: "GitHub Actions runs and workflows" },
        { text: "Logs and errors in one place" },
        { text: "Stripe revenue and expense tracking" },
      ],
    },
  },
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 6,
    annualPrice: 60,
    description: {
      tr: "Canlı log ve doğrudan veritabanı kontrolü isteyen geliştiriciler için.",
      en: "For builders who want live logs and direct database tooling.",
    },
    features: {
      tr: [
        { text: "2 çalışma alanına kadar" },
        { text: "Canlı WebSocket log akışı" },
        { text: "PostgreSQL ve Supabase için SQL konsolu" },
        { text: "Tablolar, oturumlar ve bakım araçları" },
        { text: "Free'deki her şey" },
      ],
      en: [
        { text: "Up to 2 workspaces" },
        { text: "Live WebSocket log stream" },
        { text: "SQL console for PostgreSQL and Supabase" },
        { text: "Tables, sessions and maintenance tools" },
        { text: "Everything in Free" },
      ],
    },
  },
  {
    id: "creator",
    name: "Creator",
    monthlyPrice: 22,
    annualPrice: 220,
    popular: true,
    description: {
      tr: "Birden fazla ürün yönetip AI teşhis ve otomasyon kullanan kurucular için.",
      en: "For serial indie founders using AI diagnostics and automation.",
    },
    features: {
      tr: [
        { text: "5 çalışma alanına kadar" },
        { text: "Gemini ile AI kök neden analizi (RCA)" },
        { text: "Araçlarınız arasında Otopilot kuralları" },
        { text: "Kapılı sürüm (Go/No-Go) pipeline'ı" },
        { text: "Starter'daki her şey" },
      ],
      en: [
        { text: "Up to 5 workspaces" },
        { text: "AI root cause analysis with Gemini" },
        { text: "Autopilot rules across your tools" },
        { text: "Release pipeline with Go/No-Go gates" },
        { text: "Everything in Starter" },
      ],
    },
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 99,
    annualPrice: 990,
    description: {
      tr: "Kendi Gemini anahtarını, Gateway API'yi ve Storage tarayıcısını kullanan ekipler.",
      en: "For builders bringing their own Gemini key, Gateway API & Storage.",
    },
    features: {
      tr: [
        { text: "15 çalışma alanına kadar" },
        { text: "Kendi Gemini anahtarınız (BYOK — kredi harcamaz)" },
        { text: "Nexus Gateway API anahtarları (/v1/logs)" },
        { text: "Supabase Storage kova tarayıcısı" },
        { text: "Giden webhook teslimatı", soon: true },
        { text: "Creator'daki her şey" },
      ],
      en: [
        { text: "Up to 15 workspaces" },
        { text: "Your own Gemini key (BYOK — uses no credits)" },
        { text: "API keys for the Nexus gateway (/v1/logs)" },
        { text: "Supabase Storage bucket browser" },
        { text: "Outbound webhook delivery", soon: true },
        { text: "Everything in Creator" },
      ],
    },
  },
  {
    id: "scale",
    name: "Scale",
    monthlyPrice: 299,
    annualPrice: 2990,
    description: {
      tr: "Sınırsız çalışma alanı ve öncelikli destek isteyen yüksek hacimli yapılar.",
      en: "For high-volume setups needing unlimited workspaces and direct support.",
    },
    features: {
      tr: [
        { text: "Sınırsız çalışma alanı" },
        { text: "Takım koltukları ve RBAC", soon: true },
        { text: "Gateway kota ve istek telemetrisi", soon: true },
        { text: "Öncelikli kurucu mühendis desteği" },
        { text: "Pro'daki her şey" },
      ],
      en: [
        { text: "Unlimited workspaces" },
        { text: "Team seats and RBAC", soon: true },
        { text: "Gateway quota & request telemetry", soon: true },
        { text: "Priority founder engineering support" },
        { text: "Everything in Pro" },
      ],
    },
  },
];
