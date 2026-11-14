"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CopyButton } from "@/components/ui/CopyButton";
import { Bot, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function SreCard() {
  const t = useTranslations("Bento");
  const tTerm = useTranslations("Terminal");

  return (
    <SpotlightCard className="col-span-1 md:col-span-2 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl border border-surgical bg-surface flex items-center justify-center">
            <Bot className="w-5 h-5 text-accent" />
          </div>
          <Badge variant="accent">Gemini RCA · BYOK</Badge>
        </div>

        <h3 className="font-sans text-lg font-semibold text-primary tracking-tight">
          {t("sreTitle")}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-secondary leading-relaxed font-sans max-w-xl">
          {t("sreDesc")}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Error Telemetry Log */}
        <div className="rounded-xl border border-status-error/30 bg-status-error/5 p-3.5 font-mono text-xs text-status-error flex flex-col justify-between">
          <div className="flex items-center gap-2 pb-2 border-b border-status-error/20 text-[11px] font-semibold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>POSTGRES / LOG EVENT</span>
          </div>
          <pre className="mt-2 text-[11px] font-mono leading-relaxed whitespace-pre-wrap break-all opacity-90">
            {t("sreLog")}
          </pre>
        </div>

        {/* Right: AI Root Cause Analysis & Confidence Bar */}
        <div className="rounded-xl border border-surgical bg-canvas p-3.5 text-xs flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-surgical/60">
            <span className="font-sans text-[11px] font-medium text-secondary">
              {t("sreLabel")}
            </span>
            <span className="font-mono text-[11px] text-accent font-medium tabular-nums">
              92%
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-surface overflow-hidden">
            <div className="h-full w-[92%] bg-accent rounded-full" />
          </div>
          <p className="mt-2.5 text-[11px] text-secondary font-sans leading-relaxed">
            {t("sreAnalysis")}
          </p>
          <div className="mt-3 flex items-center justify-between gap-2 p-2 rounded-lg bg-surface border border-surgical">
            <code className="font-mono text-[11px] text-primary truncate select-all">
              {t("sreAction")}
            </code>
            <CopyButton
              textToCopy={t("sreAction")}
              label={tTerm("copy")}
              copiedLabel={tTerm("copied")}
            />
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
