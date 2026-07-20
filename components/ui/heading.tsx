import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
};

const levelMap: Record<HeadingLevel, string> = {
  1: "text-4xl font-semibold tracking-tight",
  2: "text-3xl font-semibold tracking-tight",
  3: "text-2xl font-semibold tracking-tight",
  4: "text-xl font-semibold",
  5: "text-lg font-semibold",
  6: "text-base font-semibold",
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, ...props }, ref) => {
    const Tag = `h${level}` as React.ElementType;
    return (
      <Tag
        ref={ref}
        className={cn("text-balance text-foreground", levelMap[level], className)}
        {...props}
      />
    );
  },
);

Heading.displayName = "Heading";
