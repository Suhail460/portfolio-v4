import type { CaseStudiesContent } from "@/types/content";

export const caseStudiesContent: CaseStudiesContent = {
  sectionTitle: "Case Studies",
  sectionSubtitle: "Deep dives on shipped AI products — problem, process, decisions, and measurable outcomes.",
  studies: [
    {
      id: "radar-platforms",
      title: "Radar for Platforms — Multi-Tenant ML at Scale",
      summary: "Enabled 1,200+ marketplaces to run custom fraud models on shared infrastructure without ML expertise.",
      tags: ["ML Platform", "Multi-Tenant", "Fraud", "Stripe"],
      ctaLabel: "Read Case Study",
      ctaHref: "/case-studies/radar-platforms",
      imagePlaceholder: { alt: "Radar for Platforms architecture diagram", color: "#3B82F6" },
    },
    {
      id: "github-actions-marketplace",
      title: "GitHub Actions Marketplace — Developer Ecosystem at Scale",
      summary: "Built the discovery, monetization, and analytics layer for 10,000+ reusable workflows and 3M+ monthly active developers.",
      tags: ["Marketplace", "DevEx", "Platform", "GitHub"],
      ctaLabel: "Read Case Study",
      ctaHref: "/case-studies/github-actions",
      imagePlaceholder: { alt: "GitHub Actions Marketplace dashboard", color: "#8B5CF6" },
    },
    {
      id: "stealth-ai-agents",
      title: "Enterprise AI Agent Platform — 0 to $2.4M ARR",
      summary: "Designed and shipped a multi-tenant RAG platform with eval-driven development, serving 500K+ docs/day across 12 enterprise customers.",
      tags: ["RAG", "AI Agents", "Eval-Driven", "0→1"],
      ctaLabel: "Read Case Study",
      ctaHref: "/case-studies/stealth-ai",
      imagePlaceholder: { alt: "AI Agent Platform architecture", color: "#10B981" },
    },
  ],
};