import {
  Cloud,
  Shield,
  GitBranch,
  BarChart3,
  Server,
  Zap,
  ArrowRightLeft,
  ShieldCheck,
  Building2,
  Headphones,
  Heart,
  Radio,
  Building,
  ShoppingCart,
  Code2,
  BookOpen,
  FileText,
  FileBarChart,
  Users,
  Briefcase,
  Handshake,
  History,
  Layers,
  HardDrive,
  Network,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export interface NavSubItem {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavSubItem[];
}

export const navigation: NavItem[] = [
  {
    label: "Services",
    children: [
      {
        label: "Cloud Architecture",
        href: "/services/cloud-architecture",
        description: "Multi-region, multi-cloud foundations built for scale",
        icon: Cloud,
        color: "#2dd4bf",
      },
      {
        label: "Security & Compliance",
        href: "/services/security-hardening",
        description: "Zero-trust security with compliance automation",
        icon: Shield,
        color: "#34d399",
      },
      {
        label: "CI/CD Automation",
        href: "/services/cicd-automation",
        description: "Ship daily with zero-downtime pipelines",
        icon: GitBranch,
        color: "#67e8f9",
      },
      {
        label: "Cost Optimization",
        href: "/services/cost-optimization",
        description: "Right-size infrastructure, cut cloud spend by 40%+",
        icon: BarChart3,
        color: "#3b82f6",
      },
      {
        label: "Platform Engineering",
        href: "/services/platform-engineering",
        description: "Internal developer platforms that scale with your team",
        icon: Server,
        color: "#1d8bc4",
      },
      {
        label: "Observability",
        href: "/services/observability",
        description: "Full-stack monitoring, tracing & intelligent alerting",
        icon: Zap,
        color: "#60a5fa",
      },
    ],
  },
  {
    label: "Solutions",
    children: [
      {
        label: "Cloud Migration",
        href: "/solutions/cloud-migration",
        description: "Seamless migration from on-prem to cloud with zero downtime",
        icon: ArrowRightLeft,
        color: "#2dd4bf",
      },
      {
        label: "DevSecOps",
        href: "/solutions/devsecops",
        description: "Security embedded in every stage of the delivery lifecycle",
        icon: ShieldCheck,
        color: "#34d399",
      },
      {
        label: "Infrastructure Modernization",
        href: "/solutions/infrastructure-modernization",
        description: "Transform legacy systems into cloud-native architectures",
        icon: Building2,
        color: "#67e8f9",
      },
      {
        label: "Managed Cloud Services",
        href: "/solutions/managed-cloud",
        description: "24/7 operations, monitoring, and optimization of your cloud",
        icon: Headphones,
        color: "#3b82f6",
      },
      {
        label: "Software Development",
        href: "/services/software-development",
        description: "Cloud-native product engineering and delivery squads",
        icon: Code2,
        color: "#8b5cf6",
      },
      {
        label: "AI Adoption",
        href: "/services/ai-adoption",
        description: "Production-ready AI across data, ops, and workflows",
        icon: Zap,
        color: "#f97316",
      },
      {
        label: "Hybrid Operations",
        href: "/services/hybrid-operations",
        description: "Unified operations across cloud and data center",
        icon: Layers,
        color: "#3b82f6",
      },
      {
        label: "On-Prem Modernization",
        href: "/services/on-prem-modernization",
        description: "Modernize data centers with automation and security",
        icon: HardDrive,
        color: "#1d8bc4",
      },
      {
        label: "Networking",
        href: "/services/networking",
        description: "Secure, low-latency connectivity and segmentation",
        icon: Network,
        color: "#22d3ee",
      },
      {
        label: "Systems Engineering",
        href: "/services/systems-engineering",
        description: "OS baselines, storage, and compute standards",
        icon: Cpu,
        color: "#38bdf8",
      },
    ],
  },
  {
    label: "Industries",
    children: [
      {
        label: "Healthcare",
        href: "/industries/healthcare",
        description: "HIPAA-ready platforms for healthtech and life sciences",
        icon: Heart,
        color: "#34d399",
      },
      {
        label: "Telecommunications",
        href: "/industries/telecommunications",
        description: "Scalable infrastructure for network operators and ISPs",
        icon: Radio,
        color: "#67e8f9",
      },
      {
        label: "Government",
        href: "/industries/government",
        description: "Secure, sovereign cloud for public sector organizations",
        icon: Building,
        color: "#3b82f6",
      },
      {
        label: "E-Commerce & Retail",
        href: "/industries/ecommerce",
        description: "High-availability platforms that handle peak traffic",
        icon: ShoppingCart,
        color: "#1d8bc4",
      },
      {
        label: "Technology & SaaS",
        href: "/industries/technology",
        description: "Scalable, multi-tenant infrastructure for software companies",
        icon: Code2,
        color: "#60a5fa",
      },
    ],
  },
  {
    label: "About",
    children: [
      {
        label: "Our Story",
        href: "/about/story",
        description: "How BinaryGate was founded and our mission",
        icon: History,
        color: "#2dd4bf",
      },
      {
        label: "Team",
        href: "/about/team",
        description: "Meet the engineers behind BinaryGate",
        icon: Users,
        color: "#34d399",
      },
      {
        label: "Careers",
        href: "/about/careers",
        description: "Join our team and build the future of cloud",
        icon: Briefcase,
        color: "#67e8f9",
      },
      {
        label: "Partners",
        href: "/about/partners",
        description: "Our technology and consulting partnerships",
        icon: Handshake,
        color: "#3b82f6",
      },
    ],
  },
  {
    label: "Insights",
    children: [
      {
        label: "Blog",
        href: "/insights/blog",
        description: "Technical deep-dives, best practices, and industry trends",
        icon: BookOpen,
        color: "#2dd4bf",
      },
      {
        label: "Case Studies",
        href: "/insights/case-studies",
        description: "Real-world results from our cloud & DevOps engagements",
        icon: FileBarChart,
        color: "#34d399",
      },
      {
        label: "Whitepapers",
        href: "/insights/whitepapers",
        description: "In-depth research on cloud architecture and security",
        icon: FileText,
        color: "#3b82f6",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
