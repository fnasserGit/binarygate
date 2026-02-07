"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, Send, Loader2, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

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
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-400/10">
          <CheckCircle className="h-7 w-7 text-teal-400" />
        </div>
        <h3 className="mt-5 text-xl font-semibold">Message sent!</h3>
        <p className="mt-2 max-w-sm text-sm text-neutral-400">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <button onClick={() => setFormState("idle")} className="mt-6 text-sm font-medium text-teal-400 transition hover:text-teal-300">Send another message</button>
      </div>
    );
  }

  const inputClass = "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition focus:border-teal-400/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-teal-400/20";

  return (
    <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-8 md:p-10">
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

export default function ContactPage() {
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
          <FadeIn><p className="text-xs font-medium uppercase tracking-[0.4em] text-teal-400/80">Contact</p></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight md:text-6xl">
              Let&apos;s build{" "}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">together.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}><p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">Share your goals and we&apos;ll respond within 24 hours with a scoped plan, architecture overview, and timeline.</p></FadeIn>
        </div>
      </section>

      <section className="relative px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                      <Mail className="h-4 w-4 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Email</p>
                      <a href="mailto:hello@binary-gate.com" className="text-sm text-neutral-300 transition hover:text-white">hello@binary-gate.com</a>
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
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                      <MapPin className="h-4 w-4 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Location</p>
                      <p className="text-sm text-neutral-300">Dubai, UAE — serving globally</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-3">
              <FadeIn delay={0.15}><ContactForm /></FadeIn>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] px-4 py-8 md:px-6 md:py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-xs md:text-sm text-neutral-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} BinaryGate. All rights reserved.</p>
          <div className="flex gap-6"><Link href="/" className="transition hover:text-white">Home</Link></div>
        </div>
      </footer>
    </div>
  );
}
