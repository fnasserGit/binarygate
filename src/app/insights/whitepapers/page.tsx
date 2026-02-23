"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Download, FileText } from "lucide-react";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

const whitepapers = [
  { title: "The Enterprise Cloud Migration Playbook", pages: "42 pages", description: "A comprehensive guide to planning, executing, and validating enterprise-scale cloud migrations with zero downtime. Covers the 6R methodology, cost modeling, and organizational change management.", color: "#2dd4bf" },
  { title: "Zero-Trust Architecture for Cloud-Native Applications", pages: "28 pages", description: "How to design and implement zero-trust security for Kubernetes workloads including service mesh, mTLS, network policies, and identity-aware proxies.", color: "#34d399" },
  { title: "FinOps: A Technical Guide to Cloud Cost Optimization", pages: "35 pages", description: "Technical strategies for reducing cloud spend by 30-50% through automated right-sizing, reserved capacity planning, and architectural improvements.", color: "#3b82f6" },
  { title: "Building Internal Developer Platforms That Scale", pages: "30 pages", description: "A practical framework for designing internal developer platforms with Backstage, Crossplane, and ArgoCD that improve developer productivity by 3-5x.", color: "#1d8bc4" },
];

export default function WhitepapersPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f2] text-neutral-900">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f5f5f2]/90 backdrop-blur-lg">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative h-11 w-11 overflow-hidden rounded-lg"><Image src="/logo.png" alt="BinaryGate" fill className="object-contain" /></span>
            <span className="text-base font-semibold tracking-wide">BinaryGate</span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-neutral-900"><ArrowLeft className="h-4 w-4" /> Back</Link>
        </div>
      </header>

      <section className="relative overflow-hidden pt-24 pb-16 px-4 md:pt-32 md:pb-24 md:px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-6xl">
          <FadeIn><p className="text-xs font-medium uppercase tracking-[0.4em] text-blue-400/80">Insights</p></FadeIn>
          <FadeIn delay={0.1}><h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight md:text-6xl"><span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Whitepapers</span></h1></FadeIn>
          <FadeIn delay={0.2}><p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">In-depth research and technical guides on cloud architecture, security, and infrastructure best practices.</p></FadeIn>
        </div>
      </section>

      <section className="relative px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          {whitepapers.map((wp, i) => (
            <FadeIn key={wp.title} delay={0.1 + i * 0.1}>
              <div className="group flex flex-col sm:flex-row gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${wp.color}12` }}>
                  <FileText className="h-7 w-7" style={{ color: wp.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{wp.title}</h3>
                  <p className="mt-1 text-xs font-mono uppercase tracking-wider text-neutral-500">{wp.pages}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{wp.description}</p>
                  <button className="mt-5 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-colors hover:bg-white/[0.06]" style={{ borderColor: `${wp.color}30`, color: wp.color }}>
                    <Download className="h-3.5 w-3.5" /> Download PDF
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/[0.06] px-4 py-8 md:px-6 md:py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-xs md:text-sm text-neutral-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} BinaryGate. All rights reserved.</p>
          <div className="flex gap-6"><Link href="/" className="transition hover:text-neutral-900">Home</Link><Link href="/contact" className="transition hover:text-neutral-900">Contact</Link></div>
        </div>
      </footer>
    </div>
  );
}
