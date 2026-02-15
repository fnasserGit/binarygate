"use client";

import {
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";
import React from "react";
import Link from "next/link";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { WorldMap } from "@/components/ui/world-map";
import {
  Cloud,
  Shield,
  GitBranch,
  BarChart3,
  Server,
  Zap,
  Network,
  Container,
  Cpu,
  Layers,
  HardDrive,
  Code2,
  ChevronDown,
} from "lucide-react";
import { services } from "@/data/services";
import {
  ArchitectureIcon,
  SecurityIcon,
  PipelineIcon,
  CostIcon,
  PlatformIcon,
  ObservabilityIcon,
} from "@/components/ui/service-icons";

const connectionDots = [
  // ── Global routes ──
  { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 51.5074, lng: -0.1278 } },
  { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 35.6895, lng: 139.6917 } },
  { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: 1.3521, lng: 103.8198 } },
  { start: { lat: 52.52, lng: 13.405 }, end: { lat: 28.6139, lng: 77.209 } },
  { start: { lat: 43.6532, lng: -79.3832 }, end: { lat: 53.3498, lng: -6.2603 } },
  { start: { lat: 19.4326, lng: -99.1332 }, end: { lat: -34.6037, lng: -58.3816 } },
  { start: { lat: 31.2304, lng: 121.4737 }, end: { lat: 37.5665, lng: 126.978 } },
  // ── MEA ──
  { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 24.7136, lng: 46.6753 } },
  { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 30.0444, lng: 31.2357 } },
  { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 41.0082, lng: 28.9784 } },
  { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 25.2854, lng: 51.531 } },
  { start: { lat: 24.7136, lng: 46.6753 }, end: { lat: 21.4225, lng: 39.8262 } },
  { start: { lat: 30.0444, lng: 31.2357 }, end: { lat: -1.2921, lng: 36.8219 } },
  { start: { lat: 41.0082, lng: 28.9784 }, end: { lat: 55.7558, lng: 37.6173 } },
  // ── Africa ──
  { start: { lat: -1.2921, lng: 36.8219 }, end: { lat: -33.9249, lng: 18.4241 } },
  { start: { lat: -1.2921, lng: 36.8219 }, end: { lat: 6.5244, lng: 3.3792 } },
  { start: { lat: 30.0444, lng: 31.2357 }, end: { lat: 33.8869, lng: 9.5375 } },
  // ── MEA ↔ Global ──
  { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 25.2048, lng: 55.2708 } },
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 30.0444, lng: 31.2357 } },
  { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 25.2048, lng: 55.2708 } },
];

/* ─── Business pillars — horizontal strip above gemini title ─── */
const pillars = [
  { icon: Cloud, title: "Cloud Architecture", color: "#2dd4bf", slug: "cloud-architecture" },
  { icon: Shield, title: "Security Hardening", color: "#34d399", slug: "security-hardening" },
  { icon: GitBranch, title: "CI/CD Automation", color: "#67e8f9", slug: "cicd-automation" },
  { icon: BarChart3, title: "Cost Optimization", color: "#3b82f6", slug: "cost-optimization" },
  { icon: Server, title: "Platform Engineering", color: "#1d8bc4", slug: "platform-engineering" },
  { icon: Zap, title: "Observability", color: "#60a5fa", slug: "observability" },
];

/* ─── Scroll-triggered popup cards ─── */
type ServiceIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface PopupCard {
  icon: ServiceIcon;
  slug: string;
  label: string;
  detail: string;
  color: string;
}

const serviceIconBySlug: Record<string, ServiceIcon> = {
  "cloud-architecture": ArchitectureIcon,
  "security-hardening": SecurityIcon,
  "cicd-automation": PipelineIcon,
  "cost-optimization": CostIcon,
  "platform-engineering": PlatformIcon,
  observability: ObservabilityIcon,
};

