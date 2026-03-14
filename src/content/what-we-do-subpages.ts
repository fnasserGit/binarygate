import type { ExpertiseSubpageContent } from "@/content/expertise-subpages";

export const cloudMigrationPageContent: ExpertiseSubpageContent = {
  title: "Cloud Migration",
  description: "Seamless migration with zero downtime.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "What we do", href: "/what-we-do" },
    { label: "Cloud Migration" },
  ],
  overviewEyebrow: "Migration Focus",
  overviewHeading: "Move critical workloads with structure, visibility, and control",
  overviewCards: [
    {
      title: "Migration Planning",
      description:
        "Define migration scope, dependency mapping, sequencing, and risk controls before moving production systems.",
    },
    {
      title: "Transition Execution",
      description:
        "Support phased workload movement with rollback readiness, cutover coordination, and continuity safeguards.",
    },
    {
      title: "Post-Migration Stabilization",
      description:
        "Reduce early operational risk with monitoring, tuning, validation, and support after workloads land.",
    },
  ],
  processEyebrow: "How We Work",
  processHeading: "How we approach cloud migration without unnecessary disruption",
  processCards: [
    {
      title: "01 — Assess the Environment",
      description:
        "We review applications, infrastructure, dependencies, and operational constraints to understand migration readiness.",
    },
    {
      title: "02 — Define the Wave Plan",
      description:
        "We group workloads into practical migration phases with sequencing that minimizes business and technical risk.",
    },
    {
      title: "03 — Execute the Move",
      description:
        "We support migration cutovers, validation, and rollback planning so change remains controlled and observable.",
    },
    {
      title: "04 — Stabilize and Improve",
      description:
        "We help teams optimize performance, reliability, and operational confidence after the migration is complete.",
    },
  ],
  reasonsEyebrow: "Why BinaryGate",
  reasonsHeading: "Why teams use us for cloud migration initiatives",
  reasonsCards: [
    {
      title: "Controlled Delivery",
      description:
        "We focus on migration sequencing and safeguards that reduce downtime and avoid preventable surprises.",
    },
    {
      title: "Architecture Awareness",
      description:
        "Migration plans reflect workload design, platform dependencies, and the realities of production operations.",
    },
    {
      title: "Risk-First Thinking",
      description:
        "We help identify and prioritize the technical and operational risks that matter before execution begins.",
    },
    {
      title: "Operational Follow-Through",
      description:
        "The goal is not just moving systems, but leaving teams with a platform they can run confidently afterward.",
    },
  ],
  ctaTitle: "Plan migration work with clarity before you move production systems",
  ctaDescription:
    "If you are preparing to migrate workloads, platforms, or services into the cloud, we can help shape a safer and more structured execution path.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};

export const devSecOpsPageContent: ExpertiseSubpageContent = {
  title: "DevSecOps",
  description: "Security embedded in delivery lifecycle.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "What we do", href: "/what-we-do" },
    { label: "DevSecOps" },
  ],
  overviewEyebrow: "Delivery Security",
  overviewHeading: "Embed security into engineering flow without slowing teams down",
  overviewCards: [
    {
      title: "Secure Delivery Pipelines",
      description:
        "Strengthen CI/CD with security checks, policy controls, and visibility that fit how teams deliver software.",
    },
    {
      title: "Infrastructure & Platform Hardening",
      description:
        "Apply secure defaults, configuration guardrails, and access controls across delivery and runtime environments.",
    },
    {
      title: "Continuous Security Practices",
      description:
        "Support ongoing security posture through repeatable controls, review cycles, and operational discipline.",
    },
  ],
  processEyebrow: "How We Work",
  processHeading: "How we integrate security into the delivery lifecycle",
  processCards: [
    {
      title: "01 — Review the Workflow",
      description:
        "We assess how code moves from development to production and where security gaps or bottlenecks currently sit.",
    },
    {
      title: "02 — Define the Controls",
      description:
        "We recommend the right mix of checks, approvals, and platform controls for the level of risk and delivery speed required.",
    },
    {
      title: "03 — Integrate the Practice",
      description:
        "We help build security into pipelines, platform workflows, and team routines so it becomes part of delivery.",
    },
    {
      title: "04 — Improve Continuously",
      description:
        "We refine the model over time to keep controls effective without creating delivery friction or alert fatigue.",
    },
  ],
  reasonsEyebrow: "Why BinaryGate",
  reasonsHeading: "Why teams involve us in DevSecOps work",
  reasonsCards: [
    {
      title: "Security with Delivery Context",
      description:
        "Recommendations account for engineering velocity, release patterns, and operational realities.",
    },
    {
      title: "Practical Guardrails",
      description:
        "We focus on controls teams can actually maintain rather than idealized processes that quickly erode.",
    },
    {
      title: "Platform-Aware Implementation",
      description:
        "We understand how delivery systems, infrastructure, and runtime environments interact in production.",
    },
    {
      title: "Sustainable Adoption",
      description:
        "The aim is to improve security posture while keeping the development experience workable and clear.",
    },
  ],
  ctaTitle: "Make security part of delivery instead of a blocker at the end",
  ctaDescription:
    "If your teams need stronger delivery controls without sacrificing engineering flow, we can help shape a practical DevSecOps model.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};

