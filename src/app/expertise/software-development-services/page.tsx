import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { softwareDevelopmentServicesPageContent } from "@/content/expertise-subpages";

export const metadata: Metadata = {
  title: `${softwareDevelopmentServicesPageContent.title} | BinaryGate`,
  description: softwareDevelopmentServicesPageContent.description,
};

export default function SoftwareDevelopmentServicesPage() {
  return <ExpertiseSubpageTemplate content={softwareDevelopmentServicesPageContent} />;
}
