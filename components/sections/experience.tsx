"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Stack } from "@/components/ui/stack";
import { Divider } from "@/components/ui/divider";
import { experienceContent } from "@/content/data/experience";
import { SectionHeading } from "./section-heading";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          title={experienceContent.sectionTitle}
          subtitle={experienceContent.sectionSubtitle}
        />

        <Stack gap="lg">
          {experienceContent.items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            >
              <Card className="p-6 md:p-8">
                <Stack gap="md">
                  <Stack
                    direction="row"
                    justify="between"
                    align="start"
                    gap="md"
                    className="flex-wrap"
                  >
                    <div>
                      <Heading level={3}>{item.role}</Heading>
                      <Text variant="muted" className="mt-1">
                        {item.company}
                      </Text>
                    </div>
                    <Badge variant="outline">{item.duration}</Badge>
                  </Stack>

                  <Text variant="body">{item.summary}</Text>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {item.impactMetrics.map((metric) => (
                      <div key={metric.label} className="rounded-md bg-surface-muted p-4">
                        <div className="text-xl font-semibold text-foreground">
                          {metric.value}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Stack gap="sm">
                    <Text variant="small" className="font-medium">
                      Highlights
                    </Text>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      {item.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </Stack>

                  <Divider />

                  <Stack direction="row" gap="sm" wrap>
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="neutral">
                        {tech}
                      </Badge>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Section>
  );
}
