import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { TelemetryBar } from "@/components/sections/TelemetryBar";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { DemoVideo } from "@/components/sections/DemoVideo";
import { InteractiveTerminal } from "@/components/sections/InteractiveTerminal";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { WaitlistCta } from "@/components/sections/WaitlistCta";
import { ContactSection } from "@/components/sections/ContactSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <TelemetryBar />
      <BentoGrid />
      <DemoVideo />
      <InteractiveTerminal />
      <RoadmapSection />
      <PricingSection />
      <FaqSection />
      <WaitlistCta />
      <ContactSection />
    </div>
  );
}
