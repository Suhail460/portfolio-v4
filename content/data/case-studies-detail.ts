import type { CaseStudy } from "@/types/content";

export const caseStudies: Record<string, CaseStudy> = {
  "youtube-premium": {
    slug: "youtube-premium",
    title: "YouTube Premium Membership Strategy",
    summary:
      "A monetization strategy that reframed Premium from a price object into a layered membership built around viewing intent and willingness to pay.",
    category: "Product Strategy",
    theme: "Monetization",
    tags: ["Monetization", "Pricing", "Subscriptions", "Strategy"],
    heroImage: { alt: "YouTube Premium membership strategy", color: "#FF0000" },
    sections: [
      {
        kind: "narrative",
        id: "executive-summary",
        heading: "Executive Summary",
        body: "YouTube Premium was treated as a single price point competing on ad-removal alone. I reframed the membership around viewer segments and willingness to pay, designing a layered value proposition that tied features to intent rather than discounting.",
        points: [
          "Segmented the base by viewing behaviour, not demographics.",
          "Mapped willingness to pay against feature bundles.",
          "Reframed the value narrative from 'no ads' to 'uninterrupted ownership of your time'.",
        ],
      },
      {
        kind: "framework",
        id: "strategy-framework",
        heading: "Strategy Narrative",
        body: "The strategy used a simple value-mapping framework: anchor, wedge, and expand. Anchor on the core job (uninterrupted viewing), wedge into adjacent jobs (offline, background play), and expand into ecosystem lock-in.",
        cards: [
          { title: "Anchor", description: "Own the core job: uninterrupted, background, and offline viewing." },
          { title: "Wedge", description: "Enter adjacent jobs with low marginal cost and high perceived value." },
          { title: "Expand", description: "Deepen ecosystem lock-in through cross-product membership." },
        ],
      },
      {
        kind: "narrative",
        id: "approach",
        heading: "Approach",
        body: "I ran the work as a strategy narrative: articulate the belief, stress-test it against churn data, and translate it into a pricing architecture the monetization and growth teams could execute without re-litigating the premise each quarter.",
      },
      {
        kind: "metrics",
        id: "outcomes",
        heading: "Outcomes",
        metrics: [
          { label: "Strategic framing", value: "Membership, not discount" },
          { label: "Segment lens", value: "Behaviour-based" },
          { label: "Value story", value: "Time ownership" },
        ],
      },
      {
        kind: "narrative",
        id: "reflection",
        heading: "Reflection",
        body: "The lesson was that monetization strategy is mostly narrative discipline — once the value story is coherent, pricing and packaging follow. Fighting churn with discounts only erodes the premise.",
      },
      {
        kind: "download",
        id: "source",
        heading: "Original Document",
        body: "Read the full strategy narrative, including the pricing architecture and segmentation logic.",
        label: "View Strategy Document",
        href: "https://github.com/suhail460/discovery-dojo",
      },
    ],
    ctaLabel: "Explore the Discovery Dojo",
    ctaHref: "https://github.com/suhail460/discovery-dojo",
  },

  "ola-retention": {
    slug: "ola-retention",
    title: "Ola User Retention",
    summary:
      "A retention strategy for ride-hailing that moved the metric from acquisition-dependent growth to habit-forming, lifecycle-aware engagement.",
    category: "Growth Product",
    theme: "Retention",
    tags: ["Retention", "Lifecycle", "Growth", "Engagement"],
    heroImage: { alt: "Ola user retention growth journey", color: "#F7B500" },
    sections: [
      {
        kind: "narrative",
        id: "executive-summary",
        heading: "Executive Summary",
        body: "Retention was being managed as a post-acquisition afterthought. I repositioned it as the core growth loop — every cohort's second and third ride determined lifetime value far more than the first.",
        points: [
          "Diagnosed the retention cliff at the first-to-second ride transition.",
          "Built a lifecycle map of rider states, not a single DAU metric.",
          "Shifted spend from blast campaigns to triggered, state-based nudges.",
        ],
      },
      {
        kind: "framework",
        id: "growth-journey",
        heading: "Growth Journey",
        body: "The work followed a habit-formation loop: trigger, action, reward, investment. Each stage had a defined owner and a leading indicator so retention became an operational metric, not a quarterly surprise.",
        cards: [
          { title: "Trigger", description: "Contextual, not promotional — tied to real trip intent." },
          { title: "Action", description: "One-tap rebooking that removes friction from repeat rides." },
          { title: "Reward", description: "Perceived value that compounds with each successful trip." },
          { title: "Investment", description: "Saved places and preferences that raise switching cost." },
        ],
      },
      {
        kind: "narrative",
        id: "insights",
        heading: "Insights",
        body: "The biggest unlock was separating activation from retention. Riders who hit a 'second ride within 7 days' threshold behaved like retained users; the entire lifecycle program was rebuilt around crossing that line.",
      },
      {
        kind: "metrics",
        id: "outcomes",
        heading: "Outcomes",
        metrics: [
          { label: "Primary lever", value: "2nd-ride in 7d" },
          { label: "Operating model", value: "Lifecycle states" },
          { label: "Campaign shift", value: "Triggered nudges" },
        ],
      },
      {
        kind: "narrative",
        id: "reflection",
        heading: "Reflection",
        body: "Retention is a system, not a screen. Once the lifecycle states were explicit, every team could see which lever they owned — and the metric stopped being the growth team's alone to carry.",
      },
      {
        kind: "download",
        id: "source",
        heading: "Original Document",
        body: "Read the full retention teardown, including the lifecycle map and trigger design.",
        label: "View Retention Study",
        href: "https://github.com/suhail460/discovery-dojo",
      },
    ],
    ctaLabel: "Explore the Discovery Dojo",
    ctaHref: "https://github.com/suhail460/discovery-dojo",
  },

  "whatsapp-status": {
    slug: "whatsapp-status",
    title: "WhatsApp Status Research",
    summary:
      "A Jobs-To-Be-Done research study on why people post Status — turning an ambiguous behaviour into a sharp product thesis.",
    category: "User Research",
    theme: "JTBD",
    tags: ["User Research", "JTBD", "Qualitative", "Insights"],
    heroImage: { alt: "WhatsApp Status JTBD research", color: "#25D366" },
    sections: [
      {
        kind: "narrative",
        id: "executive-summary",
        heading: "Executive Summary",
        body: "Status looked like 'stories' on the surface, but the underlying jobs were social, not performative. The research separated the job of broadcasting from the job of belonging, and that distinction changed what 'success' meant for the feature.",
        points: [
          "Ran JTBD interviews rather than feature surveys.",
          "Separated expressive posting from passive belonging.",
          "Reframed success metrics around the job, not the tap.",
        ],
      },
      {
        kind: "personas",
        id: "personas",
        heading: "Voices from the Research",
        personas: [
          {
            name: "The Broadcaster",
            role: "Wants to be seen without being performative",
            quote: "I post so the right people know I'm here — not for everyone.",
          },
          {
            name: "The Belonger",
            role: "Wants quiet presence in close circles",
            quote: "Status is how I stay close without starting a conversation.",
          },
        ],
      },
      {
        kind: "narrative",
        id: "method",
        heading: "Research Method",
        body: "The study used a Jobs-To-Be-Done lens: for each posting moment, we asked what the person was really trying to do, what they used before, and what would have kept them from posting. Themes emerged across 20+ interviews and were validated against support threads.",
      },
      {
        kind: "narrative",
        id: "insights",
        heading: "Key Insights",
        body: "The 'audience' of a Status is almost never the poster's full contact list. Privacy and perceived audience were the true product surface — not the camera. Any improvement that ignored the audience question missed the job.",
      },
      {
        kind: "metrics",
        id: "outcomes",
        heading: "Outcomes",
        metrics: [
          { label: "Method", value: "JTBD interviews" },
          { label: "Core job split", value: "Express / Belong" },
          { label: "True surface", value: "Perceived audience" },
        ],
      },
      {
        kind: "download",
        id: "source",
        heading: "Original Document",
        body: "This study is sourced from an existing Notion document. Read the full JTBD write-up.",
        label: "Read the Notion Document",
        href: "https://github.com/suhail460/discovery-dojo",
      },
    ],
    ctaLabel: "Explore the Discovery Dojo",
    ctaHref: "https://github.com/suhail460/discovery-dojo",
  },

  "cred-coins": {
    slug: "cred-coins",
    title: "CRED Coins Feature Teardown",
    summary:
      "A reverse-engineering teardown of CRED Coins — how a rewards layer quietly became the behavioural engine of the entire app.",
    category: "Product Teardown",
    theme: "Reverse Engineering",
    tags: ["Teardown", "Gamification", "Rewards", "Analysis"],
    heroImage: { alt: "CRED Coins feature teardown", color: "#1B1B1B" },
    sections: [
      {
        kind: "narrative",
        id: "executive-summary",
        heading: "Executive Summary",
        body: "CRED Coins looks like a loyalty program. Reverse-engineering it shows something sharper: a behavioural engine that converts a billing moment into a daily engagement loop, using scarcity, variable reward, and status to keep users returning long after the bill is paid.",
        points: [
          "Mapped the reward loop against CRED's actual engagement goals.",
          "Identified scarcity and variable reward as the core mechanics.",
          "Showed how a 'billing app' became a daily habit surface.",
        ],
      },
      {
        kind: "framework",
        id: "analysis",
        heading: "Analytical Narrative",
        body: "The teardown uses a loop-analysis lens: trigger, action, variable reward, investment — and then asks what each step is really optimising for. The answer is rarely 'loyalty'; it is 'frequency of return'.",
        cards: [
          { title: "Trigger", description: "Bill payment creates a natural, recurring entry point." },
          { title: "Action", description: "Spending coins is low-friction and instantly gratifying." },
          { title: "Variable Reward", description: "Raffles and drops create intermittent, addictive payoffs." },
          { title: "Investment", description: "Status tiers raise the cost of leaving the ecosystem." },
        ],
      },
      {
        kind: "narrative",
        id: "insights",
        heading: "Insights",
        body: "The genius is invisibility. Users experience 'rewards', not 'manipulation' — because the mechanics are wrapped in genuine value (prizes, donations, cashback). The teardown separates the wrapper from the engine.",
      },
      {
        kind: "narrative",
        id: "recommendations",
        heading: "Recommendations",
        body: "For teams copying the pattern: lead with real value, then layer mechanics. A rewards loop without underlying value is a treadmill; CRED's works because the bill-payment job is already strong.",
      },
      {
        kind: "metrics",
        id: "outcomes",
        heading: "Outcomes",
        metrics: [
          { label: "Decomposition", value: "Loop-first" },
          { label: "Core mechanic", value: "Variable reward" },
          { label: "Takeaway", value: "Value first" },
        ],
      },
      {
        kind: "download",
        id: "source",
        heading: "Original Document",
        body: "Read the full teardown, including the loop map and mechanic-by-mechanic analysis.",
        label: "View Teardown",
        href: "https://github.com/suhail460/discovery-dojo",
      },
    ],
    ctaLabel: "Explore the Discovery Dojo",
    ctaHref: "https://github.com/suhail460/discovery-dojo",
  },
};
