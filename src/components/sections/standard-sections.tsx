"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Wrench,
  Rocket,
  HeadphonesIcon,
  CheckCircle2,
  Send,
  Loader2,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react";

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

/* ─── Approach steps ─── */
const steps = [
  {
    icon: Search,
    phase: "01",
    slug: "assess",
    title: "Assess",
    description:
      "Deep dive into your current architecture, pipelines, and security posture. We identify bottlenecks and risks.",
    color: "#2dd4bf",
  },
  {
    icon: Wrench,
    phase: "02",
    slug: "architect",
    title: "Architect",
    description:
      "Design a secure, scalable foundation with IaC, automated pipelines, and observability from day one.",
    color: "#34d399",
  },
  {
    icon: Rocket,
    phase: "03",
    slug: "deliver",
    title: "Deliver",
    description:
      "Implement incrementally, migrating workloads with zero downtime. Your team ships throughout the process.",
    color: "#3b82f6",
  },
  {
    icon: HeadphonesIcon,
    phase: "04",
    slug: "sustain",
    title: "Sustain",
    description:
      "Ongoing optimization, monitoring, and knowledge transfer so your team owns the platform long-term.",
    color: "#60a5fa",
  },
];

/* ─── Section divider ─── */
function SectionDivider() {
  return (
    <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

/* ─── Contact form ─── */
function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("sent");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  if (formState === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-400/10">
          <CheckCircle className="h-7 w-7 text-teal-400" />
        </div>
        <h3 className="mt-5 text-xl font-semibold">Message sent!</h3>
        <p className="mt-2 max-w-sm text-sm text-neutral-400">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-6 text-sm font-medium text-teal-400 transition hover:text-teal-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      suppressHydrationWarning
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-8 md:p-10"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-teal-500/8 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-emerald-500/8 blur-[80px]" />

      <div className="relative z-10 space-y-5">
        {/* Name row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              First Name <span className="text-teal-400">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              suppressHydrationWarning
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-black placeholder-neutral-500 outline-none transition focus:border-teal-400/40 focus:bg-white focus:ring-1 focus:ring-teal-400/20 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:placeholder-neutral-600 dark:focus:bg-white/[0.05]"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              Last Name <span className="text-teal-400">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              suppressHydrationWarning
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-black placeholder-neutral-500 outline-none transition focus:border-teal-400/40 focus:bg-white focus:ring-1 focus:ring-teal-400/20 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:placeholder-neutral-600 dark:focus:bg-white/[0.05]"
            />
          </div>
        </div>

        {/* Email & Phone row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              Email <span className="text-teal-400">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              suppressHydrationWarning
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-black placeholder-neutral-500 outline-none transition focus:border-teal-400/40 focus:bg-white focus:ring-1 focus:ring-teal-400/20 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:placeholder-neutral-600 dark:focus:bg-white/[0.05]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              suppressHydrationWarning
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-black placeholder-neutral-500 outline-none transition focus:border-teal-400/40 focus:bg-white focus:ring-1 focus:ring-teal-400/20 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:placeholder-neutral-600 dark:focus:bg-white/[0.05]"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
            Message <span className="text-teal-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            suppressHydrationWarning
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, infrastructure goals, or challenges..."
            className="w-full resize-none rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-black placeholder-neutral-500 outline-none transition focus:border-teal-400/40 focus:bg-white focus:ring-1 focus:ring-teal-400/20 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:placeholder-neutral-600 dark:focus:bg-white/[0.05]"
          />
        </div>

        {/* Error state */}
        {formState === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong. Please try again or email us directly at hello@binary-gate.com.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={formState === "sending"}
          className="group inline-flex items-center gap-2.5 rounded-full bg-black px-8 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          {formState === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

/* ─── Main component ─── */
export function StandardSections() {
  return (
    <div className="bg-[#f5f5f2] text-neutral-900">
      {/* ── Approach ── */}
      <section id="approach" className="relative overflow-hidden bg-[#f7f7f6] text-[#101316]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(246,247,249,1))]" />
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_18%_20%,rgba(210,224,244,0.6),rgba(255,255,255,0))]" />
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(15,23,42,0.18)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative mx-auto max-w-[1240px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#101316]/55">
                Approach
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-[#101316] sm:text-4xl">
                Strategy to execution, with engineering rigor.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-sm leading-relaxed text-[#101316]/70 sm:text-base">
                We follow a proven four-phase methodology that takes you from assessment
                to a fully automated, secure platform — without disrupting your delivery.
              </p>
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <FadeIn key={step.phase} delay={0.15 + i * 0.1}>
                <Link
                  href={`/approach/${step.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                      Phase {step.phase}
                    </span>
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 shadow-[0_8px_20px_rgba(15,18,22,0.08)]"
                    >
                      <step.icon className="h-5 w-5 text-slate-700" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {step.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Explore Phase
                      <span className="text-xs">→</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── About ── */}
      <section id="about" className="relative overflow-hidden bg-[#f7f7f6] text-[#101316]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(246,247,249,1))]" />
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_18%_20%,rgba(210,224,244,0.6),rgba(255,255,255,0))]" />
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(15,23,42,0.18)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative mx-auto max-w-[1240px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
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

      {/* ── Contact ── */}
      <section id="contact" className="relative overflow-hidden bg-[#f7f7f6] text-[#101316]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(246,247,249,1))]" />
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_18%_20%,rgba(210,224,244,0.6),rgba(255,255,255,0))]" />
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(15,23,42,0.18)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative mx-auto max-w-[1240px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            {/* Left — info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#101316]/55">
                  Contact
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-[#101316] sm:text-4xl">
                  Let&apos;s build together.
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-4 text-sm leading-relaxed text-[#101316]/70 sm:text-base">
                  Share your goals and we&apos;ll respond within 24 hours with a scoped plan,
                  architecture overview, and timeline.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                      <Mail className="h-4 w-4 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Email</p>
                      <a
                        href="mailto:hello@binary-gate.com"
                        className="text-sm text-slate-700 transition hover:text-slate-900"
                      >
                        hello@binary-gate.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                      <Phone className="h-4 w-4 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Phone</p>
                      <p className="text-sm text-slate-700">Available upon request</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.15}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-200 bg-[#f7f7f6] px-6 py-8 sm:px-8 md:py-10 lg:px-10">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row md:text-sm">
          <p>&copy; {new Date().getFullYear()} BinaryGate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-slate-900">Privacy</a>
            <a href="#" className="transition hover:text-slate-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
