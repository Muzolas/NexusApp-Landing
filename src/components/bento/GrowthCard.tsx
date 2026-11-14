"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TrendingUp, Database } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function GrowthCard() {
  const t = useTranslations("Bento");

  return (
    <SpotlightCard className="col-span-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl border border-surgical bg-surface flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-accent" />
          </div>
          <Badge variant="default">{t("demoDataNotice")}</Badge>
        </div>

        <h3 className="font-sans text-lg font-semibold text-primary tracking-tight">
          {t("growthTitle")}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-secondary leading-relaxed font-sans">
          {t("growthDesc")}
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-surgical bg-canvas p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-sans font-medium text-muted">
            {t("growthMetricLabel")}
          </span>
          <span className="text-xs font-mono text-primary font-semibold tabular-nums">
            $3,980 <span className="text-live font-normal">+12.4%</span>
          </span>
        </div>

        {/* Mulberry Dual-Series SVG Sparkline (accent + accent-2 dashed prior) */}
        <div className="w-full h-14 flex items-end">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 100 32"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="growthFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline
              fill="none"
              stroke="var(--accent-2)"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              points="0,28 15,26 30,27 45,23 60,24 75,19 90,20 100,15"
            />
            <polygon
              fill="url(#growthFill)"
              points="0,25 15,22 30,23 45,17 60,18 75,11 90,12 100,4 100,32 0,32"
            />
            <polyline
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.8"
              points="0,25 15,22 30,23 45,17 60,18 75,11 90,12 100,4"
            />
          </svg>
        </div>

        <div className="pt-2.5 border-t border-surgical/60 flex items-center justify-between text-xs">
          <span className="text-muted font-sans flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-accent" />
            Postgres · Storage
          </span>
          <span className="font-mono font-medium text-live tabular-nums">
            0 locks · 18ms
          </span>
        </div>
      </div>
    </SpotlightCard>
  );
}
