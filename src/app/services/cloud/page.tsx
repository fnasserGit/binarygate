import { ServiceCategoryPage } from "@/components/pages/service-category-page";
import { cloudServices } from "@/content/services";

export default function CloudServicesPage() {
  return (
    <ServiceCategoryPage
      title="Cloud"
      subtitle="Cloud computing done the right way — combine our engineering rigor with the benefits cloud services offer."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Expertise", href: "/#services" },
        { label: "Cloud" },
      ]}
      services={cloudServices}
    />
  );
}
