import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type PageContainerProps = HTMLAttributes<HTMLDivElement>;

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative min-h-screen bg-background", className)}
      {...props}
    >
      {children}
    </div>
  ),
);

PageContainer.displayName = "PageContainer";