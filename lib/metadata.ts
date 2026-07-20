import type { Metadata } from "next";
import { site, siteUrl } from "@/lib/site";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createMetadata(input: MetadataInput = {}): Metadata {
  const title = input.title ?? site.name;
  const description = input.description ?? site.description;
  const url = siteUrl(input.path ?? "");

  return {
    title,
    description,
    keywords: input.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: input.noIndex ? { index: false, follow: false } : undefined,
  };
}

export const baseMetadata: Metadata = createMetadata();
