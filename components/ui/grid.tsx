import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type GridProps = HTMLAttributes<HTMLDivElement> & {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  responsive?: boolean;
};

const gapMap = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
} as const;

const colMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12",
} as const;

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = "md", responsive = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "grid",
        responsive
          ? `${colMap[cols]} sm:grid-cols-1 md:grid-cols-2 lg:${colMap[cols]}`
          : colMap[cols],
        gapMap[gap],
        className,
      )}
      {...props}
    />
  ),
);

Grid.displayName = "Grid";
