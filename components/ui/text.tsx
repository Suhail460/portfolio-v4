import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  variant?: "body" | "lead" | "muted" | "small";
  as?: "p" | "span" | "div";
};

const variantMap = {
  body: "text-base text-foreground",
  lead: "text-lg text-foreground",
  muted: "text-sm text-muted-foreground",
  small: "text-sm text-foreground",
} as const;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = "body", as: Tag = "p", ...props }, ref) => {
    const Component = Tag as React.ElementType;
    return (
      <Component
        ref={ref}
        className={cn(variantMap[variant], className)}
        {...props}
      />
    );
  },
);

Text.displayName = "Text";