const popupCards: PopupCard[] = services.slice(0, 6).map((service) => ({
  icon: serviceIconBySlug[service.slug] ?? service.icon,
  slug: service.slug,
  label: service.title,
  detail: service.shortDesc,
  color: service.color,
}));

const serviceStrip = [
  {
    slug: "cloud-architecture",
    title: "Cloud Platforms",
    detail: "Landing zones, multi-region design, resiliency, and governance.",
    tags: ["AWS", "Azure", "GCP"],
    icon: ArchitectureIcon,
    color: "#2dd4bf",
    points: ["Multi-account guardrails", "Resilience by design"],
  },
  {
    slug: "hybrid-operations",
    title: "Hybrid Operations",
    detail: "Unified control planes across cloud + data center with consistent policy.",
    tags: ["Direct Connect", "Azure Arc", "VPN"],
    icon: Layers,
    color: "#3b82f6",
    points: ["Unified governance", "Shared observability"],
  },
  {
    slug: "on-prem-modernization",
    title: "On-Prem Modernization",
    detail: "Automated infra, hardened security, and workload uplift at the edge.",
    tags: ["VMware", "Bare Metal", "Kubernetes"],
    icon: HardDrive,
    color: "#1d8bc4",
    points: ["Legacy uplift paths", "Automated patching"],
  },
  {
    slug: "networking",
    title: "Networking",
    detail: "Low-latency connectivity, segmentation, and global routing.",
    tags: ["SD-WAN", "BGP", "Transit"],
    icon: Network,
    color: "#22d3ee",
    points: ["Secure segmentation", "Global routing"],
  },
  {
    slug: "systems-engineering",
    title: "Systems Engineering",
    detail: "Compute, storage, and OS hardening with lifecycle automation.",
    tags: ["Linux", "Windows", "Storage"],
    icon: Cpu,
    color: "#38bdf8",
    points: ["Baseline hardening", "Lifecycle automation"],
  },
  {
    slug: "security-hardening",
    title: "Security & Compliance",
    detail: "Policy-as-code, audit readiness, and runtime protection.",
    tags: ["SOC 2", "ISO 27001", "Zero Trust"],
    icon: SecurityIcon,
    color: "#34d399",
    points: ["Continuous compliance", "Threat detection"],
  },
  {
    slug: "cicd-automation",
    title: "CI/CD & Delivery",
    detail: "Automated build, test, and zero-downtime releases.",
    tags: ["GitOps", "Canary", "Blue/Green"],
    icon: PipelineIcon,
    color: "#67e8f9",
    points: ["Safe rollouts", "Fast feedback"],
  },
  {
    slug: "cost-optimization",
    title: "Cost Optimization",
    detail: "FinOps, right-sizing, and efficiency improvements across stacks.",
    tags: ["FinOps", "Rightsizing", "Budgets"],
    icon: CostIcon,
    color: "#3b82f6",
    points: ["Waste reduction", "Forecasted spend"],
  },
  {
    slug: "platform-engineering",
    title: "Platform Engineering",
    detail: "Self-service platforms and golden paths for faster delivery.",
    tags: ["IDP", "Backstage", "Templates"],
    icon: PlatformIcon,
    color: "#1d8bc4",
    points: ["Developer portals", "Golden paths"],
  },
  {
    slug: "observability",
    title: "Observability",
    detail: "Metrics, traces, logs, and SLO-driven alerting.",
    tags: ["OpenTelemetry", "Grafana", "Datadog"],
    icon: ObservabilityIcon,
    color: "#60a5fa",
    points: ["SLO tracking", "Signal correlation"],
  },
  {
    slug: "software-development",
    title: "Software Development",
    detail: "Product engineering, cloud-native apps, and delivery squads.",
    tags: ["APIs", "Cloud-Native", "Agile"],
    icon: Code2,
    color: "#8b5cf6",
    points: ["Product delivery", "Platform-ready builds"],
  },
  {
    slug: "ai-adoption",
    title: "AI Adoption",
    detail: "Practical AI enablement across data, infra, and workflows.",
    tags: ["LLM Ops", "Data", "Automation"],
    icon: Zap,
    color: "#f97316",
    points: ["Use-case discovery", "Production readiness"],
  },
];

