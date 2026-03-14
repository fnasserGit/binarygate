import type { ExpertiseSubpageContent } from "@/content/expertise-subpages";

export const blogPageContent: ExpertiseSubpageContent = {
  title: "Blog",
  description: "Deep-dives and best practices.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Blog" },
  ],
  overviewEyebrow: "Editorial Focus",
  overviewHeading: "Deep technical thinking shaped into practical guidance",
  overviewCards: [
    {
      title: "Architecture Deep-Dives",
      description:
        "We break down cloud, hybrid, and platform design decisions in a way teams can use to evaluate trade-offs and move with clarity.",
    },
    {
      title: "Best Practices That Hold Up",
      description:
        "The focus is on patterns that improve reliability, delivery, and security in real environments rather than trend-driven advice.",
    },
    {
      title: "Operational Lessons",
      description:
        "Articles draw on platform, DevOps, and infrastructure experience to surface the decisions that most affect day-to-day outcomes.",
    },
  ],
  processEyebrow: "What You Can Expect",
  processHeading: "How our blog content is intended to help teams",
  processCards: [
    {
      title: "01 — Clarify the Problem",
      description:
        "Posts begin with the operational or architectural challenge teams are actually facing instead of abstract theory.",
    },
    {
      title: "02 — Explain the Trade-Offs",
      description:
        "We outline what matters, where complexity appears, and how different approaches affect delivery, resilience, and supportability.",
    },
    {
      title: "03 — Recommend Practical Patterns",
      description:
        "The goal is to leave readers with usable ideas, not just technical commentary with no clear next step.",
    },
    {
      title: "04 — Support Better Decisions",
      description:
        "Each piece is written to help teams make stronger platform and infrastructure choices with more confidence.",
    },
  ],
  reasonsEyebrow: "Why It Matters",
  reasonsHeading: "Why teams use deep-dive content to sharpen execution",
  reasonsCards: [
    {
      title: "Better Technical Judgment",
      description:
        "Thoughtful analysis helps teams evaluate architecture and delivery decisions before they become expensive problems.",
    },
    {
      title: "Stronger Best Practices",
      description:
        "Good practices become more useful when they are explained in context and connected to real operational outcomes.",
    },
    {
      title: "Less Guesswork",
      description:
        "Clear examples and practical framing reduce uncertainty for teams planning cloud, platform, or modernization work.",
    },
    {
      title: "More Consistent Execution",
      description:
        "Shared understanding across engineering and leadership makes it easier to align around better implementation choices.",
    },
  ],
  ctaTitle: "Explore insights that turn technical complexity into clearer next steps",
  ctaDescription:
    "If you want deeper perspective on infrastructure, cloud, and delivery best practices, BinaryGate can help connect the thinking to execution.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};

