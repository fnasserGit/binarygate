import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { caseStudiesPageContent } from "@/content/insights-subpages";

export const metadata: Metadata = {
  title: `${caseStudiesPageContent.title} | BinaryGate`,
  description: caseStudiesPageContent.description,
};

export default function CaseStudiesPage() {
  return <ExpertiseSubpageTemplate content={caseStudiesPageContent} />;
}
