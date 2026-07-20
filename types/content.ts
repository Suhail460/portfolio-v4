export type HeroContent = {
  headline: string;
  subheadline: string;
  valueProposition: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  availability: { label: string; status: "open" | "busy" | "closed" };
  socialLinks: Array<{ platform: "linkedin" | "github" | "twitter"; href: string; label: string }>;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  duration: string;
  summary: string;
  impactMetrics: Array<{ label: string; value: string }>;
  technologies: string[];
  highlights: string[];
};

export type ExperienceContent = {
  sectionTitle: string;
  sectionSubtitle: string;
  items: ExperienceItem[];
};

export type Capability = {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  tags: string[];
};

export type CapabilitiesContent = {
  sectionTitle: string;
  sectionSubtitle: string;
  capabilities: Capability[];
};

export type CaseStudyPreview = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
  imagePlaceholder: { alt: string; color: string };
};

export type CaseStudiesContent = {
  sectionTitle: string;
  sectionSubtitle: string;
  studies: CaseStudyPreview[];
};

export type DiscoveryDojoItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  metrics: Array<{ label: string; value: string }>;
  links: Array<{ label: string; href: string; external?: boolean }>;
  imagePlaceholder: { alt: string; color: string };
};

export type DiscoveryDojoContent = {
  sectionTitle: string;
  sectionSubtitle: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  artworkPlaceholder: { alt: string; color: string };
  items: DiscoveryDojoItem[];
};

export type ContactContent = {
  sectionTitle: string;
  sectionSubtitle: string;
  email: { label: string; address: string; href: string };
  linkedin: { label: string; href: string };
  github: { label: string; href: string };
  cta: { label: string; href: string };
};

export type CaseStudyMetric = { label: string; value: string };

export type CaseStudyPersona = {
  name: string;
  role: string;
  quote: string;
};

export type CaseStudySection = {
  id: string;
  heading: string;
  body: string;
  /** Optional list of supporting bullet points. */
  points?: string[];
};

/** Flexible, ordered storytelling blocks. Lets each case study define its own
 *  narrative order while reusing the same visual language. */
export type CaseStudyBlock =
  | { kind: "narrative"; id: string; heading: string; body: string; points?: string[] }
  | { kind: "metrics"; id: string; heading?: string; metrics: CaseStudyMetric[] }
  | { kind: "personas"; id: string; heading?: string; personas: CaseStudyPersona[] }
  | {
      kind: "framework";
      id: string;
      heading: string;
      body: string;
      /** Named framework steps/cards (e.g. Opportunity Solution Tree). */
      cards?: Array<{ title: string; description: string }>;
    }
  | {
      kind: "download";
      id: string;
      heading: string;
      body: string;
      label: string;
      href: string;
    };

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  theme: string;
  tags: string[];
  heroImage: { alt: string; color: string };
  /** Ordered storytelling blocks — order varies per project. */
  sections: CaseStudyBlock[];
  ctaLabel: string;
  ctaHref: string;
};