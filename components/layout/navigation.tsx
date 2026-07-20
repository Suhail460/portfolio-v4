"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Stack } from "@/components/ui/stack";

const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "case-studies", label: "Case Studies" },
  { id: "discovery-dojo", label: "Discovery Dojo" },
  { id: "contact", label: "Contact" },
] as const;

export type NavigationProps = HTMLAttributes<HTMLElement>;

export const Navigation = forwardRef<HTMLElement, NavigationProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label="Main navigation"
      className={cn("flex items-center", className)}
      {...props}
    >
      <Stack
        direction="row"
        align="center"
        gap="md"
        role="menubar"
        className="flex-wrap justify-center"
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            role="menuitem"
            className={cn(
              "px-3 py-2 text-sm font-medium text-muted-foreground",
              "transition-colors duration-[var(--duration-fast)]",
              "hover:text-foreground hover:bg-surface-muted",
              "rounded-md",
            )}
          >
            {section.label}
          </a>
        ))}
      </Stack>
    </nav>
  ),
);

Navigation.displayName = "Navigation";