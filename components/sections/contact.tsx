"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Stack } from "@/components/ui/stack";
import { contactContent } from "@/content/data/contact";
import { SectionHeading } from "./section-heading";

const links = [
  { key: "email", icon: Mail, ...contactContent.email },
  { key: "linkedin", icon: Linkedin, ...contactContent.linkedin },
  { key: "github", icon: Github, ...contactContent.github },
] as const;

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          title={contactContent.sectionTitle}
          subtitle={contactContent.sectionSubtitle}
        />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Card className="p-6 md:p-8">
            <Stack gap="lg">
              <Stack direction="row" gap="md" wrap>
                {links.map(({ key, icon: Icon, label, href }) => (
                  <a
                    key={key}
                    href={href}
                    target={key === "email" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted focus-ring"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </Stack>

              <a
                href={contactContent.cta.href}
                className="inline-flex h-12 w-fit items-center justify-center rounded-md bg-accent px-6 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90 focus-ring"
              >
                {contactContent.cta.label}
              </a>
            </Stack>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
