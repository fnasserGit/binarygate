import Link from "next/link";
import { InternalPageLayout } from "@/components/layout/internal-page-layout";
import DottedSurfaceFeatureSection from "@/components/ui/dotted-surface-feature-section";
import type { ExpertiseSubpageContent } from "@/content/expertise-subpages";

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

export function ExpertiseSubpageTemplate({
  content,
}: {
  content: ExpertiseSubpageContent;
}) {
  return (
    <InternalPageLayout
      title={content.title}
      subtitle={content.description}
      hideHero
      hideBreadcrumbs
      afterHero={
        <DottedSurfaceFeatureSection
          breadcrumbs={content.breadcrumbs}
          title={content.title}
          description={content.description}
        />
      }
    >
      <section className="mt-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            {content.overviewEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {content.overviewHeading}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.overviewCards.map((card) => (
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
            {content.processEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {content.processHeading}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {content.processCards.map((card) => (
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
            {content.reasonsEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {content.reasonsHeading}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {content.reasonsCards.map((card) => (
            <StaticCard
              key={card.title}
              title={card.title}
              description={card.description}
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
            {content.ctaTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            {content.ctaDescription}
          </p>
          <Link
            href={content.ctaHref}
            className="mt-8 inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            {content.ctaLabel}
          </Link>
        </div>
      </section>
    </InternalPageLayout>
  );
}
