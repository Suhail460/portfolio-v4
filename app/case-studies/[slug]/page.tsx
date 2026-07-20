import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import {
  CaseStudyHero,
  CaseStudyBlockRenderer,
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
            category={study.category}
            theme={study.theme}
            summary={study.summary}
            tags={study.tags}
            image={study.heroImage}
          />
        </Reveal>

        <div className="space-y-12">
          {study.sections.map((block, i) => (
            <Reveal key={block.id} delay={Math.min(i, 3) * 0.04}>
              <CaseStudyBlockRenderer block={block} />
            </Reveal>
          ))}
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
