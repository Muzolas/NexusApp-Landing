import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "soon" | "live" | "warn" | "error";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-sans text-[11px] font-medium px-2.5 py-0.5 rounded-md border tracking-normal transition-colors",
        {
          "bg-surface border-surgical text-secondary": variant === "default",
          "border-surgical bg-card text-primary": variant === "outline",
          "border-accent/30 bg-accent/12 text-accent": variant === "accent",
          "border-accent-2/35 bg-accent-2/12 text-accent-2": variant === "soon",
          "border-live/30 bg-live/10 text-live": variant === "live",
          "border-status-warn/30 bg-status-warn/10 text-status-warn": variant === "warn",
          "border-status-error/30 bg-status-error/10 text-status-error": variant === "error",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
