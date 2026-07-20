"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Stack } from "@/components/ui/stack";
import { NAV_SECTIONS } from "@/lib/routes";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export type NavigationProps = HTMLAttributes<HTMLElement> & {
  /** Called when a link is activated (e.g. to close mobile menu). */
  onNavigate?: () => void;
};

export const Navigation = forwardRef<HTMLElement, NavigationProps>(
  ({ className, onNavigate, ...props }, ref) => {
    const ids = NAV_SECTIONS.map((s) => s.id);
    const activeId = useScrollSpy(ids);

    return (
      <nav
        ref={ref}
        aria-label="Main navigation"
        className={cn("flex items-center", className)}
        {...props}
      >
        <Stack
          direction="row"
          align="center"
          gap="md"
          className="flex-wrap justify-center"
        >
          {NAV_SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={section.href}
                aria-current={isActive ? "true" : undefined}
                onClick={onNavigate}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-[var(--duration-fast)] focus-ring",
                  isActive
                    ? "text-foreground bg-surface-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface-muted",
                )}
              >
                {section.label}
              </a>
            );
          })}
        </Stack>
      </nav>
    );
  },
);

Navigation.displayName = "Navigation";
