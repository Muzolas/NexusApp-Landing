import React from "react";
import { useTranslations } from "next-intl";
import { VaultCard } from "@/components/bento/VaultCard";
import { PipelineCard } from "@/components/bento/PipelineCard";
import { SreCard } from "@/components/bento/SreCard";
import { GrowthCard } from "@/components/bento/GrowthCard";
import { Badge } from "@/components/ui/Badge";

export function BentoGrid() {
  const t = useTranslations("Bento");

  return (
    <section id="features" className="py-24 sm:py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="outline" className="mb-4">
          {t("sectionBadge")}
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold tracking-tight text-primary">
          {t("sectionTitle")}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-muted font-sans max-w-xl mx-auto">
          {t("sectionSubtitle")}
        </p>
      </div>

      {/* 3-Column Asymmetrical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Row 1: Vault (1 col) + Pipeline (2 cols) */}
        <VaultCard />
        <PipelineCard />

        {/* Row 2: SRE Assistant (2 cols) + Growth Cockpit (1 col) */}
        <SreCard />
        <GrowthCard />
      </div>
    </section>
  );
}
