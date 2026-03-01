import Link from "next/link";
import { SERVICES_HREF } from "@/config/navigation";

export const metadata = {
  title: "Assess | BinaryGate",
  description: "Discovery and assessment for infrastructure, security, and delivery readiness.",
};

export default function AssessPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#101316]">
      <section className="relative overflow-hidden bg-[#0f1113] text-[#E9EEF3]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(51,198,255,0.22),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(51,198,255,0.12),transparent_50%)]" />
        <div className="relative mx-auto flex min-h-[50svh] max-w-[1200px] flex-col justify-center px-6 pb-16 pt-24 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            Approach • Phase 01
          </p>
          <h1 className="mt-5 text-3xl font-light tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Assess
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            We establish a clear baseline across architecture, delivery, security, and
            reliability so leadership can make confident modernization decisions.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0f1113] transition hover:bg-white/90"
            >
              Book a Consultation
            </Link>
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
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                What we do
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>Architecture and dependency mapping across critical systems.</li>
                <li>Pipeline review for release risk, velocity, and governance gaps.</li>
                <li>Security posture assessment for IAM, network, and secrets handling.</li>
                <li>Cost and reliability diagnostics to prioritize quick wins.</li>
                <li>Stakeholder interviews to align scope and outcomes.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                What you get
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>Current-state architecture report and risk register.</li>
                <li>Gap analysis with prioritized remediation plan.</li>
                <li>90-day modernization roadmap.</li>
                <li>Executive summary for budget and sequencing.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                How long it takes
              </h2>
              <p className="mt-4 text-sm text-neutral-600">1–3 weeks depending on scope.</p>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Inputs we need
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>System diagrams, network maps, and access to key owners.</li>
                <li>Existing policies, runbooks, and incident history.</li>
                <li>Billing and utilization data for critical workloads.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Success metrics
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>Documented architecture and dependency clarity.</li>
                <li>Risk mitigation plan aligned to business goals.</li>
                <li>Approved roadmap with budget confidence.</li>
              </ul>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Common pitfalls we avoid
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>Incomplete inventory of shared services and dependencies.</li>
                <li>Skipping security or cost baselines in favor of speed.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Tools & standards we use
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Architecture reviews, IaC baselines, security frameworks, and reliability
              benchmarks tailored to regulated environments.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-between text-sm text-neutral-500">
            <span>Previous phase</span>
            <Link href="/approach/architect" className="font-semibold text-neutral-900">
              Next phase →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
