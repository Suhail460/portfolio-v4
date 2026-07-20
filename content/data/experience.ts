import type { ExperienceContent } from "@/types/content";

export const experienceContent: ExperienceContent = {
  sectionTitle: "Experience",
  sectionSubtitle: "Leading AI-native product strategy from 0 → 1 across B2B SaaS, fintech, and developer platforms.",
  items: [
    {
      id: "current",
      role: "Head of Product, AI Platform",
      company: "Stealth Startup (YC S24)",
      duration: "2024 — Present",
      summary: "Defining product strategy for an enterprise AI agent platform; building the PM org and shipping multi-tenant RAG at scale.",
      impactMetrics: [
        { label: "Revenue Growth", value: "$0 → $2.4M ARR" },
        { label: "Team", value: "12 PM/Eng/Design" },
        { label: "Launch Velocity", value: "6 major features/quarter" },
      ],
      technologies: ["LLM Ops", "RAG", "Vector DBs", "TypeScript", "Kubernetes"],
      highlights: [
        "Defined product strategy for enterprise AI agent platform; secured $8M Series A.",
        "Built PM org from scratch: hiring, career ladders, rituals, OKR framework.",
        "Shipped multi-tenant RAG pipeline serving 500K+ docs/day with <200ms p95 latency.",
        "Established AI eval harness (pass@k, regression gates) adopted by 3 portfolio companies.",
      ],
    },
    {
      id: "prev1",
      role: "Senior Product Manager, AI/ML",
      company: "Stripe",
      duration: "2021 — 2024",
      summary: "Led ML-powered fraud detection and model governance across 1,200+ marketplace customers.",
      impactMetrics: [
        { label: "Revenue Impact", value: "$180M+ ARR" },
        { label: "Models in Prod", value: "47" },
        { label: "Latency Reduction", value: "p99 2.1s → 340ms" },
      ],
      technologies: ["Python", "PyTorch", "Airflow", "BigQuery", "Looker"],
      highlights: [
        "Led ML-powered fraud detection suite (Radar); reduced false positives 34% while catching 12% more fraud.",
        "Championed model governance: lineage, drift monitoring, automated retraining, A/B infra.",
        "Shipped Radar for Platforms — multi-tenant ML for 1,200+ marketplaces; $40M ARR in Year 1.",
        "Mentored 3 APMs; established ML PM guild with monthly case studies and eval workshops.",
      ],
    },
    {
      id: "prev2",
      role: "Product Manager, Developer Platform",
      company: "GitHub",
      duration: "2019 — 2021",
      summary: "Owned the GitHub Actions marketplace: onboarding, discovery, monetization, and developer experience.",
      impactMetrics: [
        { label: "MAU Growth", value: "+42% (2.1M → 3M)" },
        { label: "API Calls/Day", value: "2.8B" },
        { label: "Partner Integrations", value: "87" },
      ],
      technologies: ["GraphQL", "React", "Ruby", "MySQL", "Kafka"],
      highlights: [
        "Owned GitHub Actions marketplace: onboarding, discovery, monetization, analytics.",
        "Launched reusable workflows & composite actions; cut CI config duplication 68%.",
        "Designed partner program for 3rd-party action publishers; revenue share model.",
        "Advocated for developer experience metrics (Time-to-First-Success, Activation Rate) adopted org-wide.",
      ],
    },
  ],
};
