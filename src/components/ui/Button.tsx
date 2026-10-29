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
          "inline-flex items-center justify-center font-mono font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surgical",
          {
            // Primary: In dark mode white with black text, in light mode black with white text
            "bg-primary text-canvas hover:opacity-90 active:scale-[0.98] shadow-sm":
              variant === "primary",
            // Outline: 1px crisp surgical border with subtle hover highlight
            "border border-surgical bg-surface/60 text-primary hover:bg-elevated hover:border-muted active:scale-[0.98]":
              variant === "outline",
            // Ghost: completely flat
            "text-muted hover:text-primary hover:bg-elevated/80":
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
