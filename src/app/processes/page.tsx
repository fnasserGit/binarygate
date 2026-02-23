import Link from "next/link";

const processSteps = [
  {
    slug: "discovery-scope",
    step: "01",
    title: "Discovery & Scope",
    color: "#2dd4bf",
    summary:
      "We map your current systems, constraints, and success metrics to define the delivery plan.",
    bullets: [
      "Architecture and inventory audit",
      "Risk, compliance, and data residency assessment",
      "Business KPIs and target outcomes",
      "Delivery roadmap and milestones",
    ],
    deliverables: ["Current-state report", "Risk register", "Executive roadmap"],
    outcomes: ["Clear scope boundaries", "Aligned success metrics"],
    tools: ["Workshops", "System mapping", "Cost baseline"],
  },
  {
    slug: "architecture-blueprint",
    step: "02",
    title: "Architecture Blueprint",
    color: "#67e8f9",
    summary:
      "We design the target cloud architecture, migration waves, and dependency sequencing.",
    bullets: [
      "Reference architecture and standards",
      "Service mapping and dependencies",
      "Wave plan with cutover approach",
      "Cost and performance modeling",
    ],
    deliverables: ["Target architecture", "Migration waves", "Capacity model"],
    outcomes: ["Approved blueprint", "Cutover-ready sequencing"],
    tools: ["Threat modeling", "Sizing exercises", "Traffic simulation"],
  },
  {
    slug: "landing-zone",
    step: "03",
    title: "Landing Zone Build",
    color: "#3b82f6",
    summary:
      "We build the secure cloud foundation with guardrails, networking, and identity.",
    bullets: [
      "Account structure and IAM policies",
      "Network segmentation and connectivity",
      "Logging, monitoring, and audit trails",
      "Policy-as-code and governance",
    ],
    deliverables: ["Landing zone", "Security baseline", "Observability stack"],
    outcomes: ["Compliant foundation", "Audit-ready controls"],
    tools: ["Terraform", "Guardrails", "Central logging"],
  },
  {
    slug: "migration-data-sync",
    step: "04",
    title: "Migration & Data Sync",
    color: "#1d8bc4",
    summary:
      "We move workloads with automation, testing, and zero-downtime cutovers.",
    bullets: [
      "Data replication and validation",
      "Application migration playbooks",
      "Performance and resiliency testing",
      "Cutover rehearsal and execution",
    ],
    deliverables: ["Migration runbooks", "Validated data sync", "Cutover plan"],
    outcomes: ["Zero-downtime move", "Verified performance"],
    tools: ["Replication tooling", "Blue/green cutovers", "Load testing"],
  },
  {
    slug: "security-cicd",
    step: "05",
    title: "Security & CI/CD",
    color: "#34d399",
    summary:
      "We harden security and automate delivery with CI/CD pipelines.",
    bullets: [
      "SAST/DAST, secrets management",
      "Policy checks and compliance gates",
      "Build, test, and deploy automation",
      "Rollback and release safety controls",
    ],
    deliverables: ["CI/CD pipelines", "Security gates", "Release playbooks"],
    outcomes: ["Faster releases", "Reduced risk exposure"],
    tools: ["GitOps", "Policy-as-code", "Artifact signing"],
  },
  {
    slug: "launch-optimization",
    step: "06",
    title: "Launch & Optimization",
    color: "#60a5fa",
    summary:
      "We stabilize, optimize cost, and continuously improve performance.",
    bullets: [
      "SLA monitoring and incident response",
      "Cost optimization and FinOps",
      "Performance tuning and scaling",
      "Continuous improvement backlog",
    ],
    deliverables: ["Operational dashboards", "FinOps plan", "Optimization backlog"],
    outcomes: ["Stable production", "Cost-efficient scaling"],
    tools: ["SLOs", "Autoscaling", "Cost anomaly alerts"],
  },
];

export default function ProcessesPage() {
  return (
    <main className="bg-[#f5f5f2] text-neutral-900">
      <section className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
        <div className="mb-12 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-900"
          >
            <span className="text-base leading-none">←</span>
            Back to Home
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400">
            Delivery Process
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Cloud transformation, step by step
          </h1>
          <p className="max-w-2xl text-sm text-neutral-600 dark:text-neutral-400 md:text-base">
            Each phase is designed to reduce risk and accelerate delivery from discovery to launch,
            with clear checkpoints and measurable outcomes.
          </p>
        </div>

        <div className="relative space-y-12">
          <div className="pointer-events-none absolute left-3 top-2 hidden h-full w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent dark:via-white/[0.08] md:block" />
          {processSteps.map((step) => (
            <section
              key={step.slug}
              id={step.slug}
              className="relative scroll-mt-24 rounded-3xl border border-neutral-200/70 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-black/40 md:p-8"
            >
              <div
                className="absolute -left-[2px] top-8 hidden h-3 w-3 rounded-full border border-white shadow-[0_0_0_6px_rgba(148,163,184,0.18)] dark:border-black md:block"
                style={{ backgroundColor: step.color }}
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-3xl"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${step.color}55, transparent)`,
                }}
              />
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2">
                    <span
                      className="rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-900 shadow-sm"
                      style={{ boxShadow: `0 8px 20px ${step.color}25` }}
                    >
                      Step {step.step}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                      Delivery
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold md:text-2xl">{step.title}</h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{step.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-neutral-200/70 bg-white/80 px-3 py-1 text-[11px] font-semibold text-neutral-700 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-neutral-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 md:w-1/2">
                  <ul className="grid gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    {step.bullets.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-neutral-200/70 bg-white/60 px-4 py-2 dark:border-white/[0.08] dark:bg-white/[0.04]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl border border-neutral-200/70 bg-white/60 p-4 text-xs text-neutral-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-neutral-300">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                        Outcomes
                      </p>
                      <ul className="mt-2 space-y-1">
                        {step.outcomes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-neutral-200/70 bg-white/60 p-4 text-xs text-neutral-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-neutral-300">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                        Tooling
                      </p>
                      <ul className="mt-2 space-y-1">
                        {step.tools.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
