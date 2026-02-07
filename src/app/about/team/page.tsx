"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

const values = [
  { title: "Engineering First", description: "We don't just consult — we write code, build pipelines, and ship infrastructure alongside your team." },
  { title: "Outcome Driven", description: "Every engagement has measurable goals: reduced costs, faster deployments, improved reliability." },
  { title: "Open Source Advocates", description: "We prefer open-source tools that avoid vendor lock-in and give you full control over your stack." },
  { title: "Knowledge Transfer", description: "We leave your team stronger than we found it. Every engagement includes training and documentation." },
];

export default function TeamPage() {
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
          <FadeIn><p className="text-xs font-medium uppercase tracking-[0.4em] text-emerald-400/80">About</p></FadeIn>
          <FadeIn delay={0.1}><h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight md:text-6xl">Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Team</span></h1></FadeIn>
          <FadeIn delay={0.2}><p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">We&apos;re a distributed team of cloud architects, platform engineers, and security specialists who&apos;ve built infrastructure at scale for startups, enterprises, and governments across 6 continents.</p></FadeIn>
        </div>
      </section>

      <section className="relative px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn><h2 className="text-2xl font-semibold md:text-3xl">Our Values</h2></FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7">
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{v.description}</p>
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
              <h2 className="text-2xl font-semibold md:text-3xl">Want to join the team?</h2>
              <p className="mt-4 text-neutral-400">We&apos;re always looking for talented engineers who are passionate about cloud infrastructure and DevOps.</p>
              <Link href="/about/careers" className="mt-8 group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                View Open Positions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
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
