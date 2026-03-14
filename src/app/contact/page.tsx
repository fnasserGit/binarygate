"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Loader2, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { InternalPageLayout } from "@/components/layout/internal-page-layout";
import DottedSurfaceFeatureSection from "@/components/ui/dotted-surface-feature-section";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

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
      <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200/70 bg-white/80 p-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-400/10">
          <CheckCircle className="h-7 w-7 text-teal-400" />
        </div>
        <h3 className="mt-5 text-xl font-semibold">Message sent!</h3>
        <p className="mt-2 max-w-sm text-sm text-neutral-600">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <button onClick={() => setFormState("idle")} className="mt-6 text-sm font-medium text-teal-400 transition hover:text-teal-300">Send another message</button>
      </div>
    );
  }

  const inputClass = "w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-500 outline-none transition focus:border-teal-400/40 focus:bg-white focus:ring-1 focus:ring-teal-400/20";

  return (
    <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/80 p-5 sm:p-8 md:p-10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-teal-500/8 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-emerald-500/8 blur-[80px]" />
      <div className="relative z-10 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">First Name <span className="text-teal-400">*</span></label>
            <input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} placeholder="John" className={inputClass} />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">Last Name <span className="text-teal-400">*</span></label>
            <input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} placeholder="Doe" className={inputClass} />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">Email <span className="text-teal-400">*</span></label>
            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com" className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">Phone Number</label>
            <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass} />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">Message <span className="text-teal-400">*</span></label>
          <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us about your project, infrastructure goals, or challenges..." className={`${inputClass} resize-none`} />
        </div>
        {formState === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly at hello@binary-gate.com.</p>}
        <button type="submit" disabled={formState === "sending"} className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition hover:bg-neutral-200 disabled:opacity-60 disabled:cursor-not-allowed">
          {formState === "sending" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>) : (<>Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>)}
        </button>
      </div>
    </form>
  );
}

function ContactInfoCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bgServiceCard flex h-full flex-col border border-slate-200 p-7">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200/70 bg-white/80">
        {icon}
      </div>
      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
        {label}
      </p>
      <div className="mt-3 text-sm leading-relaxed text-neutral-600">
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <InternalPageLayout
      title="Contact"
      subtitle="Share your goals and we'll respond within 24 hours with a scoped plan, architecture overview, and timeline."
      hideHero
      hideBreadcrumbs
      afterHero={
        <DottedSurfaceFeatureSection
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
          title="Contact"
          description="Share your goals and we'll respond within 24 hours with a scoped plan, architecture overview, and timeline."
        />
      }
    >
      <section className="mt-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Contact Details
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Let&apos;s build together.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn>
            <ContactInfoCard
              label="Email"
              icon={<Mail className="h-4 w-4 text-teal-400" />}
            >
              <a
                href="mailto:hello@binary-gate.com"
                className="text-sm text-neutral-700 transition hover:text-neutral-900"
              >
                hello@binary-gate.com
              </a>
            </ContactInfoCard>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ContactInfoCard
              label="Phone"
              icon={<Phone className="h-4 w-4 text-teal-400" />}
            >
              <p className="text-sm text-neutral-600">Available upon request</p>
            </ContactInfoCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ContactInfoCard
              label="Location"
              icon={<MapPin className="h-4 w-4 text-teal-400" />}
            >
              <p className="text-sm text-neutral-600">Dubai, UAE — serving globally</p>
            </ContactInfoCard>
          </FadeIn>
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Contact Process
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            What happens after you reach out
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="bgServiceCard flex h-full flex-col border border-slate-200 p-7">
              <h3 className="bgServiceCardTitle mt-3 text-lg font-semibold text-neutral-900">
                01 — Share Your Goals
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Tell us about your project, infrastructure goals, or challenges through the form
                below.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bgServiceCard flex h-full flex-col border border-slate-200 p-7">
              <h3 className="bgServiceCardTitle mt-3 text-lg font-semibold text-neutral-900">
                02 — Receive a Response
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                We&apos;ll respond within 24 hours with a scoped plan, architecture overview, and
                timeline.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Send a Message
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Start the conversation
          </h2>
        </div>
        <div className="mt-10">
          <FadeIn delay={0.15}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </InternalPageLayout>
  );
}