export function HeroEffectsSection() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const staticPath = useMotionValue(1);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    mass: 0.3,
  });

  // Gemini path draws
  const pathLengthFirst = useTransform(smoothProgress, [0.08, 0.95], [0, 1]);
  const pathLengthSecond = useTransform(smoothProgress, [0.11, 0.95], [0, 1]);
  const pathLengthThird = useTransform(smoothProgress, [0.14, 0.95], [0, 1]);
  const pathLengthFourth = useTransform(smoothProgress, [0.17, 0.95], [0, 1]);
  const pathLengthFifth = useTransform(smoothProgress, [0.2, 0.95], [0, 1]);

  // Staggered pillar reveals
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p0Opacity = useTransform(smoothProgress, [0.1, 0.2], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p0Y = useTransform(smoothProgress, [0.1, 0.2], [16, 0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p1Opacity = useTransform(smoothProgress, [0.2, 0.3], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p1Y = useTransform(smoothProgress, [0.2, 0.3], [16, 0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p2Opacity = useTransform(smoothProgress, [0.3, 0.4], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p2Y = useTransform(smoothProgress, [0.3, 0.4], [16, 0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p3Opacity = useTransform(smoothProgress, [0.4, 0.5], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p3Y = useTransform(smoothProgress, [0.4, 0.5], [16, 0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p4Opacity = useTransform(smoothProgress, [0.5, 0.6], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p4Y = useTransform(smoothProgress, [0.5, 0.6], [16, 0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p5Opacity = useTransform(smoothProgress, [0.6, 0.7], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p5Y = useTransform(smoothProgress, [0.6, 0.7], [16, 0]);

  const glow0 = useTransform(smoothProgress, [0.1, 0.15, 0.2], [0, 24, 0]);
  const glow1 = useTransform(smoothProgress, [0.2, 0.25, 0.3], [0, 24, 0]);
  const glow2 = useTransform(smoothProgress, [0.3, 0.35, 0.4], [0, 24, 0]);
  const glow3 = useTransform(smoothProgress, [0.4, 0.45, 0.5], [0, 24, 0]);
  const glow4 = useTransform(smoothProgress, [0.5, 0.55, 0.6], [0, 24, 0]);
  const glow5 = useTransform(smoothProgress, [0.6, 0.65, 0.7], [0, 24, 0]);

  const glowShadows = [
    useMotionTemplate`0 0 ${glow0}px ${popupCards[0].color}88, 0 0 ${glow0}px ${popupCards[0].color}33`,
    useMotionTemplate`0 0 ${glow1}px ${popupCards[1].color}88, 0 0 ${glow1}px ${popupCards[1].color}33`,
    useMotionTemplate`0 0 ${glow2}px ${popupCards[2].color}88, 0 0 ${glow2}px ${popupCards[2].color}33`,
    useMotionTemplate`0 0 ${glow3}px ${popupCards[3].color}88, 0 0 ${glow3}px ${popupCards[3].color}33`,
    useMotionTemplate`0 0 ${glow4}px ${popupCards[4].color}88, 0 0 ${glow4}px ${popupCards[4].color}33`,
    useMotionTemplate`0 0 ${glow5}px ${popupCards[5].color}88, 0 0 ${glow5}px ${popupCards[5].color}33`,
  ];

  const pillarMotion = [
    { opacity: p0Opacity, y: p0Y },
    { opacity: p1Opacity, y: p1Y },
    { opacity: p2Opacity, y: p2Y },
    { opacity: p3Opacity, y: p3Y },
    { opacity: p4Opacity, y: p4Y },
    { opacity: p5Opacity, y: p5Y },
  ];

  return (
    <section className="relative bg-white text-black dark:bg-black dark:text-white transition-colors">
      <div className="relative">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.1),transparent_50%),radial-gradient(ellipse_at_30%_20%,rgba(52,211,153,0.07),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_center,rgba(148,163,184,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),rgba(255,255,255,0.92))] dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3),rgba(0,0,0,0.92))]" />

        <div ref={ref} className="relative h-0 lg:h-[240vh]">
          <div className="sticky top-0 h-screen w-full overflow-hidden relative hidden lg:block">
          {/* Gemini Effect — stays pinned while scrolling */}
          <motion.div className="absolute inset-0 z-[2]">
            <GoogleGeminiEffect
              sticky={false}
              className="pointer-events-none absolute inset-0"
              linesOffsetClassName="top-[12vh] sm:top-[6vh] md:top-0"
              title=""
              description=""
              pathLengths={[
                reduceMotion ? staticPath : pathLengthFirst,
                reduceMotion ? staticPath : pathLengthSecond,
                reduceMotion ? staticPath : pathLengthThird,
                reduceMotion ? staticPath : pathLengthFourth,
                reduceMotion ? staticPath : pathLengthFifth,
              ]}
            />
          </motion.div>


          <div className="pointer-events-none absolute left-1/2 top-[22%] sm:top-[26%] md:top-[36%] z-[2] w-full -translate-x-1/2 text-center">
            <div className="mx-auto block max-w-[92vw] overflow-hidden px-2 text-center sm:hidden">
              <span className="text-[9px] font-bold uppercase tracking-[0.04em] leading-snug text-neutral-600 dark:text-neutral-300">
                <span className="typewriter-line typewriter-width block">
                  <span className="font-extrabold text-neutral-900 dark:text-white">BinaryGate&nbsp;</span>
                  delivers full-stack infrastructure services
                </span>
                <span className="typewriter-line typewriter-width-late block">
                  across cloud, hybrid, and on-prem.
                  <span className="typewriter-caret" />
                </span>
              </span>
            </div>
            <div className="typewriter-animate mx-auto hidden sm:inline-flex">
              <span className="typewriter-line text-[12px] font-bold uppercase tracking-[0.14em] text-neutral-600 dark:text-neutral-300 sm:text-[14px] sm:tracking-[0.2em] md:text-[16px] md:tracking-[0.25em]">
                <span className="font-extrabold text-neutral-900 dark:text-white">BinaryGate&nbsp;</span>
                delivers full-stack infrastructure services across cloud, hybrid, and on-prem.
                <span className="typewriter-caret" />
              </span>
            </div>
          </div>
          <div className="absolute left-1/2 bottom-[6%] z-[3] w-[92%] -translate-x-1/2">
            <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {popupCards.map((card, i) => (
                <motion.div
                  key={card.slug}
                  style={{ opacity: pillarMotion[i].opacity, y: pillarMotion[i].y }}
                >
                  <motion.div
                    style={{ boxShadow: glowShadows[i] }}
                    className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-r from-white/25 via-white/5 to-white/20 p-[1px] shadow-[0_18px_50px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.25)] dark:from-white/15 dark:via-white/5 dark:to-white/15"
                  >
                    <Link
                      href={`/services/${card.slug}`}
                      className="absolute inset-0"
                      aria-label={card.label}
                    />
                    <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl bg-white/90 px-3 py-2 backdrop-blur-xl dark:bg-black/55 sm:px-4 sm:py-3.5">
                      <div
                        className="pointer-events-none absolute inset-0 opacity-80"
                        style={{
                          backgroundImage: `radial-gradient(circle_at_20%_10%,${card.color}28,transparent_55%)`,
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_center,rgba(45,212,191,0.25)_1px,transparent_1px)] [background-size:12px_12px]" />
                      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_center,rgba(59,130,246,0.2)_1px,transparent_1px)] [background-size:18px_18px]" />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/20" />
                      <div className="relative grid h-full grid-rows-[auto_1fr] gap-1 sm:gap-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="flex h-6 w-6 items-center justify-center rounded-md border border-white/30 bg-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:border-white/[0.08] dark:bg-white/[0.06] sm:h-9 sm:w-9"
                            style={{ boxShadow: `0 10px 26px ${card.color}22` }}
                          >
                            <card.icon className="h-3 w-3 sm:h-4.5 sm:w-4.5" style={{ color: card.color }} />
                          </div>
                          <p className="text-[10px] font-semibold tracking-[0.02em] text-neutral-900 dark:text-white sm:text-[12px]">
                            {card.label}
                          </p>
                        </div>
                        <p className="text-[9px] text-neutral-600/90 dark:text-neutral-400 sm:text-[11px]">
                          {card.detail}
                        </p>
                      </div>
                      <div
                        className="pointer-events-none absolute bottom-2 right-3 h-10 w-10 rounded-full opacity-70 blur-2xl"
                        style={{ backgroundColor: `${card.color}33` }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            style={{ opacity: useTransform(smoothProgress, [0, 0.08], [1, 0]) }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-[64%] z-[2] -translate-x-1/2"
          >
            <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-teal-400/50 bg-white/70 shadow-[0_0_40px_rgba(45,212,191,0.4)] backdrop-blur-md dark:bg-black/50">
              <ChevronDown className="h-5 w-5 text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.9)]" />
              <ChevronDown className="-mt-2 h-5 w-5 text-teal-400/80 drop-shadow-[0_0_8px_rgba(45,212,191,0.7)]" />
            </div>
          </motion.div>
          </div>
        </div>

        <div className="relative z-[1] w-full bg-white dark:bg-black">
          <div className="relative hidden h-[90vh] sm:block sm:h-[100vh]">
            <div className="sm:sticky sm:top-0 h-full sm:h-screen w-full px-4 md:px-6">
              <div className="h-full w-full overflow-hidden rounded-3xl border border-teal-400/40 shadow-[0_0_40px_rgba(45,212,191,0.18)] dark:border-teal-400/30">
                <div className="h-full w-full origin-center scale-[1.15] sm:scale-[1.1] md:scale-100">
                  <WorldMap dots={connectionDots} lineColor="#2dd4bf" />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-[95%] max-w-none py-16">
            <div className="mb-10 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-emerald-400/80">
                Services
              </p>
              <h2 className="mt-4 mx-auto max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                Cloud, hybrid, and on-prem delivery{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  under one team.
                </span>
              </h2>
              <p className="mt-5 mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
                We design, deploy, secure, and operate infrastructure across environments with clear
                ownership and measurable outcomes.
              </p>
            </div>
            <div className="grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-6">
              {serviceStrip.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true, amount: 0.35 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/80 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-transform duration-300 dark:border-white/[0.08] dark:bg-black/50"
                >
                  <Link href={`/services/${item.slug}`} className="absolute inset-0" aria-label={item.title} />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-80"
                    style={{
                      backgroundImage: `radial-gradient(circle_at_20%_10%,${item.color}24,transparent_55%)`,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      backgroundImage: `linear-gradient(120deg, transparent, ${item.color}18, transparent)`,
                    }}
                  />
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 bg-white/80 shadow-[0_10px_28px_rgba(0,0,0,0.08)] dark:border-white/[0.1] dark:bg-white/[0.06]"
                    style={{ boxShadow: `0 12px 26px ${item.color}22` }}
                  >
                    <item.icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-neutral-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {item.detail}
                  </p>
                  <ul className="mt-4 space-y-1 text-[11px] text-neutral-600 dark:text-neutral-400">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center justify-center whitespace-nowrap rounded-full border border-neutral-200/70 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-neutral-400">
                      Explore Service
                      <span className="text-xs">→</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-black/50 dark:to-black z-[4]" />
      </div>
    </section>
  );
}
