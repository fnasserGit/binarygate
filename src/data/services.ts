import {
  Cloud,
  Shield,
  GitBranch,
  BarChart3,
  Server,
  Zap,
  Code2,
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
      "Design and deploy multi-region cloud infrastructure on AWS, Azure, or GCP with high availability, cost optimization, and compliance baked in.",
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
      "Shift-left security with automated scanning, policy-as-code, secrets management, and audit-ready compliance frameworks.",
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
      "Supply chain security for financial services",
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
      "Automate build, test, and deployment workflows that let your team ship fast with confidence. Zero-downtime releases, every time.",
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
      "FinOps frameworks, automated right-sizing, and architectural improvements that reduce cloud spend by 30-50%.",
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
      "Internal developer platforms that abstract away infrastructure complexity and let engineers focus on what they build best — products.",
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
      "Full-stack observability with metrics, logs, and traces. Detect issues before users do with intelligent alerting.",
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
];

/** Lookup map by slug */
export const serviceBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s])
);

/** Just the slugs for static generation */
export const serviceSlugs = services.map((s) => s.slug);
