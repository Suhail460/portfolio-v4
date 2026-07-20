"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Stack } from "@/components/ui/stack";
import { discoveryDojoContent } from "@/content/data/discovery-dojo";
import { SectionHeading } from "./section-heading";

export function DiscoveryDojoPreview() {
  const reduce = useReducedMotion();
  const c = discoveryDojoContent;

  return (
    <Section id="discovery-dojo" className="bg-surface-muted/40">
      <Container>
        <SectionHeading title={c.sectionTitle} subtitle={c.sectionSubtitle} />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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
      </Container>
    </Section>
  );
}