export const caseStudiesPageContent: ExpertiseSubpageContent = {
  title: "Case Studies",
  description: "Real-world results and outcomes.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Case Studies" },
  ],
  overviewEyebrow: "Outcome Focus",
  overviewHeading: "Examples of how platform and infrastructure work translates into results",
  overviewCards: [
    {
      title: "Delivery Impact",
      description:
        "Case studies highlight how architecture, DevOps, and operational improvements unblock delivery and reduce friction for engineering teams.",
    },
    {
      title: "Measured Outcomes",
      description:
        "The emphasis is on visible improvements such as stronger reliability, faster release flow, and clearer operational control.",
    },
    {
      title: "Real Environment Constraints",
      description:
        "Each story is grounded in the realities of legacy systems, risk management, and the practical limits teams work within.",
    },
  ],
  processEyebrow: "How We Frame The Work",
  processHeading: "How real-world engagements are turned into useful case studies",
  processCards: [
    {
      title: "01 — Establish the Context",
      description:
        "We start with the business, delivery, and infrastructure conditions that shaped the engagement from the outset.",
    },
    {
      title: "02 — Surface the Challenge",
      description:
        "The case study makes clear what was blocking progress, increasing risk, or limiting platform performance.",
    },
    {
      title: "03 — Show the Approach",
      description:
        "We outline the architectural thinking, delivery model, and operational changes used to improve the environment.",
    },
    {
      title: "04 — Connect to the Outcome",
      description:
        "The final view focuses on what improved and why those changes mattered to the organization.",
    },
  ],
  reasonsEyebrow: "Why It Matters",
  reasonsHeading: "Why outcome-led case studies help teams plan with more confidence",
  reasonsCards: [
    {
      title: "Proof Through Execution",
      description:
        "Real examples make it easier to understand how platform decisions perform outside of slideware and theory.",
    },
    {
      title: "Relevant Patterns",
      description:
        "Case studies help teams spot approaches that may apply to similar delivery, modernization, or reliability challenges.",
    },
    {
      title: "Clearer Expectations",
      description:
        "Seeing the path from problem to result helps stakeholders understand what good execution can realistically look like.",
    },
    {
      title: "Stronger Planning",
      description:
        "Outcome-focused examples give teams better reference points when prioritizing architecture and infrastructure work.",
    },
  ],
  ctaTitle: "See how infrastructure decisions translate into stronger delivery outcomes",
  ctaDescription:
    "If you want to explore how BinaryGate approaches real platform challenges and measurable results, we can walk through relevant examples with you.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};

export const whitepapersPageContent: ExpertiseSubpageContent = {
  title: "Whitepapers",
  description: "Research on architecture and security.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Whitepapers" },
  ],
  overviewEyebrow: "Research Focus",
  overviewHeading: "Long-form thinking on architecture, security, and platform strategy",
  overviewCards: [
    {
      title: "Architecture Research",
      description:
        "Whitepapers explore design models, platform decisions, and infrastructure patterns in greater depth than shorter editorial content.",
    },
    {
      title: "Security Perspectives",
      description:
        "Topics cover governance, hardening, resilience, and the controls required to support secure growth across environments.",
    },
    {
      title: "Decision Support",
      description:
        "The material is written to help leaders and engineering teams evaluate strategic infrastructure choices with stronger context.",
    },
  ],
  processEyebrow: "How We Approach It",
  processHeading: "How our whitepapers are designed to support deeper technical decisions",
  processCards: [
    {
      title: "01 — Define the Strategic Question",
      description:
        "Each paper starts with a topic that affects architecture direction, risk posture, or the long-term health of the platform.",
    },
    {
      title: "02 — Examine the Landscape",
      description:
        "We look at the operational, security, and delivery considerations that shape the decision beyond the headline requirement.",
    },
    {
      title: "03 — Structure the Analysis",
      description:
        "Research is organized to make trade-offs, control points, and implementation considerations easier to evaluate.",
    },
    {
      title: "04 — Guide Practical Next Steps",
      description:
        "The output aims to support action, helping teams move from broad research into workable planning.",
    },
  ],
  reasonsEyebrow: "Why It Matters",
  reasonsHeading: "Why long-form architecture and security research is useful",
  reasonsCards: [
    {
      title: "Deeper Technical Context",
      description:
        "Complex architecture and security questions often need more than a short summary to be understood well.",
    },
    {
      title: "Stronger Strategic Alignment",
      description:
        "Well-structured research helps technical and business stakeholders align around the reasoning behind major decisions.",
    },
    {
      title: "Better Risk Awareness",
      description:
        "Long-form analysis makes it easier to see how governance, resilience, and implementation details interact over time.",
    },
    {
      title: "More Durable Decisions",
      description:
        "Teams that evaluate architecture and security choices thoroughly are better positioned to build platforms that last.",
    },
  ],
  ctaTitle: "Use deeper research to shape architecture and security decisions with confidence",
  ctaDescription:
    "If you need strategic guidance on infrastructure, architecture, or security direction, BinaryGate can help turn research into a practical plan.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};
