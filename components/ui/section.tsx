import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article";
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, as: Tag = "section", ...props }, ref) => {
    const Component = Tag as React.ElementType;
    return (
      <Component
        ref={ref}
        className={cn("py-[var(--spacing-section)]", className)}
        {...props}
      />
    );
  },
);

Section.displayName = "Section";
