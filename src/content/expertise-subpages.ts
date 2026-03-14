type Breadcrumb = {
  label: string;
  href?: string;
};

type PageCard = {
  title: string;
  description: string;
};

export type ExpertiseSubpageContent = {
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
  overviewEyebrow: string;
  overviewHeading: string;
  overviewCards: PageCard[];
  processEyebrow: string;
  processHeading: string;
  processCards: PageCard[];
  reasonsEyebrow: string;
  reasonsHeading: string;
  reasonsCards: PageCard[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref: string;
};

export const cloudPageContent: ExpertiseSubpageContent = {
  title: "Cloud",
  description: "Cloud consulting, migration, and operations.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Expertise", href: "/expertise" },
    { label: "Cloud" },
  ],
  overviewEyebrow: "Cloud Focus",
  overviewHeading: "Practical cloud expertise from planning through operations",
  overviewCards: [
    {
      title: "Cloud Strategy",
      description:
        "Define the right cloud direction, operating model, and target architecture for scale, resilience, and cost control.",
    },
    {
      title: "Migration & Modernization",
      description:
        "Move workloads with structured planning, dependency awareness, and modernization choices that reduce long-term drag.",
    },
    {
      title: "Cloud Operations",
      description:
        "Improve reliability, observability, security, and day-to-day operations after the platform is live.",
    },
  ],
  processEyebrow: "How We Work",
  processHeading: "How cloud engagements typically unfold",
  processCards: [
    {
      title: "01 — Assess",
      description:
        "We review workloads, constraints, current platform maturity, and business goals before recommending the next move.",
    },
    {
      title: "02 — Architect",
      description:
        "We design scalable cloud foundations, landing zones, governance, and patterns that fit your environment.",
    },
    {
      title: "03 — Migrate",
      description:
        "We support phased execution with attention to continuity, sequencing, and measurable risk reduction.",
    },
    {
      title: "04 — Operate",
      description:
        "We help teams stabilize operations with monitoring, automation, cost awareness, and reliability guardrails.",
    },
  ],
  reasonsEyebrow: "Why BinaryGate",
  reasonsHeading: "Why teams bring us into cloud work",
  reasonsCards: [
    {
      title: "Architecture with Delivery in Mind",
      description:
        "Recommendations are shaped around what teams can actually implement and operate confidently.",
    },
    {
      title: "Vendor-Agnostic Thinking",
      description:
        "We focus on the right technical approach for your business rather than forcing a one-size-fits-all platform view.",
    },
    {
      title: "Operational Depth",
      description:
        "We account for observability, security, resilience, and supportability from the start.",
    },
    {
      title: "Controlled Modernization",
      description:
        "We help teams modernize without creating unnecessary disruption or avoidable rework.",
    },
  ],
  ctaTitle: "Build a cloud foundation you can operate with confidence",
  ctaDescription:
    "If you are evaluating cloud direction, planning a migration, or improving existing operations, we can help define the right path and execution model.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};

export const hybridOnPremPageContent: ExpertiseSubpageContent = {
  title: "Hybrid & On-Prem",
  description: "Modernize on-prem foundations and hybrid platforms.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Expertise", href: "/expertise" },
    { label: "Hybrid & On-Prem" },
  ],
  overviewEyebrow: "Infrastructure Focus",
  overviewHeading: "Modernize core infrastructure without losing operational stability",
  overviewCards: [
    {
      title: "Hybrid Architecture",
      description:
        "Design secure, manageable environments that connect cloud and on-prem systems without unnecessary complexity.",
    },
    {
      title: "Platform Modernization",
      description:
        "Refresh legacy foundations, standardize platform components, and reduce operational fragility over time.",
    },
    {
      title: "Operational Continuity",
      description:
        "Improve resilience, supportability, and change safety while critical systems remain in service.",
    },
  ],
  processEyebrow: "How We Work",
  processHeading: "How we approach hybrid and on-prem transformation",
  processCards: [
    {
      title: "01 — Understand the Estate",
      description:
        "We map systems, dependencies, infrastructure constraints, and operational realities across environments.",
    },
    {
      title: "02 — Prioritize Modernization",
      description:
        "We identify where upgrades, consolidation, automation, or architectural change will create the most value.",
    },
    {
      title: "03 — Design the Transition",
      description:
        "We define hybrid patterns, connectivity, security controls, and migration sequencing that reduce disruption.",
    },
    {
      title: "04 — Strengthen Operations",
      description:
        "We help teams improve management, observability, and repeatability as the environment evolves.",
    },
  ],
  reasonsEyebrow: "Why BinaryGate",
  reasonsHeading: "Why organizations use us for hybrid and on-prem work",
  reasonsCards: [
    {
      title: "Respect for Existing Constraints",
      description:
        "We work with the environment you have, not the one a greenfield plan assumes.",
    },
    {
      title: "Balanced Modernization",
      description:
        "We help teams modernize at a pace that reduces risk instead of accelerating it.",
    },
    {
      title: "Architecture Plus Operations",
      description:
        "We connect technical design choices to how infrastructure is managed day to day.",
    },
    {
      title: "Continuity First",
      description:
        "Recommendations prioritize uptime, service continuity, and safe transition paths.",
    },
  ],
  ctaTitle: "Modernize core infrastructure without destabilizing the business",
  ctaDescription:
    "If you are navigating legacy systems, hybrid expansion, or platform refresh work, we can help shape a practical modernization plan.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};

