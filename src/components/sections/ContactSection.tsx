"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Send, CheckCircle2, Mail } from "lucide-react";

export function ContactSection() {
  const t = useTranslations("Contact");
  const locale = useLocale();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message || isSubmitting) return;

    if (honeypot) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale }),
      });

      if (!res.ok) {
        throw new Error("Mesaj iletilemedi.");
      }

      setSubmitted(true);
    } catch {
      setErrorMsg("Bağlantı hatası oluştu, lütfen doğrudan contact@beishang.dev adresine yazın.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-surgical relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <div className="rounded-2xl border border-surgical bg-surface/60 p-6 sm:p-10 backdrop-blur-sm">
        {submitted ? (
          <div className="p-8 rounded-xl border border-live/30 bg-live/10 text-live font-mono text-sm text-center flex flex-col items-center gap-3">
            <CheckCircle2 className="w-8 h-8" />
            <span>{t("success")}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <input
              type="text"
              name="company_url_hp"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-muted mb-1.5">
                  {t("name")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-surgical bg-canvas text-sm font-mono text-primary placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-muted mb-1.5">
                  {t("email")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-surgical bg-canvas text-sm font-mono text-primary placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-muted mb-1.5">
                {t("message")}
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-surgical bg-canvas text-sm font-mono text-primary placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            {errorMsg && (
              <div className="text-xs font-mono text-status-error">
                {errorMsg}
              </div>
            )}

            <div className="pt-2 flex items-center justify-between">
              <a
                href={`mailto:${siteConfig.links.contactEmail}`}
                className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.links.contactEmail}</span>
              </a>

              <Button type="submit" disabled={isSubmitting} size="md">
                <span>{isSubmitting ? t("submitting") : t("submit")}</span>
                <Send className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
