import type { SocialLink, SocialPlatform } from "@/types/site";

export const ROUTES = {
  home: "/",
  about: "/about",
  projects: "/projects",
  blog: "/blog",
  contact: "/contact",
} as const;

export type RouteKey = keyof typeof ROUTES;

export const NAV_ITEMS = [
  { label: "About", href: ROUTES.about },
  { label: "Projects", href: ROUTES.projects },
  { label: "Blog", href: ROUTES.blog },
  { label: "Contact", href: ROUTES.contact },
] as const satisfies ReadonlyArray<{ label: string; href: string }>;

export function routePath(key: RouteKey): string {
  return ROUTES[key];
}

export function socialUrl(platform: SocialPlatform, links: SocialLink[]): string {
  return links.find((link) => link.platform === platform)?.url ?? "";
}
