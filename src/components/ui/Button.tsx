import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-sans font-medium transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
          {
            // Primary: Brand accent fill with contrast-safe on-accent ink
            "bg-accent text-on-accent hover:opacity-90 active:scale-[0.97] shadow-e1":
              variant === "primary",
            // Outline: 1px border-strong on card surface
            "border border-border-strong bg-card text-primary hover:bg-surface active:scale-[0.97]":
              variant === "outline",
            // Ghost: completely flat
            "text-secondary hover:text-primary hover:bg-surface":
              variant === "ghost",
          },
          {
            "text-xs px-3 py-1.5 rounded-md gap-1.5": size === "sm",
            "text-sm px-4 py-2 rounded-lg gap-2": size === "md",
            "text-base px-6 py-3 rounded-xl gap-2.5": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
