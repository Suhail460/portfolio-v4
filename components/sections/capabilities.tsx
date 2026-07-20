"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Stack } from "@/components/ui/stack";
import { Grid } from "@/components/ui/grid";
import { capabilitiesContent } from "@/content/data/capabilities";
import { getIcon } from "@/lib/icons";
import { SectionHeading } from "./section-heading";

export function Capabilities() {
  const reduce = useReducedMotion();

  return (
    <Section id="capabilities" className="bg-surface-muted/40">
      <Container>
        <SectionHeading
          title={capabilitiesContent.sectionTitle}
          subtitle={capabilitiesContent.sectionSubtitle}
        />

        <Grid cols={3} gap="lg">
          {capabilitiesContent.capabilities.map((cap, i) => {
            const Icon = getIcon(cap.icon);
            return (
              <motion.div
                key={cap.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              >
                <Card interactive className="h-full p-6">
                  <Stack gap="sm">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Heading level={4}>{cap.title}</Heading>
                    <Text variant="muted">{cap.description}</Text>
                    <Stack direction="row" gap="xs" wrap className="mt-2">
                      {cap.tags.map((tag) => (
                        <Badge key={tag} variant="neutral">
                          {tag}
                        </Badge>
                      ))}
                    </Stack>
                  </Stack>
                </Card>
              </motion.div>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
