import {
  Cloud,
  Shield,
  GitBranch,
  Zap,
  ArrowRightLeft,
  ShieldCheck,
  Building2,
  Headphones,
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
import { industries } from "@/content/industries";

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

export interface NavMenu {
  label: string;
  items: NavSubItem[];
}

const industryNavItems: NavSubItem[] = industries.map((industry) => ({
  label: industry.title,
  href: `/industries/${industry.slug}`,
  description: industry.headline,
  icon: industry.icon,
  color: industry.color,
}));

export const navigation: NavItem[] = [
  {
    label: "Services",
    children: [
      {
        label: "Cloud Strategy & Architecture",
        href: "/services/cloud-strategy-architecture",
        description: "Migration, modernization, and scalable architecture planning",
        icon: Cloud,
        color: "#2dd4bf",
      },
      {
        label: "Network & Security Engineering",
        href: "/services/network-security-engineering",
        description: "Secure connectivity and defense across hybrid environments",
        icon: Shield,
        color: "#34d399",
      },
      {
        label: "DevOps & Platform Enablement",
        href: "/services/devops-platform-enablement",
        description: "CI/CD, IaC, Kubernetes, and automation",
        icon: GitBranch,
        color: "#67e8f9",
      },
      {
        label: "Observability & Managed Operations",
        href: "/services/observability-managed-operations",
        description: "Monitoring, SRE practices, and managed services",
        icon: Zap,
        color: "#60a5fa",
      },
    ],
  },
  {
    label: "What we do",
    href: "/solutions",
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
    href: "/industries",
    children: industryNavItems,
  },
  {
    label: "About",
    href: "/about",
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
    href: "/insights",
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


export const navMenus: NavMenu[] = [
  {
    label: "Expertise",
    items: [
      {
        label: "Consultancy",
        href: "/#services",
        description: "",
        icon: Cloud,
        color: "#33C6FF",
      },
      {
        label: "Cloud",
        href: "/services/cloud",
        description: "",
        icon: Cloud,
        color: "#33C6FF",
      },
      {
        label: "Hybrid & On-Prem",
        href: "/services/hybrid-on-prem",
        description: "",
        icon: Cloud,
        color: "#33C6FF",
      },
      {
        label: "Cybersecurity",
        href: "/services/network-security-engineering",
        description: "",
        icon: Cloud,
        color: "#33C6FF",
      },
      {
        label: "Managed Services",
        href: "/services/managed-cloud-operations",
        description: "",
        icon: Cloud,
        color: "#33C6FF",
      },
      {
        label: "DevOps",
        href: "/services/devops-platform-enablement",
        description: "",
        icon: Cloud,
        color: "#33C6FF",
      },
      {
        label: "Data Solutions",
        href: "/services/data-analytics",
        description: "",
        icon: Cloud,
        color: "#33C6FF",
      },
      {
        label: "Software Development Services",
        href: "/services/software-development",
        description: "",
        icon: Cloud,
        color: "#33C6FF",
      },
    ],
  },
  {
    label: "What we do",
    items: [
      {
        label: "Cloud Migration",
        href: "/solutions/cloud-migration",
        description: "Seamless migration with zero downtime.",
        icon: ArrowRightLeft,
        color: "#2dd4bf",
      },
      {
        label: "DevSecOps",
        href: "/solutions/devsecops",
        description: "Security embedded in delivery lifecycle.",
        icon: ShieldCheck,
        color: "#34d399",
      },
      {
        label: "Infrastructure Modernization",
        href: "/solutions/infrastructure-modernization",
        description: "Transform legacy systems into cloud-native.",
        icon: Building2,
        color: "#67e8f9",
      },
      {
        label: "Managed Cloud Services",
        href: "/solutions/managed-cloud",
        description: "24/7 operations and optimization.",
        icon: Headphones,
        color: "#3b82f6",
      },
    ],
  },
  {
    label: "Industries",
    items: industryNavItems,
  },
  {
    label: "About",
    items: [
      {
        label: "Our Story",
        href: "/about/story",
        description: "How BinaryGate was founded.",
        icon: History,
        color: "#2dd4bf",
      },
      {
        label: "Team",
        href: "/about/team",
        description: "Meet the engineers behind BinaryGate.",
        icon: Users,
        color: "#34d399",
      },
      {
        label: "Careers",
        href: "/about/careers",
        description: "Join our team and build the future.",
        icon: Briefcase,
        color: "#67e8f9",
      },
      {
        label: "Partners",
        href: "/about/partners",
        description: "Technology and consulting partners.",
        icon: Handshake,
        color: "#3b82f6",
      },
    ],
  },
  {
    label: "Insights",
    items: [
      {
        label: "Blog",
        href: "/insights/blog",
        description: "Deep-dives and best practices.",
        icon: BookOpen,
        color: "#2dd4bf",
      },
      {
        label: "Case Studies",
        href: "/insights/case-studies",
        description: "Real-world results and outcomes.",
        icon: FileBarChart,
        color: "#34d399",
      },
      {
        label: "Whitepapers",
        href: "/insights/whitepapers",
        description: "Research on architecture and security.",
        icon: FileText,
        color: "#3b82f6",
      },
    ],
  },
];
