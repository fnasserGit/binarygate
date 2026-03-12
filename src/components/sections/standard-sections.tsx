"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/ui/service-card";
import { CONSULTATION_URL } from "@/lib/links";
import { ChevronDown } from "lucide-react";

/* ─── Animated wrapper ─── */
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
  const inView = useInView(ref, { once: true, margin: "-80px" });

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

/* ─── Approach stages ─── */
const approachStages = [
  {
    phase: "PHASE 01",
    slug: "assess",
    title: "Assess",
    description:
      "Deep dive into your current architecture, pipelines, and security posture. We identify bottlenecks and risks.",
  },
  {
    phase: "PHASE 02",
    slug: "architect",
    title: "Architect",
    description:
      "Design a secure, scalable foundation with IaC, automated pipelines, and observability from day one.",
  },
  {
    phase: "PHASE 03",
    slug: "deliver",
    title: "Deliver",
    description:
      "Implement incrementally, migrating workloads with zero downtime. Your team ships throughout the process.",
  },
  {
    phase: "PHASE 04",
    slug: "sustain",
    title: "Sustain",
    description:
      "Ongoing optimization, monitoring, and knowledge transfer so your team owns the platform long-term.",
  },
] as const;

/* ─── Q&A ─── */
const qaItems = [
  {
    question: "Migrating to the cloud?",
    answer:
      "We map dependencies, data flows, and risk, then migrate in waves with rollback plans. Expect a clear cutover strategy, minimal downtime, and a tested path for each workload.",
  },
  {
    question: "Running hybrid or on-prem?",
    answer:
      "We modernize without disruption by stabilizing the core first, then layering automation and observability. The result is a hybrid setup that stays compliant while reducing day‑to‑day ops load.",
  },
  {
    question: "Need DevOps?",
    answer:
      "We build CI/CD, GitOps, and infrastructure-as-code so deployments are repeatable and safe. You get faster releases, consistent environments, and a pipeline your team can own.",
  },
  {
    question: "Kubernetes troubles?",
    answer:
      "We audit cluster health, improve resource controls, and harden networking and security. Then we add guardrails, autoscaling, and dashboards to keep reliability predictable.",
  },
  {
    question: "Security gaps?",
    answer:
      "We close gaps with zero-trust controls, hardened baselines, and continuous monitoring. You get measurable risk reduction and a roadmap to maintain compliance long-term.",
  },
  {
    question: "High cloud bills?",
    answer:
      "We analyze usage patterns, rightsizing, and storage tiers, then tune autoscaling. Expect cost savings without sacrificing performance or resiliency.",
  },
  {
    question: "Scaling fast?",
    answer:
      "We design for real traffic with multi-region readiness, caching, and load testing. Architecture decisions are tied to business growth targets and SLAs.",
  },
  {
    question: "Incidents happening often?",
    answer:
      "We implement observability, alert tuning, and response playbooks. The goal is fewer alerts, faster resolution, and clear ownership when incidents happen.",
  },
  {
    question: "Need an outsourced team?",
    answer:
      "We embed senior engineers who work inside your process and tools. You get delivery velocity without the overhead of recruiting or onboarding.",
  },
  {
    question: "Need a second opinion?",
    answer:
      "We review your architecture, security posture, and reliability risks, then deliver a prioritized action plan. You leave with clear next steps and realistic timelines.",
  },
];

/* ─── Section divider ─── */
function SectionDivider() {
  return (
    <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
  );
}

