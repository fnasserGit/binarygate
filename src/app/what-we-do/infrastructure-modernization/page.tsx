import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { infrastructureModernizationPageContent } from "@/content/what-we-do-subpages";

export const metadata: Metadata = {
  title: `${infrastructureModernizationPageContent.title} | BinaryGate`,
  description: infrastructureModernizationPageContent.description,
};

export default function InfrastructureModernizationPage() {
  return <ExpertiseSubpageTemplate content={infrastructureModernizationPageContent} />;
}
