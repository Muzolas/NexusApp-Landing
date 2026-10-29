import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { AccordionItem } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";

export function FaqSection() {
  const t = useTranslations("Faq");
  const locale = useLocale() as "tr" | "en";

  const faqs = [
    {
      question: {
        tr: "NexusApp ne zaman genel erişime açılacak?",
        en: "When will NexusApp become publicly available?",
      },
      answer: {
        tr: "NexusApp şu anda kapalı alfa geliştirme aşamasındadır. Erken erişim bekleme listesine kaydolan geliştiriciler, ilk dalga beta testine kademeli olarak davet edilecektir.",
        en: "NexusApp is currently in closed alpha development. Builders registered on the early access waitlist will be invited in rolling batches during the beta wave.",
      },
    },
    {
      question: {
        tr: "Hangi masaüstü işletim sistemleri destekleniyor?",
        en: "Which desktop operating systems are supported?",
      },
      answer: {
        tr: "macOS (Apple Silicon M1/M2/M3 ve Intel), Linux (AppImage, deb, rpm ve Arch AUR) ve Windows 10/11 (.exe ve winget) için yerel Flutter Desktop mimarisinde geliştirilmektedir.",
        en: "Native builds are being compiled for macOS (Apple Silicon M1/M2/M3 & Intel), Linux (AppImage, deb, rpm, Arch AUR), and Windows 10/11 (.exe & winget).",
      },
    },
    {
      question: {
        tr: "API anahtarlarım ve tokenlarım güvende mi?",
        en: "How are my API tokens and database keys secured?",
      },
      answer: {
        tr: "Evet. Tüm hassas anahtarlar doğrudan Go BFF katmanında Argon2id anahtar türetimi ve AES-256-GCM Vault ile şifrelenir. Asla bellekte veya loglarda düz metin olarak barındırılmaz.",
        en: "Yes. All sensitive credentials are encrypted at ingestion in the Go BFF layer using Argon2id key derivation and AES-256-GCM Vault storage. Tokens never linger in plaintext memory.",
      },
    },
    {
      question: {
        tr: "NexusApp açık kaynak kodlu mu?",
        en: "Is NexusApp open source?",
      },
      answer: {
        tr: "Masaüstü istemcimiz ve Go BFF çekirdeğimiz GitHub üzerinde şeffaf bir şekilde geliştirilmektedir. Kurumsal entegrasyonlar ve gelişmiş yapay zeka SRE modülleri ticari lisans kapsamında sunulacaktır.",
        en: "Our core desktop client and Go BFF architecture are developed transparently on GitHub. Enterprise adapters and advanced SRE modules will be distributed under a commercial license.",
      },
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 border-t border-surgical relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="outline" className="mb-4">
          {t("badge")}
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold tracking-tight text-primary">
          {t("title")}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-muted font-sans max-w-xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            question={faq.question[locale]}
            answer={faq.answer[locale]}
            isOpenDefault={idx === 0}
          />
        ))}
      </div>
    </section>
  );
}
