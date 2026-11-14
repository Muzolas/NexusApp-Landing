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
        <Badge variant="accent" className="mb-4">
          {t("badge")}
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-semibold tracking-tight text-primary">
          {t("title")}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-secondary font-sans max-w-xl mx-auto">
          {t("subtitle")}
        </p>

        {/* Billing Switcher (Monthly / Annual) */}
        <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-xl border border-surgical bg-surface">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors cursor-pointer",
              !isAnnual
                ? "bg-card text-primary font-semibold shadow-e1"
                : "text-muted hover:text-primary"
            )}
          >
            {t("monthly")}
          </button>
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={cn(
              "flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors cursor-pointer",
              isAnnual
                ? "bg-card text-primary font-semibold shadow-e1"
                : "text-muted hover:text-primary"
            )}
          >
            <span>{t("annual")}</span>
            <Badge variant="live" className="text-[10px] py-0 px-1.5">
              {t("annualDiscount")}
            </Badge>
          </button>
        </div>
      </div>

      {/* 5-Column Pricing Grid (wraps to 3 cols at lg/1024 so badges never collide) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {pricingTiers.map((tier) => {
          const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
          const periodLabel = isAnnual ? t("perYear") : t("perMonth");

          return (
            <div
              key={tier.id}
              className={cn(
                "rounded-2xl border p-5 flex flex-col justify-between transition-all duration-200 relative bg-card",
                tier.popular
                  ? "border-accent shadow-e2"
                  : "border-surgical shadow-e1 hover:border-border-strong"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="outline" className="bg-accent text-on-accent font-semibold border-none whitespace-nowrap">
                    {t("mostPopular")}
                  </Badge>
                </div>
              )}

              <div>
                <div className="font-sans text-base font-semibold text-primary">
                  {tier.name}
                </div>
                <p className="mt-2 text-xs text-secondary font-sans min-h-[36px]">
                  {tier.description[locale]}
                </p>

                <div className="mt-6 flex items-baseline gap-1 font-mono tabular-nums">
                  <span className="text-3xl font-bold text-primary">${price}</span>
                  <span className="text-xs text-muted">{periodLabel}</span>
                </div>

                <div className="mt-6 space-y-2.5 pt-6 border-t border-surgical/60">
                  {tier.features[locale].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-secondary font-sans">
                      <Check
                        className={cn(
                          "w-3.5 h-3.5 shrink-0 mt-0.5",
                          feat.soon ? "text-accent-2" : "text-accent"
                        )}
                      />
                      <div className="flex flex-wrap items-center gap-1.5 leading-snug">
                        <span>{feat.text}</span>
                        {feat.soon && (
                          <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-medium border border-accent-2/35 bg-accent-2/12 text-accent-2">
                            {t("soonTag")}
                          </span>
                        )}
                      </div>
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
