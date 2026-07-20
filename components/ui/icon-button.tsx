import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  "aria-label": string;
  size?: IconButtonSize;
};

const sizeMap: Record<IconButtonSize, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = "md", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-foreground transition-colors duration-[var(--duration-fast)] hover:bg-surface-muted focus-ring disabled:pointer-events-none disabled:opacity-50",
        sizeMap[size],
        className,
      )}
      {...props}
    />
  ),
);

IconButton.displayName = "IconButton";
