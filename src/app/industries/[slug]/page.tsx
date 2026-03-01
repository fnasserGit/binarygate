import { notFound } from "next/navigation";
import { InternalPageLayout } from "@/components/layout/internal-page-layout";
import { industryBySlug, industrySlugs } from "@/content/industries";

type IndustryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type IndustryInfoCardProps = {
  title: string;
  description?: string;
};

function IndustryInfoCard({ title, description }: IndustryInfoCardProps) {
  return (
    <div className="bgServiceCard flex h-full flex-col border border-slate-200 p-7">
      <h3 className="bgServiceCardTitle text-lg font-semibold text-neutral-900">
        {title}
      </h3>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export const dynamicParams = true;

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industryBySlug[slug];

  if (!industry) notFound();

  return (
    <InternalPageLayout
      title={industry.title}
      subtitle={industry.headline}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: industry.title },
      ]}
      showLetsTalk
      letsTalkServiceName={industry.title}
    >
      <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
        {industry.description}
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Industry challenges we solve
        </h2>
        <div className="mt-6 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industry.challenges.map((challenge) => (
            <IndustryInfoCard
              key={challenge.title}
              title={challenge.title}
              description={challenge.description}
            />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-neutral-900">What we deliver</h2>
        <div className="mt-6 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industry.capabilities.map((capability) => (
            <IndustryInfoCard key={capability} title={capability} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-neutral-900">
          Frameworks we work with
        </h2>
        <div className="mt-6 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industry.compliance.map((compliance) => (
            <IndustryInfoCard key={compliance} title={compliance} />
          ))}
        </div>
      </section>
    </InternalPageLayout>
  );
}
