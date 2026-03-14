import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { hospitalityPageContent } from "@/content/industries-subpages";

export const metadata: Metadata = {
  title: `${hospitalityPageContent.title} | BinaryGate`,
  description: hospitalityPageContent.description,
};

export default function HospitalityPage() {
  return <ExpertiseSubpageTemplate content={hospitalityPageContent} />;
}
