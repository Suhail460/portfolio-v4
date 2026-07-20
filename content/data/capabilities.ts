import type { CapabilitiesContent } from "@/types/content";

export const capabilitiesContent: CapabilitiesContent = {
  sectionTitle: "Capabilities",
  sectionSubtitle: "The product craft I bring — grounded in customer truth and sharpened by AI-native workflows.",
  capabilities: [
    {
      id: "product-discovery",
      title: "Product Discovery",
      description:
        "Framing the right problem before building. Interviews, JTBD, and signal synthesis that turn ambiguity into a tested thesis.",
      icon: "Compass",
      tags: ["Interviews", "JTBD", "Problem Framing"],
    },
    {
      id: "product-strategy",
      title: "Product Strategy",
      description:
        "Connecting customer truth to business outcomes. Narratives, pricing, and positioning that teams can execute without re-litigating the premise.",
      icon: "Brain",
      tags: ["Positioning", "Pricing", "Narrative"],
    },
    {
      id: "roadmapping",
      title: "Roadmapping",
      description:
        "Turning strategy into a sequenced plan. Outcome-led roadmaps with clear tradeoffs, ownership, and a rhythm the whole team can trust.",
      icon: "Map",
      tags: ["Planning", "Prioritization", "OKRs"],
    },
    {
      id: "user-research",
      title: "User Research",
      description:
        "Qualitative depth that earns conviction. From support signals to structured studies, I keep the customer's real job at the center.",
      icon: "FlaskConical",
      tags: ["Qualitative", "Synthesis", "Insights"],
    },
    {
      id: "analytics",
      title: "Analytics",
      description:
        "Moving past vanity metrics to leading indicators and cohort truth. The scoreboard that keeps product, support, and eng aligned.",
      icon: "LineChart",
      tags: ["Metrics", "Cohorts", "Experimentation"],
    },
    {
      id: "ai-pm",
      title: "AI-assisted Product Management",
      description:
        "Using LLMs as a thinking partner — research synthesis, spec drafting, and eval-minded thinking that compresses cycle time.",
      icon: "Sparkles",
      tags: ["LLM Workflows", "Synthesis", "Eval Thinking"],
    },
    {
      id: "stakeholder",
      title: "Stakeholder Management",
      description:
        "Aligning support, design, engineering, and business around one story. The bridge that turns friction into forward motion.",
      icon: "Handshake",
      tags: ["Alignment", "Communication", "Trust"],
    },
    {
      id: "agile-delivery",
      title: "Agile Delivery",
      description:
        "Lightweight rituals and predictable cadence. Shipping in small, safe increments with room to learn from real usage.",
      icon: "Workflow",
      tags: ["Rituals", "Iterative", "Delivery"],
    },
  ],
};
