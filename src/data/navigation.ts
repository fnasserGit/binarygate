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
  Sparkles,
  PiggyBank,
  Activity,
  RefreshCw,
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

export interface NavMenu {
  label: string;
  items: NavSubItem[];
}

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
    label: "Solutions",
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
    label: "Services",
    items: [
      {
        label: "Cloud Strategy & Architecture",
        href: "/services/cloud-strategy-architecture",
        description: "Migration, modernization, and scalable architecture planning.",
        icon: Cloud,
        color: "#33C6FF",
      },
      {
        label: "Network & Security Engineering",
        href: "/services/network-security-engineering",
        description: "Secure connectivity and defense across hybrid environments.",
        icon: ShieldCheck,
        color: "#A78BFA",
      },
      {
        label: "DevOps & Platform Enablement",
        href: "/services/devops-platform-enablement",
        description: "CI/CD, IaC, Kubernetes, and automation.",
        icon: GitBranch,
        color: "#60A5FA",
      },
      {
        label: "Observability & Managed Operations",
        href: "/services/observability-managed-operations",
        description: "Monitoring, SRE practices, and managed services.",
        icon: Activity,
        color: "#FBBF24",
      },
    ],
  },
  {
    label: "Solutions",
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
    items: [
      {
        label: "Healthcare",
        href: "/industries/healthcare",
        description: "HIPAA-ready platforms for healthtech.",
        icon: Heart,
        color: "#34d399",
      },
      {
        label: "Telecommunications",
        href: "/industries/telecommunications",
        description: "Scalable infrastructure for ISPs.",
        icon: Radio,
        color: "#67e8f9",
      },
      {
        label: "Government",
        href: "/industries/government",
        description: "Secure, sovereign cloud for public sector.",
        icon: Building,
        color: "#3b82f6",
      },
      {
        label: "E-Commerce & Retail",
        href: "/industries/ecommerce",
        description: "High-availability platforms for peak traffic.",
        icon: ShoppingCart,
        color: "#1d8bc4",
      },
      {
        label: "Technology & SaaS",
        href: "/industries/technology",
        description: "Multi-tenant infrastructure for SaaS.",
        icon: Code2,
        color: "#60a5fa",
      },
    ],
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
