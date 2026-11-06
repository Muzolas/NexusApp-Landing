"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const VIDEO_SRC = "/videos/nexusapp-demo.mp4";
const POSTER_SRC = "/videos/nexusapp-demo-poster.jpg";

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

      <div className="max-w-4xl mx-auto rounded-2xl border border-surgical bg-black overflow-hidden shadow-2xl relative aspect-video flex items-center justify-center">
        {isPlaying ? (
          <video
            className="w-full h-full object-contain bg-black"
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            controls
            autoPlay
            playsInline
            preload="auto"
          />
        ) : (
          <button
            type="button"
            aria-label={t("play")}
            className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center group cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            {/* Poster: the first scene of the tour */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={POSTER_SRC}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Play Button Trigger */}
            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/30 bg-black/60 backdrop-blur-md flex items-center justify-center group-hover:scale-105 group-hover:border-white transition-all duration-300 shadow-xl">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1 fill-current" />
            </div>

            <div className="relative z-10 mt-6 font-mono text-sm font-semibold text-white">
              {t("play")}
            </div>
            <div className="relative z-10 mt-2 text-xs font-mono text-white/70">
              {t("meta")}
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
