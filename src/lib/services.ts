export type ServiceInfo = {
  slug: string;
  title: string;
  shortDesc: string;
  longDescription: string[];
  challenges: { title: string; body: string[] }[];
  approachSteps: { title: string; bullets: string[] }[];
  metrics: { label: string; value: string }[];
  useCase: { situation: string; action: string; result: string };
  visualsType: "cloud" | "cost" | "observability" | "security" | "none";
  accent: string;
  features: string[];
};

export const services: ServiceInfo[] = [
  {
    slug: "cloud-architecture",
    title: "Cloud Architecture",
    shortDesc: "Design resilient cloud foundations and reference architectures that scale.",
    longDescription: [
      "Enterprises grow across regions, accounts, and business units faster than their cloud foundations can keep up. Without a unified architecture, teams create inconsistent networking, identity, and governance patterns that compound risk.",
      "We build cloud architectures that scale operationally, not just technically. Landing zones, network segmentation, and shared services are designed with security and cost controls baked in, so teams can move quickly without breaking standards.",
      "The result is a future-ready foundation that supports multi-cloud expansion, compliance requirements, and performance expectations without sacrificing agility.",
    ],
    challenges: [
      {
        title: "Fragmented Foundations",
        body: [
          "Multiple teams creating divergent VPC, IAM, and network patterns increase operational drag.",
          "Governance gaps slow down security and compliance readiness.",
        ],
      },
      {
        title: "Scale Without Control",
        body: [
          "Cloud growth often outpaces cost and policy controls.",
          "Shared services become brittle and fail to scale across regions.",
        ],
      },
    ],
    approachSteps: [
      {
        title: "Assessment",
        bullets: [
          "Architecture inventory and gap analysis",
          "Risk and compliance mapping",
          "Cost and performance baselines",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Landing zones and account strategy",
          "Network segmentation and routing",
          "Identity and access standards",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "IaC builds for consistency",
          "Shared services rollout",
          "Migration sequencing",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "Policy enforcement",
          "Deployment pipelines",
          "Continuous compliance",
        ],
      },
      {
        title: "Security",
        bullets: [
          "Threat modeling",
          "Guardrails and logging",
          "Incident readiness",
        ],
      },
      {
        title: "Optimization",
        bullets: [
          "Cost governance",
          "Performance tuning",
          "Multi-region resilience",
        ],
      },
    ],
    metrics: [
      { label: "Regions", value: "6+" },
      { label: "Account scale", value: "100+" },
      { label: "Compliance", value: "SOC2" },
    ],
    useCase: {
      situation: "A SaaS platform needed to expand to three new regions while meeting strict compliance requirements.",
      action: "We built a multi-account landing zone with standardized networking, identity, and guardrails.",
      result: "Deployment time dropped by 40% and audit readiness improved across the organization.",
    },
    visualsType: "cloud",
    accent: "#33C6FF",
    features: [
      "Reference architectures",
      "Landing zones",
      "Multi-cloud strategy",
      "High availability design",
    ],
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance",
    shortDesc: "Harden platforms, meet compliance needs, and reduce risk end-to-end.",
    longDescription: [
      "Security programs often stall because tooling is fragmented and controls are not automated. That leaves teams exposed to drift, inconsistent access patterns, and audit gaps.",
      "We embed security across infrastructure, pipelines, and runtime environments, aligning controls to real operational workflows. Compliance becomes a byproduct of daily engineering work, not a separate project.",
      "The result is a secure-by-default platform with continuous evidence and faster audit readiness.",
    ],
    challenges: [
      {
        title: "Control Drift",
        body: [
          "Manual processes lead to inconsistent access and policy enforcement.",
          "Audit evidence is scattered and incomplete.",
        ],
      },
      {
        title: "Security at Scale",
        body: [
          "Teams move quickly without shared guardrails.",
          "Security tooling is noisy and poorly integrated.",
        ],
      },
    ],
    approachSteps: [
      {
        title: "Assessment",
        bullets: [
          "Control mapping",
          "Threat modeling",
          "Risk baseline",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Security reference designs",
          "Identity boundaries",
          "Network segmentation",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "IAM hardening",
          "Secrets management",
          "WAF and perimeter controls",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "Policy as code",
          "Continuous compliance",
          "Audit evidence automation",
        ],
      },
      {
        title: "Security",
        bullets: [
          "Detection engineering",
          "Incident response",
          "Vulnerability management",
        ],
      },
      {
        title: "Optimization",
        bullets: [
          "Control tuning",
          "Noise reduction",
          "Governance reviews",
        ],
      },
    ],
    metrics: [
      { label: "Audit cycles", value: "-35%" },
      { label: "Policy coverage", value: "90%+" },
      { label: "Risk reduction", value: "High" },
    ],
    useCase: {
      situation: "A fintech firm needed SOC2 alignment across cloud and CI/CD workflows.",
      action: "We introduced policy-as-code and automated evidence collection.",
      result: "Audit preparation time dropped by half and control drift was eliminated.",
    },
    visualsType: "security",
    accent: "#A78BFA",
    features: [
      "Policy as code",
      "Identity and access hardening",
      "Secrets management",
      "Audit-ready controls",
    ],
  },
  {
    slug: "ci-cd-automation",
    title: "CI/CD Automation",
    shortDesc: "Ship faster with reliable pipelines, testing, and infrastructure automation.",
    longDescription: [
      "Delivery bottlenecks often come from inconsistent pipelines, manual approvals, and environment drift. Engineering teams lose velocity and reliability suffers.",
      "We standardize CI/CD workflows with automated testing, infrastructure provisioning, and release governance. Teams gain confidence to ship more frequently with fewer incidents.",
      "The result is predictable delivery throughput and safer deployments across environments.",
    ],
    challenges: [
      {
        title: "Pipeline Fragility",
        body: [
          "Legacy scripts and brittle build stages create frequent failures.",
          "Manual interventions slow down releases and introduce risk.",
        ],
      },
      {
        title: "Environment Drift",
        body: [
          "Inconsistent infrastructure between staging and production.",
          "Limited observability into release health.",
        ],
      },
    ],
    approachSteps: [
      {
        title: "Assessment",
        bullets: [
          "Pipeline audit",
          "Release risk analysis",
          "Environment parity checks",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Pipeline templates",
          "Release gates",
          "Artifact strategy",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "CI/CD rebuild",
          "Test automation",
          "Environment provisioning",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "Infrastructure as code",
          "Automated approvals",
          "Release verification",
        ],
      },
      {
        title: "Security",
        bullets: [
          "Supply chain scanning",
          "Secrets handling",
          "Policy enforcement",
        ],
      },
      {
        title: "Optimization",
        bullets: [
          "Pipeline performance",
          "Build cache strategies",
          "Release metrics",
        ],
      },
    ],
    metrics: [
      { label: "Release cadence", value: "+3x" },
      { label: "Rollback rate", value: "-40%" },
      { label: "Lead time", value: "-50%" },
    ],
    useCase: {
      situation: "A product org struggled with weekly releases and frequent hotfixes.",
      action: "We rebuilt pipelines with automated testing and IaC." ,
      result: "Deployments moved to daily with a significant drop in rollback events.",
    },
    visualsType: "none",
    accent: "#60A5FA",
    features: [
      "Pipeline design",
      "Test automation",
      "Infrastructure as code",
      "Release governance",
    ],
  },
  {
    slug: "cost-optimization",
    title: "Cost Optimization",
    shortDesc: "Cut cloud spend with visibility, governance, and right-sizing.",
    longDescription: [
      "Cloud spend grows quickly without the controls to allocate costs, optimize usage, and enforce budgets. Finance and engineering teams lack a shared source of truth.",
      "We build FinOps capabilities that align cost signals with engineering action. Right-sizing, governance, and forecasting create sustainable savings.",
      "The result is predictable spend, reduced waste, and improved accountability.",
    ],
    challenges: [
      {
        title: "Opaque Spend",
        body: [
          "Cost allocation is incomplete or inconsistent.",
          "Teams lack visibility into unit economics.",
        ],
      },
      {
        title: "Unoptimized Usage",
        body: [
          "Over-provisioned resources are common.",
          "Budgets are reactive and disconnected from delivery.",
        ],
      },
    ],
    approachSteps: [
      {
        title: "Assessment",
        bullets: [
          "Spend analysis",
          "Workload profiling",
          "Cost allocation mapping",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Tagging standards",
          "Budget guardrails",
          "Unit economics models",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "Right-sizing",
          "Reserved instance planning",
          "Storage optimization",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "Budget alerts",
          "Auto-scaling policies",
          "Idle resource cleanup",
        ],
      },
      {
        title: "Security",
        bullets: [
          "Spend anomaly detection",
          "Access controls",
          "Approval workflows",
        ],
      },
      {
        title: "Optimization",
        bullets: [
          "Continuous reviews",
          "Forecast adjustments",
          "Unit cost tracking",
        ],
      },
    ],
    metrics: [
      { label: "Savings", value: "20-40%" },
      { label: "Waste", value: "-35%" },
      { label: "Forecast accuracy", value: "+25%" },
    ],
    useCase: {
      situation: "A media company saw cloud spend rise 2x in six months.",
      action: "We implemented tagging, right-sizing, and budget guardrails.",
      result: "Monthly spend dropped by 28% with improved accountability.",
    },
    visualsType: "cost",
    accent: "#34D399",
    features: [
      "Cost allocation",
      "Right-sizing",
      "Budget guardrails",
      "Usage forecasting",
    ],
  },
  {
    slug: "platform-engineering",
    title: "Platform Engineering",
    shortDesc: "Build internal platforms that accelerate teams with guardrails.",
    longDescription: [
      "As teams scale, shared infrastructure becomes fragmented and delivery slows. Platform engineering creates leverage by standardizing tooling and workflows.",
      "We build internal platforms that balance autonomy with governance. Developers get self-service paths while security and operations maintain control.",
      "The result is higher delivery velocity with reduced operational risk.",
    ],
    challenges: [
      {
        title: "Inconsistent Tooling",
        body: [
          "Teams reinvent pipelines and infrastructure.",
          "Security controls vary across services.",
        ],
      },
      {
        title: "Developer Friction",
        body: [
          "Provisioning takes too long.",
          "Lack of clear golden paths increases support load.",
        ],
      },
    ],
    approachSteps: [
      {
        title: "Assessment",
        bullets: [
          "Developer experience mapping",
          "Tooling inventory",
          "Service dependency review",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Platform blueprint",
          "Service catalog",
          "Golden paths",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "Self-service workflows",
          "Templates and guardrails",
          "Platform onboarding",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "Provisioning automation",
          "Policy checks",
          "Runbook generation",
        ],
      },
      {
        title: "Security",
        bullets: [
          "Secure defaults",
          "Access governance",
          "Audit logging",
        ],
      },
      {
        title: "Optimization",
        bullets: [
          "Developer feedback loops",
          "Cost governance",
          "Platform metrics",
        ],
      },
    ],
    metrics: [
      { label: "Provision time", value: "-60%" },
      { label: "DX score", value: "+35%" },
      { label: "Incidents", value: "-25%" },
    ],
    useCase: {
      situation: "A product organization struggled to scale teams without duplicating tooling.",
      action: "We delivered a platform blueprint and self-service templates.",
      result: "New services launched 2x faster with fewer support requests.",
    },
    visualsType: "none",
    accent: "#4ADE80",
    features: [
      "Developer platforms",
      "Service catalog design",
      "Golden paths",
      "Self-service tooling",
    ],
  },
  {
    slug: "observability",
    title: "Observability",
    shortDesc: "Metrics, logs, tracing, and SLOs for incident-ready systems.",
    longDescription: [
      "Without observability, teams are blind to system health and customer impact. Incident response becomes reactive and slow.",
      "We implement telemetry systems that connect metrics, logs, and traces to service-level objectives. Engineers get actionable signal and reliable alerting.",
      "The result is faster incident response and a measurable reduction in downtime.",
    ],
    challenges: [
      {
        title: "Signal Gaps",
        body: [
          "Telemetry is incomplete or inconsistent across services.",
          "Alert noise makes it hard to detect real issues.",
        ],
      },
      {
        title: "Incident Readiness",
        body: [
          "Runbooks are out of date.",
          "Post-incident learnings are not captured effectively.",
        ],
      },
    ],
    approachSteps: [
      {
        title: "Assessment",
        bullets: [
          "Telemetry audit",
          "SLO baseline",
          "Alert review",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Observability stack selection",
          "Signal taxonomy",
          "Data retention policies",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "Instrumentation",
          "Dashboards",
          "Alert routing",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "Automated response",
          "Runbook triggers",
          "Anomaly detection",
        ],
      },
      {
        title: "Security",
        bullets: [
          "Data access controls",
          "Compliance logging",
          "Audit trails",
        ],
      },
      {
        title: "Optimization",
        bullets: [
          "Alert tuning",
          "SLO reviews",
          "Performance baselines",
        ],
      },
    ],
    metrics: [
      { label: "MTTR", value: "-45%" },
      { label: "Downtime", value: "-30%" },
      { label: "SLO coverage", value: "90%+" },
    ],
    useCase: {
      situation: "A global platform faced recurring outages with limited telemetry.",
      action: "We deployed unified tracing and SLO-based alerting.",
      result: "Mean time to recovery dropped by nearly half.",
    },
    visualsType: "observability",
    accent: "#FBBF24",
    features: [
      "Unified telemetry",
      "SLO frameworks",
      "Incident readiness",
      "Alert tuning",
    ],
  },
  {
    slug: "hybrid-operations",
    title: "Hybrid Operations",
    shortDesc: "Operate across cloud and data centers with consistent controls.",
    longDescription: [
      "Hybrid operations require consistent visibility and governance across cloud and data center environments. Without unified controls, teams struggle with fragmented tooling and policies.",
      "We unify operational practices so teams can manage workloads with consistent observability, security, and incident response. The result is a stable hybrid operating model.",
    ],
    challenges: [
      {
        title: "Tooling Fragmentation",
        body: [
          "On-prem and cloud operations use different monitoring stacks.",
          "Runbooks are inconsistent across environments.",
        ],
      },
      {
        title: "Control Gaps",
        body: [
          "Identity and access policies differ between platforms.",
          "Audit trails are incomplete across environments.",
        ],
      },
    ],
    approachSteps: [
      {
        title: "Assessment",
        bullets: [
          "Hybrid footprint analysis",
          "Control mapping",
          "Incident readiness review",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Unified ops model",
          "Common telemetry",
          "Access governance",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "Monitoring integration",
          "Runbook standardization",
          "Access consolidation",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "Patch orchestration",
          "Configuration drift detection",
          "Incident automation",
        ],
      },
      {
        title: "Security",
        bullets: [
          "Unified logging",
          "Policy enforcement",
          "Audit trail consistency",
        ],
      },
      {
        title: "Optimization",
        bullets: [
          "Operational metrics",
          "Cost alignment",
          "Service reliability improvements",
        ],
      },
    ],
    metrics: [
      { label: "Incident response", value: "-30%" },
      { label: "Policy alignment", value: "85%" },
      { label: "Ops efficiency", value: "+20%" },
    ],
    useCase: {
      situation: "An enterprise operated across three data centers and two clouds.",
      action: "We standardized monitoring and access controls across platforms.",
      result: "Operations teams reduced alert fatigue and improved stability.",
    },
    visualsType: "none",
    accent: "#22C55E",
    features: [
      "Hybrid monitoring",
      "Operational runbooks",
      "Change management",
      "Unified access controls",
    ],
  },
  {
    slug: "on-prem-modernization",
    title: "On-Prem Modernization",
    shortDesc: "Modernize legacy systems safely with minimal disruption.",
    longDescription: [
      "Legacy on-prem environments often rely on brittle tooling and outdated hardware. Modernization must be careful to avoid downtime and operational disruption.",
      "We modernize incrementally by introducing automation, virtualization, and updated security controls. The focus is on stability and long-term maintainability.",
    ],
    challenges: [
      {
        title: "Operational Risk",
        body: [
          "Legacy dependencies create high-risk migration paths.",
          "Downtime windows are limited.",
        ],
      },
      {
        title: "Aging Infrastructure",
        body: [
          "Hardware refresh cycles are overdue.",
          "Tooling is inconsistent and manual.",
        ],
      },
    ],
    approachSteps: [
      {
        title: "Assessment",
        bullets: [
          "Legacy dependency mapping",
          "Hardware lifecycle review",
          "Risk assessment",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Target state definition",
          "Virtualization strategy",
          "Automation blueprint",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "Migration sequencing",
          "Hardware refresh",
          "Tooling modernization",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "Configuration management",
          "Patch automation",
          "Provisioning workflows",
        ],
      },
      {
        title: "Security",
        bullets: [
          "Baseline hardening",
          "Network segmentation",
          "Logging upgrades",
        ],
      },
      {
        title: "Optimization",
        bullets: [
          "Capacity planning",
          "Performance tuning",
          "Lifecycle management",
        ],
      },
    ],
    metrics: [
      { label: "Legacy reduction", value: "-40%" },
      { label: "Automation", value: "+35%" },
      { label: "Stability", value: "Improved" },
    ],
    useCase: {
      situation: "A healthcare provider needed to modernize a legacy data center.",
      action: "We phased upgrades with automation and virtualization.",
      result: "Operations stabilized while capacity expanded for new workloads.",
    },
    visualsType: "none",
    accent: "#F97316",
    features: [
      "Legacy stack upgrades",
      "Virtualization strategy",
      "Automation enablement",
      "Data center refresh",
    ],
  },
  {
    slug: "networking",
    title: "Networking",
    shortDesc: "Secure connectivity, segmentation, and performance across environments.",
    longDescription: [
      "Modern infrastructure depends on secure, low-latency connectivity across clouds, data centers, and users. Without a consistent network strategy, performance and security suffer.",
      "We design secure networks with segmentation, resilient routing, and performance optimization to keep systems reliable and compliant.",
    ],
    challenges: [
      {
        title: "Complex Connectivity",
        body: [
          "Multi-cloud routing and segmentation is error-prone.",
          "Legacy network policies are inconsistent.",
        ],
      },
      {
        title: "Performance Gaps",
        body: [
          "Latency impacts user experience.",
          "Traffic spikes exceed network capacity.",
        ],
      },
    ],
    approachSteps: [
      {
        title: "Assessment",
        bullets: [
          "Network inventory",
          "Traffic analysis",
          "Security posture review",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Segmentation model",
          "Routing design",
          "Connectivity strategy",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "Secure connectivity",
          "Firewall policies",
          "Performance tuning",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "Policy automation",
          "Configuration management",
          "Change tracking",
        ],
      },
      {
        title: "Security",
        bullets: [
          "Zero trust segmentation",
          "DDoS readiness",
          "Audit logging",
        ],
      },
      {
        title: "Optimization",
        bullets: [
          "Traffic shaping",
          "Latency improvements",
          "Capacity reviews",
        ],
      },
    ],
    metrics: [
      { label: "Latency", value: "-20%" },
      { label: "Uptime", value: "99.99%" },
      { label: "Change success", value: "95%" },
    ],
    useCase: {
      situation: "A global retail brand experienced latency spikes across regions.",
      action: "We redesigned routing and segmentation with redundant paths.",
      result: "Latency dropped and uptime improved significantly.",
    },
    visualsType: "none",
    accent: "#38BDF8",
    features: [
      "Network segmentation",
      "Secure connectivity",
      "Traffic optimization",
      "DNS strategy",
    ],
  },
  {
    slug: "systems-engineering",
    title: "Systems Engineering",
    shortDesc: "Reliable systems design, automation, and lifecycle management.",
    longDescription: [
      "Systems engineering is the foundation of reliable infrastructure. Without baseline standards, automation, and lifecycle management, environments drift and reliability declines.",
      "We deliver standardized OS baselines, automated provisioning, and lifecycle playbooks to keep systems stable and secure.",
    ],
    challenges: [
      {
        title: "Configuration Drift",
        body: [
          "Manual changes create inconsistencies.",
          "Baseline enforcement is incomplete.",
        ],
      },
      {
        title: "Lifecycle Risk",
        body: [
          "Patch cycles are slow and inconsistent.",
          "End-of-life hardware increases exposure.",
        ],
      },
    ],
    approachSteps: [
      {
        title: "Assessment",
        bullets: [
          "OS baseline audit",
          "Lifecycle analysis",
          "Automation readiness",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Baseline standards",
          "Provisioning workflow",
          "Lifecycle strategy",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "Configuration management",
          "Patch orchestration",
          "Hardening templates",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "Fleet automation",
          "Drift detection",
          "Self-healing workflows",
        ],
      },
      {
        title: "Security",
        bullets: [
          "Baseline hardening",
          "Vulnerability remediation",
          "Access controls",
        ],
      },
      {
        title: "Optimization",
        bullets: [
          "Lifecycle reporting",
          "Performance baselines",
          "Maintenance scheduling",
        ],
      },
    ],
    metrics: [
      { label: "Patch cycle", value: "-50%" },
      { label: "Drift", value: "Near zero" },
      { label: "Reliability", value: "+20%" },
    ],
    useCase: {
      situation: "A manufacturing company needed consistent OS baselines across regions.",
      action: "We automated provisioning and patching with hardened templates.",
      result: "Security posture improved and operational overhead fell.",
    },
    visualsType: "none",
    accent: "#94A3B8",
    features: [
      "OS baselines",
      "Fleet automation",
      "Lifecycle management",
      "Configuration hardening",
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortDesc: "Build production-ready services with clean architecture and delivery.",
    longDescription: [
      "Modern software requires scalable architecture, clean delivery pipelines, and production-grade observability. Teams often lack a consistent framework to build and ship reliably.",
      "We deliver engineering teams and architecture guidance that aligns software delivery with infrastructure standards. The result is faster product delivery with fewer quality issues.",
    ],
    challenges: [
      {
        title: "Delivery Bottlenecks",
        body: [
          "Teams struggle with long lead times and manual release steps.",
          "Quality issues surface late in the process.",
        ],
      },
      {
        title: "Architectural Drift",
        body: [
          "Services evolve without shared design standards.",
          "Observability and reliability are inconsistent.",
        ],
      },
    ],
    approachSteps: [
      {
        title: "Assessment",
        bullets: [
          "Codebase review",
          "Architecture audit",
          "Delivery process mapping",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Service boundaries",
          "API governance",
          "Reliability standards",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "Feature delivery",
          "Testing automation",
          "Observability integration",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "CI/CD pipelines",
          "Infrastructure as code",
          "Release automation",
        ],
      },
      {
        title: "Security",
        bullets: [
          "Secure coding practices",
          "Supply chain scanning",
          "Secrets management",
        ],
      },
      {
        title: "Optimization",
        bullets: [
          "Performance tuning",
          "Reliability reviews",
          "Post-release monitoring",
        ],
      },
    ],
    metrics: [
      { label: "Lead time", value: "-35%" },
      { label: "Quality", value: "+25%" },
      { label: "Deployments", value: "+2x" },
    ],
    useCase: {
      situation: "A fintech team needed to ship a new product within tight timelines.",
      action: "We augmented engineering with delivery automation and architecture guidance.",
      result: "Launch hit the deadline with strong reliability and observability.",
    },
    visualsType: "none",
    accent: "#FB7185",
    features: [
      "Service design",
      "API engineering",
      "Release readiness",
      "Quality gates",
    ],
  },
  {
    slug: "ai-adoption",
    title: "AI Adoption",
    shortDesc: "Integrate AI safely into workflows, products, and internal operations.",
    longDescription: [
      "AI adoption often stalls without governance, data readiness, and clear operational pathways. Teams experiment but struggle to scale AI into production.",
      "We build AI adoption roadmaps that align data, tooling, and governance. The result is a safe, measurable path from experimentation to production impact.",
    ],
    challenges: [
      {
        title: "Unclear Governance",
        body: [
          "Data usage policies are undefined.",
          "Model accountability is unclear.",
        ],
      },
      {
        title: "Production Readiness",
        body: [
          "Models lack monitoring and audit trails.",
          "Integration into workflows is inconsistent.",
        ],
      },
    ],
    approachSteps: [
      {
        title: "Assessment",
        bullets: [
          "AI readiness review",
          "Data quality audit",
          "Risk assessment",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "AI governance model",
          "Workflow integration",
          "Model lifecycle standards",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "Pilot use cases",
          "Model deployment",
          "Data pipeline integration",
        ],
      },
      {
        title: "Automation",
        bullets: [
          "Model retraining",
          "Monitoring dashboards",
          "Automated QA",
        ],
      },
      {
        title: "Security",
        bullets: [
          "Data access controls",
          "Auditability",
          "Responsible AI policies",
        ],
      },
      {
        title: "Optimization",
        bullets: [
          "Outcome measurement",
          "Model improvement",
          "Workflow efficiency gains",
        ],
      },
    ],
    metrics: [
      { label: "Pilot to prod", value: "-40%" },
      { label: "Adoption", value: "+30%" },
      { label: "Risk", value: "Reduced" },
    ],
    useCase: {
      situation: "A logistics company wanted to deploy AI for demand forecasting.",
      action: "We delivered governance, pipelines, and monitored deployments.",
      result: "Forecast accuracy improved while maintaining compliance.",
    },
    visualsType: "none",
    accent: "#2DD4BF",
    features: [
      "AI readiness",
      "Model governance",
      "Workflow integration",
      "Production deployment",
    ],
  },
];
