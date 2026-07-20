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

export type DiscoveryDojoContent = {
  sectionTitle: string;
  sectionSubtitle: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  artworkPlaceholder: { alt: string; color: string };
};

export type ContactContent = {
  sectionTitle: string;
  sectionSubtitle: string;
  email: { label: string; address: string; href: string };
  linkedin: { label: string; href: string };
  github: { label: string; href: string };
  cta: { label: string; href: string };
};