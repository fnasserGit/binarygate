"use client";

import Link from "next/link";
import {
  Cloud,
  GitBranch,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    title: "Cloud Strategy & Architecture",
    shortDesc: "Migration, modernization, and scalable architectures that future-proof growth.",
    icon: Cloud,
    color: "#33C6FF",
    slug: "cloud-strategy-architecture",
  },
  {
    title: "Network & Security Engineering",
    shortDesc: "Secure connectivity and defense across on-prem, hybrid, and cloud.",
    icon: ShieldCheck,
    color: "#A78BFA",
    slug: "network-security-engineering",
  },
  {
    title: "DevOps & Platform Enablement",
    shortDesc: "CI/CD, IaC, Kubernetes, and automation for consistent delivery.",
    icon: GitBranch,
    color: "#60A5FA",
    slug: "devops-platform-enablement",
  },
  {
    title: "Observability & Managed Operations",
    shortDesc: "Monitoring, SRE practices, and managed services for reliability.",
    icon: Activity,
    color: "#FBBF24",
    slug: "observability-managed-operations",
  },
] as const;

export function ServicesSection() {
  const reduceMotionPref = useReducedMotion();
  const [reduceMotion, setReduceMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    setReduceMotion(reduceMotionPref);
  }, [reduceMotionPref]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f7f7f6] text-[#101316] scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(246,247,249,1))]" />
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_18%_20%,rgba(210,224,244,0.6),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(15,23,42,0.18)_1px,transparent_1px)] [background-size:20px_20px]" />

      <div
        ref={sectionRef}
        className="relative mx-auto max-w-[1240px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
      >
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#101316]/55">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-[#101316] sm:text-4xl">
            Practical engineering, delivered with clarity.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#101316]/70 sm:text-base">
            A curated set of infrastructure services designed to modernize, secure, and operate your
            platforms without friction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/30"
              >
                <div
                  className={`pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-500 motion-reduce:transition-none motion-reduce:opacity-0 ${
                    reduceMotion ? "" : "group-hover:opacity-100 group-hover:translate-x-[140%]"
                  }`}
                />

                <div className="relative flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 shadow-[0_8px_20px_rgba(15,18,22,0.08)]"
                    style={{ color: service.color, backgroundColor: `${service.color}12` }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <span
                      className="mt-1 block h-0.5 w-6 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="relative mt-5 flex items-center justify-between">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500 transition-colors group-hover:text-slate-700">
                    Explore Service →
                  </span>
                </div>
              </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
