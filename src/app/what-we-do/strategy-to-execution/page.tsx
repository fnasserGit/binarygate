import Link from "next/link";
import type { Metadata } from "next";
import { InternalPageLayout } from "@/components/layout/internal-page-layout";
import DottedSurfaceFeatureSection from "@/components/ui/dotted-surface-feature-section";
import { CONSULTATION_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Strategy to Execution | BinaryGate",
  description:
    "Explore BinaryGate's four-phase delivery model from assessment through sustained optimization.",
};

const PHASES = [
  {
    id: "assess",
    phase: "PHASE 01",
    title: "Assess",
    summary:
      "Deep dive into your current architecture, pipelines, and security posture. We identify bottlenecks and risks.",
    explanation:
      "We start by understanding the environment as it really operates today. That includes reviewing platform architecture, delivery workflows, operational pain points, and security gaps so decisions are based on evidence rather than assumptions.",
    outcome:
      "The result is a clear baseline of what is slowing delivery, where risk is concentrated, and which improvements should be prioritized first.",
  },
  {
    id: "architect",
    phase: "PHASE 02",
    title: "Architect",
    summary:
      "Design a secure, scalable foundation with IaC, automated pipelines, and observability from day one.",
    explanation:
      "With the baseline established, we design the target operating model and platform foundation. We define the right architecture, automation patterns, and observability approach so the environment can scale without becoming harder to manage.",
    outcome:
      "This phase turns findings into a practical blueprint your team can implement with confidence, clarity, and strong engineering controls.",
  },
  {
    id: "deliver",
    phase: "PHASE 03",
    title: "Deliver",
    summary:
      "Implement incrementally, migrating workloads with zero downtime. Your team ships throughout the process.",
    explanation:
      "Execution is planned in controlled increments so the business can keep moving while the platform evolves. We support rollout sequencing, safe migration paths, and operational safeguards that reduce disruption during implementation.",
    outcome:
      "Teams gain a delivery path that improves infrastructure and platform capability while maintaining continuity for releases, services, and users.",
  },
  {
    id: "sustain",
    phase: "PHASE 04",
    title: "Sustain",
    summary:
      "Ongoing optimization, monitoring, and knowledge transfer so your team owns the platform long-term.",
    explanation:
      "Long-term value comes from making the platform observable, supportable, and easier for internal teams to own. We refine performance, strengthen monitoring, and transfer operational knowledge so improvements continue after the initial delivery work ends.",
    outcome:
      "The platform remains healthy over time, and your team is equipped to operate, improve, and extend it without depending on short-term fixes.",
  },
] as const;

function OverviewCard({
  href,
  phase,
  title,
  description,
}: {
  href: string;
  phase: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="bgServiceCard flex h-full flex-col border border-slate-200 p-7 transition hover:border-slate-300"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">{phase}</p>
      <h2 className="bgServiceCardTitle mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-neutral-600">{description}</p>
      <span className="mt-6 inline-flex items-center text-sm font-semibold text-neutral-900">
        Read more
      </span>
    </Link>
  );
}

function PhaseDetail({
  id,
  phase,
  title,
  summary,
  explanation,
  outcome,
}: (typeof PHASES)[number]) {
  return (
    <section id={id} className="scroll-mt-24 border border-slate-200 bg-white px-6 py-10 sm:px-10 sm:py-12">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">{phase}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-700">{summary}</p>
        <p className="mt-6 text-sm leading-relaxed text-neutral-600 sm:text-base">{explanation}</p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">{outcome}</p>
      </div>
    </section>
  );
}

export default function StrategyToExecutionPage() {
  return (
    <InternalPageLayout
      title="Strategy to Execution"
      subtitle="A four-phase delivery approach built to reduce risk and maintain momentum."
      hideHero
      hideBreadcrumbs
      afterHero={
        <DottedSurfaceFeatureSection
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "What we do", href: "/what-we-do" },
            { label: "Strategy to Execution" },
          ]}
          title="Strategy to execution, with engineering rigor."
          description={
            <>
              We follow a proven four-phase methodology that takes you from assessment to a fully
              automated, secure platform without disrupting delivery. Each phase builds on the last
              so your team can move with structure, visibility, and control.
            </>
          }
        />
      }
    >
      <section className="mt-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Delivery Phases
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            The Four Phases
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PHASES.map((phase) => (
            <OverviewCard
              key={phase.id}
              href={`#${phase.id}`}
              phase={phase.phase}
              title={phase.title}
              description={phase.summary}
            />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Phase Details
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            How Each Phase Moves the Platform Forward
          </h2>
        </div>
        <div className="mt-10 space-y-6">
          {PHASES.map((phase) => (
            <PhaseDetail key={phase.id} {...phase} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-none border border-slate-200 bg-neutral-50 px-6 py-10 sm:px-10 sm:py-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Next Steps
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Plan the Right Phase for Your Environment
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Whether you need a full platform transformation or help at a specific phase, BinaryGate
            can shape a delivery path that fits your architecture, team, and operational goals.
          </p>
          <Link
            href={CONSULTATION_URL}
            className="mt-8 inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </InternalPageLayout>
  );
}
