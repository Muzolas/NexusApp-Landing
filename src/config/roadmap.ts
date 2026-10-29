export interface RoadmapItem {
  id: string;
  category: "now" | "next" | "later";
  tag: string;
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  progress: number; // percentage
  status: "in-progress" | "planned" | "future";
}

export const roadmapItems: RoadmapItem[] = [
  {
    id: "bff-pgxpool",
    category: "now",
    tag: "BACKEND P0",
    title: {
      tr: "Go Fiber v2 BFF & PostgreSQL pgxpool Entegrasyonu",
      en: "Go Fiber v2 BFF & PostgreSQL pgxpool Integration",
    },
    description: {
      tr: "Port 3000 üzerinde çalışan bağımsız backend mimarisi ve AES-256 Vault anahtar koruması.",
      en: "Independent backend running on port 3000 with AES-256 Vault key encryption.",
    },
    progress: 95,
    status: "in-progress",
  },
  {
    id: "flutter-desktop",
    category: "now",
    tag: "DESKTOP CLIENT",
    title: {
      tr: "Monochrome Technical Masaüstü Kullanıcı Arayüzü",
      en: "Monochrome Technical Desktop Client UI",
    },
    description: {
      tr: "Riverpod state yönetimi, katmanlı mimari, pencereli ve tam ekran masaüstü deneyimi.",
      en: "Riverpod state management, layered architecture, desktop-native windowing.",
    },
    progress: 85,
    status: "in-progress",
  },
  {
    id: "coolify-connector",
    category: "next",
    tag: "INTEGRATION",
    title: {
      tr: "Coolify Canlı Dağıtım & Konteyner Durum İzleme",
      en: "Coolify Live Deployment & Container State Stream",
    },
    description: {
      tr: "Sunucu bellek, CPU ve Docker konteyner yeniden başlatma olaylarının canlı telemetrisi.",
      en: "Real-time telemetry for server memory, CPU spikes, and Docker restarts.",
    },
    progress: 40,
    status: "planned",
  },
  {
    id: "sre-assistant",
    category: "next",
    tag: "AI & TELEMETRY",
    title: {
      tr: "Gemini 2.0 SRE Asistanı ve Kök Neden Analizi",
      en: "Gemini 2.0 SRE Assistant & Root-Cause Remediation",
    },
    description: {
      tr: "Veritabanı kilitleri, yavaş sorgular ve 500 hatalarında anında otomatik onarım komutları.",
      en: "Instant automated repair commands when database deadlocks and 500 errors occur.",
    },
    progress: 25,
    status: "planned",
  },
  {
    id: "multi-team-vault",
    category: "later",
    tag: "COLLABORATION",
    title: {
      tr: "Çoklu Geliştirici Kasası ve Rol Tabanlı Erişim",
      en: "Multi-Maker Vault & Role-Based Access Control",
    },
    description: {
      tr: "Takım üyeleri arasında şifreli ortam değişkenleri ve API token güvenli senkronizasyonu.",
      en: "Encrypted environment variables and API token sync across distributed teams.",
    },
    progress: 0,
    status: "future",
  },
];
