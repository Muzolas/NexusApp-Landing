"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { pricingTiers } from "@/config/pricing";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const t = useTranslations("Pricing");
  const locale = useLocale() as "tr" | "en";
  const [isAnnual, setIsAnnual] = useState(true);

  const handleSelectPlan = () => {
    const waitlistElement = document.getElementById("waitlist");
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 border-t border-surgical relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Billing Switcher (Monthly / Annual) */}
        <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-xl border border-surgical bg-surface">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer",
              !isAnnual
                ? "bg-elevated text-primary font-semibold shadow-sm"
                : "text-muted hover:text-primary"
            )}
          >
            {t("monthly")}
          </button>
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={cn(
              "flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer",
              isAnnual
                ? "bg-elevated text-primary font-semibold shadow-sm"
                : "text-muted hover:text-primary"
            )}
          >
            <span>{t("annual")}</span>
            <Badge variant="live" className="text-[9px] py-0 px-1.5">
              {t("annualDiscount")}
            </Badge>
          </button>
        </div>
      </div>

      {/* 5-Column Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {pricingTiers.map((tier) => {
          const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
          const periodLabel = isAnnual ? t("perYear") : t("perMonth");

          return (
            <div
              key={tier.id}
              className={cn(
                "rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 relative",
                tier.popular
                  ? "border-primary bg-elevated/70 shadow-xl"
                  : "border-surgical bg-surface/60 hover:border-muted/50"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="outline" className="bg-primary text-canvas font-bold border-none">
                    {t("mostPopular")}
                  </Badge>
                </div>
              )}

              <div>
                <div className="font-mono text-base font-bold text-primary">
                  {tier.name}
                </div>
                <p className="mt-2 text-xs text-muted font-sans min-h-[32px]">
                  {tier.description[locale]}
                </p>

                <div className="mt-6 flex items-baseline gap-1 font-mono">
                  <span className="text-3xl font-bold text-primary">${price}</span>
                  <span className="text-xs text-muted">{periodLabel}</span>
                </div>

                <div className="mt-6 space-y-2.5 pt-6 border-t border-surgical/60">
                  {tier.features[locale].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-muted font-mono">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Button
                  variant={tier.popular ? "primary" : "outline"}
                  size="sm"
                  className="w-full"
                  onClick={handleSelectPlan}
                >
                  {t("cta")}
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center text-xs font-mono text-muted/70">
        {t("notice")}
      </div>
    </section>
  );
}
