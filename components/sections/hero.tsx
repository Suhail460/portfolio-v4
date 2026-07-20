"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { Stack } from "@/components/ui/stack";
import { Container } from "@/components/ui/container";
import { heroContent } from "@/content/data/hero";
import { cn } from "@/lib/cn";

const socialIcon = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
} as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-surface-muted to-background"
      />
      <Container className="py-[var(--spacing-section)]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="accent" className="mb-6">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-green-500" />
            {heroContent.availability.label}
          </Badge>

          <Heading level={1} className="max-w-3xl text-balance">
            {heroContent.headline}
          </Heading>

          <Text variant="lead" className="mt-4 max-w-2xl text-muted-foreground">
            {heroContent.subheadline}
          </Text>

          <Text variant="body" className="mt-4 max-w-2xl">
            {heroContent.valueProposition}
          </Text>

          <Stack direction="row" gap="md" className="mt-8 flex-wrap">
            <a
              href={heroContent.ctaPrimary.href}
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-medium text-accent-foreground transition-opacity duration-[var(--duration-fast)] hover:opacity-90 focus-ring"
            >
              {heroContent.ctaPrimary.label}
            </a>
            <a
              href={heroContent.ctaSecondary.href}
              className="inline-flex h-12 items-center justify-center rounded-md border border-border px-6 text-base font-medium text-foreground transition-colors duration-[var(--duration-fast)] hover:bg-surface-muted focus-ring"
            >
              {heroContent.ctaSecondary.label}
            </a>
          </Stack>

          <Stack direction="row" gap="sm" className="mt-8">
            {heroContent.socialLinks.map((link) => {
              const Icon = socialIcon[link.platform];
              return (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground focus-ring",
                  )}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </Stack>
        </motion.div>
      </Container>
    </section>
  );
}
