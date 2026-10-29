"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function GrowthCard() {
  const t = useTranslations("Bento");

  return (
    <SpotlightCard className="col-span-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl border border-surgical bg-elevated flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <Badge variant="default">{t("demoDataNotice")}</Badge>
        </div>

        <h3 className="font-mono text-lg font-bold text-primary tracking-tight">
          {t("growthTitle")}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed font-sans">
          {t("growthDesc")}
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-surgical bg-canvas p-4 font-mono space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted">MRR RUNWAY</span>
          <span className="text-xs text-primary font-bold">18.4 Months</span>
        </div>

        {/* Minimalist SVG Sparkline */}
        <div className="w-full h-12 flex items-end">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 100 30"
            preserveAspectRatio="none"
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              points="0,25 15,22 30,24 45,18 60,20 75,12 90,14 100,5"
            />
          </svg>
        </div>

        <div className="pt-2 border-t border-surgical/50 flex items-center justify-between text-xs">
          <span className="text-muted flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            WAITLIST
          </span>
          <span className="font-bold text-live">412 MAKERS</span>
        </div>
      </div>
    </SpotlightCard>
  );
}