export const cybersecurityPageContent: ExpertiseSubpageContent = {
  title: "Cybersecurity",
  description: "Security hardening, governance, and compliance.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Expertise", href: "/expertise" },
    { label: "Cybersecurity" },
  ],
  overviewEyebrow: "Security Focus",
  overviewHeading: "Security guidance that supports delivery, governance, and resilience",
  overviewCards: [
    {
      title: "Security Hardening",
      description:
        "Strengthen infrastructure, platform configurations, and access controls to reduce risk exposure across environments.",
    },
    {
      title: "Governance & Policy",
      description:
        "Define guardrails, accountabilities, and security practices that teams can apply consistently.",
    },
    {
      title: "Compliance Readiness",
      description:
        "Support auditability, evidence collection, and control design for regulated and security-sensitive environments.",
    },
  ],
  processEyebrow: "How We Work",
  processHeading: "How we approach infrastructure security engagements",
  processCards: [
    {
      title: "01 — Review the Posture",
      description:
        "We assess architecture, controls, identity, exposure points, and operational gaps that affect security outcomes.",
    },
    {
      title: "02 — Prioritize the Risks",
      description:
        "We help teams focus on the most important vulnerabilities, process weaknesses, and governance issues first.",
    },
    {
      title: "03 — Define the Controls",
      description:
        "We recommend practical hardening steps, access patterns, and monitoring controls that fit the environment.",
    },
    {
      title: "04 — Support Adoption",
      description:
        "We help translate security expectations into repeatable practices engineering and operations teams can sustain.",
    },
  ],
  reasonsEyebrow: "Why BinaryGate",
  reasonsHeading: "Why teams use us for security-focused infrastructure work",
  reasonsCards: [
    {
      title: "Practical Security Direction",
      description:
        "We focus on controls that reduce risk without creating unnecessary delivery friction.",
    },
    {
      title: "Infrastructure Context",
      description:
        "Security recommendations are grounded in how platforms actually run and scale in production.",
    },
    {
      title: "Governance Awareness",
      description:
        "We connect technical measures to policy, accountability, and compliance expectations.",
    },
    {
      title: "Long-Term Maintainability",
      description:
        "We design approaches that teams can maintain rather than one-off fixes that quickly erode.",
    },
  ],
  ctaTitle: "Improve security posture without slowing delivery to a halt",
  ctaDescription:
    "If you need clearer security direction across infrastructure, governance, or compliance readiness, we can help you define a practical next step.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};

