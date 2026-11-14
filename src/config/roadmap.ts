export interface RoadmapItem {
  id: string;
  category: "now" | "next" | "later";
  tag: {
    tr: string;
    en: string;
  };
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  progress: number; // percentage
  status: "shipped" | "coming-soon" | "later";
}

export const roadmapItems: RoadmapItem[] = [
  {
    id: "core-8-modules",
    category: "now",
    tag: {
      tr: "ÇEKİRDEK · 8 MODÜL",
      en: "CORE CONSOLE · 8 MODULES",
    },
    title: {
      tr: "8 Çekirdek Modül & Nexus Mulberry Arayüzü",
      en: "8 Core Modules & Nexus Mulberry UI",
    },
    description: {
      tr: "Pilot brifingi, Vercel ve Coolify Deployments, GitHub Actions Workflows, Stripe Revenue, Expenses, Logs & Errors, Postgres/Supabase Database & Storage ve Autopilot.",
      en: "Pilot briefing, Vercel & Coolify Deployments, GitHub Actions Workflows, Stripe Revenue, Expenses, Logs & Errors, Postgres/Supabase Database & Storage, and Autopilot.",
    },
    progress: 100,
    status: "shipped",
  },
  {
    id: "bff-vault-ssrf",
    category: "now",
    tag: {
      tr: "GÜVENLİK & BFF",
      en: "SECURITY & BFF",
    },
    title: {
      tr: "Go Fiber BFF, AES-256-GCM Kasa & SSRF Koruması",
      en: "Go Fiber BFF, AES-256-GCM Vault & SSRF Guard",
    },
    description: {
      tr: "Argon2id kimlik doğrulama, çalışma alanı bazlı şifreli anahtar kasası, güvenli dış çağrılar (netutil) ve /v1/logs Gateway API.",
      en: "Argon2id authentication, per-workspace encrypted secrets vault, SSRF-hardened outbound requests, and /v1/logs Gateway API.",
    },
    progress: 100,
    status: "shipped",
  },
  {
    id: "gemini-sre-byok",
    category: "now",
    tag: {
      tr: "AI & SQL KONSOLU",
      en: "AI & SQL CONSOLE",
    },
    title: {
      tr: "Gemini Kök Neden Analizi (RCA), SQL Asistanı & BYOK",
      en: "Gemini Root-Cause Analysis, SQL Assistant & BYOK",
    },
    description: {
      tr: "Loglar, veritabanı oturumları ve Pilot brifingi için tek tıkla AI teşhisi; yönetimli kredi veya kendi Gemini API anahtarınızla kullanım.",
      en: "One-click AI diagnostics across logs, DB sessions and Pilot briefings, with managed credits or your own Gemini API key (BYOK).",
    },
    progress: 100,
    status: "shipped",
  },
  {
    id: "outbound-webhooks",
    category: "next",
    tag: {
      tr: "YAKINDA · WEBHOOKS",
      en: "COMING SOON · WEBHOOKS",
    },
    title: {
      tr: "Giden Webhook Teslimatı & Olay Yönlendirme",
      en: "Outbound Webhook Delivery & Event Routing",
    },
    description: {
      tr: "Autopilot kuralları ve sistem uyarılarını HMAC-SHA256 imzalı olarak Slack, Discord veya kendi HTTP uçlarınıza teslim etme.",
      en: "Deliver Autopilot triggers and system alerts to Slack, Discord, or custom HTTP endpoints with HMAC-SHA256 signatures.",
    },
    progress: 65,
    status: "coming-soon",
  },
  {
    id: "gateway-quotas",
    category: "next",
    tag: {
      tr: "YAKINDA · TELEMETRİ",
      en: "COMING SOON · TELEMETRY",
    },
    title: {
      tr: "Gateway Kota, Hız Sınırı & İstek Ölçümü",
      en: "Gateway Quota, Rate-Limit & Request Metering",
    },
    description: {
      tr: "/v1 API anahtarları için canlı istek hacmi, gecikme dağılımı ve çalışma alanı bazlı kota uyarıları.",
      en: "Live request counters, latency breakdown, and per-workspace quota visibility for /v1 Gateway API keys.",
    },
    progress: 50,
    status: "coming-soon",
  },
  {
    id: "product-growth-modules",
    category: "next",
    tag: {
      tr: "YAKINDA · ÜRÜN",
      en: "COMING SOON · PRODUCT",
    },
    title: {
      tr: "Changelog, Waitlist, Geri Bildirim & Duyuru Modülleri",
      en: "Changelog, Waitlist, Feedback & Broadcast Modules",
    },
    description: {
      tr: "Sürüm notlarını yayınlama, bekleme listesi ve kullanıcı geri bildirimlerini gerçek veri kaynaklarıyla konsola açma.",
      en: "Unlock release changelogs, customer waitlist, feedback reviews, and broadcast announcements wired to real data.",
    },
    progress: 40,
    status: "coming-soon",
  },
  {
    id: "team-rbac",
    category: "later",
    tag: {
      tr: "PLANLANAN · TAKIMLAR",
      en: "PLANNED · TEAMS",
    },
    title: {
      tr: "Takım Çalışma Alanları & Rol Tabanlı Erişim (RBAC)",
      en: "Team Workspaces & Role-Based Access Control",
    },
    description: {
      tr: "Çoklu ekip üyesi davetleri, çalışma alanı rolleri ve denetim kayıtları.",
      en: "Multi-member workspace invites, role-based access control, and team audit trails.",
    },
    progress: 15,
    status: "later",
  },
  {
    id: "extra-connectors",
    category: "later",
    tag: {
      tr: "PLANLANAN · BAĞLAYICILAR",
      en: "PLANNED · CONNECTORS",
    },
    title: {
      tr: "Ek Veritabanı & Altyapı Bağlayıcıları",
      en: "Additional Database & Infra Connectors",
    },
    description: {
      tr: "MySQL, MongoDB, Firebase ve çoklu sunucu kümesi entegrasyon adaptörleri.",
      en: "First-class connectors for MySQL, MongoDB, Firebase, and multi-cluster server targets.",
    },
    progress: 10,
    status: "later",
  },
];
