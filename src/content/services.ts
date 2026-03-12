export type ServiceItem = {
  title: string;
  description: string;
  href: string;
};

export const cloudServices: ServiceItem[] = [
  {
    title: "Cloud Consulting",
    description: "Architecture, roadmap, and governance to de-risk cloud initiatives.",
    href: "/expertise",
  },
  {
    title: "Cloud Migration & Modernisation",
    description: "Move and modernize workloads with minimal disruption.",
    href: "/what-we-do",
  },
  {
    title: "Cloud Operations",
    description: "Operational excellence, reliability, and optimization at scale.",
    href: "/expertise",
  },
  {
    title: "DevOps",
    description: "CI/CD, IaC, and release automation that accelerates delivery.",
    href: "/expertise",
  },
  {
    title: "Managed Services",
    description: "Ongoing support that keeps platforms secure and performant.",
    href: "/expertise",
  },
];

export const hybridOnPremServices: ServiceItem[] = [
  {
    title: "Hybrid Cloud Architecture",
    description: "Unified control planes and secure connectivity across environments.",
    href: "/expertise",
  },
  {
    title: "On-Prem Modernisation",
    description: "Refresh legacy stacks to modern, scalable platforms.",
    href: "/what-we-do",
  },
  {
    title: "Kubernetes Platforms (On-Prem / Hybrid)",
    description: "Production-grade clusters with observability and lifecycle automation.",
    href: "/expertise",
  },
  {
    title: "Network & Connectivity (VPN / SD-WAN)",
    description: "Secure, resilient networking for distributed infrastructures.",
    href: "/expertise",
  },
  {
    title: "Backup, DR & Business Continuity",
    description: "Resilient recovery plans that keep critical systems online.",
    href: "/expertise",
  },
];
