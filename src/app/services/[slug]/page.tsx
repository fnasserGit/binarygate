import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { CONSULTATION_URL } from "@/lib/links";
import { LineChart } from "@/components/ui/LineChart";
import { BarChart } from "@/components/ui/BarChart";
import { InternalPageLayout } from "@/components/layout/internal-page-layout";
import { LAYOUT_CONTAINER } from "@/lib/layout";

type ServiceParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ServiceParams) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    return {
      title: "Service | BinaryGate",
      description: "BinaryGate service details.",
    };
  }
  return {
    title: `${service.title} | BinaryGate`,
    description: service.shortDesc,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export const dynamicParams = true;

export default async function ServicePage({ params }: ServiceParams) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    notFound();
  }

  return (
    <InternalPageLayout
      title={service.title}
      subtitle={service.shortDesc}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Expertise", href: "/services/cloud" },
        { label: service.title },
      ]}
    >
      <section className="relative bg-white">
        <div className={`grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 ${LAYOUT_CONTAINER} py-16 sm:py-20 lg:py-24`}>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#101316]/60">
              What We Deliver
            </h2>
            <h3 className="mt-4 text-2xl font-semibold text-[#101316]">
              Outcomes you can operationalize.
            </h3>
            {service.longDescription.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-sm leading-relaxed text-[#101316]/70"
              >
                {paragraph}
              </p>
            ))}
            <ul className="mt-6 grid gap-3 text-sm text-[#101316]/80">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: service.accent }}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/5 bg-[#f7f7f7] p-8 shadow-[0_20px_60px_rgba(15,18,22,0.08)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#101316]/60">
              How We Approach It
            </h3>
            <div className="mt-5 space-y-4 text-sm text-[#101316]/70">
              <div>
                <p className="font-semibold text-[#101316]">01 — Discovery</p>
                <p className="mt-1">
                  Align on goals, current architecture, and risk profile.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#101316]">02 — Blueprint</p>
                <p className="mt-1">
                  Define the target state and delivery sequence with guardrails.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#101316]">03 — Delivery</p>
                <p className="mt-1">
                  Execute in measured phases with automated validation.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#101316]">04 — Operate</p>
                <p className="mt-1">
                  Transfer knowledge and ensure operational readiness.
                </p>
              </div>
            </div>
            <Link
              href={CONSULTATION_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#101316] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className={`${LAYOUT_CONTAINER} py-16 sm:py-20 lg:py-24`}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#101316]/60">
            The Challenge
          </h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            {service.challenges.map((challenge) => (
              <div key={challenge.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{challenge.title}</h3>
                {challenge.body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${LAYOUT_CONTAINER} py-16 sm:py-20 lg:py-24`}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#101316]/60">
            Our Approach
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {service.approachSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{step.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: service.accent }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className={`${LAYOUT_CONTAINER} py-16 sm:py-20 lg:py-24`}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#101316]/60">
            Visual Overview
          </h2>
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
            {service.visualsType === "cost" && (
              <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr]">
                <BarChart
                  accent={service.accent}
                  data={[
                    { label: "Before", value: 92 },
                    { label: "After", value: 58 },
                  ]}
                />
                <div className="text-sm text-slate-600">
                  <p className="text-base font-semibold text-slate-900">Cost trajectory</p>
                  <p className="mt-2">
                    Right-sizing and governance reduce waste while keeping performance steady.
                  </p>
                  <p className="mt-3 text-slate-900">
                    Savings: <span className="font-semibold">28%</span>
                  </p>
                </div>
              </div>
            )}
            {service.visualsType === "observability" && (
              <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr]">
                <LineChart
                  accent={service.accent}
                  points={[
                    { x: 1, y: 40 },
                    { x: 2, y: 52 },
                    { x: 3, y: 58 },
                    { x: 4, y: 70 },
                    { x: 5, y: 82 },
                  ]}
                />
                <div className="text-sm text-slate-600">
                  <p className="text-base font-semibold text-slate-900">Reliability trend</p>
                  <p className="mt-2">
                    Improved observability correlates with higher uptime and lower incident volume.
                  </p>
                </div>
              </div>
            )}
            {service.visualsType === "cloud" && (
              <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr]">
                <svg viewBox="0 0 320 180" className="h-full w-full">
                  <rect x="16" y="20" width="288" height="40" rx="10" fill="#eef2ff" />
                  <rect x="32" y="70" width="256" height="40" rx="10" fill="#e0f2fe" />
                  <rect x="48" y="120" width="224" height="40" rx="10" fill="#ecfeff" />
                  <circle cx="60" cy="40" r="6" fill={service.accent} />
                  <circle cx="60" cy="90" r="6" fill={service.accent} />
                  <circle cx="60" cy="140" r="6" fill={service.accent} />
                </svg>
                <div className="text-sm text-slate-600">
                  <p className="text-base font-semibold text-slate-900">Layered architecture</p>
                  <p className="mt-2">
                    Foundational landing zones support shared services, then application platforms.
                  </p>
                </div>
              </div>
            )}
            {service.visualsType === "security" && (
              <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr]">
                <svg viewBox="0 0 320 180" className="h-full w-full">
                  <path d="M160 20 L260 60 V110 C260 140 230 160 160 170 C90 160 60 140 60 110 V60 Z" fill="#f8fafc" stroke="#e2e8f0" />
                  <path d="M160 40 L230 70 V106 C230 128 208 142 160 148 C112 142 90 128 90 106 V70 Z" fill={service.accent} fillOpacity="0.2" />
                  <circle cx="160" cy="98" r="10" fill={service.accent} />
                </svg>
                <div className="text-sm text-slate-600">
                  <p className="text-base font-semibold text-slate-900">Maturity progression</p>
                  <p className="mt-2">
                    Controls mature from baseline security to continuous compliance and automation.
                  </p>
                </div>
              </div>
            )}
            {service.visualsType === "none" && (
              <p className="text-sm text-slate-600">
                Tailored visuals are available during delivery workshops.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${LAYOUT_CONTAINER} py-16 sm:py-20 lg:py-24`}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#101316]/60">
            Case Study
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-slate-900">Situation</h3>
              <p className="mt-2 text-sm text-slate-600">{service.useCase.situation}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-slate-900">Action</h3>
              <p className="mt-2 text-sm text-slate-600">{service.useCase.action}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-slate-900">Result</h3>
              <p className="mt-2 text-sm text-slate-600">{service.useCase.result}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className={`${LAYOUT_CONTAINER} flex flex-col items-start justify-between gap-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:py-24`}>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Let’s design your {service.title} roadmap.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Align stakeholders, establish priorities, and execute with confidence.
            </p>
          </div>
          <Link
            href={CONSULTATION_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: service.accent }}
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </InternalPageLayout>
  );
}
