import {
  ArrowRightLeft,
  ShieldCheck,
  Building2,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export interface SolutionDetail {
  slug: string;
  title: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  iconColor: string;
  borderColor: string;
  benefits: { title: string; description: string }[];
  approach: string[];
  relatedServices: string[];
}

export const solutions: SolutionDetail[] = [
  {
    slug: "cloud-migration",
    title: "Cloud Migration",
    headline: "Seamless migration from on-prem to cloud with zero downtime",
    description:
      "Whether you're moving from co-located data centers, legacy VMs, or another cloud provider, we architect and execute migrations that keep your teams shipping throughout the process. Our 6R methodology ensures every workload lands in the right place.",
    icon: ArrowRightLeft,
    color: "#2dd4bf",
    gradient: "from-teal-500/20 to-teal-500/5",
    iconColor: "text-teal-400",
    borderColor: "border-teal-500/20",
    benefits: [
      { title: "Zero-Downtime Cutover", description: "Blue-green migration strategies that maintain 100% availability during transition." },
      { title: "Cost Predictability", description: "Pre-migration cost modeling so there are no surprises when the first cloud bill arrives." },
      { title: "Data Integrity", description: "Automated data validation and reconciliation at every stage of the migration." },
      { title: "Team Enablement", description: "Knowledge transfer and training so your team owns the new environment from day one." },
    ],
    approach: [
      "Discovery & assessment of current infrastructure and dependencies",
      "Migration strategy selection (6R: Rehost, Replatform, Refactor, Repurchase, Retain, Retire)",
      "Landing zone design with security and networking pre-configured",
      "Phased migration execution with automated testing at each wave",
      "Performance validation and optimization post-migration",
      "Decommission of legacy systems and ongoing support transition",
    ],
    relatedServices: ["cloud-architecture", "security-hardening", "observability"],
  },
  {
    slug: "devsecops",
    title: "DevSecOps",
    headline: "Security embedded in every stage of the delivery lifecycle",
    description:
      "We shift security left into your development and deployment workflows. From code scanning in pull requests to runtime protection in production, every release goes through automated security gates without slowing down delivery.",
    icon: ShieldCheck,
    color: "#34d399",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    benefits: [
      { title: "Shift-Left Security", description: "Catch vulnerabilities in code before they reach staging, let alone production." },
      { title: "Automated Compliance", description: "Policy-as-code that enforces security standards on every commit and deployment." },
      { title: "Faster Remediation", description: "Developers fix issues in context — not weeks later when a security audit surfaces them." },
      { title: "Audit-Ready Pipelines", description: "Automated evidence collection that makes compliance audits a non-event." },
    ],
    approach: [
      "Security maturity assessment of current CI/CD pipelines and workflows",
      "Threat modeling and risk prioritization for your application stack",
      "SAST, DAST, and SCA integration into existing pipelines",
      "Container image scanning and signing workflows",
      "Runtime security with network policies and anomaly detection",
      "Continuous compliance monitoring and reporting dashboards",
    ],
    relatedServices: ["security-hardening", "cicd-automation", "platform-engineering"],
  },
  {
    slug: "infrastructure-modernization",
    title: "Infrastructure Modernization",
    headline: "Transform legacy systems into cloud-native architectures",
    description:
      "Legacy infrastructure limits your team's ability to ship fast and scale. We modernize your stack — containerizing workloads, adopting Kubernetes, implementing Infrastructure as Code, and building internal developer platforms that give your engineers superpowers.",
    icon: Building2,
    color: "#67e8f9",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    benefits: [
      { title: "10x Deployment Frequency", description: "Move from monthly releases to multiple deploys per day with GitOps and automation." },
      { title: "Reduced Operational Toil", description: "Automated scaling, healing, and configuration management free up your team." },
      { title: "Cost Efficiency", description: "Containers and auto-scaling reduce infrastructure costs by 30-50% vs legacy VMs." },
      { title: "Developer Productivity", description: "Self-service environments and golden paths eliminate infrastructure bottlenecks." },
    ],
    approach: [
      "Architecture review and modernization roadmap",
      "Containerization strategy and Dockerfile/Helm chart creation",
      "Kubernetes cluster design and deployment",
      "Infrastructure as Code migration (Terraform, Pulumi)",
      "CI/CD pipeline modernization with GitOps workflows",
      "Internal developer platform setup and golden path templates",
    ],
    relatedServices: ["platform-engineering", "cicd-automation", "cloud-architecture"],
  },
  {
    slug: "managed-cloud",
    title: "Managed Cloud Services",
    headline: "24/7 operations, monitoring, and optimization of your cloud",
    description:
      "Don't want to build a full SRE team? We operate your cloud infrastructure as an extension of your team — 24/7 monitoring, incident response, capacity planning, and continuous optimization so you can focus on building product.",
    icon: Headphones,
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    benefits: [
      { title: "24/7 Operations", description: "Round-the-clock monitoring and incident response by experienced SREs." },
      { title: "Proactive Optimization", description: "Continuous performance tuning and cost optimization — not just keeping the lights on." },
      { title: "SLA-Backed Reliability", description: "Guaranteed uptime SLAs with transparent reporting and error budgets." },
      { title: "Scalable Support", description: "From 5 to 500 services — our operations scale with you without hiring overhead." },
    ],
    approach: [
      "Onboarding and knowledge transfer of your current infrastructure",
      "Observability stack setup or enhancement (metrics, logs, traces)",
      "Runbook creation and incident response playbook development",
      "24/7 monitoring with intelligent alerting and escalation",
      "Monthly optimization reviews with cost and performance reports",
      "Quarterly architecture reviews and scaling recommendations",
    ],
    relatedServices: ["observability", "cost-optimization", "cloud-architecture"],
  },
];

export const solutionBySlug = Object.fromEntries(
  solutions.map((s) => [s.slug, s])
) as Record<string, SolutionDetail>;

export const solutionSlugs = solutions.map((s) => s.slug);
