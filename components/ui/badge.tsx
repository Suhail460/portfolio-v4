import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type BadgeVariant = "neutral" | "accent" | "outline";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantMap: Record<BadgeVariant, string> = {
  neutral: "bg-surface-muted text-muted-foreground",
  accent: "bg-accent text-accent-foreground",
  outline: "border border-border text-foreground",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "neutral", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantMap[variant],
        className,
      )}
      {...props}
    />
  ),
);

Badge.displayName = "Badge";
