import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { roadmapItems } from "@/config/roadmap";
import { Badge } from "@/components/ui/Badge";
import { StatusLed } from "@/components/ui/StatusLed";

export function RoadmapSection() {
  const t = useTranslations("Roadmap");
  const locale = useLocale() as "tr" | "en";

  const categories = [
    { key: "now", label: t("now"), items: roadmapItems.filter((i) => i.category === "now") },
    { key: "next", label: t("next"), items: roadmapItems.filter((i) => i.category === "next") },
    { key: "later", label: t("later"), items: roadmapItems.filter((i) => i.category === "later") },
  ];

  return (
    <section id="roadmap" className="py-24 sm:py-32 border-t border-surgical relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="rounded-2xl border border-surgical bg-surface/50 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-surgical/60 mb-6">
                <span className="font-mono text-sm font-bold text-primary tracking-wide">
                  {cat.label}
                </span>
                <span className="font-mono text-xs text-muted">
                  {cat.items.length} Modules
                </span>
              </div>

              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border border-surgical bg-surface space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <Badge variant={item.status === "in-progress" ? "warn" : "default"}>
                        {item.tag}
                      </Badge>
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
                        <StatusLed
                          status={item.status === "in-progress" ? "live" : "offline"}
                          pulse={item.status === "in-progress"}
                        />
                        <span>{item.progress}%</span>
                      </div>
                    </div>

                    <h4 className="font-mono text-sm font-bold text-primary">
                      {item.title[locale]}
                    </h4>
                    <p className="text-xs text-muted font-sans leading-relaxed">
                      {item.description[locale]}
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full h-1 rounded-full bg-elevated overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
