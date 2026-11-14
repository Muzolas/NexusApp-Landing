"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { terminalSnippets } from "@/config/terminal-snippets";
import { CopyButton } from "@/components/ui/CopyButton";
import { Badge } from "@/components/ui/Badge";
import { FileCode } from "lucide-react";
import { cn } from "@/lib/utils";

export function InteractiveTerminal() {
  const t = useTranslations("Terminal");
  const [activeTab, setActiveTab] = useState<"ts" | "curl" | "go">("ts");

  const currentSnippet =
    terminalSnippets.find((s) => s.id === activeTab) || terminalSnippets[0];

  return (
    <section className="py-24 sm:py-32 border-t border-surgical relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="accent" className="mb-4">
          {t("badge")}
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-semibold tracking-tight text-primary">
          {t("title")}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-secondary font-sans max-w-xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      {/* Terminal Window Container */}
      <div className="max-w-4xl mx-auto rounded-2xl border border-surgical bg-card overflow-hidden shadow-e2">
        {/* Terminal Header */}
        <div className="h-12 border-b border-surgical bg-sidebar px-4 flex items-center justify-between gap-3">
          {/* Window dots & Active file */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
              <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
              <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
            </div>
            <span className="text-surgical">|</span>
            <div className="flex items-center gap-1.5 font-mono text-xs text-primary font-medium">
              <FileCode className="w-3.5 h-3.5 text-accent" />
              <span>{currentSnippet.filename}</span>
            </div>
          </div>

          {/* Language Switch Tabs & Copy Button */}
          <div className="flex items-center gap-3">
            <div
              role="tablist"
              className="flex items-center p-1 rounded-lg border border-surgical bg-surface text-xs font-sans"
            >
              <button
                role="tab"
                aria-selected={activeTab === "ts"}
                onClick={() => setActiveTab("ts")}
                className={cn(
                  "px-2.5 py-1 rounded transition-colors cursor-pointer",
                  activeTab === "ts"
                    ? "bg-card text-primary font-medium shadow-e1"
                    : "text-muted hover:text-primary"
                )}
              >
                {t("tabTs")}
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "curl"}
                onClick={() => setActiveTab("curl")}
                className={cn(
                  "px-2.5 py-1 rounded transition-colors cursor-pointer",
                  activeTab === "curl"
                    ? "bg-card text-primary font-medium shadow-e1"
                    : "text-muted hover:text-primary"
                )}
              >
                {t("tabCurl")}
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "go"}
                onClick={() => setActiveTab("go")}
                className={cn(
                  "px-2.5 py-1 rounded transition-colors cursor-pointer",
                  activeTab === "go"
                    ? "bg-card text-primary font-medium shadow-e1"
                    : "text-muted hover:text-primary"
                )}
              >
                {t("tabGo")}
              </button>
            </div>

            <CopyButton
              textToCopy={currentSnippet.code}
              label={t("copy")}
              copiedLabel={t("copied")}
            />
          </div>
        </div>

        {/* Code Content Area */}
        <div className="p-6 bg-canvas overflow-x-auto text-left font-mono text-xs sm:text-sm leading-relaxed text-secondary">
          <pre className="text-primary font-mono select-all whitespace-pre-wrap break-words">
            <code>{currentSnippet.code}</code>
          </pre>
        </div>

        {/* Terminal Footer Notice */}
        <div className="px-6 py-3 border-t border-surgical bg-surface/60 text-[11px] font-mono text-muted flex items-center justify-between">
          <span>{t("previewNotice")}</span>
          <span className="text-live">● GATEWAY /v1 READY</span>
        </div>
      </div>
    </section>
  );
}
