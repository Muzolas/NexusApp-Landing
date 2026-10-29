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
    tr: string[];
    en: string[];
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
      tr: "Bireysel geliştiriciler ve yerel SQLite denemeleri için.",
      en: "For solo tinkerers and local SQLite experimentation.",
    },
    features: {
      tr: [
        "1 Aktif Veritabanı Bağlantısı",
        "Temel GitHub CI İzleme",
        "Yerel Şifreli SQLite Kasası",
        "Monochrome Arayüz (Dark & Light)",
        "Topluluk Desteği",
      ],
      en: [
        "1 Active Database Connection",
        "Basic GitHub CI Telemetry",
        "Local Encrypted SQLite Vault",
        "Monochrome Desktop UI",
        "Community Support",
      ],
    },
  },
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 6,
    annualPrice: 60,
    description: {
      tr: "İlk mikro-SaaS ürününü yayına alanlar için.",
      en: "For builders shipping their first micro-SaaS product.",
    },
    features: {
      tr: [
        "3 Aktif PostgreSQL / SQLite Bağlantısı",
        "Canlı Coolify Sunucu Telemetrisi",
        "Stripe MRR & Abonelik Widget'ı",
        "Otomatik Token Rotasyonu",
        "E-posta ile Öncelikli Destek",
      ],
      en: [
        "3 Active PostgreSQL / SQLite Connections",
        "Live Coolify Server Telemetry",
        "Stripe MRR & Subscriptions Widget",
        "Automated Token Rotation",
        "Priority Email Support",
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
      tr: "Birden fazla SaaS yöneten aktif bağımsız girişimciler.",
      en: "For serial indie makers running multiple income streams.",
    },
    features: {
      tr: [
        "Sınırsız PostgreSQL & MySQL Bağlantısı",
        "Gemini 2.0 SRE Asistanı (Kök Neden Analizi)",
        "Go/No-Go Dağıtım Boru Hattı Doğrulaması",
        "AES-256-GCM Çoklu Kasa Yönetimi",
        "Canlı WebSocket Telemetri Akışı",
        "Discord VIP Geliştirici Kanalı",
      ],
      en: [
        "Unlimited PostgreSQL & MySQL Connections",
        "Gemini 2.0 SRE Assistant (Root Cause)",
        "Go/No-Go Release Pipeline Verification",
        "AES-256-GCM Multi-Vault Management",
        "Real-Time WebSocket Telemetry Streams",
        "Discord VIP Developer Channel",
      ],
    },
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 99,
    annualPrice: 990,
    description: {
      tr: "Büyüyen ve sıfır kesinti hedefleyen ekipler.",
      en: "For scaling micro-teams needing zero downtime safety.",
    },
    features: {
      tr: [
        "5 Eşzamanlı Takım Üyesi Koltuğu",
        "Çoklu Coolify & Kubernetes Küme Desteği",
        "Özel Webhook & HMAC Olay Yönlendirme",
        "Otomatik Veritabanı İndeks Önerileri",
        "15 Dakikalık Acil Destek SLA",
      ],
      en: [
        "5 Concurrent Team Seats",
        "Multi-Coolify & Kubernetes Cluster Support",
        "Custom Webhook & HMAC Event Routing",
        "Automated DB Index Optimization",
        "15-Minute Emergency SLA",
      ],
    },
  },
  {
    id: "scale",
    name: "Scale",
    monthlyPrice: 299,
    annualPrice: 2990,
    description: {
      tr: "Kritik gelir üreten yüksek trafikli sistemler.",
      en: "For high-throughput systems with dedicated telemetry needs.",
    },
    features: {
      tr: [
        "Sınırsız Takım Koltuğu & Cihaz Eşleme",
        "Özel On-Premises Go BFF Barındırma",
        "Kurumsal Denetim Günlüğü (Audit Trails)",
        "Özel Stripe & Banka Entegrasyonları",
        "Doğrudan Kurucu Mühendis Desteği",
      ],
      en: [
        "Unlimited Team Seats & Device Sync",
        "Custom On-Premises Go BFF Hosting",
        "Enterprise Audit Trails & SOC2 Logging",
        "Bespoke Payment Gateway Connectors",
        "Direct Dedicated Founder Support",
      ],
    },
  },
];
