"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StatusLed } from "@/components/ui/StatusLed";
import { useOS } from "@/lib/use-os";
import { ArrowRight, Layers, Cpu } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("Hero");
  const os = useOS();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Subtle depth settle as the user scrolls past the hero
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.985, 1]);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  // Web app: name the browsers instead of desktop builds.
  const osLabel = os === "macos" ? "Web · Safari / Chrome" : "Web · Chrome / Edge / Firefox";

  return (
    <section
      ref={heroRef}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex items-center"
    >
      {/* Background Technical Grid */}
      <div className="absolute inset-0 bg-tech-grid pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-10">
          {/* Left: Eyebrow, Title, Subtitle & Actions */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Accent Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-accent/25 bg-accent/10 mb-7">
              <StatusLed status="live" pulse={true} />
              <span className="font-sans text-xs font-medium text-accent">
                {t("liveStatus")}
              </span>
              <span className="text-border-strong">|</span>
              <span className="font-mono text-[11px] text-secondary tracking-wide">
                MULBERRY R5
              </span>
            </div>

            {/* Hero Title — trailing phrase in brand accent */}
            <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-sans font-bold tracking-tight text-primary leading-[1.08]">
              {t("titlePrefix")}{" "}
              <span className="block mt-1.5 text-accent tracking-tight">
                {t("titleHighlight")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-secondary font-sans max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t("subtitle")}
            </p>

            {/* Primary Call to Action Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Button size="lg" onClick={scrollToWaitlist} className="w-full sm:w-auto">
                <span>{t("primaryCta")}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToFeatures}
                className="w-full sm:w-auto"
              >
                <Layers className="w-4 h-4" />
                <span>{t("secondaryCta")}</span>
              </Button>
            </div>

            {/* Browser Support Note */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-xs font-sans text-muted">
              <Cpu className="w-3.5 h-3.5 shrink-0" />
              <span>
                {osLabel} &middot; {t("osSupport")}
              </span>
            </div>
          </div>

          {/* Right: e3 Pilot Briefing Preview Card + Soft 15% Accent Ambient Glow */}
          <div className="lg:col-span-6 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 rounded-[32px] bg-accent/15 blur-3xl -z-10"
            />

            <motion.div
              style={{ y: translateY, scale }}
              className="rounded-2xl border border-surgical bg-card shadow-e3 overflow-hidden"
            >
              {/* Product Topbar */}
              <div className="h-11 border-b border-surgical bg-sidebar px-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-5 h-5 rounded-md bg-accent text-on-accent font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                    N
                  </span>
                  <span className="font-sans text-xs font-medium text-secondary truncate">
                    beishang-dev <span className="text-muted">/</span>{" "}
                    <span className="text-primary font-semibold">Pilot</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="hidden sm:inline-flex items-center p-0.5 rounded-md bg-surface border border-surgical text-[11px] font-sans">
                    <span className="px-2 py-0.5 text-muted">24h</span>
                    <span className="px-2 py-0.5 rounded bg-card text-primary font-medium shadow-e1">
                      7d
                    </span>
                    <span className="px-2 py-0.5 text-muted">30d</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md border border-surgical bg-surface text-[11px] font-sans text-muted">
                    {t("previewBadge")}
                  </span>
                </div>
              </div>

              {/* Inner Pilot Briefing Preview */}
              <div className="p-4 sm:p-5 text-left space-y-4">
                {/* 4-Column Metric Strip (R5 NxMetricStrip style) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 border-y border-surgical divide-y sm:divide-y-0 sm:divide-x divide-surgical">
                  <div className="py-2.5 sm:pr-3">
                    <div className="text-[11px] font-sans font-medium text-muted">
                      {t("previewDeploys")}
                    </div>
                    <div className="mt-0.5 flex items-baseline gap-1.5">
                      <span className="text-lg font-mono font-medium tabular-nums text-primary">
                        14
                      </span>
                      <span className="text-[11px] font-mono text-live bg-live/10 px-1.5 py-0.2 rounded">
                        ▲ +4
                      </span>
                    </div>
                  </div>
                  <div className="py-2.5 sm:px-3">
                    <div className="text-[11px] font-sans font-medium text-muted">
                      {t("previewCiRate")}
                    </div>
                    <div className="mt-0.5 flex items-baseline gap-1.5">
                      <span className="text-lg font-mono font-medium tabular-nums text-primary">
                        94.2%
                      </span>
                      <span className="text-[11px] font-mono text-live bg-live/10 px-1.5 py-0.2 rounded">
                        ▲ 1.8%
                      </span>
                    </div>
                  </div>
                  <div className="py-2.5 sm:px-3">
                    <div className="text-[11px] font-sans font-medium text-muted">
                      {t("previewRevenue")}
                    </div>
                    <div className="mt-0.5 flex items-baseline gap-1.5">
                      <span className="text-lg font-mono font-medium tabular-nums text-primary">
                        $4,820
                      </span>
                      <span className="text-[11px] font-mono text-live bg-live/10 px-1.5 py-0.2 rounded">
                        ▲ 8.4%
                      </span>
                    </div>
                  </div>
                  <div className="py-2.5 sm:pl-3">
                    <div className="text-[11px] font-sans font-medium text-muted">
                      {t("previewErrors")}
                    </div>
                    <div className="mt-0.5 flex items-baseline gap-1.5">
                      <span className="text-lg font-mono font-medium tabular-nums text-primary">
                        0
                      </span>
                      <span className="text-[11px] font-sans font-medium text-live">
                        {t("previewHealthy")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Revenue Trend Chart (Solid Accent + Dashed Accent2 Previous Period) */}
                <div className="rounded-xl border border-surgical bg-canvas p-3.5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-sans font-medium text-secondary">
                      {t("previewChartLabel")}
                    </span>
                    <div className="flex items-center gap-3 text-[11px] font-sans text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2.5 h-0.5 bg-accent inline-block" />
                        {t("previewCurrent")}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2.5 h-0.5 border-t border-dashed border-accent-2 inline-block" />
                        {t("previewPrevious")}
                      </span>
                    </div>
                  </div>
                  <div className="h-24 w-full">
                    <svg
                      viewBox="0 0 400 96"
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                      role="img"
                      aria-label={t("previewChartLabel")}
                    >
                      <defs>
                        <linearGradient id="heroRevFill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.24" />
                          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="24" x2="400" y2="24" stroke="var(--surgical)" strokeWidth="1" />
                      <line x1="0" y1="56" x2="400" y2="56" stroke="var(--surgical)" strokeWidth="1" />
                      <line x1="0" y1="88" x2="400" y2="88" stroke="var(--surgical)" strokeWidth="1" />
                      {/* Previous period dashed line (accent-2) */}
                      <path
                        d="M0 78 L57 74 L114 70 L171 73 L228 63 L285 60 L342 54 L400 50"
                        fill="none"
                        stroke="var(--accent-2)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      {/* Current period area + line (accent) */}
                      <path
                        d="M0 72 L57 64 L114 66 L171 52 L228 46 L285 38 L342 26 L400 14 L400 90 L0 90 Z"
                        fill="url(#heroRevFill)"
                      />
                      <path
                        d="M0 72 L57 64 L114 66 L171 52 L228 46 L285 38 L342 26 L400 14"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2"
                      />
                      <circle
                        cx="400"
                        cy="14"
                        r="3.5"
                        fill="var(--accent)"
                        stroke="var(--card)"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* Pilot Attention & Autopilot Feed Rows */}
                <div className="rounded-xl border border-surgical bg-surface/50 divide-y divide-surgical overflow-hidden">
                  <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 border-l-2 border-l-live">
                    <div className="min-w-0">
                      <div className="text-xs font-sans font-medium text-primary truncate">
                        {t("previewFeed1Title")}
                      </div>
                      <div className="text-[11px] font-sans text-muted truncate">
                        {t("previewFeed1Sub")}
                      </div>
                    </div>
                    <span className="font-mono text-[11px] tabular-nums text-muted shrink-0">
                      09:42
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 border-l-2 border-l-accent">
                    <div className="min-w-0">
                      <div className="text-xs font-sans font-medium text-primary truncate">
                        {t("previewFeed2Title")}
                      </div>
                      <div className="text-[11px] font-sans text-muted truncate">
                        {t("previewFeed2Sub")}
                      </div>
                    </div>
                    <span className="font-mono text-[11px] text-accent shrink-0">
                      Autopilot
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
