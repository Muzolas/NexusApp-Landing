import React from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { StatusLed } from "@/components/ui/StatusLed";

export function TelemetryBar() {
  const t = useTranslations();

  return (
    <div className="w-full border-y border-surgical bg-surface/40 backdrop-blur-sm py-4 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-between min-w-[700px] gap-8 list-none font-mono text-xs uppercase tracking-widest text-muted">
          {siteConfig.telemetryItems.map((item) => (
            <li key={item.key} className="flex items-center gap-2.5 shrink-0">
              <StatusLed status="live" pulse={false} />
              <span>{t(item.labelKey)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
