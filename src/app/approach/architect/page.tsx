import Link from "next/link";

export const metadata = {
  title: "Architect | BinaryGate",
  description: "Target-state architecture, landing zones, and guardrails.",
};

export default function ArchitectPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#101316]">
      <section className="relative overflow-hidden bg-[#0f1113] text-[#E9EEF3]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.22),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(96,165,250,0.12),transparent_50%)]" />
        <div className="relative mx-auto flex min-h-[50svh] max-w-[1200px] flex-col justify-center px-6 pb-16 pt-24 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            Approach • Phase 02
          </p>
          <h1 className="mt-5 text-3xl font-light tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Architect
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            We define the target architecture, landing zones, and guardrails that enable
            secure, scalable delivery across teams and regions.
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
                <li>Define target-state architecture and service boundaries.</li>
                <li>Design landing zones, IAM strategy, and network segmentation.</li>
                <li>Standardize pipelines, IaC modules, and deployment patterns.</li>
                <li>Embed observability and security-by-design controls.</li>
                <li>Create phased rollout plans aligned to risk tolerance.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                What you get
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>Target architecture diagrams and reference patterns.</li>
                <li>Landing zone blueprints and network/IAM standards.</li>
                <li>Pipeline and IaC reference implementations.</li>
                <li>Governance and policy guardrails.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                How long it takes
              </h2>
              <p className="mt-4 text-sm text-neutral-600">2–4 weeks based on scale.</p>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Inputs we need
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>Architecture baselines and compliance requirements.</li>
                <li>Current IAM, network, and security policies.</li>
                <li>Delivery workflow expectations and tooling constraints.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Success metrics
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>Approved target architecture and governance model.</li>
                <li>Standardized deployment patterns with guardrails.</li>
                <li>Reduced time-to-environment provisioning.</li>
              </ul>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Common pitfalls we avoid
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-600">
                <li>Unclear ownership across shared services.</li>
                <li>Over-designing without delivery sequencing.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Tools & standards we use
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              IaC modules, CI/CD templates, policy-as-code, and observability baselines that
              align to enterprise standards.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-between text-sm text-neutral-500">
            <Link href="/approach/assess" className="font-semibold text-neutral-900">
              ← Previous phase
            </Link>
            <Link href="/approach/deliver" className="font-semibold text-neutral-900">
              Next phase →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
