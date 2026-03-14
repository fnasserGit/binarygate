import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { managedCloudServicesPageContent } from "@/content/what-we-do-subpages";

export const metadata: Metadata = {
  title: `${managedCloudServicesPageContent.title} | BinaryGate`,
  description: managedCloudServicesPageContent.description,
};

export default function ManagedCloudServicesPage() {
  return <ExpertiseSubpageTemplate content={managedCloudServicesPageContent} />;
}
