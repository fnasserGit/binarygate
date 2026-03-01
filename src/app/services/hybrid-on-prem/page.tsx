import { ServiceCategoryPage } from "@/components/pages/service-category-page";
import { hybridOnPremServices } from "@/content/services";

export default function HybridOnPremServicesPage() {
  return (
    <ServiceCategoryPage
      title="Hybrid & On-Prem"
      subtitle="Run reliable hybrid platforms with clear governance — modernize on-prem foundations and connect safely to the cloud."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Expertise", href: "/#services" },
        { label: "Hybrid & On-Prem" },
      ]}
      services={hybridOnPremServices}
    />
  );
}
