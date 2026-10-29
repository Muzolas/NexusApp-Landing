import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "live" | "warn" | "error";
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
        "inline-flex items-center font-mono text-[11px] font-medium px-2 py-0.5 rounded border tracking-wider uppercase transition-colors",
        {
          "bg-elevated border-surgical text-muted": variant === "default",
          "border-surgical bg-transparent text-primary": variant === "outline",
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
