"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LangSwitch } from "@/components/ui/LangSwitch";
import { Terminal, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("Navbar");
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
            className="flex items-center gap-2 text-primary font-mono font-bold tracking-tight text-base hover:opacity-80 transition-opacity"
          >
            <div className="w-7 h-7 rounded-lg border border-surgical bg-elevated flex items-center justify-center">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <span>{siteConfig.name}</span>
          </a>

          <a
            href={siteConfig.links.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded border border-surgical bg-elevated text-muted hover:text-primary hover:border-muted transition-colors tracking-wide"
          >
            {siteConfig.earlyAccessLabel}
          </a>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-muted">
          <button
            onClick={() => scrollToSection("features")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t("features")}
          </button>
          <button
            onClick={() => scrollToSection("demo")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t("demo")}
          </button>
          <button
            onClick={() => scrollToSection("roadmap")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t("roadmap")}
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t("pricing")}
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t("faq")}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t("contact")}
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <LangSwitch />
          <ThemeToggle />

          <Button
            size="sm"
            onClick={() => scrollToSection("waitlist")}
            className="hidden sm:inline-flex"
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
          <div className="flex flex-col gap-3 font-mono text-sm text-muted">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left py-1 hover:text-primary"
            >
              {t("features")}
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-left py-1 hover:text-primary"
            >
              {t("demo")}
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
