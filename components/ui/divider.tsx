import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
};

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => (
    <hr
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "border-border",
        orientation === "horizontal" ? "h-px w-full border-t" : "h-full w-px border-l",
        className,
      )}
      {...props}
    />
  ),
);

Divider.displayName = "Divider";
