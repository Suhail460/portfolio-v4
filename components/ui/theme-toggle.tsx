"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";
import { useTheme, type Theme } from "@/components/ui/theme-provider";

const options: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

export function ThemeToggle({ className }: { className?: string }) {
  const ctx = useTheme();
  // Graceful fallback for pages without ThemeProvider (e.g., _not-found)
  const theme = ctx?.theme ?? "system";
  const setTheme = ctx?.setTheme ?? (() => {});

  return (
    <div
      role="group"
      aria-label="Color theme"
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-border bg-surface p-1",
        className,
      )}
    >
      {options.map(({ value, label, Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            aria-pressed={active}
            onClick={() => setTheme(value)}
            className={cn(
              "inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] transition-colors duration-[var(--duration-fast)] focus-ring",
              active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
            )}
          >
            <Icon size={16} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}