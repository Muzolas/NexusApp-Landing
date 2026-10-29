import * as React from "react";
import { cn } from "@/lib/utils";

export interface StatusLedProps {
  className?: string;
  status?: "live" | "warn" | "error" | "offline";
  pulse?: boolean;
}

export function StatusLed({
  className,
  status = "live",
  pulse = true,
}: StatusLedProps) {
  const colorClasses = {
    live: "bg-live",
    warn: "bg-status-warn",
    error: "bg-status-error",
    offline: "bg-muted",
  }[status];

  return (
    <span className={cn("relative inline-flex items-center justify-center w-2 h-2", className)}>
      {pulse && status === "live" && (
        <span
          className={cn(
            "absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping",
            colorClasses
          )}
        />
      )}
      <span className={cn("relative inline-flex w-1.5 h-1.5 rounded-full", colorClasses)} />
    </span>
  );
}
