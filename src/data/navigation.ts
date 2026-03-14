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
  href: string;
  items: NavSubItem[];
}

export const navigation: NavItem[] = [
  {
    label: "Expertise",
    href: "/expertise",
  },
  {
    label: "What we do",
    href: "/what-we-do",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Insights",
    href: "/insights",
  },
];


export const navMenus: NavMenu[] = [
  {
    label: "Expertise",
    href: "/expertise",
    items: [
      {
        label: "Consultancy",
        href: "/expertise/consultancy",
        description: "Assessment, roadmap planning, and architecture guidance.",
        icon: Cloud,
        color: "#33C6FF",
      },
      {
        label: "Cloud",
        href: "/expertise/cloud",
        description: "Cloud consulting, migration, and operations.",
        icon: Cloud,
        color: "#33C6FF",
      },
      {
        label: "Hybrid & On-Prem",
        href: "/expertise/hybrid-on-prem",
        description: "Modernize on-prem foundations and hybrid platforms.",
        icon: Cloud,
        color: "#33C6FF",
      },
      {
        label: "Cybersecurity",
        href: "/expertise/cybersecurity",
        description: "Security hardening, governance, and compliance.",
        icon: Shield,
        color: "#33C6FF",
      },
      {
        label: "Managed Services",
        href: "/expertise/managed-services",
        description: "Ongoing operations, monitoring, and reliability.",
        icon: Headphones,
        color: "#33C6FF",
      },
      {
        label: "DevOps",
        href: "/expertise/devops",
        description: "CI/CD, GitOps, and infrastructure automation.",
        icon: GitBranch,
        color: "#33C6FF",
      },
      {
        label: "Data Solutions",
        href: "/expertise/data-solutions",
        description: "Data platforms, analytics, and reporting pipelines.",
        icon: Zap,
        color: "#33C6FF",
      },
      {
        label: "Software Development Services",
        href: "/expertise/software-development-services",
        description: "Product engineering and delivery squads.",
        icon: Code2,
        color: "#33C6FF",
      },
    ],
  },
  {
    label: "What we do",
    href: "/what-we-do",
    items: [
      {
        label: "Cloud Migration",
        href: "/what-we-do/cloud-migration",
        description: "Seamless migration with zero downtime.",
        icon: ArrowRightLeft,
        color: "#2dd4bf",
      },
      {
        label: "DevSecOps",
        href: "/what-we-do/devsecops",
        description: "Security embedded in delivery lifecycle.",
        icon: ShieldCheck,
        color: "#34d399",
      },
      {
        label: "Infrastructure Modernization",
        href: "/what-we-do/infrastructure-modernization",
        description: "Transform legacy systems into cloud-native.",
        icon: Building2,
        color: "#67e8f9",
      },
      {
        label: "Managed Cloud Services",
        href: "/what-we-do/managed-cloud-services",
        description: "24/7 operations and optimization.",
        icon: Headphones,
        color: "#3b82f6",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      {
        label: "SaaS",
        href: "/industries/saas",
        description: "Multi-tenant platforms at scale.",
        icon: Layers,
        color: "#2dd4bf",
      },
      {
        label: "Healthcare",
        href: "/industries/healthcare",
        description: "Secure infrastructure for regulated care.",
        icon: Shield,
        color: "#34d399",
      },
      {
        label: "Finance",
        href: "/industries/finance",
        description: "Resilient systems with strong controls.",
        icon: Building2,
        color: "#67e8f9",
      },
      {
        label: "Education",
        href: "/industries/education",
        description: "Scalable platforms for digital learning.",
        icon: BookOpen,
        color: "#2dd4bf",
      },
      {
        label: "Government",
        href: "/industries/government",
        description: "Secure public sector platforms.",
        icon: Building2,
        color: "#34d399",
      },
      {
        label: "Media & Entertainment",
        href: "/industries/media-entertainment",
        description: "Platforms for content and audience scale.",
        icon: FileBarChart,
        color: "#67e8f9",
      },
      {
        label: "Retail",
        href: "/industries/retail",
        description: "Reliable commerce infrastructure.",
        icon: Layers,
        color: "#3b82f6",
      },
      {
        label: "Automotive",
        href: "/industries/automotive",
        description: "Connected automotive platforms.",
        icon: Briefcase,
        color: "#2dd4bf",
      },
      {
        label: "Transportation & Logistics",
        href: "/industries/transportation-logistics",
        description: "Fleet and supply chain systems.",
        icon: Handshake,
        color: "#34d399",
      },
      {
        label: "Hospitality",
        href: "/industries/hospitality",
        description: "Guest and operations platforms.",
        icon: Users,
        color: "#67e8f9",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    items: [
      {
        label: "Our Story",
        href: "/about/our-story",
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
    href: "/insights",
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
