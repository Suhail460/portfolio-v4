"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { revealTransition, revealOffset } from "@/lib/motion";

/** Reveal-on-scroll wrapper used by every case study block. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: revealOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...revealTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CaseStudyHero({
  title,
  summary,
  tags,
  image,
}: {
  title: string;
  summary: string;
  tags: string[];
  image: { alt: string; color: string };
}) {
  return (
    <header className="pb-12">
      <div
        className="mb-8 aspect-[21/9] w-full rounded-lg"
        style={{ backgroundColor: image.color }}
        role="img"
        aria-label={image.alt}
      />
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{summary}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>
    </header>
  );
}

export function CaseStudyMetrics({ metrics }: { metrics: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {metrics.map((m) => (
        <div key={m.label} className="rounded-md bg-surface-muted p-4">
          <dt className="text-sm text-muted-foreground">{m.label}</dt>
          <dd className="mt-1 text-xl font-semibold text-foreground">{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CaseStudyBlock({
  id,
  heading,
  body,
  points,
}: {
  id: string;
  heading: string;
  body: string;
  points?: string[];
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      <h2 id={`${id}-heading`} className="text-2xl font-semibold tracking-tight text-foreground">
        {heading}
      </h2>
      <p className="mt-3 max-w-2xl text-foreground">{body}</p>
      {points && points.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function CaseStudyPersonas({
  personas,
}: {
  personas: { name: string; role: string; quote: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {personas.map((p) => (
        <figure
          key={p.name}
          className={cn("rounded-lg border border-border bg-surface p-6")}
        >
          <blockquote className="text-foreground">“{p.quote}”</blockquote>
          <figcaption className="mt-4 text-sm">
            <span className="font-medium text-foreground">{p.name}</span>{" "}
            <span className="text-muted-foreground">— {p.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
