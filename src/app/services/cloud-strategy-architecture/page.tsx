import Link from "next/link";
import { SERVICES_HREF } from "@/config/navigation";
import { ArrowUpRight } from "lucide-react";
import { CONSULTATION_URL } from "@/lib/links";

export const metadata = {
  title: "Cloud Strategy & Architecture | BinaryGate",
  description: "Migration, modernization, and scalable architecture planning.",
};

const SERVICES = [
  {
    label: "Cloud Architecture",
    description: "Reference architectures, landing zones, and scalable foundations.",
    href: "/services/cloud-architecture",
  },
  {
    label: "On-Prem Modernization",
    description: "Modernize legacy stacks with phased, low-risk execution.",
    href: "/services/on-prem-modernization",
  },
  {
    label: "Hybrid Operations",
    description: "Unified patterns across cloud and data centers.",
    href: "/services/hybrid-operations",
  },
  {
    label: "Cost Optimization",
    description: "Governance, visibility, and right-sizing programs.",
    href: "/services/cost-optimization",
  },
];

export default function CloudStrategyArchitecturePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#101316]">
      <section className="relative overflow-hidden bg-[#0f1113] text-[#E9EEF3]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(51,198,255,0.25),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(51,198,255,0.12),transparent_50%)]" />
        <div className="relative mx-auto flex min-h-[50svh] max-w-[1200px] flex-col justify-center px-6 pb-16 pt-24 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            Services
          </p>
          <h1 className="mt-5 text-3xl font-light tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Cloud Strategy & Architecture
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Plan cloud adoption and modernization with clear guardrails. We design scalable
            architectures, map migration paths, and align technology decisions to business growth.
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
              href={SERVICES_HREF}
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
              Architecture programs that scale across regions, teams, and compliance constraints.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              From landing zones to migration sequencing, we focus on durable foundations and clear
              execution paths. Each engagement includes governance guardrails, security-by-design,
              and measurable milestones.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
