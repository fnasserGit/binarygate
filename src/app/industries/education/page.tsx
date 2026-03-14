import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { educationPageContent } from "@/content/industries-subpages";

export const metadata: Metadata = {
  title: `${educationPageContent.title} | BinaryGate`,
  description: educationPageContent.description,
};

export default function EducationPage() {
  return <ExpertiseSubpageTemplate content={educationPageContent} />;
}
