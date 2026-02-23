import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CONSULTATION_URL } from "@/lib/links";

export const metadata = {
  title: "Network & Security Engineering | BinaryGate",
  description: "Secure connectivity and defense across on-prem, hybrid, and cloud.",
};

const SERVICES = [
  {
    label: "Security & Compliance",
    description: "Compliance-ready controls, IAM hardening, and audit readiness.",
    href: "/services/security-compliance",
  },
  {
    label: "Networking",
    description: "Secure connectivity, segmentation, and optimized routing.",
    href: "/services/networking",
  },
  {
    label: "Systems Engineering",
    description: "OS baselines, storage, and compute reliability standards.",
    href: "/services/systems-engineering",
  },
];

export default function NetworkSecurityEngineeringPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#101316]">
      <section className="relative overflow-hidden bg-[#0f1113] text-[#E9EEF3]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(167,139,250,0.25),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(167,139,250,0.12),transparent_50%)]" />
        <div className="relative mx-auto flex min-h-[50svh] max-w-[1200px] flex-col justify-center px-6 pb-16 pt-24 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            Services
          </p>
          <h1 className="mt-5 text-3xl font-light tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Network & Security Engineering
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Build secure, reliable connectivity across environments. We harden identity,
            segmentation, and runtime controls while keeping performance predictable for
            mission-critical workloads.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={CONSULTATION_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0f1113] transition hover:bg-white/90"
            >
              Book a Consultation <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
              What We Deliver
            </h2>
            <p className="mt-4 text-xl font-semibold text-neutral-900">
              Security-forward engineering with predictable performance and compliance.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              We align network architecture, identity, and runtime controls so security and
              connectivity scale together. Engagements emphasize measurable improvements in
              resilience and operational readiness.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-neutral-200 bg-neutral-50/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:bg-white"
              >
                <h3 className="text-sm font-semibold text-neutral-900">
                  {service.label}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 group-hover:text-neutral-700">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
