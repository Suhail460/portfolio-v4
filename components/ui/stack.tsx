import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type StackProps = HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  wrap?: boolean;
};

const gapMap = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
} as const;

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
} as const;

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    { className, direction = "column", align = "stretch", justify = "start", gap = "md", wrap = false, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        alignMap[align],
        justifyMap[justify],
        gapMap[gap],
        wrap && "flex-wrap",
        className,
      )}
      {...props}
    />
  ),
);

Stack.displayName = "Stack";
