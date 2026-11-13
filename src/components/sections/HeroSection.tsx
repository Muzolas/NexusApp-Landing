"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StatusLed } from "@/components/ui/StatusLed";
import { useOS } from "@/lib/use-os";
import { Play, ArrowRight, ShieldCheck, Database, GitBranch, Cpu, Terminal } from "lucide-react";

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

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
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
              <span className="font-mono text-xs font-semibold text-accent tracking-wide">
                {t("liveStatus")}
              </span>
              <span className="text-border-strong">|</span>
              <span className="font-mono text-[11px] text-secondary uppercase tracking-wider">
                PORT 3000 BFF
              </span>
            </div>

            {/* Hero Title — trailing phrase in brand accent */}
            <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-sans font-bold tracking-tight text-primary leading-[1.08]">
              {t("titlePrefix")}{" "}
              <span className="block mt-1.5 text-accent font-mono tracking-tight">
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
                onClick={scrollToDemo}
                className="w-full sm:w-auto"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{t("secondaryCta")}</span>
              </Button>
            </div>

            {/* Browser Support Note */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-muted">
              <Cpu className="w-3.5 h-3.5 shrink-0" />
              <span>
                {osLabel} &middot; {t("osSupport")}
              </span>
            </div>
          </div>

          {/* Right: e3 Product UI Card + Soft 15% Accent Ambient Glow */}
          <div className="lg:col-span-6 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 rounded-[32px] bg-accent/15 blur-3xl -z-10"
            />

            <motion.div
              style={{ y: translateY, scale }}
              className="rounded-2xl border border-surgical bg-card shadow-e3 overflow-hidden"
            >
              {/* Product Window Titlebar */}
              <div className="h-10 border-b border-surgical bg-elevated px-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-status-error/80 shrink-0" />
                  <div className="w-2.5 h-2.5 rounded-full bg-status-warn/80 shrink-0" />
                  <div className="w-2.5 h-2.5 rounded-full bg-live/80 shrink-0" />
                  <span className="ml-2 font-mono text-[11px] text-secondary truncate">
                    app.nexusapp &mdash; telemetry:connected (12ms)
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-muted shrink-0">
                  <span className="px-2 py-0.5 rounded bg-surface border border-surgical">
                    MEM: 42MB
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface border border-surgical">
                    CPU: 0.8%
                  </span>
                </div>
              </div>

              {/* Inner Product Cockpit Preview */}
              <div className="p-4 sm:p-5 text-left space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl border border-surgical bg-surface">
                    <div className="text-[10px] font-mono text-muted">MRR TELEMETRY</div>
                    <div className="text-lg font-mono font-bold text-primary mt-0.5">
                      $18,420 <span className="text-[11px] text-live font-normal">+14.2%</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl border border-surgical bg-surface">
                    <div className="text-[10px] font-mono text-muted">PGXPOOL</div>
                    <div className="text-lg font-mono font-bold text-primary mt-0.5">
                      24 / 100 <span className="text-[11px] text-accent font-normal">Active</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl border border-surgical bg-surface">
                    <div className="text-[10px] font-mono text-muted">BFF LATENCY</div>
                    <div className="text-lg font-mono font-bold text-live mt-0.5">
                      1.8 ms <span className="text-[11px] text-muted font-normal">P99</span>
                    </div>
                  </div>
                </div>

                {/* Connected Services Row */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 text-[11px] font-mono">
                  <div className="flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg bg-surface border border-surgical">
                    <span className="flex items-center gap-1.5 text-primary truncate">
                      <Database className="w-3.5 h-3.5 text-accent shrink-0" />
                      Postgres 16
                    </span>
                    <span className="text-live text-[10px] font-semibold shrink-0">HEALTHY</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg bg-surface border border-surgical">
                    <span className="flex items-center gap-1.5 text-primary truncate">
                      <GitBranch className="w-3.5 h-3.5 text-accent shrink-0" />
                      CI Pipeline
                    </span>
                    <span className="text-live text-[10px] font-semibold shrink-0">PASS</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg bg-surface border border-surgical">
                    <span className="flex items-center gap-1.5 text-primary truncate">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
                      AES Vault
                    </span>
                    <span className="text-live text-[10px] font-semibold shrink-0">LOCKED</span>
                  </div>
                </div>

                {/* Live Telemetry Stream */}
                <div className="rounded-xl border border-surgical bg-canvas p-3.5 font-mono text-[11px] text-muted space-y-1.5">
                  <div className="text-accent flex items-center gap-2 font-semibold">
                    <Terminal className="w-3.5 h-3.5 shrink-0" />
                    <span>[BFF-TELEMETRY] Live event stream initialized</span>
                  </div>
                  <div className="truncate">
                    &gt; [13:08:12] HMAC Webhook verified for deployment #4189 (Coolify)
                  </div>
                  <div className="truncate">
                    &gt; [13:08:19] Postgres connection pool healthy, 0 idle locks detected
                  </div>
                  <div className="text-live truncate">
                    &gt; [13:08:24] Release Go/No-Go verdict: READY TO SHIP (all 6 checks green)
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
