"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

const posts = [
  { title: "Building Multi-Region Active-Active Architectures on AWS", category: "Cloud Architecture", date: "Jan 2026", excerpt: "A deep dive into designing active-active multi-region deployments with sub-10ms failover using Route 53, DynamoDB Global Tables, and EKS.", color: "#2dd4bf" },
  { title: "The Complete Guide to GitOps with ArgoCD", category: "CI/CD", date: "Dec 2025", excerpt: "How to implement a production-grade GitOps workflow using ArgoCD, Kustomize, and GitHub Actions for Kubernetes deployments.", color: "#67e8f9" },
  { title: "Reducing Cloud Spend by 45%: A FinOps Case Study", category: "Cost Optimization", date: "Nov 2025", excerpt: "Real-world strategies we used to cut cloud costs for a gaming company through reserved instances, spot fleets, and right-sizing.", color: "#3b82f6" },
  { title: "Zero-Trust Network Architecture: From Theory to Implementation", category: "Security", date: "Oct 2025", excerpt: "A practical guide to implementing zero-trust networking in Kubernetes with service mesh, network policies, and mutual TLS.", color: "#34d399" },
  { title: "Internal Developer Platforms: When and How to Build One", category: "Platform Engineering", date: "Sep 2025", excerpt: "When your organization is ready for an IDP, what to build first, and how to avoid the common pitfalls of platform engineering.", color: "#1d8bc4" },
  { title: "OpenTelemetry in Production: Lessons Learned", category: "Observability", date: "Aug 2025", excerpt: "Practical lessons from instrumenting 40+ microservices with OpenTelemetry, including performance impact and sampling strategies.", color: "#60a5fa" },
];

export default function BlogPage() {
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(45,212,191,0.1),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-6xl">
          <FadeIn><p className="text-xs font-medium uppercase tracking-[0.4em] text-teal-400/80">Insights</p></FadeIn>
          <FadeIn delay={0.1}><h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight md:text-6xl"><span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Blog</span></h1></FadeIn>
          <FadeIn delay={0.2}><p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">Technical deep-dives, architecture guides, and best practices from the BinaryGate engineering team.</p></FadeIn>
        </div>
      </section>

      <section className="relative px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <FadeIn key={post.title} delay={0.1 + i * 0.08}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
                  <span className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] font-mono uppercase tracking-wider" style={{ borderColor: `${post.color}30`, color: post.color }}>{post.category}</span>
                  <h3 className="mt-4 text-lg font-semibold leading-tight">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500"><Calendar className="h-3 w-3" />{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium opacity-0 transition-all group-hover:opacity-100" style={{ color: post.color }}>
                      Read more <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
