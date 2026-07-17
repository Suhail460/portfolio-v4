export type SocialPlatform = "github" | "linkedin" | "twitter";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  url: string;
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SiteConfig = {
  name: string;
  url: string;
  description: string;
  author: string;
  social: SocialLink[];
  nav: NavItem[];
};
