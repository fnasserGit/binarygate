import Link from "next/link";
import { InternalPageLayout } from "@/components/layout/internal-page-layout";
import DottedSurfaceFeatureSection from "@/components/ui/dotted-surface-feature-section";

export const metadata = {
  title: "Technology & Infrastructure Consultancy | BinaryGate",
  description:
    "Strategic engineering guidance to design, modernize, and scale complex systems.",
};

const DOMAIN_CARDS = [
  {
    title: "Cloud Architecture",
    description:
      "Design scalable and resilient architectures across AWS, Azure, and hybrid cloud environments while ensuring reliability, security, and cost efficiency.",
  },
  {
    title: "Platform & DevOps Engineering",
    description:
      "Define and implement modern engineering platforms including CI/CD pipelines, infrastructure as code, and automated delivery workflows.",
  },
  {
    title: "Hybrid & On-Prem Infrastructure",
    description:
      "Design and optimize on-premises and hybrid environments, enabling organizations to modernize legacy systems while maintaining operational stability.",
  },
  {
    title: "AI & Data Infrastructure",
    description:
      "Architect infrastructure that supports AI workloads, data pipelines, and scalable machine learning platforms.",
  },
  {
    title: "Security & Resilience",
    description:
      "Implement infrastructure security strategies, platform hardening, and operational resilience practices.",
  },
  {
    title: "Infrastructure Modernization",
    description:
      "Transform legacy environments into scalable, automated, and cloud-ready platforms.",
  },
];

function StaticCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bgServiceCard flex h-full flex-col border border-slate-200 p-7">
      <h3 className="bgServiceCardTitle mt-3 text-lg font-semibold text-neutral-900">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
        {description}
      </p>
    </div>
  );
}

const ENGAGEMENT_STEPS = [
  {
    title: "Assessment",
    description:
      "We evaluate your current infrastructure, architecture, and engineering workflows to identify limitations, risks, and opportunities.",
  },
  {
    title: "Architecture Design",
    description:
      "We define scalable technology architectures aligned with your business and engineering goals.",
  },
  {
    title: "Implementation Support",
    description:
      "We collaborate with engineering teams to implement automation, infrastructure improvements, and platform best practices.",
  },
  {
    title: "Continuous Optimization",
    description:
      "We help evolve your systems through performance optimization, security improvements, and operational refinement.",
  },
];

const PARTNER_REASONS = [
  {
    title: "Engineering-Led Consulting",
    description:
      "Our consultancy is led by senior infrastructure and platform engineers with real production experience.",
  },
  {
    title: "Cross-Environment Expertise",
    description:
      "We support cloud, hybrid, and on-prem environments depending on the needs of the organization.",
  },
  {
    title: "Future-Ready Architecture",
    description:
      "We design technology platforms ready for AI workloads, scale, and evolving engineering practices.",
  },
  {
    title: "Security & Reliability Focus",
    description:
      "Every architecture we design prioritizes stability, resilience, and security.",
  },
];

export default function ConsultancyPage() {
  return (
    <InternalPageLayout
      title="Technology & Infrastructure Consultancy"
      subtitle="Strategic engineering guidance to design, modernize, and scale complex systems."
      hideHero
      hideBreadcrumbs
      afterHero={
        <DottedSurfaceFeatureSection
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Expertise", href: "/expertise" },
            { label: "Consultancy" },
          ]}
          title="Technology & Infrastructure Consultancy"
          description={
            <>
              BinaryGate provides expert consultancy across modern cloud platforms, on-prem
              infrastructure, AI-driven systems, and DevOps platforms. We help organizations build
              resilient architectures, optimize existing environments, and implement scalable
              technology foundations that support long-term growth.
            </>
          }
        />
      }
    >
      <section className="mt-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Consultancy Domains
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Our Consultancy Domains
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAIN_CARDS.map((card) => (
            <StaticCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            How We Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            How We Work
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ENGAGEMENT_STEPS.map((step, index) => (
            <StaticCard
              key={step.title}
              title={`${String(index + 1).padStart(2, "0")} — ${step.title}`}
              description={step.description}
            />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Why BinaryGate
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Why Organizations Partner With BinaryGate
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PARTNER_REASONS.map((reason) => (
            <StaticCard
              key={reason.title}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-none border border-slate-200 bg-neutral-50 px-6 py-10 sm:px-10 sm:py-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Next Steps
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Build Your Next Technology Foundation
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Whether you&apos;re modernizing infrastructure, scaling a platform, or preparing systems
            for AI-driven workloads, BinaryGate provides the strategic expertise and engineering
            depth to help you move forward with confidence.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </InternalPageLayout>
  );
}
