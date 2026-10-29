"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CopyButton } from "@/components/ui/CopyButton";
import { Bot, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function SreCard() {
  const t = useTranslations("Bento");

  return (
    <SpotlightCard className="col-span-1 md:col-span-2 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl border border-surgical bg-elevated flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <Badge variant="warn">GEMINI 2.0 SRE</Badge>
        </div>

        <h3 className="font-mono text-lg font-bold text-primary tracking-tight">
          {t("sreTitle")}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed font-sans max-w-xl">
          {t("sreDesc")}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Error Telemetry Log */}
        <div className="rounded-xl border border-status-error/30 bg-status-error/5 p-3.5 font-mono text-xs text-status-error flex flex-col justify-between">
          <div className="flex items-center gap-2 pb-2 border-b border-status-error/20 text-[11px] font-semibold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>POSTGRES TELEMETRY ERROR</span>
          </div>
          <pre className="mt-2 text-[11px] font-mono leading-relaxed whitespace-pre-wrap break-all opacity-90">
            {t("sreLog")}
          </pre>
        </div>

        {/* Right: AI Root Cause Analysis & Remediation */}
        <div className="rounded-xl border border-surgical bg-canvas p-3.5 font-mono text-xs flex flex-col justify-between">
          <div className="text-[11px] text-muted pb-2 border-b border-surgical/50">
            AI ANALYSIS & REMEDIATION
          </div>
          <p className="mt-2 text-[11px] text-muted font-sans leading-relaxed">
            {t("sreAnalysis")}
          </p>
          <div className="mt-3 flex items-center justify-between gap-2 p-2 rounded bg-elevated border border-surgical">
            <code className="text-[11px] text-primary truncate select-all">
              {t("sreAction")}
            </code>
            <CopyButton textToCopy={t("sreAction")} />
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
