"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import { revealTransition, revealOffset } from "@/lib/motion";
import type { CaseStudyBlock, CaseStudyMetric, CaseStudyPersona } from "@/types/content";

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
  category,
  theme,
  summary,
  tags,
  image,
}: {
  title: string;
  category: string;
  theme: string;
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
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {category}
        </span>
        <span className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          {theme}
        </span>
      </div>
      <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground">
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

export function CaseStudyMetrics({
  metrics,
  heading,
}: {
  metrics: CaseStudyMetric[];
  heading?: string;
}) {
  return (
    <section aria-label={heading ?? "Key metrics"} className="scroll-mt-24">
      {heading && (
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
          {heading}
        </h2>
      )}
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-md bg-surface-muted p-4">
            <dt className="text-sm text-muted-foreground">{m.label}</dt>
            <dd className="mt-1 text-xl font-semibold text-foreground">{m.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function CaseStudyBlockView({
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
  heading,
}: {
  personas: CaseStudyPersona[];
  heading?: string;
}) {
  return (
    <section aria-label={heading ?? "Personas"} className="scroll-mt-24">
      {heading && (
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {personas.map((p) => (
          <figure key={p.name} className="rounded-lg border border-border bg-surface p-6">
            <blockquote className="text-foreground">“{p.quote}”</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-medium text-foreground">{p.name}</span>{" "}
              <span className="text-muted-foreground">— {p.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyFramework({
  id,
  heading,
  body,
  cards,
}: {
  id: string;
  heading: string;
  body: string;
  cards?: Array<{ title: string; description: string }>;
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      <h2 id={`${id}-heading`} className="text-2xl font-semibold tracking-tight text-foreground">
        {heading}
      </h2>
      <p className="mt-3 max-w-2xl text-foreground">{body}</p>
      {cards && cards.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-border bg-surface p-5 transition-colors duration-[var(--duration-fast)] hover:bg-surface-muted"
            >
              <h3 className="font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export function CaseStudyDownload({
  id,
  heading,
  body,
  label,
  href,
}: {
  id: string;
  heading: string;
  body: string;
  label: string;
  href: string;
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      <div className="rounded-lg border border-border bg-surface-muted p-6">
        <h2 id={`${id}-heading`} className="text-2xl font-semibold tracking-tight text-foreground">
          {heading}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{body}</p>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 focus-ring"
        >
          <ArrowDownToLine className="h-4 w-4" />
          {label}
        </a>
      </div>
    </section>
  );
}

/** Dispatches any ordered block to its renderer. Keeps one visual language
 *  while allowing each study to define its own narrative order. */
export function CaseStudyBlockRenderer({ block }: { block: CaseStudyBlock }) {
  switch (block.kind) {
    case "narrative":
      return (
        <CaseStudyBlockView id={block.id} heading={block.heading} body={block.body} points={block.points} />
      );
    case "metrics":
      return <CaseStudyMetrics metrics={block.metrics} heading={block.heading} />;
    case "personas":
      return <CaseStudyPersonas personas={block.personas} heading={block.heading} />;
    case "framework":
      return (
        <CaseStudyFramework id={block.id} heading={block.heading} body={block.body} cards={block.cards} />
      );
    case "download":
      return (
        <CaseStudyDownload
          id={block.id}
          heading={block.heading}
          body={block.body}
          label={block.label}
          href={block.href}
        />
      );
    default:
      return null;
  }
}
