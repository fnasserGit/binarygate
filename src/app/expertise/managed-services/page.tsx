import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { managedServicesPageContent } from "@/content/expertise-subpages";

export const metadata: Metadata = {
  title: `${managedServicesPageContent.title} | BinaryGate`,
  description: managedServicesPageContent.description,
};

export default function ManagedServicesPage() {
  return <ExpertiseSubpageTemplate content={managedServicesPageContent} />;
}
