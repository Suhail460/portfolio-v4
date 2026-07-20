import type { CaseStudy } from "@/types/content";

export const caseStudies: Record<string, CaseStudy> = {
  "radar-platforms": {
    slug: "radar-platforms",
    title: "Radar for Platforms — Multi-Tenant ML at Scale",
    summary:
      "Enabled 1,200+ marketplaces to run custom fraud models on shared infrastructure without ML expertise.",
    tags: ["ML Platform", "Multi-Tenant", "Fraud", "Stripe"],
    heroImage: { alt: "Radar for Platforms architecture diagram", color: "#3B82F6" },
    problem: {
      id: "problem",
      heading: "The Problem",
      body: "Marketplaces on the platform were losing millions to fraud but lacked the data science talent to build custom models. Generic, one-size-fits-all fraud detection left high-risk segments unprotected.",
      points: [
        "1,200+ marketplaces with wildly different risk profiles.",
        "No in-house ML expertise among marketplace operators.",
        "Generic models produced high false positives on legit sellers.",
      ],
    },
    research: {
      id: "research",
      heading: "Research",
      body: "We interviewed 40 marketplace operators and analyzed 18 months of chargeback data to map where generic models failed and which signals were universally predictive.",
      points: [
        "Diary studies with 12 high-volume marketplace operators.",
        "Chargeback root-cause analysis across 3 verticals.",
        "Signal feasibility audit with the risk engineering team.",
      ],
    },
    jtbd: {
      id: "jtbd",
      heading: "Jobs To Be Done",
      body: "When a marketplace operator detects rising fraud, they want to deploy a model tuned to their category — without hiring a data science team — so they can protect revenue and seller trust.",
      points: [
        "Deploy category-specific fraud models in minutes, not quarters.",
        "Trust the system without understanding the math.",
        "Scale protection as the marketplace grows.",
      ],
    },
    personas: [
      {
        name: "Priya",
        role: "Marketplace Operator, Mid-Market",
        quote: "I need protection that understands my sellers, not a generic black box.",
      },
      {
        name: "Daniel",
        role: "Risk Engineering Lead",
        quote: "I need a platform that lets me ship models to customers without bespoke builds.",
      },
    ],
    metrics: [
      { label: "Marketplaces served", value: "1,200+" },
      { label: "Year 1 ARR", value: "$40M" },
      { label: "False positive drop", value: "34%" },
    ],
    solution: {
      id: "solution",
      heading: "The Solution",
      body: "A multi-tenant ML platform that auto-trains category-specific models on shared infrastructure, exposing them through a single API with self-serve monitoring.",
      points: [
        "Automated per-marketplace model training and deployment.",
        "Shared feature store with tenant isolation.",
        "Self-serve dashboards for non-ML operators.",
      ],
    },
    outcome: {
      id: "outcome",
      heading: "The Outcome",
      body: "Radar for Platforms became a $40M ARR line in its first year, adopted by 1,200+ marketplaces, while reducing false positives 34% versus the generic model.",
      points: [
        "$40M ARR in Year 1.",
        "1,200+ marketplaces onboarded.",
        "34% fewer false positives, 12% more fraud caught.",
      ],
    },
    learnings: {
      id: "learnings",
      heading: "Learnings",
      body: "Tenant isolation and explainability mattered more than raw model accuracy for operator trust. Self-serve observability was the unlock for non-ML adoption.",
      points: [
        "Trust beats accuracy for non-technical operators.",
        "Observability is a feature, not a nice-to-have.",
        "Shared infra with strong isolation scales economics.",
      ],
    },
    ctaLabel: "Explore the Discovery Dojo",
    ctaHref: "https://github.com/suhail460/discovery-dojo",
  },
  "github-actions": {
    slug: "github-actions",
    title: "GitHub Actions Marketplace — Developer Ecosystem at Scale",
    summary:
      "Built the discovery, monetization, and analytics layer for 10,000+ reusable workflows and 3M+ monthly active developers.",
    tags: ["Marketplace", "DevEx", "Platform", "GitHub"],
    heroImage: { alt: "GitHub Actions Marketplace dashboard", color: "#8B5CF6" },
    problem: {
      id: "problem",
      heading: "The Problem",
      body: "Action publishers had no discovery surface and developers struggled to find trusted, reusable automation. CI config duplication was rampant across the ecosystem.",
      points: [
        "No central discovery for 10,000+ community actions.",
        "Publishers lacked analytics and monetization.",
        "68% of repos duplicated common CI configuration.",
      ],
    },
    research: {
      id: "research",
      heading: "Research",
      body: "We surveyed 600 developers and instrumented marketplace search to understand discovery drop-off and what drove action adoption.",
      points: [
        "Developer surveys on discovery pain points.",
        "Search funnel instrumentation.",
        "Publisher interviews on monetization needs.",
      ],
    },
    jtbd: {
      id: "jtbd",
      heading: "Jobs To Be Done",
      body: "When a developer automates a workflow, they want to find a trusted, reusable action in seconds — without writing boilerplate — so they can ship faster.",
      points: [
        "Discover trusted actions without vetting from scratch.",
        "Reuse instead of reinventing CI config.",
        "Publish and measure their own actions.",
      ],
    },
    personas: [
      {
        name: "Maya",
        role: "Staff Engineer",
        quote: "I want to reuse a vetted action, not paste YAML I don't fully understand.",
      },
      {
        name: "Leo",
        role: "OSS Maintainer",
        quote: "I need analytics to know if my action is actually helping people.",
      },
    ],
    metrics: [
      { label: "Monthly active devs", value: "3M+" },
      { label: "Reusable workflows", value: "10k+" },
      { label: "CI duplication cut", value: "68%" },
    ],
    solution: {
      id: "solution",
      heading: "The Solution",
      body: "A marketplace with search, categories, verified badges, publisher analytics, and reusable workflows plus composite actions.",
      points: [
        "Search and category-based discovery.",
        "Verified publisher program with analytics.",
        "Reusable workflows and composite actions.",
      ],
    },
    outcome: {
      id: "outcome",
      heading: "The Outcome",
      body: "The marketplace became the default discovery surface for millions of developers and cut CI config duplication by 68% across adopters.",
      points: [
        "3M+ monthly active developers.",
        "10,000+ reusable workflows published.",
        "68% reduction in duplicated CI config.",
      ],
    },
    learnings: {
      id: "learnings",
      heading: "Learnings",
      body: "Trust signals (verified badges) drove adoption more than raw search relevance. Publisher analytics created a virtuous content loop.",
      points: [
        "Verified trust > ranking tweaks.",
        "Creator analytics fuel a content flywheel.",
        "Reuse beats reinvention for platform velocity.",
      ],
    },
    ctaLabel: "Explore the Discovery Dojo",
    ctaHref: "https://github.com/suhail460/discovery-dojo",
  },
  "stealth-ai": {
    slug: "stealth-ai",
    title: "Enterprise AI Agent Platform — 0 to $2.4M ARR",
    summary:
      "Designed and shipped a multi-tenant RAG platform with eval-driven development, serving 500K+ docs/day across 12 enterprise customers.",
    tags: ["RAG", "AI Agents", "Eval-Driven", "0→1"],
    heroImage: { alt: "AI Agent Platform architecture", color: "#10B981" },
    problem: {
      id: "problem",
      heading: "The Problem",
      body: "Enterprises wanted AI agents on their private data but had no safe, governed way to deploy RAG at scale, and quality regressed silently after every prompt change.",
      points: [
        "No governed path to deploy RAG on private data.",
        "Silent quality regressions on prompt edits.",
        "Multi-tenant isolation and cost concerns.",
      ],
    },
    research: {
      id: "research",
      heading: "Research",
      body: "We ran design partnerships with 4 enterprises to map data governance constraints, latency budgets, and what 'good' looked like per domain.",
      points: [
        "Design partnerships with 4 enterprise customers.",
        "Latency and cost budget modelling.",
        "Quality regression post-mortems.",
      ],
    },
    jtbd: {
      id: "jtbd",
      heading: "Jobs To Be Done",
      body: "When an enterprise ships an AI agent, they want it grounded in their data and safe to change — without a research team — so they can realize value fast.",
      points: [
        "Deploy grounded agents on private data.",
        "Change prompts without breaking quality.",
        "Scale across teams with governance.",
      ],
    },
    personas: [
      {
        name: "Aisha",
        role: "VP Engineering, Enterprise",
        quote: "I need to change a prompt and trust nothing silently broke.",
      },
      {
        name: "Tom",
        role: "Platform PM",
        quote: "I need evals in CI so regressions never reach customers.",
      },
    ],
    metrics: [
      { label: "ARR achieved", value: "$2.4M" },
      { label: "Enterprise customers", value: "12" },
      { label: "Docs processed/day", value: "500K+" },
    ],
    solution: {
      id: "solution",
      heading: "The Solution",
      body: "A multi-tenant RAG platform with eval-driven development: prompts ship only when evals pass in CI, with per-tenant isolation and a p95 latency budget under 200ms.",
      points: [
        "Eval harness gating every prompt change in CI.",
        "Per-tenant data isolation.",
        "p95 latency budget under 200ms.",
      ],
    },
    outcome: {
      id: "outcome",
      heading: "The Outcome",
      body: "The platform reached $2.4M ARR across 12 enterprise customers while serving 500K+ documents/day with stable quality via eval gates.",
      points: [
        "$2.4M ARR, 12 enterprise customers.",
        "500K+ docs/day at <200ms p95.",
        "Zero silent quality regressions post-launch.",
      ],
    },
    learnings: {
      id: "learnings",
      heading: "Learnings",
      body: "Eval-driven development was the unlock: it turned prompt changes from risky art into a safe, reviewable engineering practice.",
      points: [
        "Evals in CI > post-hoc monitoring.",
        "Latency budgets are a product constraint, not infra detail.",
        "Isolation enables enterprise trust.",
      ],
    },
    ctaLabel: "Explore the Discovery Dojo",
    ctaHref: "https://github.com/suhail460/discovery-dojo",
  },
};
