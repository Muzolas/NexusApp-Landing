"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpenDefault?: boolean;
}

export function AccordionItem({ question, answer, isOpenDefault = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border border-surgical rounded-xl bg-surface/50 overflow-hidden transition-colors hover:border-muted/40">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex items-center justify-between w-full px-5 py-4 text-left font-mono text-sm sm:text-base font-medium text-primary cursor-pointer"
      >
        <span>{question}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted transition-transform duration-200 shrink-0 ml-4",
            isOpen && "rotate-180 text-primary"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-4 pt-1 text-sm text-muted leading-relaxed font-sans border-t border-surgical/50">
          {answer}
        </div>
      )}
    </div>
  );
}
