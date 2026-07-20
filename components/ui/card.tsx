import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-border bg-surface text-foreground",
        interactive && "transition-colors duration-[var(--duration-fast)] hover:bg-surface-muted focus-ring",
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = "Card";
