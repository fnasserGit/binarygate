import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { careersPageContent } from "@/content/about-subpages";

export const metadata: Metadata = {
  title: `${careersPageContent.title} | BinaryGate`,
  description: careersPageContent.description,
};

export default function CareersPage() {
  return <ExpertiseSubpageTemplate content={careersPageContent} />;
}
