import type { DiscoveryDojoContent } from "@/types/content";

export const discoveryDojoContent: DiscoveryDojoContent = {
  sectionTitle: "Discovery Dojo",
  sectionSubtitle:
    "Where product thinking meets AI experimentation. Open-source tools, frameworks, and mental models I build in public.",
  title: "Discovery Dojo",
  description:
    "A growing collection of eval harnesses, prompt engineering patterns, RAG benchmarks, and PM frameworks for AI-native teams. Everything is MIT-licensed and battle-tested in production.",
  ctaLabel: "Explore the Dojo",
  ctaHref: "https://github.com/suhail460/discovery-dojo",
  artworkPlaceholder: { alt: "Discovery Dojo terminal-style illustration", color: "#F59E0B" },
  items: [
    {
      id: "eval-harness",
      title: "Eval Harness Kit",
      description:
        "A pass@k and regression-gate framework for LLM features. Define evals as code, run them in CI, and block bad prompts before they ship.",
      category: "Evaluation",
      metrics: [
        { label: "Eval coverage", value: "240+ cases" },
        { label: "CI gate", value: "<90s" },
      ],
      links: [
        { label: "Repository", href: "https://github.com/suhail460/discovery-dojo", external: true },
      ],
      imagePlaceholder: { alt: "Eval harness terminal output", color: "#6366F1" },
    },
    {
      id: "rag-bench",
      title: "RAG Benchmark Suite",
      description:
        "Reproducible retrieval-quality benchmarks across vector stores and chunking strategies, with cost/latency/quality tradeoff dashboards.",
      category: "Retrieval",
      metrics: [
        { label: "Stores tested", value: "6" },
        { label: "p95 latency", value: "<200ms" },
      ],
      links: [
        { label: "Repository", href: "https://github.com/suhail460/discovery-dojo", external: true },
      ],
      imagePlaceholder: { alt: "RAG benchmark dashboard", color: "#10B981" },
    },
    {
      id: "pm-frameworks",
      title: "PM Frameworks Library",
      description:
        "Battle-tested discovery canvases, JTBD templates, and opportunity-solution trees — designed for AI-native product teams.",
      category: "Frameworks",
      metrics: [
        { label: "Templates", value: "18" },
        { label: "Downloads", value: "12k+" },
      ],
      links: [
        { label: "Repository", href: "https://github.com/suhail460/discovery-dojo", external: true },
      ],
      imagePlaceholder: { alt: "PM framework canvas", color: "#F59E0B" },
    },
  ],
};
