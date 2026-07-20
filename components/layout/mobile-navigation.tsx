"use client";

import { forwardRef, useEffect, useRef, useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Navigation } from "./navigation";
import { IconButton } from "@/components/ui/icon-button";
import { X, Menu } from "lucide-react";

export type MobileNavigationProps = HTMLAttributes<HTMLDivElement>;

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const MobileNavigation = forwardRef<HTMLDivElement, MobileNavigationProps>(
  ({ className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    // Body scroll lock while open.
    useEffect(() => {
      if (!isOpen) return;
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }, [isOpen]);

    // Focus management + trap + escape + outside click.
    useEffect(() => {
      if (!isOpen) return;
      const panel = panelRef.current;
      if (!panel) return;

      const previouslyFocused = document.activeElement as HTMLElement | null;
      const focusables = panel.querySelectorAll<HTMLElement>(FOCUSABLE);
      focusables[0]?.focus();

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          setIsOpen(false);
          return;
        }
        if (e.key !== "Tab") return;
        const items = panel.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (items.length === 0) return;
        const first = items[0]!;
        const last = items[items.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      };

      const onPointerDown = (e: MouseEvent) => {
        if (panel && !panel.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", onPointerDown);
      return () => {
        document.removeEventListener("keydown", onKeyDown);
        document.removeEventListener("mousedown", onPointerDown);
        // Restore focus to the trigger that opened the menu.
        previouslyFocused?.focus();
      };
    }, [isOpen]);

    return (
      <div ref={ref} className={cn("md:hidden", className)} {...props}>
        <IconButton
          ref={triggerRef}
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
            ref={panelRef}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-background md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <Navigation onNavigate={() => setIsOpen(false)} />
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground focus-ring"
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
