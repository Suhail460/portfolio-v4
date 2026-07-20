"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Stack } from "@/components/ui/stack";
import { Grid } from "@/components/ui/grid";
import { discoveryDojoContent } from "@/content/data/discovery-dojo";
import { SectionHeading } from "./section-heading";
import { revealTransition, revealOffset } from "@/lib/motion";

export function DiscoveryDojoPreview() {
  const reduce = useReducedMotion();
  const c = discoveryDojoContent;

  return (
    <Section id="discovery-dojo" className="bg-surface-muted/40">
      <Container>
        <SectionHeading title={c.sectionTitle} subtitle={c.sectionSubtitle} />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: revealOffset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={revealTransition}
        >
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="aspect-square w-full md:aspect-auto"
                style={{ backgroundColor: c.artworkPlaceholder.color }}
                role="img"
                aria-label={c.artworkPlaceholder.alt}
              />
              <Stack gap="md" className="justify-center p-8">
                <Heading level={3}>{c.title}</Heading>
                <Text variant="muted">{c.description}</Text>
                <a
                  href={c.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-1 text-sm font-medium text-accent hover:underline focus-ring"
                >
                  {c.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Stack>
            </div>
          </Card>
        </motion.div>

        <Grid cols={3} gap="lg" className="mt-8">
          {c.items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={reduce ? false : { opacity: 0, y: revealOffset }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...revealTransition, delay: i * 0.05 }}
            >
              <Card interactive className="flex h-full flex-col overflow-hidden">
                <div
                  className="aspect-[16/9] w-full"
                  style={{ backgroundColor: item.imagePlaceholder.color }}
                  role="img"
                  aria-label={item.imagePlaceholder.alt}
                />
                <Stack gap="sm" className="flex-1 p-6">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="accent">{item.category}</Badge>
                  </div>
                  <Heading level={3}>{item.title}</Heading>
                  <Text variant="muted">{item.description}</Text>
                  <Stack direction="row" gap="sm" wrap className="mt-2">
                    {item.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="rounded-md bg-surface-muted px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        <span className="text-foreground">{m.value}</span>{" "}
                        <span className="text-muted-foreground">{m.label}</span>
                      </span>
                    ))}
                  </Stack>
                  <Stack gap="xs" className="mt-auto pt-4">
                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel="noreferrer"
                        className="inline-flex w-fit items-center gap-1 text-sm font-medium text-accent hover:underline focus-ring"
                      >
                        {link.label}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
