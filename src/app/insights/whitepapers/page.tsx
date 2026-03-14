import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { whitepapersPageContent } from "@/content/insights-subpages";

export const metadata: Metadata = {
  title: `${whitepapersPageContent.title} | BinaryGate`,
  description: whitepapersPageContent.description,
};

export default function WhitepapersPage() {
  return <ExpertiseSubpageTemplate content={whitepapersPageContent} />;
}
