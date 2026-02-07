"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, TrendingUp } from "lucide-react";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

const caseStudies = [
  { title: "Fintech Group: Multi-Cloud Landing Zone", industry: "Financial Services", region: "Middle East", result: "60% faster compliance certification", description: "Designed and deployed AWS + Azure landing zones with full compliance automation for a fintech group operating across UAE, KSA, and Bahrain.", color: "#2dd4bf" },
  { title: "E-Commerce Platform: Peak Traffic Handling", industry: "E-Commerce", region: "Global", result: "10x traffic capacity, 45% cost reduction", description: "Re-architected auto-scaling infrastructure to handle Black Friday traffic spikes while reducing monthly cloud spend through spot instances and right-sizing.", color: "#3b82f6" },
  { title: "Telecom Operator: CI/CD Modernization", industry: "Telecommunications", region: "Africa", result: "Release cycles cut from weeks to hours", description: "Migrated legacy Jenkins pipelines to GitHub Actions + ArgoCD for a pan-African telecom operator serving 15M+ subscribers.", color: "#67e8f9" },
  { title: "Healthcare SaaS: HIPAA Compliance", industry: "Healthcare", region: "Americas", result: "SOC 2 + HIPAA certified in 4 months", description: "Built HIPAA-compliant cloud infrastructure on AWS with automated compliance evidence collection for a telehealth platform.", color: "#34d399" },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative h-11 w-11 overflow-hidden rounded-lg"><Image src="/logo.png" alt="BinaryGate" fill className="object-contain" /></span>
            <span className="text-base font-semibold tracking-wide">BinaryGate</span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white"><ArrowLeft className="h-4 w-4" /> Back</Link>
        </div>
      </header>

      <section className="relative overflow-hidden pt-24 pb-16 px-4 md:pt-32 md:pb-24 md:px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(52,211,153,0.1),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-6xl">
          <FadeIn><p className="text-xs font-medium uppercase tracking-[0.4em] text-emerald-400/80">Insights</p></FadeIn>
          <FadeIn delay={0.1}><h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight md:text-6xl">Case <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Studies</span></h1></FadeIn>
          <FadeIn delay={0.2}><p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">Real-world results from our cloud and DevOps engagements across industries and regions.</p></FadeIn>
        </div>
      </section>

      <section className="relative px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.title} delay={0.1 + i * 0.1}>
              <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border px-3 py-1 text-[10px] font-mono uppercase tracking-wider" style={{ borderColor: `${cs.color}30`, color: cs.color }}>{cs.industry}</span>
                      <span className="text-[10px] text-neutral-500">{cs.region}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">{cs.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-400">{cs.description}</p>
                  </div>
                  <div className="flex-shrink-0 rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-4 md:ml-6 md:text-right">
                    <TrendingUp className="h-5 w-5 mb-2" style={{ color: cs.color }} />
                    <p className="text-sm font-semibold text-white">{cs.result}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/[0.06] px-4 py-8 md:px-6 md:py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-xs md:text-sm text-neutral-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} BinaryGate. All rights reserved.</p>
          <div className="flex gap-6"><Link href="/" className="transition hover:text-white">Home</Link><Link href="/contact" className="transition hover:text-white">Contact</Link></div>
        </div>
      </footer>
    </div>
  );
}
