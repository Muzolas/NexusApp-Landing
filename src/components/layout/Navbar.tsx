"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LangSwitch } from "@/components/ui/LangSwitch";
import { Menu, X } from "lucide-react";
import { OrkhonMark } from "@/components/ui/OrkhonMark";
import { cn } from "@/lib/utils";
import { useRouter } from "@/i18n/routing";

export function Navbar() {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // On other pages (privacy, terms) the section lives on the home page.
      router.push(`/#${id}`);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 border-b",
        scrolled
          ? "bg-canvas/80 backdrop-blur-md border-surgical shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand and Version Tag */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 text-primary font-sans font-semibold tracking-tight text-base hover:opacity-85 transition-opacity"
          >
            <OrkhonMark className="w-7 h-7" />
            <span className="lowercase font-medium tracking-tight">{siteConfig.name}</span>
          </a>

          <a
            href={siteConfig.links.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center whitespace-nowrap text-[11px] font-sans font-medium px-2.5 py-0.5 rounded-md border border-surgical bg-card text-secondary hover:text-primary hover:border-border-strong transition-colors"
          >
            {t("badge")}
          </a>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-5 xl:gap-6 text-xs font-sans font-medium text-secondary">
          <button
            onClick={() => scrollToSection("features")}
            className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
          >
            {t("features")}
          </button>
          <button
            onClick={() => scrollToSection("roadmap")}
            className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
          >
            {t("roadmap")}
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
          >
            {t("pricing")}
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
          >
            {t("faq")}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
          >
            {t("contact")}
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          <LangSwitch />
          <ThemeToggle />

          <Button
            size="sm"
            onClick={() => scrollToSection("waitlist")}
            className="hidden sm:inline-flex whitespace-nowrap"
          >
            {t("joinWaitlist")}
          </Button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted hover:text-primary transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas/95 backdrop-blur-xl border-b border-surgical px-6 py-6 space-y-4">
          <div className="flex flex-col gap-3 font-sans text-sm font-medium text-secondary">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left py-1 hover:text-primary"
            >
              {t("features")}
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-left py-1 hover:text-primary"
            >
              {t("roadmap")}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-left py-1 hover:text-primary"
            >
              {t("pricing")}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left py-1 hover:text-primary"
            >
              {t("faq")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-1 hover:text-primary"
            >
              {t("contact")}
            </button>
          </div>
          <div className="pt-2">
            <Button
              size="md"
              className="w-full"
              onClick={() => scrollToSection("waitlist")}
            >
              {t("joinWaitlist")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
