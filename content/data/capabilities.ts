import type { CapabilitiesContent } from "@/types/content";

export const capabilitiesContent: CapabilitiesContent = {
  sectionTitle: "Capabilities",
  sectionSubtitle: "The product craft I bring to AI-native teams — strategy, execution, and org design.",
  capabilities: [
    {
      id: "ai-strategy",
      title: "AI Product Strategy",
      description: "Translating LLM capabilities into defensible product moats. Model selection, eval design, RAG vs fine-tune tradeoffs, cost/latency/quality optimization.",
      icon: "Brain",
      tags: ["LLM Ops", "Eval Harnesses", "RAG", "Agent Architecture"],
    },
    {
      id: "zero-to-one",
      title: "0 → 1 Product Building",
      description: "Taking ambiguous problems to shipped products with paying customers. Discovery, pricing, GTM, and the grit to iterate past the first 100 users.",
      icon: "Rocket",
      tags: ["Discovery", "Pricing", "GTM", "PLG"],
    },
    {
      id: "platform-thinking",
      title: "Platform & Developer Experience",
      description: "Designing extensible platforms that developers love. API design, SDK strategy, marketplace dynamics, partner ecosystems, and self-serve adoption loops.",
      icon: "Layers",
      tags: ["API Design", "SDKs", "Marketplaces", "Partner Programs"],
    },
    {
      id: "ml-product",
      title: "ML-Powered Product Leadership",
      description: "Bridging ML research and product value. Model governance, drift monitoring, automated retraining, A/B infrastructure, and responsible AI guardrails.",
      icon: "BarChart2",
      tags: ["Model Governance", "Drift Detection", "A/B Infra", "Responsible AI"],
    },
    {
      id: "org-design",
      title: "PM Org Design & Culture",
      description: "Building high-leverage product organizations. Career ladders, ritual design, OKR systems, hiring loops, and creating psychological safety for risk-taking.",
      icon: "Users",
      tags: ["Hiring", "Career Ladders", "Rituals", "OKRs"],
    },
    {
      id: "data-driven",
      title: "Data-Informed Decision Making",
      description: "Moving beyond vanity metrics. North Star metrics, leading indicators, cohort analysis, experimentation culture, and teaching teams to trust the data.",
      icon: "TrendingUp",
      tags: ["North Star", "Experimentation", "Cohorts", "Leading Indicators"],
    },
  ],
};