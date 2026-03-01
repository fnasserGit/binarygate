import { InternalPageLayout } from "@/components/layout/internal-page-layout";
import { ServiceCard } from "@/components/ui/service-card";
import { industries } from "@/content/industries";

export default function IndustriesPage() {
  const firstRow = industries.slice(0, 3);
  const secondRow = industries.slice(3);

  return (
    <InternalPageLayout
      title="Industries"
      subtitle="Industry-specific infrastructure expertise."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]}
      showLetsTalk
      letsTalkServiceName="Industries"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {firstRow.map((industry) => (
          <ServiceCard
            key={industry.slug}
            title={industry.title}
            description={industry.headline}
            href={`/industries/${industry.slug}`}
          />
        ))}
      </div>
      {secondRow.length > 0 ? (
        <div className="mt-6 flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {secondRow.map((industry) => (
            <ServiceCard
              key={industry.slug}
              title={industry.title}
              description={industry.headline}
              href={`/industries/${industry.slug}`}
            />
          ))}
        </div>
      ) : null}
    </InternalPageLayout>
  );
}
