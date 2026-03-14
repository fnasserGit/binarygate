import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { healthcareIndustryPageContent } from "@/content/industries-subpages";

export const metadata: Metadata = {
  title: `${healthcareIndustryPageContent.title} | BinaryGate`,
  description: healthcareIndustryPageContent.description,
};

export default function HealthcareIndustryPage() {
  return <ExpertiseSubpageTemplate content={healthcareIndustryPageContent} />;
}
