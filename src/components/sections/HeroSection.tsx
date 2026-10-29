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

  // Perspective 3D tilt animation flattening as user scrolls down
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.96, 1]);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  const osLabel =
    os === "macos"
      ? "macOS (Apple Silicon / Intel)"
      : os === "linux"
      ? "Linux (.AppImage / AUR)"
      : os === "windows"
      ? "Windows (.exe / winget)"
      : "macOS · Linux · Windows";

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Background Technical Grid */}
      <div className="absolute inset-0 bg-tech-grid pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Live WS Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-surgical bg-surface/80 backdrop-blur-md mb-8">
          <StatusLed status="live" pulse={true} />
          <span className="font-mono text-xs font-semibold text-live tracking-wide">
            {t("liveStatus")}
          </span>
          <span className="text-surgical">|</span>
          <span className="font-mono text-[11px] text-muted uppercase tracking-wider">
            PORT 3000 BFF
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-primary max-w-4xl mx-auto leading-[1.08]">
          {t("titlePrefix")}{" "}
          <span className="block mt-1 font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-muted">
            {t("titleHighlight")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted font-sans max-w-2xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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

        {/* OS Support Note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-muted">
          <Cpu className="w-3.5 h-3.5" />
          <span>
            {osLabel} &middot; {t("osSupport")}
          </span>
        </div>

        {/* 3D Isometric Desktop Mockup Container */}
        <div className="mt-16 sm:mt-24 w-full max-w-5xl mx-auto perspective-[1200px]">
          <motion.div
            style={{
              rotateX,
              scale,
              transformStyle: "preserve-3d",
            }}
            className="rounded-2xl border border-surgical bg-surface/90 shadow-2xl overflow-hidden backdrop-blur-sm"
          >
            {/* Desktop Window Titlebar */}
            <div className="h-10 border-b border-surgical bg-elevated/70 px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-status-error/80" />
                <div className="w-3 h-3 rounded-full bg-status-warn/80" />
                <div className="w-3 h-3 rounded-full bg-live/80" />
                <span className="ml-3 font-mono text-xs text-muted">
                  NexusApp Desktop &mdash; telemetry:connected (12ms)
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-3 font-mono text-[11px] text-muted">
                <span className="px-2 py-0.5 rounded bg-surface border border-surgical">
                  MEM: 42MB
                </span>
                <span className="px-2 py-0.5 rounded bg-surface border border-surgical">
                  CPU: 0.8%
                </span>
              </div>
            </div>

            {/* Inner App Cockpit Simulation */}
            <div className="p-4 sm:p-6 text-left grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Sidebar Mini Telemetry */}
              <div className="md:col-span-1 rounded-xl border border-surgical bg-elevated/30 p-4 space-y-4">
                <div className="font-mono text-xs uppercase text-muted tracking-wider">
                  SERVICES
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded bg-surface border border-surgical">
                    <span className="flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-primary" />
                      Postgres 16
                    </span>
                    <span className="text-live text-[10px]">HEALTHY</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-surface border border-surgical">
                    <span className="flex items-center gap-2">
                      <GitBranch className="w-3.5 h-3.5 text-primary" />
                      CI Pipeline
                    </span>
                    <span className="text-live text-[10px]">PASS</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-surface border border-surgical">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      AES-256 Vault
                    </span>
                    <span className="text-live text-[10px]">LOCKED</span>
                  </div>
                </div>
              </div>

              {/* Main Cockpit Graph & Live Streams */}
              <div className="md:col-span-3 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl border border-surgical bg-surface">
                    <div className="text-[11px] font-mono text-muted">MRR TELEMETRY</div>
                    <div className="text-xl font-mono font-bold text-primary mt-1">
                      $18,420 <span className="text-xs text-live font-normal">+14.2%</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-surgical bg-surface">
                    <div className="text-[11px] font-mono text-muted">PGXPOOL UTILIZATION</div>
                    <div className="text-xl font-mono font-bold text-primary mt-1">
                      24 / 100 <span className="text-xs text-muted font-normal">Active</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-surgical bg-surface">
                    <div className="text-[11px] font-mono text-muted">BFF LATENCY</div>
                    <div className="text-xl font-mono font-bold text-live mt-1">
                      1.8 ms <span className="text-xs text-muted font-normal">P99</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Telemetry Log Feed */}
                <div className="rounded-xl border border-surgical bg-canvas p-4 font-mono text-xs text-muted space-y-1">
                  <div className="text-primary flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>[BFF-TELEMETRY] Live event stream initialized</span>
                  </div>
                  <div className="text-muted/80">
                    &gt; [13:08:12] HMAC Webhook verified for deployment #4189 (Coolify)
                  </div>
                  <div className="text-muted/80">
                    &gt; [13:08:19] Postgres connection pool healthy, 0 idle locks detected
                  </div>
                  <div className="text-live">
                    &gt; [13:08:24] Release Go/No-Go verdict: READY TO SHIP (all 6 checks green)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
