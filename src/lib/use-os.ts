"use client";

import { useSyncExternalStore } from "react";

export type OperatingSystem = "macos" | "linux" | "windows" | "unknown";

function subscribe() {
  return () => {};
}

function getSnapshot(): OperatingSystem {
  if (typeof window === "undefined" || !window.navigator) {
    return "unknown";
  }

  const nav = window.navigator as Navigator & {
    userAgentData?: { platform?: string };
  };

  const platform = nav.userAgentData?.platform || window.navigator.userAgent || "";
  const lower = platform.toLowerCase();

  if (lower.includes("mac")) {
    return "macos";
  } else if (lower.includes("win")) {
    return "windows";
  } else if (lower.includes("linux") || lower.includes("x11")) {
    return "linux";
  }
  return "unknown";
}

function getServerSnapshot(): OperatingSystem {
  return "unknown";
}

export function useOS(): OperatingSystem {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