export const managedServicesPageContent: ExpertiseSubpageContent = {
  title: "Managed Services",
  description: "Ongoing operations, monitoring, and reliability.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Expertise", href: "/expertise" },
    { label: "Managed Services" },
  ],
  overviewEyebrow: "Operations Focus",
  overviewHeading: "Managed support built around stability, visibility, and continuous improvement",
  overviewCards: [
    {
      title: "Operational Oversight",
      description:
        "Support production environments with structured operational ownership, review cadence, and clear service expectations.",
    },
    {
      title: "Monitoring & Response",
      description:
        "Improve observability, alert quality, incident readiness, and response workflows for critical systems.",
    },
    {
      title: "Reliability Improvement",
      description:
        "Reduce repeated issues and improve platform health through targeted remediation, tuning, and operational discipline.",
    },
  ],
  processEyebrow: "How We Work",
  processHeading: "How managed services engagements create long-term stability",
  processCards: [
    {
      title: "01 — Baseline the Environment",
      description:
        "We assess the current operating model, tooling, incidents, and support patterns to understand the starting point.",
    },
    {
      title: "02 — Define the Guardrails",
      description:
        "We establish monitoring expectations, escalation paths, ownership boundaries, and operating routines.",
    },
    {
      title: "03 — Improve Reliability",
      description:
        "We address recurring problems, strengthen observability, and reduce operational noise that slows teams down.",
    },
    {
      title: "04 — Evolve the Service",
      description:
        "We keep improving platform support through review, optimization, and proactive recommendations over time.",
    },
  ],
  reasonsEyebrow: "Why BinaryGate",
  reasonsHeading: "Why teams trust us with managed infrastructure operations",
  reasonsCards: [
    {
      title: "Operations with Engineering Depth",
      description:
        "Support is informed by architecture and platform understanding, not only ticket handling.",
    },
    {
      title: "Reliability Mindset",
      description:
        "We focus on preventing repeat issues, not just reacting to them after the fact.",
    },
    {
      title: "Clear Accountability",
      description:
        "We help define responsibilities and service expectations so teams know what good looks like.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Managed services should make the platform better over time, not just keep it running at the same level.",
    },
  ],
  ctaTitle: "Turn day-to-day operations into a source of confidence, not drag",
  ctaDescription:
    "If your platform needs steadier operational support, better monitoring, or improved service reliability, we can help structure the right managed model.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};

export const devopsPageContent: ExpertiseSubpageContent = {
  title: "DevOps",
  description: "CI/CD, GitOps, and infrastructure automation.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Expertise", href: "/expertise" },
    { label: "DevOps" },
  ],
  overviewEyebrow: "Delivery Focus",
  overviewHeading: "DevOps practices that improve flow, safety, and platform consistency",
  overviewCards: [
    {
      title: "CI/CD Enablement",
      description:
        "Build delivery pipelines that are repeatable, observable, and aligned to the way teams actually ship software.",
    },
    {
      title: "GitOps & Automation",
      description:
        "Introduce automation and declarative workflows that reduce manual operations and environment drift.",
    },
    {
      title: "Infrastructure as Code",
      description:
        "Standardize provisioning and change management with code-driven infrastructure patterns that scale.",
    },
  ],
  processEyebrow: "How We Work",
  processHeading: "How we improve delivery systems without creating pipeline chaos",
  processCards: [
    {
      title: "01 — Review the Workflow",
      description:
        "We assess release flow, pipeline bottlenecks, environment management, and operational handoffs.",
    },
    {
      title: "02 — Standardize the Patterns",
      description:
        "We define better automation, branching, deployment, and infrastructure patterns for consistency and speed.",
    },
    {
      title: "03 — Automate Safely",
      description:
        "We introduce pipelines, IaC, and GitOps controls with rollback, visibility, and governance in mind.",
    },
    {
      title: "04 — Support Adoption",
      description:
        "We help teams use the new workflow effectively so improvements hold beyond the initial implementation.",
    },
  ],
  reasonsEyebrow: "Why BinaryGate",
  reasonsHeading: "Why teams involve us in DevOps transformation",
  reasonsCards: [
    {
      title: "Delivery and Platform Perspective",
      description:
        "We connect engineering velocity to the infrastructure and operational systems that support it.",
    },
    {
      title: "Automation with Guardrails",
      description:
        "We value speed, but not at the cost of visibility, control, or environment stability.",
    },
    {
      title: "Sustainable Workflows",
      description:
        "Changes are designed to fit the team rather than forcing a process nobody maintains.",
    },
    {
      title: "Reduced Operational Friction",
      description:
        "The goal is fewer manual steps, clearer ownership, and more predictable delivery outcomes.",
    },
  ],
  ctaTitle: "Create delivery systems your team can trust at scale",
  ctaDescription:
    "If releases feel fragile, inconsistent, or too manual, we can help redesign the DevOps workflow around speed, control, and repeatability.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};

