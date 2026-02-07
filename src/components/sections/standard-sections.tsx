"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Search,
  Wrench,
  Rocket,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle2,
  Send,
  Loader2,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react";
import { services } from "@/data/services";

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
    title: "Assess",
    description:
      "Deep dive into your current architecture, pipelines, and security posture. We identify bottlenecks and risks.",
  },
  {
    icon: Wrench,
    phase: "02",
    title: "Architect",
    description:
      "Design a secure, scalable foundation with IaC, automated pipelines, and observability from day one.",
  },
  {
    icon: Rocket,
    phase: "03",
    title: "Deliver",
    description:
      "Implement incrementally, migrating workloads with zero downtime. Your team ships throughout the process.",
  },
  {
    icon: HeadphonesIcon,
    phase: "04",
    title: "Sustain",
    description:
      "Ongoing optimization, monitoring, and knowledge transfer so your team owns the platform long-term.",
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
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-teal-400/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-teal-400/20"
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
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-teal-400/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-teal-400/20"
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
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-teal-400/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-teal-400/20"
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
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-teal-400/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-teal-400/20"
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
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, infrastructure goals, or challenges..."
            className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-teal-400/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-teal-400/20"
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
          className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition hover:bg-neutral-200 disabled:opacity-60 disabled:cursor-not-allowed"
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
    <div className="bg-black text-white">
      {/* ── Services ── */}
      <section id="services" className="relative px-4 pb-20 pt-16 md:px-6 md:pb-32 md:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-teal-400/80">
              Services
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              Cloud & DevOps services{" "}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                built for scale.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
              From architecture to automation and security — we handle the full
              infrastructure lifecycle so your engineering team can focus on shipping
              product.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={0.1 + i * 0.08}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div
                    className={`group relative h-full rounded-2xl border ${service.borderColor} bg-gradient-to-b ${service.gradient} p-6 transition-all duration-300 hover:border-white/20 hover:-translate-y-1`}
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] ${service.iconColor}`}
                    >
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-neutral-400">
                      {service.shortDesc}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-medium opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ color: service.color }}>
                      Learn more
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Approach ── */}
      <section id="approach" className="relative px-4 pb-20 pt-16 md:px-6 md:pb-32 md:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-emerald-400/80">
              Approach
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              Strategy to execution,{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                with engineering rigor.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
              We follow a proven four-phase methodology that takes you from assessment
              to a fully automated, secure platform — without disrupting your delivery.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <FadeIn key={step.phase} delay={0.15 + i * 0.1}>
                <div className="relative">
                  {/* Connector line (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="absolute right-0 top-8 hidden h-px w-8 translate-x-full bg-gradient-to-r from-white/20 to-transparent lg:block" />
                  )}
                  <span className="text-sm font-mono font-bold text-emerald-400/60">
                    {step.phase}
                  </span>
                  <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <step.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── About ── */}
      <section id="about" className="relative px-4 pb-20 pt-16 md:px-6 md:pb-32 md:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeIn>
                <p className="text-xs font-medium uppercase tracking-[0.4em] text-teal-400/80">
                  About
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                  An engineering-first{" "}
                  <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                    partner.
                  </span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
                  BinaryGate operates alongside product teams to solve infrastructure,
                  DevOps, and security constraints with measurable outcomes. We don&apos;t
                  just consult — we engineer, implement, and stay until the platform is
                  production-ready.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-4">
              {[
                "Deep AWS, Azure & GCP expertise",
                "Kubernetes-native platform builders",
                "SOC 2, HIPAA, and PCI compliance experience",
                "Open-source first, vendor-lock-in averse",
                "Embedded with your team, not a black box",
                "Proven track record across 45+ cloud programs",
              ].map((item, i) => (
                <FadeIn key={item} delay={0.1 + i * 0.06} direction="right">
                  <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                    <span className="text-sm text-neutral-300 md:text-base">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Contact ── */}
      <section id="contact" className="relative px-4 pb-20 pt-16 md:px-6 md:pb-32 md:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            {/* Left — info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="text-xs font-medium uppercase tracking-[0.4em] text-teal-400/80">
                  Contact
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                  Let&apos;s build{" "}
                  <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                    together.
                  </span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
                  Share your goals and we&apos;ll respond within 24 hours with a scoped plan,
                  architecture overview, and timeline.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                      <Mail className="h-4 w-4 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Email</p>
                      <a href="mailto:hello@binary-gate.com" className="text-sm text-neutral-300 transition hover:text-white">
                        hello@binary-gate.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                      <Phone className="h-4 w-4 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Phone</p>
                      <p className="text-sm text-neutral-300">Available upon request</p>
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
      <footer className="border-t border-white/[0.06] px-4 py-8 md:px-6 md:py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-xs md:text-sm text-neutral-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} BinaryGate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
