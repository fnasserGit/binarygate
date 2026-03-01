import { ServiceCard } from "@/components/ui/service-card";
import { InternalPageLayout } from "@/components/layout/internal-page-layout";
import type { ServiceItem } from "@/content/services";

type Breadcrumb = {
  label: string;
  href?: string;
};

type ServiceCategoryPageProps = {
  title: string;
  subtitle: string;
  breadcrumbs: Breadcrumb[];
  services: ServiceItem[];
};

export function ServiceCategoryPage({
  title,
  subtitle,
  breadcrumbs,
  services,
}: ServiceCategoryPageProps) {
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  return (
    <InternalPageLayout
      title={title}
      subtitle={subtitle}
      breadcrumbs={breadcrumbs}
      showLetsTalk
      letsTalkServiceName={title}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {firstRow.map((card) => (
          <ServiceCard
            key={card.title}
            title={card.title}
            description={card.description}
            href={card.href}
          />
        ))}
      </div>
      {secondRow.length > 0 ? (
        <div className="mt-6 flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {secondRow.map((card) => (
            <ServiceCard
              key={card.title}
              title={card.title}
              description={card.description}
              href={card.href}
            />
          ))}
        </div>
      ) : null}
    </InternalPageLayout>
  );
}
