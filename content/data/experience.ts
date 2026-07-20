import type { ExperienceContent } from "@/types/content";

export const experienceContent: ExperienceContent = {
  sectionTitle: "Experience",
  sectionSubtitle:
    "A product journey that began in customer support and grew into strategy, operations, and ownership.",
  items: [
    {
      id: "product",
      role: "Product — Strategy & Ownership",
      company: "Product Organizations (B2C / Platform)",
      duration: "Present Focus",
      summary:
        "Owning product areas end-to-end: discovery, roadmap, and delivery — grounded in the customer truth I learned on the support floor.",
      impactMetrics: [
        { label: "Lens", value: "Customer-obsessed" },
        { label: "Scope", value: "Strategy → Delivery" },
        { label: "Method", value: "AI-assisted PM" },
      ],
      technologies: ["Product Strategy", "Roadmapping", "User Research", "Analytics", "AI Tooling"],
      highlights: [
        "Translate support and usage signals into prioritized roadmaps.",
        "Run discovery and JTBD research to frame the right problem before building.",
        "Use AI-native workflows (research synthesis, spec drafting, eval thinking) to ship faster.",
        "Partner with design and engineering as a single accountable owner.",
      ],
    },
    {
      id: "product-ops",
      role: "Product Operations",
      company: "Cross-functional Teams",
      duration: "Prior",
      summary:
        "Bridged product, support, and engineering — turning messy customer feedback into structured input the team could act on.",
      impactMetrics: [
        { label: "Bridge", value: "Support ↔ Product" },
        { label: "Input", value: "Signal → Spec" },
        { label: "Cadence", value: "Rituals & OKRs" },
      ],
      technologies: ["Process Design", "Analytics", "Stakeholder Mgmt", "Documentation"],
      highlights: [
        "Built feedback loops between support tickets and the product backlog.",
        "Defined lightweight rituals (specs, reviews, retros) that kept delivery predictable.",
        "Created shared metrics so support, product, and eng read the same scoreboard.",
      ],
    },
    {
      id: "support-lead",
      role: "Customer Support Team Lead",
      company: "Support Organizations",
      duration: "Prior",
      summary:
        "Led support teams and learned the customer's real job — the foundation of how I do product today.",
      impactMetrics: [
        { label: "Strength", value: "Customer empathy" },
        { label: "Skill", value: "Root-cause analysis" },
        { label: "Impact", value: "Cross-functional voice" },
      ],
      technologies: ["Support Ops", "QA", "Training", "Tooling"],
      highlights: [
        "Coached teams to treat tickets as product signal, not noise.",
        "Drove root-cause fixes that removed recurring issues at the source.",
        "Became the customer's voice in product and roadmap conversations.",
      ],
    },
    {
      id: "support-analyst",
      role: "Product Support Analyst",
      company: "Support Organizations",
      duration: "Where it started",
      summary:
        "Started by sitting with the customer's problem every day — the cheapest, truest form of discovery.",
      impactMetrics: [
        { label: "Foundation", value: "Discovery" },
        { label: "Superpower", value: "Listening" },
        { label: "Legacy", value: "User obsession" },
      ],
      technologies: ["Issue Triage", "Documentation", "Customer Comms"],
      highlights: [
        "Developed pattern recognition across thousands of real customer problems.",
        "Turned repeat issues into clear, evidence-backed product asks.",
        "Built the habit of validating every assumption against the customer.",
      ],
    },
  ],
};
