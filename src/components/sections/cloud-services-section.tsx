import { ServiceCard } from "@/components/ui/service-card";
import { cloudServices } from "@/content/services";

export function CloudServicesSection() {
  const firstRow = cloudServices.slice(0, 3);
  const secondRow = cloudServices.slice(3);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-6 py-8 sm:px-8 md:py-12 lg:px-10">
        <div className="max-w-2xl text-left">
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            Cloud
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Advisory, migration, and operational support to help cloud programs launch, scale, and stay resilient.
          </p>
        </div>

        <div className="mt-12 space-y-6">
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:mx-auto lg:max-w-4xl">
            {secondRow.map((card) => (
              <ServiceCard
                key={card.title}
                title={card.title}
                description={card.description}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
