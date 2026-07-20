"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Stack } from "@/components/ui/stack";
import { Grid } from "@/components/ui/grid";
import { caseStudiesContent } from "@/content/data/case-studies";
import { SectionHeading } from "./section-heading";

export function CaseStudiesPreview() {
  const reduce = useReducedMotion();

  return (
    <Section id="case-studies">
      <Container>
        <SectionHeading
          title={caseStudiesContent.sectionTitle}
          subtitle={caseStudiesContent.sectionSubtitle}
        />

        <Grid cols={3} gap="lg">
          {caseStudiesContent.studies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            >
              <Card interactive className="flex h-full flex-col overflow-hidden">
                <div
                  className="aspect-[16/9] w-full"
                  style={{ backgroundColor: study.imagePlaceholder.color }}
                  role="img"
                  aria-label={study.imagePlaceholder.alt}
                />
                <Stack gap="sm" className="flex-1 p-6">
                  <Heading level={4}>{study.title}</Heading>
                  <Text variant="muted">{study.summary}</Text>
                  <Stack direction="row" gap="xs" wrap className="mt-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="neutral">
                        {tag}
                      </Badge>
                    ))}
                  </Stack>
                  <a
                    href={study.ctaHref}
                    className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-accent hover:underline focus-ring"
                  >
                    {study.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
