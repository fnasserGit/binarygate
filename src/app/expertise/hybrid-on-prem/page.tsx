import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { hybridOnPremPageContent } from "@/content/expertise-subpages";

export const metadata: Metadata = {
  title: `${hybridOnPremPageContent.title} | BinaryGate`,
  description: hybridOnPremPageContent.description,
};

export default function HybridOnPremPage() {
  return <ExpertiseSubpageTemplate content={hybridOnPremPageContent} />;
}
