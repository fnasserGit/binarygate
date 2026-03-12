"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Layers } from "lucide-react";
import {
  ArchitectureIcon,
  SecurityIcon,
  PipelineIcon,
  ObservabilityIcon,
} from "@/components/ui/service-icons";
import { RotatingUseCaseLine } from "@/components/ui/rotating-use-case-line";

/* ─── Scroll-triggered popup cards ─── */
const serviceStrip = [
  {
    slug: "cloud",
    title: "Cloud Platforms",
    detail: "Landing zones, multi-region design, resiliency, and governance.",
    tags: ["AWS", "Azure", "GCP"],
    icon: ArchitectureIcon,
    color: "#2dd4bf",
    points: ["Multi-account guardrails", "Resilience by design"],
  },
  {
    slug: "hybrid-on-prem",
    title: "Hybrid & On-Prem",
    detail: "Unified control planes across cloud + data center with consistent policy.",
    tags: ["Direct Connect", "Azure Arc", "VPN"],
    icon: Layers,
    color: "#3b82f6",
    points: ["Unified governance", "Shared observability"],
  },
  {
    slug: "network-security-engineering",
    title: "Network & Security",
    detail: "Secure connectivity, segmentation, and hardened access.",
    tags: ["Zero Trust", "IAM", "WAF"],
    icon: SecurityIcon,
    color: "#34d399",
    points: ["Continuous compliance", "Threat detection"],
  },
  {
    slug: "devops-platform-enablement",
    title: "DevOps & Delivery",
    detail: "Automated build, test, and zero-downtime releases.",
    tags: ["GitOps", "Canary", "Blue/Green"],
    icon: PipelineIcon,
    color: "#67e8f9",
    points: ["Safe rollouts", "Fast feedback"],
  },
  {
    slug: "managed-cloud-operations",
    title: "Managed Operations",
    detail: "Monitoring, incident response, and reliability engineering.",
    tags: ["SRE", "Runbooks", "On-call"],
    icon: ObservabilityIcon,
    color: "#10b981",
    points: ["Actionable alerts", "SLOs"],
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    detail: "Pipelines, warehousing, and actionable insights.",
    tags: ["ETL", "BI", "Snowflake"],
    icon: Zap,
    color: "#facc15",
    points: ["Decision-ready data", "Reliable pipelines"],
  },
];

export function HeroEffectsSection() {
  return (
    <section className="relative bg-[#f5f5f2] text-neutral-900">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),rgba(245,245,242,1))]" />

        <div className="relative min-h-[100svh]">
          <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-20 pt-24 sm:pt-28">
            <div className="grid items-center gap-12 lg:grid-cols-1">
              <div className="max-w-2xl text-center sm:text-left">
                <h1 className="text-[2.05rem] font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl">
                  Infrastructure Without Borders.
                </h1>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-neutral-700 sm:text-lg md:text-xl">
                  Cloud, hybrid, and on-prem engineering for performance, security, and scale.
                </p>
                <RotatingUseCaseLine className="text-center sm:text-left" />
                <p className="mt-8 text-sm font-medium text-neutral-600 sm:text-base">
                  BinaryGate experts are ready for you.
                </p>
                <div className="mt-4 flex justify-center sm:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    Request Information
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-[1] w-full bg-[#f5f5f2]">
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
                  <Link href="/expertise" className="absolute inset-0" aria-label={item.title} />
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
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-[#b3b3b3]/70 to-[#b3b3b3] z-[4]" />
      </div>
    </section>
  );
}
