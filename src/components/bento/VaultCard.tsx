"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useScramble } from "@/lib/use-scramble";
import { Shield, Lock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function VaultCard() {
  const t = useTranslations("Bento");
  const { displayText, isCipher } = useScramble(
    "sk_live_94a8e2b07f18c4d21e89",
    "0x8F4AC917E2B04D68A13B",
    3200
  );

  return (
    <SpotlightCard className="col-span-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl border border-surgical bg-elevated flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <Badge variant="live">AES-256-GCM</Badge>
        </div>

        <h3 className="font-mono text-lg font-bold text-primary tracking-tight">
          {t("vaultTitle")}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed font-sans">
          {t("vaultDesc")}
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-surgical bg-canvas p-4 font-mono text-xs">
        <div className="flex items-center justify-between text-muted text-[11px] pb-2 border-b border-surgical/50 mb-2">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            MEMORY STATE: {isCipher ? "CIPHERTEXT" : "INGESTION"}
          </span>
          <span className="text-[10px] text-live">ARGON2ID</span>
        </div>
        <div className="font-mono text-sm tracking-wider text-primary truncate select-all">
          {displayText}
        </div>
      </div>
    </SpotlightCard>
  );
}
