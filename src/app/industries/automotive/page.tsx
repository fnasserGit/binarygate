import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { automotivePageContent } from "@/content/industries-subpages";

export const metadata: Metadata = {
  title: `${automotivePageContent.title} | BinaryGate`,
  description: automotivePageContent.description,
};

export default function AutomotivePage() {
  return <ExpertiseSubpageTemplate content={automotivePageContent} />;
}
