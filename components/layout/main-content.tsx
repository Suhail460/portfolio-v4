import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type MainContentProps = HTMLAttributes<HTMLElement>;

export const MainContent = forwardRef<HTMLElement, MainContentProps>(
  ({ className, children, ...props }, ref) => (
    <main
      ref={ref}
      id="main-content"
      role="main"
      className={cn("container-page", className)}
      {...props}
    >
      {children}
    </main>
  ),
);

MainContent.displayName = "MainContent";