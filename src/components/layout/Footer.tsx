import React from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { StatusLed } from "@/components/ui/StatusLed";
import { Terminal } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-surgical bg-canvas text-muted text-xs font-mono py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Status Indicator */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded border border-surgical bg-elevated flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="font-bold text-primary">{siteConfig.name}</span>
            <span className="text-surgical">|</span>
            <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded border border-surgical bg-surface">
              <StatusLed status="live" />
              <span className="text-[10px] tracking-widest text-live font-semibold">
                {t("systemStatus")}
              </span>
            </div>
          </div>

          {/* Legal and Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>{t("github")}</span>
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {t("twitter")}
            </a>
            <a href="#privacy" className="hover:text-primary transition-colors">
              {t("privacy")}
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              {t("terms")}
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-muted/70 text-[11px]">
            © {currentYear} {siteConfig.name}. {t("rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
