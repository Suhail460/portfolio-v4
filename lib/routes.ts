import type { SocialLink, SocialPlatform } from "@/types/site";

export const SECTIONS = {
  home: "#home",
  experience: "#experience",
  capabilities: "#capabilities",
  caseStudies: "#case-studies",
  discoveryDojo: "#discovery-dojo",
  contact: "#contact",
} as const;

export type SectionKey = keyof typeof SECTIONS;

export const NAV_SECTIONS = [
  { label: "Home", href: SECTIONS.home, id: "home" },
  { label: "Experience", href: SECTIONS.experience, id: "experience" },
  { label: "Capabilities", href: SECTIONS.capabilities, id: "capabilities" },
  { label: "Case Studies", href: SECTIONS.caseStudies, id: "case-studies" },
  { label: "Discovery Dojo", href: SECTIONS.discoveryDojo, id: "discovery-dojo" },
  { label: "Contact", href: SECTIONS.contact, id: "contact" },
] as const satisfies ReadonlyArray<{
  label: string;
  href: string;
  id: string;
}>;

export function sectionPath(key: SectionKey): string {
  return SECTIONS[key];
}

export function socialUrl(platform: SocialPlatform, links: SocialLink[]): string {
  return links.find((link) => link.platform === platform)?.url ?? "";
}