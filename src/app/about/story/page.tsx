"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Globe, Rocket } from "lucide-react";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

const milestones = [
  { icon: Lightbulb, year: "2020", title: "The Beginning", description: "BinaryGate was founded with a simple mission: help companies build better cloud infrastructure without the enterprise consulting overhead." },
  { icon: Globe, year: "2021", title: "Global Expansion", description: "Expanded operations across the Middle East and Africa, helping organizations modernize infrastructure and adopt cloud-native practices." },
  { icon: Target, year: "2023", title: "Platform Focus", description: "Shifted to platform engineering and internal developer platforms, helping 50+ engineer organizations scale their DevOps practices." },
  { icon: Rocket, year: "2025", title: "Full-Spectrum Cloud", description: "Now delivering end-to-end cloud and DevOps services across 6 continents with a focus on security, automation, and cost optimization." },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f2] text-neutral-900">
      <section className="relative overflow-hidden pt-24 pb-16 px-4 md:pt-32 md:pb-24 md:px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(45,212,191,0.1),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-6xl">
          <FadeIn><p className="text-xs font-medium uppercase tracking-[0.4em] text-teal-400/80">About</p></FadeIn>
          <FadeIn delay={0.1}><h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight md:text-6xl">Our <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Story</span></h1></FadeIn>
          <FadeIn delay={0.2}><p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">BinaryGate was born from the belief that every engineering team deserves world-class infrastructure — not just those with the budget for Big Four consultants. We&apos;re engineers first, and we embed with your team to deliver real outcomes.</p></FadeIn>
        </div>
      </section>

      <section className="relative px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn><h2 className="text-2xl font-semibold md:text-3xl">Our Journey</h2></FadeIn>
          <div className="mt-10 space-y-6">
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={0.1 + i * 0.1}>
                <div className="flex gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500/10">
                    <m.icon className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-teal-400/60">{m.year}</p>
                    <h3 className="mt-1 text-lg font-semibold">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">{m.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { value: "45+", label: "Cloud Programs Delivered" },
                { value: "6", label: "Continents Served" },
                { value: "99.9%", label: "Average Platform Uptime" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
                  <p className="text-4xl font-bold text-teal-400">{stat.value}</p>
                  <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
