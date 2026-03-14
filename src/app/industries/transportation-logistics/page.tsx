import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { transportationLogisticsPageContent } from "@/content/industries-subpages";

export const metadata: Metadata = {
  title: `${transportationLogisticsPageContent.title} | BinaryGate`,
  description: transportationLogisticsPageContent.description,
};

export default function TransportationLogisticsPage() {
  return <ExpertiseSubpageTemplate content={transportationLogisticsPageContent} />;
}
