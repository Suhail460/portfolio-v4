import type { SiteConfig, SocialLink } from "@/types/site";
import { env } from "@/lib/env";
import { NAV_SECTIONS } from "@/lib/routes";

function buildSocial(): SocialLink[] {
  const links: SocialLink[] = [];
  if (env.NEXT_PUBLIC_GITHUB_URL) {
    links.push({ platform: "github", label: "GitHub", url: env.NEXT_PUBLIC_GITHUB_URL });
  }
  if (env.NEXT_PUBLIC_LINKEDIN_URL) {
    links.push({
      platform: "linkedin",
      label: "LinkedIn",
      url: env.NEXT_PUBLIC_LINKEDIN_URL,
    });
  }
  if (env.NEXT_PUBLIC_TWITTER_URL) {
    links.push({
      platform: "twitter",
      label: "Twitter",
      url: env.NEXT_PUBLIC_TWITTER_URL,
    });
  }
  return links;
}

export const site: SiteConfig = {
  name: env.NEXT_PUBLIC_SITE_NAME,
  url: env.NEXT_PUBLIC_SITE_URL,
  description: env.NEXT_PUBLIC_SITE_DESCRIPTION,
  author: env.NEXT_PUBLIC_SITE_NAME,
  social: buildSocial(),
  nav: NAV_SECTIONS.map((item) => ({
    label: item.label,
    href: item.href,
    id: item.id,
  })),
};

export function siteUrl(path = ""): string {
  return `${site.url}${path}`;
}
