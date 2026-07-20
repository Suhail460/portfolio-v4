"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Navigation } from "./navigation";
import { MobileNavigation } from "./mobile-navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export type HeaderProps = HTMLAttributes<HTMLElement>;

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold text-foreground"
          aria-label="Portfolio V4 Home"
        >
          Portfolio V4
        </a>

        <Navigation className="hidden md:flex" />

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  ),
);

Header.displayName = "Header";