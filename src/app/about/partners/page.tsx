"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Cloud, Server, Shield, BarChart3 } from "lucide-react";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

const partners = [
  { name: "Amazon Web Services", category: "Cloud Provider", description: "Advanced Tier Partner with deep expertise across compute, networking, security, and data services.", icon: Cloud, color: "#2dd4bf" },
  { name: "Microsoft Azure", category: "Cloud Provider", description: "Solutions Partner for Infrastructure with specializations in hybrid cloud and identity management.", icon: Cloud, color: "#3b82f6" },
  { name: "Google Cloud Platform", category: "Cloud Provider", description: "Partner specializing in Kubernetes, data analytics, and machine learning infrastructure.", icon: Cloud, color: "#34d399" },
  { name: "HashiCorp", category: "Infrastructure Tooling", description: "Certified partner for Terraform, Vault, Consul, and Nomad — core to our IaC and security practice.", icon: Server, color: "#67e8f9" },
  { name: "Datadog", category: "Observability", description: "Partner for full-stack monitoring, APM, and log management across our managed services offerings.", icon: BarChart3, color: "#60a5fa" },
  { name: "Snyk", category: "Security", description: "Partner for developer-first security tooling — container scanning, SAST, and open-source vulnerability management.", icon: Shield, color: "#1d8bc4" },
];

export default function PartnersPage() {
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
          <FadeIn><p className="text-xs font-medium uppercase tracking-[0.4em] text-blue-400/80">About</p></FadeIn>
          <FadeIn delay={0.1}><h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight md:text-6xl">Our <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Partners</span></h1></FadeIn>
          <FadeIn delay={0.2}><p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">We partner with the best technology companies in the world to deliver enterprise-grade cloud infrastructure, security, and observability solutions to our clients.</p></FadeIn>
        </div>
      </section>

      <section className="relative px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <FadeIn key={p.name} delay={0.1 + i * 0.08}>
                <div className="group h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06]">
                    <p.icon className="h-5 w-5" style={{ color: p.color }} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
                  <span className="mt-1 inline-block text-xs font-mono uppercase tracking-wider" style={{ color: p.color }}>{p.category}</span>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto w-full max-w-6xl text-center">
          <FadeIn>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 md:p-16">
              <h2 className="text-2xl font-semibold md:text-3xl">Interested in partnering?</h2>
              <p className="mt-4 text-neutral-400">We&apos;re always open to strategic partnerships that help us deliver better outcomes for our clients.</p>
              <Link href="/contact" className="mt-8 group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                Get in Touch <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
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
