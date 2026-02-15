"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { solutionBySlug, solutions } from "@/data/solutions";
import { serviceBySlug } from "@/data/services";
import { CONSULTATION_URL } from "@/lib/links";

function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial = {
    opacity: 0,
    y: direction === "up" ? 40 : 0,
    x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
  };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function SolutionPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutionBySlug[slug];

  if (!solution) notFound();

  const Icon = solution.icon;
  const currentIdx = solutions.findIndex((s) => s.slug === slug);
  const prev = currentIdx > 0 ? solutions[currentIdx - 1] : null;
  const next = currentIdx < solutions.length - 1 ? solutions[currentIdx + 1] : null;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative h-11 w-11 overflow-hidden rounded-lg">
              <Image src="/logo.png" alt="BinaryGate" fill className="object-contain" />
            </span>
            <span className="text-base font-semibold tracking-wide">BinaryGate</span>
          </Link>
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 px-4 md:pt-32 md:pb-24 md:px-6">
        <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at 30% 20%, ${solution.color}18, transparent 60%)` }} />
        <div className="relative mx-auto w-full max-w-6xl">
          <FadeIn>
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] transition hover:text-white" style={{ color: solution.color }}>
              <ArrowLeft className="h-3 w-3" /> Solutions
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-6 flex items-start gap-3 md:gap-5 md:items-center">
              <div className="flex h-12 w-12 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-white/[0.08]" style={{ backgroundColor: `${solution.color}15` }}>
                <Icon className="h-6 w-6 md:h-8 md:w-8" style={{ color: solution.color }} />
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight md:text-6xl break-words">{solution.title}</h1>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}><p className="mt-4 max-w-2xl text-base sm:text-xl font-medium md:text-2xl" style={{ color: solution.color }}>{solution.headline}</p></FadeIn>
          <FadeIn delay={0.3}><p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">{solution.description}</p></FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn><p className="text-xs font-medium uppercase tracking-[0.4em]" style={{ color: `${solution.color}cc` }}>Benefits</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="mt-4 text-3xl font-semibold md:text-4xl">What you get</h2></FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {solution.benefits.map((b, i) => (
              <FadeIn key={b.title} delay={0.1 + i * 0.08}>
                <div className="group relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${solution.color}18` }}>
                      <CheckCircle2 className="h-4 w-4" style={{ color: solution.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-400">{b.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Approach */}
      <section className="relative px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn><p className="text-xs font-medium uppercase tracking-[0.4em]" style={{ color: `${solution.color}cc` }}>Our Approach</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="mt-4 text-3xl font-semibold md:text-4xl">How we deliver</h2></FadeIn>
          <div className="mt-10 grid gap-4">
            {solution.approach.map((step, i) => (
              <FadeIn key={step} delay={0.1 + i * 0.06} direction="right">
                <div className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-5">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: `${solution.color}18`, color: solution.color }}>
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-neutral-300 md:text-base">{step}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Related Services */}
      <section className="relative px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn><p className="text-xs font-medium uppercase tracking-[0.4em]" style={{ color: `${solution.color}cc` }}>Related Services</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="mt-4 text-3xl font-semibold md:text-4xl">Services that power this solution</h2></FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {solution.relatedServices.map((slug, i) => {
              const svc = serviceBySlug[slug];
              if (!svc) return null;
              return (
                <FadeIn key={slug} delay={0.1 + i * 0.08}>
                  <Link href={`/services/${slug}`} className="block h-full">
                    <div className={`group relative h-full rounded-2xl border ${svc.borderColor} bg-gradient-to-b ${svc.gradient} p-6 transition-all duration-300 hover:border-white/20 hover:-translate-y-1`}>
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] ${svc.iconColor}`}>
                        <svc.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold">{svc.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-400">{svc.shortDesc}</p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* CTA */}
      <section className="relative px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-10 md:p-16">
              <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full blur-[100px]" style={{ backgroundColor: `${solution.color}15` }} />
              <div className="relative z-10">
                <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
                  Ready to start your <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${solution.color}, white)` }}>{solution.title.toLowerCase()}</span> journey?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">Let&apos;s discuss your requirements. We&apos;ll respond within 24 hours.</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={CONSULTATION_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
                  >
                    Book a Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-white/[0.06] px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          {prev ? (
            <Link href={`/solutions/${prev.slug}`} className="group flex items-center gap-3 text-sm text-neutral-400 transition hover:text-white">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <div><p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">Previous</p><p className="mt-0.5 font-medium">{prev.title}</p></div>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/solutions/${next.slug}`} className="group flex items-center gap-3 text-sm text-neutral-400 transition hover:text-white text-right">
              <div><p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">Next</p><p className="mt-0.5 font-medium">{next.title}</p></div>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : <div />}
        </div>
      </section>

      <footer className="border-t border-white/[0.06] px-4 py-8 md:px-6 md:py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-xs md:text-sm text-neutral-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} BinaryGate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
export const runtime = "edge";
