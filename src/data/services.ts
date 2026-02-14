import {
  Cloud,
  Shield,
  GitBranch,
  BarChart3,
  Server,
  Zap,
  Code2,
  Layers,
  HardDrive,
  Network,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  headline: string;
  description: string;
  shortDesc: string;
  icon: LucideIcon;
  color: string;       // hex
  gradient: string;     // tailwind gradient classes for cards
  iconColor: string;    // tailwind text color
  borderColor: string;  // tailwind border color
  features: { title: string; description: string }[];
  technologies: string[];
  useCases: string[];
}

export const services: ServiceDetail[] = [
  {
    slug: "cloud-architecture",
    title: "Cloud Architecture",
    headline: "Multi-region, multi-cloud foundations built for scale",
    description:
      "We design and deploy resilient cloud infrastructure on AWS, Azure, and GCP. From landing zones to multi-account strategies, every architecture decision is driven by security, cost efficiency, and operational excellence.",
    shortDesc:
      "Design multi-region cloud foundations with security and cost controls.",
    icon: Cloud,
    color: "#2dd4bf",
    gradient: "from-teal-500/20 to-teal-500/5",
    iconColor: "text-teal-400",
    borderColor: "border-teal-500/20",
    features: [
      {
        title: "Landing Zone Design",
        description:
          "Secure, scalable multi-account foundations with guardrails, networking, and identity pre-configured.",
      },
      {
        title: "High Availability",
        description:
          "Active-active and active-passive architectures with automated failover across regions and availability zones.",
      },
      {
        title: "Cost Governance",
        description:
          "FinOps frameworks, reserved instance planning, and automated right-sizing that cut cloud spend by 30-50%.",
      },
      {
        title: "Migration Strategy",
        description:
          "6R migration methodology — rehost, replatform, refactor — with zero-downtime cutover plans.",
      },
    ],
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Terraform",
      "CloudFormation",
      "Transit Gateway",
      "Landing Zone Accelerator",
      "Control Tower",
    ],
    useCases: [
      "Enterprise cloud migration from on-premises data centers",
      "Multi-region expansion for SaaS platforms",
      "Hybrid cloud connectivity for regulated industries",
      "Disaster recovery and business continuity planning",
    ],
  },
  {
    slug: "security-hardening",
    title: "Security & Compliance",
    headline: "Zero-trust security with compliance automation",
    description:
      "We embed security into every layer — from network policies to runtime protection. Our shift-left approach catches vulnerabilities early, automates compliance evidence, and ensures you're audit-ready at all times.",
    shortDesc:
      "Automate compliance, secrets, and runtime protection across clouds.",
    icon: Shield,
    color: "#34d399",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    features: [
      {
        title: "Policy-as-Code",
        description:
          "OPA, Kyverno, and Sentinel policies that enforce security standards before infrastructure is deployed.",
      },
      {
        title: "Secrets Management",
        description:
          "Centralized secrets rotation and injection using Vault, AWS Secrets Manager, and Azure Key Vault.",
      },
      {
        title: "Compliance Automation",
        description:
          "Continuous compliance monitoring for SOC 2, HIPAA, PCI-DSS, and ISO 27001 with automated evidence collection.",
      },
      {
        title: "Runtime Protection",
        description:
          "Container security, network policies, and anomaly detection to protect workloads in production.",
      },
    ],
    technologies: [
      "HashiCorp Vault",
      "OPA / Rego",
      "Kyverno",
      "Falco",
      "Aqua Security",
      "AWS GuardDuty",
      "Prisma Cloud",
      "Snyk",
    ],
    useCases: [
      "SOC 2 Type II certification for SaaS companies",
      "HIPAA compliance for healthcare platforms",
      "Zero-trust network architecture implementation",
    ],
  },
  {
    slug: "cicd-automation",
    title: "CI/CD Automation",
    headline: "Ship daily with zero-downtime pipelines",
    description:
      "We build production-grade CI/CD pipelines that give your team the confidence to ship multiple times a day. From automated testing to canary deployments, every commit goes through a rigorous, repeatable path to production.",
    shortDesc:
      "Automate build, test, and zero-downtime delivery pipelines.",
    icon: GitBranch,
    color: "#67e8f9",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    features: [
      {
        title: "Pipeline Design",
        description:
          "Multi-stage pipelines with parallel jobs, caching, and environment-specific gates for safe deployments.",
      },
      {
        title: "GitOps Workflows",
        description:
          "Declarative deployments with ArgoCD and Flux — the Git repository is the single source of truth.",
      },
      {
        title: "Progressive Delivery",
        description:
          "Canary releases, blue-green deployments, and feature flags for risk-free rollouts.",
      },
      {
        title: "Automated Testing",
        description:
          "Integrated test suites — unit, integration, end-to-end, and security scanning — in every pipeline run.",
      },
    ],
    technologies: [
      "GitHub Actions",
      "GitLab CI",
      "ArgoCD",
      "Flux",
      "Jenkins",
      "Tekton",
      "Helm",
      "Kustomize",
    ],
    useCases: [
      "Monorepo CI/CD for microservices architectures",
      "Multi-environment promotion workflows (dev → staging → prod)",
      "GitOps adoption for Kubernetes-native organizations",
      "Legacy pipeline modernization and migration",
    ],
  },
  {
    slug: "cost-optimization",
    title: "Cost Optimization",
    headline: "Right-size infrastructure, cut cloud spend by 40%+",
    description:
      "Cloud bills grow fast. We apply FinOps principles, automated right-sizing, and architectural improvements to reduce your infrastructure costs without compromising performance or reliability.",
    shortDesc:
      "Reduce cloud spend with FinOps, right-sizing, and tuning.",
    icon: BarChart3,
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    features: [
      {
        title: "Cloud Cost Audit",
        description:
          "Deep analysis of your current cloud spend — unused resources, oversized instances, and savings opportunities.",
      },
      {
        title: "Automated Right-Sizing",
        description:
          "Continuous monitoring and recommendation engines that keep instance sizes aligned with actual usage.",
      },
      {
        title: "Reserved & Spot Strategy",
        description:
          "Savings plans, reserved instances, and spot fleet architectures that reduce compute costs by 60%+.",
      },
      {
        title: "FinOps Culture",
        description:
          "Cost allocation, tagging strategies, and team-level budgets that create cost-awareness across engineering.",
      },
    ],
    technologies: [
      "AWS Cost Explorer",
      "Azure Cost Management",
      "Kubecost",
      "Infracost",
      "CloudHealth",
      "Spot.io",
      "Terraform",
      "Datadog",
    ],
    useCases: [
      "Startups optimizing cloud spend for runway extension",
      "Enterprise cloud cost governance and chargeback",
      "Kubernetes cluster cost optimization",
      "Multi-cloud cost consolidation and reporting",
    ],
  },
  {
    slug: "platform-engineering",
    title: "Platform Engineering",
    headline: "Internal developer platforms that scale with your team",
    description:
      "We build internal developer platforms (IDPs) that abstract away infrastructure complexity. Self-service environments, golden paths, and developer portals that let your engineers focus on building products.",
    shortDesc:
      "Modernize platforms and Kubernetes for faster, safer delivery.",
    icon: Server,
    color: "#1d8bc4",
    gradient: "from-sky-600/20 to-sky-600/5",
    iconColor: "text-sky-500",
    borderColor: "border-sky-600/20",
    features: [
      {
        title: "Self-Service Environments",
        description:
          "Developers spin up production-like environments on demand through a portal or CLI — no Ops tickets needed.",
      },
      {
        title: "Golden Paths",
        description:
          "Opinionated templates for services, databases, and infrastructure that encode best practices by default.",
      },
      {
        title: "Developer Portal",
        description:
          "Backstage-powered service catalogs with ownership, documentation, and dependency tracking.",
      },
      {
        title: "Kubernetes Abstraction",
        description:
          "Teams deploy without writing YAML. Crossplane, Helm, and custom operators handle the infrastructure.",
      },
    ],
    technologies: [
      "Backstage",
      "Crossplane",
      "Kubernetes",
      "Helm",
      "ArgoCD",
      "Terraform",
      "Port",
      "Humanitec",
    ],
    useCases: [
      "Scaling DevOps for 50+ engineer organizations",
      "Reducing developer onboarding time from weeks to hours",
      "Standardizing microservice deployment patterns",
      "Self-service database and infrastructure provisioning",
    ],
  },
  {
    slug: "observability",
    title: "Observability",
    headline: "Full-stack monitoring, tracing & intelligent alerting",
    description:
      "We instrument your entire stack — applications, infrastructure, and business metrics — so you can detect, diagnose, and resolve incidents before they impact users. Dashboards, alerts, and SLO tracking that actually matter.",
    shortDesc:
      "Full-stack observability with metrics, traces, and SLOs.",
    icon: Zap,
    color: "#60a5fa",
    gradient: "from-blue-400/20 to-blue-400/5",
    iconColor: "text-blue-400",
    borderColor: "border-blue-400/20",
    features: [
      {
        title: "Metrics & Dashboards",
        description:
          "Real-time dashboards with golden signals — latency, traffic, errors, and saturation — for every service.",
      },
      {
        title: "Distributed Tracing",
        description:
          "End-to-end request tracing across microservices with automatic instrumentation and context propagation.",
      },
      {
        title: "Log Aggregation",
        description:
          "Centralized, structured logging with fast search, correlation, and retention policies that balance cost and compliance.",
      },
      {
        title: "SLO & Alerting",
        description:
          "Service level objectives with error budgets and intelligent alerting that reduces noise and pages for what matters.",
      },
    ],
    technologies: [
      "Datadog",
      "Grafana / Prometheus",
      "OpenTelemetry",
      "ELK Stack",
      "Loki",
      "PagerDuty",
      "AWS CloudWatch",
      "Jaeger",
    ],
    useCases: [
      "Microservices observability for distributed architectures",
      "Incident response and mean-time-to-recovery reduction",
      "SLO-driven reliability engineering",
      "Cost-effective log management at scale",
    ],
  },
  {
    slug: "hybrid-operations",
    title: "Hybrid Operations",
    headline: "Operate cloud and on-prem as one platform",
    description:
      "We unify your cloud and data center operations with consistent policy, shared observability, and secure connectivity. Your teams get a single operating model across environments without losing local control.",
    shortDesc:
      "Unify cloud and on-prem operations with consistent policy and visibility.",
    icon: Layers,
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    features: [
      {
        title: "Unified Governance",
        description:
          "Centralized policy, identity, and audit controls across cloud and data center.",
      },
      {
        title: "Connectivity Strategy",
        description:
          "Secure, low-latency links with redundancy and failover between sites.",
      },
      {
        title: "Shared Observability",
        description:
          "Single-pane monitoring for hybrid workloads, services, and networks.",
      },
      {
        title: "Ops Playbooks",
        description:
          "Standardized runbooks and escalation flows that work across environments.",
      },
    ],
    technologies: [
      "AWS Direct Connect",
      "Azure Arc",
      "VPN / IPSec",
      "BGP",
      "Terraform",
      "Ansible",
      "Grafana",
      "ServiceNow",
    ],
    useCases: [
      "Hybrid governance for regulated industries",
      "Data residency with burst to cloud",
      "Unified operations across multiple regions",
      "Disaster recovery between cloud and data centers",
    ],
  },
  {
    slug: "on-prem-modernization",
    title: "On-Prem Modernization",
    headline: "Modernize data centers without a full cloud move",
    description:
      "We modernize on-prem environments with automation, hardened security, and scalable platform tooling. From legacy VM estates to Kubernetes platforms, we bring cloud-grade operations to your data center.",
    shortDesc:
      "Modernize on-prem platforms with automation, security, and resilience.",
    icon: HardDrive,
    color: "#1d8bc4",
    gradient: "from-sky-600/20 to-sky-600/5",
    iconColor: "text-sky-500",
    borderColor: "border-sky-600/20",
    features: [
      {
        title: "Legacy Uplift",
        description:
          "Migration paths for VM-based workloads with minimal downtime.",
      },
      {
        title: "Infrastructure Automation",
        description:
          "Provisioning and configuration with IaC and repeatable templates.",
      },
      {
        title: "Security Hardening",
        description:
          "Baseline controls, patching, and continuous compliance monitoring.",
      },
      {
        title: "Edge Enablement",
        description:
          "Run workloads closer to users with reliable edge patterns.",
      },
    ],
    technologies: [
      "VMware",
      "Kubernetes",
      "Ansible",
      "Terraform",
      "RHEL",
      "Windows Server",
      "Ceph",
      "Nutanix",
    ],
    useCases: [
      "Data center modernization for regulated enterprises",
      "Legacy VM estate automation and standardization",
      "Edge compute for low-latency workloads",
      "Hybrid readiness without full migration",
    ],
  },
  {
    slug: "networking",
    title: "Networking",
    headline: "Secure, low-latency connectivity at global scale",
    description:
      "We design and operate networks that keep your systems fast, segmented, and reliable. From WAN and routing to cloud network architecture, we build for performance and security.",
    shortDesc:
      "Design and run secure, low-latency networks across environments.",
    icon: Network,
    color: "#22d3ee",
    gradient: "from-cyan-400/20 to-cyan-400/5",
    iconColor: "text-cyan-300",
    borderColor: "border-cyan-400/20",
    features: [
      {
        title: "Network Architecture",
        description:
          "Hub-and-spoke, transit gateways, and global routing strategy.",
      },
      {
        title: "Segmentation & Security",
        description:
          "Zero-trust segmentation with policy and firewall automation.",
      },
      {
        title: "Performance Optimization",
        description:
          "Latency reduction through peering, caching, and routing policy.",
      },
      {
        title: "Monitoring & QoS",
        description:
          "Traffic visibility, SLAs, and quality-of-service controls.",
      },
    ],
    technologies: [
      "SD-WAN",
      "BGP",
      "Transit Gateway",
      "Cloud VPN",
      "CloudFront",
      "Route 53",
      "VPC / VNet",
      "Firewall Manager",
    ],
    useCases: [
      "Global enterprise connectivity",
      "Secure segmentation for multi-tenant platforms",
      "Low-latency network design for trading systems",
      "Hybrid network interconnects",
    ],
  },
  {
    slug: "systems-engineering",
    title: "Systems Engineering",
    headline: "Compute, storage, and OS engineering done right",
    description:
      "We manage the foundations: OS baselines, storage design, and compute standards. Your workloads run faster, stay patched, and scale cleanly across environments.",
    shortDesc:
      "Hardened OS, storage, and compute standards with automation.",
    icon: Cpu,
    color: "#38bdf8",
    gradient: "from-sky-500/20 to-sky-500/5",
    iconColor: "text-sky-400",
    borderColor: "border-sky-500/20",
    features: [
      {
        title: "OS Baselines",
        description:
          "Hardened templates, patching, and configuration management.",
      },
      {
        title: "Storage Architecture",
        description:
          "High-performance storage with backup and lifecycle policies.",
      },
      {
        title: "Compute Standards",
        description:
          "Right-sized compute profiles with autoscaling guardrails.",
      },
      {
        title: "Lifecycle Automation",
        description:
          "Provisioning, updates, and decommissioning via automation.",
      },
    ],
    technologies: [
      "Linux",
      "Windows",
      "Ansible",
      "Packer",
      "VMware",
      "EBS / EFS",
      "NetApp",
      "Prometheus",
    ],
    useCases: [
      "Standardized OS baselines across fleets",
      "Storage modernization and backup governance",
      "Compute platform optimization for scale",
      "Secure patching and lifecycle automation",
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    headline: "Cloud-native product engineering with delivery speed",
    description:
      "We build cloud-native products, APIs, and platforms with teams embedded into your roadmap. From discovery to delivery, we ship with reliability, security, and scalability in mind.",
    shortDesc:
      "Cloud-native product engineering with fast, reliable delivery.",
    icon: Code2,
    color: "#8b5cf6",
    gradient: "from-violet-500/20 to-violet-500/5",
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/20",
    features: [
      {
        title: "Product Delivery",
        description:
          "Cross-functional squads that design, build, and ship features end-to-end.",
      },
      {
        title: "Cloud-Native Apps",
        description:
          "APIs, microservices, and event-driven architectures built for scale.",
      },
      {
        title: "Quality Engineering",
        description:
          "Automated testing, CI/CD, and release safety baked in from day one.",
      },
      {
        title: "Security by Design",
        description:
          "Threat modeling and secure coding practices across the lifecycle.",
      },
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Python",
      "Go",
      "Postgres",
      "Kafka",
      "React",
      "Next.js",
    ],
    useCases: [
      "MVPs for regulated industries",
      "Platform modernization with new services",
      "API-first product delivery",
      "High-scale SaaS feature development",
    ],
  },
  {
    slug: "ai-adoption",
    title: "AI Adoption",
    headline: "Practical AI enablement that ships to production",
    description:
      "We help teams adopt AI safely with data readiness, model selection, and production-grade operations. From copilots to workflow automation, we turn experiments into reliable systems.",
    shortDesc:
      "AI enablement from data readiness to production operations.",
    icon: Zap,
    color: "#f97316",
    gradient: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/20",
    features: [
      {
        title: "Use-Case Discovery",
        description:
          "Identify high-ROI AI use cases aligned to business outcomes.",
      },
      {
        title: "Data Readiness",
        description:
          "Pipelines, governance, and feature stores for reliable inputs.",
      },
      {
        title: "Model Integration",
        description:
          "LLM, ML, and RAG integration with safety and evaluation.",
      },
      {
        title: "AI Operations",
        description:
          "Monitoring, cost controls, and guardrails for production AI.",
      },
    ],
    technologies: [
      "OpenAI",
      "Azure OpenAI",
      "LangChain",
      "Vector DBs",
      "MLflow",
      "Airflow",
      "Databricks",
      "Snowflake",
    ],
    useCases: [
      "Customer support copilots",
      "Internal knowledge assistants",
      "Automated document processing",
      "AI-augmented engineering workflows",
    ],
  },
];

/** Lookup map by slug */
export const serviceBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s])
);

/** Just the slugs for static generation */
export const serviceSlugs = services.map((s) => s.slug);
