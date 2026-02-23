"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, MapPin, Clock } from "lucide-react";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

const openings = [
  { title: "Senior Cloud Architect", team: "Architecture", location: "Remote (MEA)", type: "Full-time" },
  { title: "Platform Engineer", team: "Platform", location: "Remote (Global)", type: "Full-time" },
  { title: "DevSecOps Engineer", team: "Security", location: "Remote (MEA / EU)", type: "Full-time" },
  { title: "SRE / Observability Engineer", team: "Operations", location: "Remote (Global)", type: "Full-time" },
];

export default function CareersPage() {
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(103,232,249,0.1),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-6xl">
          <FadeIn><p className="text-xs font-medium uppercase tracking-[0.4em] text-cyan-400/80">About</p></FadeIn>
          <FadeIn delay={0.1}><h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight md:text-6xl">Join <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">BinaryGate</span></h1></FadeIn>
          <FadeIn delay={0.2}><p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">We&apos;re building the future of cloud infrastructure consulting. If you&apos;re passionate about solving hard infrastructure problems and working with cutting-edge technology, we&apos;d love to hear from you.</p></FadeIn>
        </div>
      </section>

      <section className="relative px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn><h2 className="text-2xl font-semibold md:text-3xl">Open Positions</h2></FadeIn>
          <div className="mt-10 space-y-4">
            {openings.map((job, i) => (
              <FadeIn key={job.title} delay={0.1 + i * 0.08}>
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.12] hover:bg-white/[0.04]">
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {job.type}</span>
                      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-xs text-cyan-400">{job.team}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2 text-sm font-medium transition hover:bg-black/5">
                    Apply <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
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