export const infrastructureModernizationPageContent: ExpertiseSubpageContent = {
  title: "Infrastructure Modernization",
  description: "Transform legacy systems into cloud-native.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "What we do", href: "/what-we-do" },
    { label: "Infrastructure Modernization" },
  ],
  overviewEyebrow: "Modernization Focus",
  overviewHeading: "Modernize infrastructure in ways teams can adopt and operate",
  overviewCards: [
    {
      title: "Legacy Assessment",
      description:
        "Identify where architecture, tooling, and operations are creating the most drag across the current environment.",
    },
    {
      title: "Target-State Design",
      description:
        "Define the platform direction, automation, and operating model needed to support a more modern foundation.",
    },
    {
      title: "Progressive Change",
      description:
        "Move toward modern infrastructure through phased improvements that reduce risk and avoid unnecessary disruption.",
    },
  ],
  processEyebrow: "How We Work",
  processHeading: "How we turn legacy constraints into a workable modernization plan",
  processCards: [
    {
      title: "01 — Understand the Baseline",
      description:
        "We review infrastructure components, dependencies, operational patterns, and critical pain points across the estate.",
    },
    {
      title: "02 — Prioritize the Change",
      description:
        "We identify the modernization steps that will reduce risk, improve operability, and support future scale.",
    },
    {
      title: "03 — Define the Transition",
      description:
        "We shape a realistic path from current state to target state with sequencing and guardrails for safe change.",
    },
    {
      title: "04 — Support Execution",
      description:
        "We help teams move through modernization work with clearer decisions, stronger patterns, and less delivery friction.",
    },
  ],
  reasonsEyebrow: "Why BinaryGate",
  reasonsHeading: "Why organizations rely on us for modernization work",
  reasonsCards: [
    {
      title: "Practical Transformation",
      description:
        "We focus on what can be improved responsibly rather than forcing a full rebuild where it is not needed.",
    },
    {
      title: "Architecture and Operations Alignment",
      description:
        "Modernization choices reflect how teams deploy, support, and evolve systems over time.",
    },
    {
      title: "Reduced Change Risk",
      description:
        "We prioritize sequencing, continuity, and visibility to keep modernization manageable in production environments.",
    },
    {
      title: "Long-Term Platform Health",
      description:
        "The objective is to leave teams with a stronger, more operable foundation rather than temporary improvements.",
    },
  ],
  ctaTitle: "Modernize infrastructure with a path your team can actually follow",
  ctaDescription:
    "If legacy systems are slowing delivery, increasing operational risk, or blocking platform growth, we can help define a modernization roadmap that makes sense.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};

export const managedCloudServicesPageContent: ExpertiseSubpageContent = {
  title: "Managed Cloud Services",
  description: "24/7 operations and optimization.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "What we do", href: "/what-we-do" },
    { label: "Managed Cloud Services" },
  ],
  overviewEyebrow: "Managed Service Focus",
  overviewHeading: "Operational support that keeps cloud platforms stable and improving",
  overviewCards: [
    {
      title: "24/7 Service Oversight",
      description:
        "Support ongoing cloud operations with clear ownership, monitoring coverage, and service continuity practices.",
    },
    {
      title: "Optimization & Improvement",
      description:
        "Continuously improve reliability, cost posture, and operational efficiency across the platform.",
    },
    {
      title: "Operational Readiness",
      description:
        "Strengthen alerting, incident handling, and support routines so the environment remains dependable over time.",
    },
  ],
  processEyebrow: "How We Work",
  processHeading: "How we structure managed cloud support for real production environments",
  processCards: [
    {
      title: "01 — Baseline the Platform",
      description:
        "We assess monitoring, support patterns, operational gaps, and recurring issues across the existing cloud environment.",
    },
    {
      title: "02 — Define the Service Model",
      description:
        "We set expectations for ownership, escalation, observability, and operational reviews based on the platform’s needs.",
    },
    {
      title: "03 — Improve the Operations",
      description:
        "We strengthen reliability and reduce noise through better monitoring, remediation patterns, and support discipline.",
    },
    {
      title: "04 — Optimize Continuously",
      description:
        "We keep refining cost, performance, and operational processes so the service gets better rather than merely staying active.",
    },
  ],
  reasonsEyebrow: "Why BinaryGate",
  reasonsHeading: "Why teams use us for managed cloud support",
  reasonsCards: [
    {
      title: "Engineering-Led Operations",
      description:
        "Managed services are informed by platform understanding, not only reactive support workflows.",
    },
    {
      title: "Reliability and Optimization",
      description:
        "We focus on both service continuity and measurable improvement across the environment.",
    },
    {
      title: "Clear Operating Rhythm",
      description:
        "We help build support models with strong visibility, accountability, and predictable review cycles.",
    },
    {
      title: "Long-Term Supportability",
      description:
        "The goal is a healthier cloud platform over time, not a static service that only reacts to issues.",
    },
  ],
  ctaTitle: "Keep cloud operations stable while improving the platform underneath",
  ctaDescription:
    "If your environment needs stronger cloud support, better monitoring, or more proactive optimization, we can help design the right managed model.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};
