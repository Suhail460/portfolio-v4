import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type SkipLinkProps = HTMLAttributes<HTMLAnchorElement>;

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50",
        "bg-accent text-accent-foreground px-4 py-2 rounded-md font-medium",
        "focus-ring",
        className,
      )}
      {...props}
    >
      Skip to main content
    </a>
  ),
);

SkipLink.displayName = "SkipLink";