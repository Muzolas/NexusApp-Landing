"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Play, Monitor } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function DemoVideo() {
  const t = useTranslations("DemoVideo");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo" className="py-24 sm:py-32 border-t border-surgical relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <div className="max-w-4xl mx-auto rounded-2xl border border-surgical bg-surface overflow-hidden shadow-2xl relative aspect-video flex items-center justify-center">
        {isPlaying ? (
          <div className="w-full h-full bg-black flex flex-col items-center justify-center p-8 text-center">
            <Monitor className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-mono font-bold text-primary">NexusApp Desktop Walkthrough</h3>
            <p className="text-xs font-mono text-muted mt-2 max-w-md">
              {t("videoNote")}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-6"
              onClick={() => setIsPlaying(false)}
            >
              Kapat
            </Button>
          </div>
        ) : (
          <div
            className="relative w-full h-full bg-canvas/90 flex flex-col items-center justify-center p-8 text-center group cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            {/* Visual background simulation */}
            <div className="absolute inset-0 bg-tech-grid opacity-30" />
            
            {/* Play Button Trigger */}
            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-surgical bg-surface/80 backdrop-blur-md flex items-center justify-center group-hover:scale-105 group-hover:border-primary transition-all duration-300 shadow-xl">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary ml-1 fill-current" />
            </div>

            <div className="relative z-10 mt-6 font-mono text-sm font-semibold text-primary">
              {t("play")}
            </div>
            <div className="relative z-10 mt-2 text-xs font-mono text-muted">
              1080p 60fps &middot; Monochrome Cockpit Tour (2:40)
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
