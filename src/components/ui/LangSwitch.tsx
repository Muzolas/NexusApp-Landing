"use client";

import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LangSwitch({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    const nextLocale = locale === "tr" ? "en" : "tr";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isPending}
      className={cn(
        "inline-flex items-center gap-1 px-2 py-1 text-xs font-mono font-medium rounded-lg border border-surgical bg-surface text-muted hover:text-primary hover:border-muted transition-colors cursor-pointer",
        className
      )}
      aria-label="Switch language"
    >
      <span className={cn(locale === "tr" ? "text-primary font-semibold" : "opacity-60")}>TR</span>
      <span className="opacity-40">/</span>
      <span className={cn(locale === "en" ? "text-primary font-semibold" : "opacity-60")}>EN</span>
    </button>
  );
}
