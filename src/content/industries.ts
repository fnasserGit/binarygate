import {
  Heart,
  Radio,
  Building,
  ShoppingCart,
  Code2,
  type LucideIcon,
} from "lucide-react";

export interface IndustryDetail {
  slug: string;
  title: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  iconColor: string;
  borderColor: string;
  challenges: { title: string; description: string }[];
  capabilities: string[];
  compliance: string[];
}

export const industries: IndustryDetail[] = [
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    headline: "HIPAA-ready platforms for healthtech and life sciences",
    description:
      "Healthcare organizations handle some of the most sensitive data in existence. We build HIPAA-compliant cloud infrastructure with end-to-end encryption, strict access controls, and audit logging — enabling telehealth, clinical trials, and health data platforms to scale safely.",
    icon: Heart,
    color: "#34d399",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    challenges: [
      { title: "HIPAA Compliance", description: "Protected health information (PHI) requires encryption, access controls, and comprehensive audit logging." },
      { title: "Interoperability", description: "HL7 FHIR, DICOM, and legacy EHR integration require careful data pipeline design." },
      { title: "Availability", description: "Clinical systems must maintain 99.99% uptime — lives depend on it." },
      { title: "Data Scale", description: "Genomic data, medical imaging, and IoT sensor data create massive storage and processing requirements." },
    ],
    capabilities: [
      "HIPAA-compliant cloud architecture on AWS/Azure/GCP",
      "End-to-end encryption for PHI at rest and in transit",
      "Telehealth platform infrastructure and scaling",
      "HL7 FHIR data pipeline design and implementation",
      "Clinical trial data platform architecture",
      "Medical IoT device data ingestion and processing",
    ],
    compliance: ["HIPAA", "HITRUST", "SOC 2 Type II", "FDA 21 CFR Part 11", "GDPR"],
  },
  {
    slug: "telecommunications",
    title: "Telecommunications",
    headline: "Scalable infrastructure for network operators and ISPs",
    description:
      "Telecom operators need infrastructure that handles millions of concurrent connections, real-time data processing, and complex network functions. We modernize telecom infrastructure with cloud-native architectures, edge computing, and automated operations.",
    icon: Radio,
    color: "#67e8f9",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    challenges: [
      { title: "Massive Scale", description: "Millions of concurrent connections with real-time processing and sub-second latency requirements." },
      { title: "Network Modernization", description: "Migrating from legacy telecom infrastructure to cloud-native and containerized network functions." },
      { title: "Edge Computing", description: "Distributed processing at the edge for 5G, IoT, and content delivery use cases." },
      { title: "Operational Complexity", description: "Complex multi-vendor environments with strict SLAs and regulatory requirements." },
    ],
    capabilities: [
      "Cloud-native network function (CNF) deployment",
      "5G core infrastructure on Kubernetes",
      "Edge computing platform design and deployment",
      "BSS/OSS modernization and cloud migration",
      "Real-time billing and usage processing pipelines",
      "Multi-site disaster recovery and failover automation",
    ],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "Telecom regulatory compliance"],
  },
  {
    slug: "government",
    title: "Government & Public Sector",
    headline: "Secure, sovereign cloud for public sector organizations",
    description:
      "Government organizations require the highest levels of security, data sovereignty, and compliance. We design and deploy cloud infrastructure that meets government security frameworks while enabling digital transformation and citizen service modernization.",
    icon: Building,
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    challenges: [
      { title: "Data Sovereignty", description: "Government data must remain within national borders with strict access controls and classification." },
      { title: "Security Clearance", description: "Infrastructure and operations must meet government security framework requirements." },
      { title: "Legacy Modernization", description: "Decades-old systems need modernization without disrupting critical public services." },
      { title: "Procurement Complexity", description: "Government procurement processes require careful planning and compliance documentation." },
    ],
    capabilities: [
      "Sovereign cloud architecture design and deployment",
      "FedRAMP and government security framework compliance",
      "Legacy system modernization with zero-downtime migration",
      "Secure citizen services platform infrastructure",
      "Classified data handling and encryption architecture",
      "Multi-agency shared services platform design",
    ],
    compliance: ["FedRAMP", "NIST 800-53", "ISO 27001", "National security frameworks"],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce & Retail",
    headline: "High-availability platforms that handle peak traffic",
    description:
      "E-commerce platforms need to handle 10x traffic spikes during sales events without breaking a sweat. We build auto-scaling infrastructure, CDN strategies, and resilient architectures that deliver fast page loads and seamless checkout experiences at any scale.",
    icon: ShoppingCart,
    color: "#1d8bc4",
    gradient: "from-sky-600/20 to-sky-600/5",
    iconColor: "text-sky-500",
    borderColor: "border-sky-600/20",
    challenges: [
      { title: "Traffic Spikes", description: "Black Friday, flash sales, and viral moments can 10-50x normal traffic in minutes." },
      { title: "Global Performance", description: "Sub-second page loads across all regions directly impact conversion rates." },
      { title: "Payment Security", description: "PCI-DSS compliance for payment processing with fraud detection capabilities." },
      { title: "Personalization at Scale", description: "Real-time recommendation engines and A/B testing require low-latency data pipelines." },
    ],
    capabilities: [
      "Auto-scaling infrastructure for traffic spike handling",
      "Global CDN and edge caching strategy",
      "PCI-DSS compliant payment infrastructure",
      "Real-time inventory and order processing pipelines",
      "A/B testing and feature flag infrastructure",
      "Multi-region deployment for global storefronts",
    ],
    compliance: ["PCI-DSS", "SOC 2", "GDPR", "CCPA"],
  },
  {
    slug: "technology",
    title: "Technology & SaaS",
    headline: "Scalable, multi-tenant infrastructure for software companies",
    description:
      "SaaS companies need infrastructure that scales with their customer base, supports multi-tenancy, and delivers enterprise-grade reliability. We build the cloud foundations, deployment pipelines, and observability stacks that let you focus on product instead of infrastructure.",
    icon: Code2,
    color: "#60a5fa",
    gradient: "from-blue-400/20 to-blue-400/5",
    iconColor: "text-blue-400",
    borderColor: "border-blue-400/20",
    challenges: [
      { title: "Multi-Tenancy", description: "Isolating customer data and resources while maintaining operational efficiency." },
      { title: "Rapid Scaling", description: "Infrastructure must scale from 10 to 10,000 customers without re-architecture." },
      { title: "Developer Velocity", description: "Engineering teams need to ship multiple times per day without Ops bottlenecks." },
      { title: "Enterprise Readiness", description: "SOC 2, SSO, audit logs, and data residency requirements from enterprise customers." },
    ],
    capabilities: [
      "Multi-tenant architecture design (shared vs. isolated)",
      "Auto-scaling Kubernetes platforms for SaaS workloads",
      "Internal developer platform with self-service environments",
      "SOC 2 compliance automation and evidence collection",
      "CI/CD pipelines for daily multi-service deployments",
      "Full-stack observability with SLO tracking",
    ],
    compliance: ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA (if applicable)"],
  },
];

export const industryBySlug = Object.fromEntries(
  industries.map((i) => [i.slug, i])
) as Record<string, IndustryDetail>;

export const industrySlugs = industries.map((i) => i.slug);