export const dataSolutionsPageContent: ExpertiseSubpageContent = {
  title: "Data Solutions",
  description: "Data platforms, analytics, and reporting pipelines.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Expertise", href: "/expertise" },
    { label: "Data Solutions" },
  ],
  overviewEyebrow: "Data Focus",
  overviewHeading: "Infrastructure and platform thinking for dependable data capabilities",
  overviewCards: [
    {
      title: "Data Platform Foundations",
      description:
        "Design the infrastructure and operating patterns needed to support scalable, maintainable data workloads.",
    },
    {
      title: "Analytics & Reporting Pipelines",
      description:
        "Improve the flow of trusted data into dashboards, reports, and decision-making systems.",
    },
    {
      title: "Operational Data Reliability",
      description:
        "Reduce fragility across data movement, orchestration, storage, and platform support.",
    },
  ],
  processEyebrow: "How We Work",
  processHeading: "How we approach data platform and pipeline engagements",
  processCards: [
    {
      title: "01 — Understand the Data Flow",
      description:
        "We review data sources, platform dependencies, consumers, and operational pain points across the pipeline.",
    },
    {
      title: "02 — Define the Architecture",
      description:
        "We recommend data platform patterns, storage approaches, and orchestration models that fit the workload.",
    },
    {
      title: "03 — Improve the Pipeline",
      description:
        "We help simplify movement, increase reliability, and support observability across ingestion and reporting paths.",
    },
    {
      title: "04 — Support Ongoing Use",
      description:
        "We help teams operate data systems more predictably with clearer ownership, monitoring, and operational controls.",
    },
  ],
  reasonsEyebrow: "Why BinaryGate",
  reasonsHeading: "Why teams use us for infrastructure-led data work",
  reasonsCards: [
    {
      title: "Platform-Oriented Thinking",
      description:
        "We focus on the infrastructure and operational model behind useful data, not only the final dashboard.",
    },
    {
      title: "Reliability Awareness",
      description:
        "We account for failure modes, supportability, and performance across the full data path.",
    },
    {
      title: "Practical Scalability",
      description:
        "Recommendations are designed to support growing data volume and usage without needless complexity.",
    },
    {
      title: "Decision-Ready Outcomes",
      description:
        "The goal is trustworthy data delivery that supports reporting, analysis, and downstream systems consistently.",
    },
  ],
  ctaTitle: "Build data capabilities on infrastructure that stays dependable",
  ctaDescription:
    "If your reporting, analytics, or platform data workflows need stronger foundations, we can help define the right architecture and operating model.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};

export const softwareDevelopmentServicesPageContent: ExpertiseSubpageContent = {
  title: "Software Development Services",
  description: "Product engineering and delivery squads.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Expertise", href: "/expertise" },
    { label: "Software Development Services" },
  ],
  overviewEyebrow: "Engineering Focus",
  overviewHeading: "Product engineering support grounded in platform and delivery realities",
  overviewCards: [
    {
      title: "Product Engineering",
      description:
        "Support application delivery with engineering practices that balance speed, maintainability, and technical quality.",
    },
    {
      title: "Delivery Squads",
      description:
        "Augment teams with delivery capacity that can work across product, platform, and infrastructure dependencies.",
    },
    {
      title: "Platform-Aware Development",
      description:
        "Align software delivery with the environments, automation, and operational systems that support production use.",
    },
  ],
  processEyebrow: "How We Work",
  processHeading: "How we support software delivery with strong engineering foundations",
  processCards: [
    {
      title: "01 — Align on Scope",
      description:
        "We define product priorities, delivery expectations, and dependencies so the engagement starts with clarity.",
    },
    {
      title: "02 — Embed with the Team",
      description:
        "We work inside the delivery process, tools, and cadence already used by the organization where possible.",
    },
    {
      title: "03 — Deliver with Discipline",
      description:
        "We focus on quality, reviewability, and operational readiness rather than short-term feature output alone.",
    },
    {
      title: "04 — Strengthen the System",
      description:
        "We aim to improve how software gets shipped, not just what is shipped during the engagement.",
    },
  ],
  reasonsEyebrow: "Why BinaryGate",
  reasonsHeading: "Why teams use us for software delivery support",
  reasonsCards: [
    {
      title: "Engineering Quality",
      description:
        "We value maintainable code, strong delivery practices, and healthy collaboration with internal teams.",
    },
    {
      title: "Platform Awareness",
      description:
        "Application delivery is shaped with infrastructure, deployment, and operational realities in mind.",
    },
    {
      title: "Flexible Team Support",
      description:
        "We can contribute where product engineering, backend delivery, and platform capability intersect.",
    },
    {
      title: "Long-Term Value",
      description:
        "The objective is not only to deliver output, but to leave stronger practices and a healthier delivery system behind.",
    },
  ],
  ctaTitle: "Add engineering capacity without losing technical discipline",
  ctaDescription:
    "If your roadmap depends on stronger product delivery, squad support, or better alignment between software and platform teams, we can help.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};
