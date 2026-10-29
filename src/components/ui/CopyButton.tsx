"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CopyButtonProps {
  textToCopy: string;
  className?: string;
  label?: string;
  copiedLabel?: string;
}

export function CopyButton({
  textToCopy,
  className,
  label = "Kopyala",
  copiedLabel = "✓ Kopyalandı",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      aria-live="polite"
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded border border-surgical bg-elevated text-muted hover:text-primary hover:border-muted transition-colors cursor-pointer",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-primary" />
          <span className="text-primary">{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
