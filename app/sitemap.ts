import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { caseStudies } from "@/content/data/case-studies-detail";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
  ];
  const caseStudyRoutes: MetadataRoute.Sitemap = Object.keys(caseStudies).map((slug) => ({
    url: siteUrl(`/case-studies/${slug}`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.8,
  }));
  return [...staticRoutes, ...caseStudyRoutes];
}
