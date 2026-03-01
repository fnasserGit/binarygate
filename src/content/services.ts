export type ServiceItem = {
  title: string;
  description: string;
  href: string;
};

export const cloudServices: ServiceItem[] = [
  {
    title: "Cloud Consulting",
    description: "Architecture, roadmap, and governance to de-risk cloud initiatives.",
    href: "/services/cloud-strategy-architecture",
  },
  {
    title: "Cloud Migration & Modernisation",
    description: "Move and modernize workloads with minimal disruption.",
    href: "/services/cloud-adoption",
  },
  {
    title: "Cloud Operations",
    description: "Operational excellence, reliability, and optimization at scale.",
    href: "/services/managed-cloud-operations",
  },
  {
    title: "DevOps",
    description: "CI/CD, IaC, and release automation that accelerates delivery.",
    href: "/services/devops-platform-enablement",
  },
  {
    title: "Managed Services",
    description: "Ongoing support that keeps platforms secure and performant.",
    href: "/services/professional-services",
  },
];

export const hybridOnPremServices: ServiceItem[] = [
  {
    title: "Hybrid Cloud Architecture",
    description: "Unified control planes and secure connectivity across environments.",
    href: "/services/cloud-strategy-architecture",
  },
  {
    title: "On-Prem Modernisation",
    description: "Refresh legacy stacks to modern, scalable platforms.",
    href: "/services/application-modernization",
  },
  {
    title: "Kubernetes Platforms (On-Prem / Hybrid)",
    description: "Production-grade clusters with observability and lifecycle automation.",
    href: "/services/cloud-native-development",
  },
  {
    title: "Network & Connectivity (VPN / SD-WAN)",
    description: "Secure, resilient networking for distributed infrastructures.",
    href: "/services/network-security-engineering",
  },
  {
    title: "Backup, DR & Business Continuity",
    description: "Resilient recovery plans that keep critical systems online.",
    href: "/services/observability-managed-operations",
  },
];
