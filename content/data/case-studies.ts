import type { CaseStudiesContent } from "@/types/content";

export const caseStudiesContent: CaseStudiesContent = {
  sectionTitle: "Case Studies",
  sectionSubtitle:
    "Selective, high-signal product work — strategy, growth, research, and teardown. Each is a different lens on the same craft.",
  studies: [
    {
      id: "youtube-premium",
      title: "YouTube Premium Membership Strategy",
      summary:
        "Reframed Premium from a price object into a layered membership built on viewing intent and willingness to pay.",
      tags: ["Product Strategy", "Monetization"],
      ctaLabel: "Read Case Study",
      ctaHref: "/case-studies/youtube-premium",
      imagePlaceholder: { alt: "YouTube Premium membership strategy", color: "#FF0000" },
    },
    {
      id: "ola-retention",
      title: "Ola User Retention",
      summary:
        "Rebuilt retention as a lifecycle loop — turning the first-to-second ride into the core growth engine.",
      tags: ["Growth Product", "Retention"],
      ctaLabel: "Read Case Study",
      ctaHref: "/case-studies/ola-retention",
      imagePlaceholder: { alt: "Ola user retention growth journey", color: "#F7B500" },
    },
    {
      id: "whatsapp-status",
      title: "WhatsApp Status Research",
      summary:
        "A JTBD study on why people post Status — separating the job of broadcasting from the job of belonging.",
      tags: ["User Research", "JTBD"],
      ctaLabel: "Read Case Study",
      ctaHref: "/case-studies/whatsapp-status",
      imagePlaceholder: { alt: "WhatsApp Status JTBD research", color: "#25D366" },
    },
    {
      id: "cred-coins",
      title: "CRED Coins Feature Teardown",
      summary:
        "Reverse-engineered how a rewards layer quietly became the behavioural engine of an entire app.",
      tags: ["Product Teardown", "Reverse Engineering"],
      ctaLabel: "Read Case Study",
      ctaHref: "/case-studies/cred-coins",
      imagePlaceholder: { alt: "CRED Coins feature teardown", color: "#1B1B1B" },
    },
  ],
};