function ApproachArrow({
  direction,
  active,
  delayMs,
}: {
  direction: "right" | "down";
  active: boolean;
  delayMs: number;
}) {
  const isRight = direction === "right";
  return (
    <div className={`flex ${isRight ? "items-center" : "items-start"} justify-center justify-self-center`}>
      <svg
        viewBox={isRight ? "0 0 64 12" : "0 0 12 64"}
        className={isRight ? "h-4 w-16" : "h-16 w-4"}
        aria-hidden="true"
        style={
          active
            ? {
                animation: "approach-arrow-pulse 800ms ease-in-out",
                animationDelay: `${delayMs}ms`,
                animationFillMode: "both",
              }
            : undefined
        }
      >
        {isRight ? (
          <>
            <line x1="0" y1="6" x2="54" y2="6" stroke="rgba(15,23,42,0.25)" strokeWidth="2" />
            <polyline
              points="48,2 54,6 48,10"
              fill="none"
              stroke="var(--spark)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        ) : (
          <>
            <line x1="6" y1="0" x2="6" y2="54" stroke="rgba(15,23,42,0.25)" strokeWidth="2" />
            <polyline
              points="2,48 6,54 10,48"
              fill="none"
              stroke="var(--spark)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
      </svg>
    </div>
  );
}

/* ─── Main component ─── */
export function StandardSections() {
  const reduceMotion = useReducedMotion();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const approachInView = useInView(approachRef, { once: true, amount: 0.25 });
  const shouldAnimateApproach = approachInView && !reduceMotion;

  const getCardAnim = (index: number) => {
    const delay = index * 180;
    if (reduceMotion) {
      return { className: "opacity-100 translate-y-0", style: undefined, delay };
    }
    return {
      className: shouldAnimateApproach ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      style: {
        transition: "opacity 600ms ease-out, transform 600ms ease-out",
        transitionDelay: `${delay}ms`,
      },
      delay,
    };
  };

  return (
    <div className="bg-white text-neutral-900">
      {/* ── Approach ── */}
      <section id="approach" className="bg-white text-[#101316]">
        <div ref={approachRef} className="mx-auto max-w-[1440px] px-6 py-8 sm:px-8 md:py-12 lg:px-10">
          <style>{`
            @keyframes approach-arrow-pulse {
              0% { opacity: 0.55; filter: drop-shadow(0 0 0 rgba(var(--spark-rgb),0)); }
              50% { opacity: 1; filter: drop-shadow(0 0 14px rgba(var(--spark-rgb),0.35)); }
              100% { opacity: 0.7; filter: drop-shadow(0 0 0 rgba(var(--spark-rgb),0)); }
            }
          `}</style>
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                Strategy to execution, with engineering rigor.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                We follow a proven four-phase methodology that takes you from assessment
                to a fully automated, secure platform — without disrupting your delivery.
              </p>
            </FadeIn>
          </div>

          <div className="mt-12 space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:hidden">
              {approachStages.map((stage, index) => (
                <div key={stage.phase} className="space-y-6">
                  <div {...getCardAnim(index)}>
                    <ServiceCard
                      title={stage.title}
                      description={stage.description}
                      href="/what-we-do"
                      eyebrow={stage.phase}
                      className="px-8 py-6 h-full"
                      descriptionClassName="whitespace-normal break-words"
                      readMoreClassName="mt-auto"
                    />
                  </div>
                  {index < approachStages.length - 1 ? (
                    <ApproachArrow
                      direction="down"
                      active={shouldAnimateApproach}
                      delayMs={getCardAnim(index).delay + 250}
                    />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="hidden sm:grid lg:hidden">
              <div className="grid grid-cols-[minmax(0,1.2fr)_auto_minmax(0,1.2fr)] items-stretch gap-6">
                <div {...getCardAnim(0)} className="h-full">
                  <ServiceCard
                    title={approachStages[0].title}
                    description={approachStages[0].description}
                    href="/what-we-do"
                    eyebrow={approachStages[0].phase}
                    className="px-8 py-6 h-full"
                    descriptionClassName="whitespace-normal break-words"
                    readMoreClassName="mt-auto"
                  />
                </div>
                <ApproachArrow direction="right" active={shouldAnimateApproach} delayMs={getCardAnim(0).delay + 250} />
                <div {...getCardAnim(1)} className="h-full">
                  <ServiceCard
                    title={approachStages[1].title}
                    description={approachStages[1].description}
                    href="/what-we-do"
                    eyebrow={approachStages[1].phase}
                    className="px-8 py-6 h-full"
                    descriptionClassName="whitespace-normal break-words"
                    readMoreClassName="mt-auto"
                  />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-[minmax(0,1.2fr)_auto_minmax(0,1.2fr)] items-stretch gap-6">
                <div {...getCardAnim(2)} className="h-full">
                  <ServiceCard
                    title={approachStages[2].title}
                    description={approachStages[2].description}
                    href="/what-we-do"
                    eyebrow={approachStages[2].phase}
                    className="px-8 py-6 h-full"
                    descriptionClassName="whitespace-normal break-words"
                    readMoreClassName="mt-auto"
                  />
                </div>
                <ApproachArrow direction="right" active={shouldAnimateApproach} delayMs={getCardAnim(2).delay + 250} />
                <div {...getCardAnim(3)} className="h-full">
                  <ServiceCard
                    title={approachStages[3].title}
                    description={approachStages[3].description}
                    href="/what-we-do"
                    eyebrow={approachStages[3].phase}
                    className="px-8 py-6 h-full"
                    descriptionClassName="whitespace-normal break-words"
                    readMoreClassName="mt-auto"
                  />
                </div>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-[minmax(0,1.2fr)_auto_minmax(0,1.2fr)_auto_minmax(0,1.2fr)_auto_minmax(0,1.2fr)] items-stretch gap-6">
              <div {...getCardAnim(0)} className="h-full">
                <ServiceCard
                  title={approachStages[0].title}
                  description={approachStages[0].description}
                  href="/what-we-do"
                  eyebrow={approachStages[0].phase}
                  className="px-8 py-6 h-full"
                  descriptionClassName="whitespace-normal break-words"
                  readMoreClassName="mt-auto"
                />
              </div>
              <ApproachArrow direction="right" active={shouldAnimateApproach} delayMs={getCardAnim(0).delay + 250} />
              <div {...getCardAnim(1)} className="h-full">
                <ServiceCard
                  title={approachStages[1].title}
                  description={approachStages[1].description}
                  href="/what-we-do"
                  eyebrow={approachStages[1].phase}
                  className="px-8 py-6 h-full"
                  descriptionClassName="whitespace-normal break-words"
                  readMoreClassName="mt-auto"
                />
              </div>
              <ApproachArrow direction="right" active={shouldAnimateApproach} delayMs={getCardAnim(1).delay + 250} />
              <div {...getCardAnim(2)} className="h-full">
                <ServiceCard
                  title={approachStages[2].title}
                  description={approachStages[2].description}
                  href="/what-we-do"
                  eyebrow={approachStages[2].phase}
                  className="px-8 py-6 h-full"
                  descriptionClassName="whitespace-normal break-words"
                  readMoreClassName="mt-auto"
                />
              </div>
              <ApproachArrow direction="right" active={shouldAnimateApproach} delayMs={getCardAnim(2).delay + 250} />
              <div {...getCardAnim(3)} className="h-full">
                <ServiceCard
                  title={approachStages[3].title}
                  description={approachStages[3].description}
                  href="/what-we-do"
                  eyebrow={approachStages[3].phase}
                  className="px-8 py-6 h-full"
                  descriptionClassName="whitespace-normal break-words"
                  readMoreClassName="mt-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── About ── */}
      <section id="about" className="bg-white text-[#101316]">
        <div className="mx-auto max-w-[1240px] px-6 py-8 sm:px-8 md:py-12 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeIn>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#101316]/55">
                  About
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-[#101316] sm:text-4xl">
                  An engineering-first partner.
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-4 text-sm leading-relaxed text-[#101316]/70 sm:text-base">
                  BinaryGate embeds with product teams to unblock infrastructure, DevOps, and
                  security constraints across cloud, hybrid, and on-prem environments. We are a
                  team of highly skilled professionals who design, build, and operate platforms
                  until they are stable, secure, and production-ready.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.1} direction="right">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                  <Image
                    src="/about-bg.png"
                    alt="BinaryGate global infrastructure"
                    fill
                    className="rounded-3xl object-contain opacity-95"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Q&A ── */}
      <section id="qa" className="bg-white text-[#101316]">
        <div className="mx-auto max-w-[1240px] px-6 py-8 sm:px-8 md:py-12 lg:px-10">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#101316]/55">
                Q&amp;A
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-[#101316] sm:text-4xl">
                Common questions, clear answers.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-sm leading-relaxed text-[#101316]/70 sm:text-base">
                A quick look at where we help most and how we approach it.
              </p>
            </FadeIn>
          </div>

          <div className="mt-10">
            {qaItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              const answerId = `faq-answer-${index}`;
              return (
                <div
                  key={item.question}
                  className={`relative border-b border-black/10 ${isOpen ? "bg-black/[0.02]" : ""}`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center gap-4 px-0 py-5 text-left sm:py-6"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className="hidden w-10 text-xs font-semibold text-black/40 sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 text-base font-semibold transition-colors ${
                        isOpen ? "text-[var(--spark)]" : "text-black"
                      }`}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 flex-shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-[var(--spark)]" : "text-black/60"
                      }`}
                    />
                  </button>
                  {isOpen ? (
                    <span className="absolute left-0 top-0 h-full w-0.5 bg-[var(--spark)]" />
                  ) : null}
                  <div
                    id={answerId}
                    role="region"
                    aria-hidden={!isOpen}
                    className={`grid ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    } ${reduceMotion ? "" : "transition-all duration-300 ease-out"}`}
                  >
                    <div className="overflow-hidden pb-4 pl-14 pr-6 sm:pb-5 sm:pl-16 sm:pr-10">
                      <p className="text-sm leading-relaxed text-black/70 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <p className="mb-4 text-sm font-semibold text-black sm:text-base">
              Ready to start your modernization and cloud journey?
            </p>
            <Link
              href={CONSULTATION_URL}
              className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1113]"
              style={{ backgroundColor: "var(--spark)" }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
