"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Mail, CheckCircle2 } from "lucide-react";

export function WaitlistCta() {
  const t = useTranslations("Waitlist");
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    if (honeypot) {
      // Bot trapped
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale }),
      });

      if (!res.ok) {
        throw new Error("Kayıt sırasında bir hata oluştu.");
      }

      setSubmitted(true);
    } catch {
      setErrorMsg("Bir bağlantı hatası oluştu, lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 sm:py-32 border-t border-surgical relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="rounded-3xl border border-surgical bg-surface/80 p-8 sm:p-14 backdrop-blur-md relative overflow-hidden">
        {/* Subtle radial background glow */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <Badge variant="live" className="mb-4">
            {t("badge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold tracking-tight text-primary">
            {t("title")}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted font-sans leading-relaxed">
            {t("subtitle")}
          </p>

          {submitted ? (
            <div className="mt-10 p-5 rounded-2xl border border-live/30 bg-live/10 text-live font-mono text-sm flex items-center justify-center gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>{t("success")}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
              {/* Bot Honeypot */}
              <input
                type="text"
                name="nexus_security_token_field"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("placeholder")}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-surgical bg-canvas text-sm font-mono text-primary placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} size="md">
                  {isSubmitting ? t("submitting") : t("submit")}
                </Button>
              </div>

              {errorMsg && (
                <div className="mt-3 text-xs font-mono text-status-error text-left">
                  {errorMsg}
                </div>
              )}

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-mono text-muted">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t("privacy")}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
