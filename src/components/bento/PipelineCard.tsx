"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GitCommit, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function PipelineCard() {
  const t = useTranslations("Bento");

  const steps = [
    { label: t("pipelinePush"), status: "PASS", commit: "main · a41f9c2" },
    { label: t("pipelineCi"), status: "PASS", commit: "GitHub Actions" },
    { label: t("pipelineDeploy"), status: "PASS", commit: "Vercel · Coolify" },
    { label: t("pipelineRelease"), status: "PASS", commit: "Go / No-Go" },
    { label: t("pipelineAnnounce"), status: "ACTIVE", commit: "Autopilot rule" },
  ];

  return (
    <SpotlightCard className="col-span-1 md:col-span-2 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl border border-surgical bg-surface flex items-center justify-center">
            <GitCommit className="w-5 h-5 text-accent" />
          </div>
          <Badge variant="accent">Workflows &amp; Release Gates</Badge>
        </div>

        <h3 className="font-sans text-lg font-semibold text-primary tracking-tight">
          {t("pipelineTitle")}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-secondary leading-relaxed font-sans max-w-xl">
          {t("pipelineDesc")}
        </p>
      </div>

      {/* Horizontal Pipeline Steps with Animated Data Beam */}
      <div className="mt-8 relative rounded-xl border border-surgical bg-canvas p-4 sm:p-5 overflow-hidden">
        {/* Animated Data Beam along the track (desktop horizontal strip only) */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut",
          }}
          className="hidden sm:block absolute top-1/2 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-80 pointer-events-none"
        />

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
          {steps.map((step) => (
            <div
              key={step.label}
              className="flex flex-col items-center text-center p-2.5 rounded-lg border border-surgical bg-surface"
            >
              <div className="flex items-center gap-1 text-[11px] font-mono text-muted uppercase">
                <span>{step.label}</span>
              </div>
              <div className="mt-2 flex items-center gap-1 font-mono text-xs font-semibold text-live">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{step.status}</span>
              </div>
              <div className="mt-1 text-[10px] font-mono text-muted truncate max-w-full">
                {step.commit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}
