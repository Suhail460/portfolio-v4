"use client";

import { forwardRef, useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Navigation } from "./navigation";
import { IconButton } from "@/components/ui/icon-button";
import { X, Menu } from "lucide-react";

export type MobileNavigationProps = HTMLAttributes<HTMLDivElement>;

export const MobileNavigation = forwardRef<HTMLDivElement, MobileNavigationProps>(
  ({ className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div ref={ref} className={cn("md:hidden", className)} {...props}>
        <IconButton
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </IconButton>

        {isOpen && (
          <div
            id="mobile-menu"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-background border-t border-border md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <Navigation />
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
        )}
      </div>
    );
  },
);

MobileNavigation.displayName = "MobileNavigation";