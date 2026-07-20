import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Stack, Divider, Text } from "@/components/ui";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Github, Linkedin, Twitter } from "lucide-react";
import { site } from "@/lib/site";

export type FooterProps = HTMLAttributes<HTMLElement>;

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ className, ...props }, ref) => (
    <footer
      ref={ref}
      role="contentinfo"
      className={cn("border-t border-border bg-surface", className)}
      {...props}
    >
      <div className="container-page py-12">
        <Stack direction="column" gap="lg" className="md:flex md:items-center md:justify-between">
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <p className="font-medium text-foreground">Portfolio V4</p>
            <Text variant="muted">© {new Date().getFullYear()} All rights reserved.</Text>
          </div>

          <Divider orientation="horizontal" className="w-full md:w-auto md:h-0" />

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4" role="list" aria-label="Social links">
              {site.social.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-accent transition-colors duration-[var(--duration-fast)]"
                  role="listitem"
                >
                  {social.platform === "github" && <Github size={20} />}
                  {social.platform === "linkedin" && <Linkedin size={20} />}
                  {social.platform === "twitter" && <Twitter size={20} />}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </Stack>
      </div>
    </footer>
  ),
);

Footer.displayName = "Footer";