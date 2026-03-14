import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { governmentIndustryPageContent } from "@/content/industries-subpages";

export const metadata: Metadata = {
  title: `${governmentIndustryPageContent.title} | BinaryGate`,
  description: governmentIndustryPageContent.description,
};

export default function GovernmentIndustryPage() {
  return <ExpertiseSubpageTemplate content={governmentIndustryPageContent} />;
}
