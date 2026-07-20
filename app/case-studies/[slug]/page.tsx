import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import {
  CaseStudyHero,
  CaseStudyMetrics,
  CaseStudyBlock,
  CaseStudyPersonas,
  Reveal,
} from "@/components/case-study/case-study";
import { caseStudies } from "@/content/data/case-studies-detail";
import { createMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return createMetadata({ title: "Case Study Not Found", noIndex: true });
  return createMetadata({
    title: `${study.title} — Case Study`,
    description: study.summary,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  return (
    <main id="main-content" role="main">
      <Container className="py-[var(--spacing-section)]">
        <Reveal>
          <CaseStudyHero
            title={study.title}
            summary={study.summary}
            tags={study.tags}
            image={study.heroImage}
          />
        </Reveal>

        <Reveal className="my-12">
          <CaseStudyMetrics metrics={study.metrics} />
        </Reveal>

        <div className="space-y-12">
          <Reveal>
            <CaseStudyBlock
              id={study.problem.id}
              heading={study.problem.heading}
              body={study.problem.body}
              points={study.problem.points}
            />
          </Reveal>
          <Reveal>
            <CaseStudyBlock
              id={study.research.id}
              heading={study.research.heading}
              body={study.research.body}
              points={study.research.points}
            />
          </Reveal>
          <Reveal>
            <CaseStudyBlock
              id={study.jtbd.id}
              heading={study.jtbd.heading}
              body={study.jtbd.body}
              points={study.jtbd.points}
            />
          </Reveal>
          <Reveal>
            <CaseStudyPersonas personas={study.personas} />
          </Reveal>
          <Reveal>
            <CaseStudyBlock
              id={study.solution.id}
              heading={study.solution.heading}
              body={study.solution.body}
              points={study.solution.points}
            />
          </Reveal>
          <Reveal>
            <CaseStudyBlock
              id={study.outcome.id}
              heading={study.outcome.heading}
              body={study.outcome.body}
              points={study.outcome.points}
            />
          </Reveal>
          <Reveal>
            <CaseStudyBlock
              id={study.learnings.id}
              heading={study.learnings.heading}
              body={study.learnings.body}
              points={study.learnings.points}
            />
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <a
            href={study.ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90 focus-ring"
          >
            {study.ctaLabel}
          </a>
        </Reveal>

        <p className="mt-8 text-sm text-muted-foreground">
          <a href={siteUrl("/#case-studies")} className="text-accent hover:underline focus-ring">
            ← Back to all case studies
          </a>
        </p>
      </Container>
    </main>
  );
}
