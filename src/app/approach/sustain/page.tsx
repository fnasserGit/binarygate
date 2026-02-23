import Link from "next/link";

export const metadata = {
  title: "Sustain | BinaryGate",
  description: "Operational maturity, monitoring, and continuous optimization.",
};

export default function SustainPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#101316]">
      <section className="relative overflow-hidden bg-[#0f1113] text-[#E9EEF3]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.22),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(96,165,250,0.12),transparent_50%)]" />
        <div className="relative mx-auto flex min-h-[50svh] max-w-[1200px] flex-col justify-center px-6 pb-16 pt-24 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            Approach • Phase 04
          </p>
          <h1 className="mt-5 text-3xl font-light tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Sustain
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            We operationalize the platform with SRE practices, telemetry, and continuous
            optimization so performance and cost stay in control.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0f1113] transition hover:bg-white/90"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
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
                <li>Establish SRE practices, runbooks, and on-call readiness.</li>
                <li>Implement monitoring, alerting, and error budget policies.</li>
                <li>Optimize costs with governance and cadence reviews.</li>
                <li>Provide knowledge transfer and enablement.</li>
                <li>Maintain roadmap updates as the platform evolves.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                What you get
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>Operational playbooks and runbooks.</li>
                <li>Monitoring dashboards and alert policies.</li>
                <li>Cost optimization cadence and reporting.</li>
                <li>Knowledge transfer sessions and training materials.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                How long it takes
              </h2>
              <p className="mt-4 text-sm text-neutral-600">Ongoing; initial setup in 2–4 weeks.</p>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Inputs we need
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>Operational ownership model and escalation paths.</li>
                <li>Access to telemetry data sources and tooling.</li>
                <li>Runbook and incident history for baseline improvement.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Success metrics
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>Improved uptime and reduced incident volume.</li>
                <li>Cost governance with measurable savings.</li>
                <li>Operational readiness and knowledge ownership.</li>
              </ul>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Common pitfalls we avoid
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>Alert fatigue without clear SLOs.</li>
                <li>Operational knowledge trapped with a single team.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Tools & standards we use
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Observability stacks, incident management workflows, and continuous optimization
              programs aligned to enterprise reliability goals.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-between text-sm text-neutral-500">
            <Link href="/approach/deliver" className="font-semibold text-neutral-900">
              ← Previous phase
            </Link>
            <span>Next phase</span>
          </div>
        </div>
      </section>
    </main>
  );
}
