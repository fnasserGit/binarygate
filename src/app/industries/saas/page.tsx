import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { saasPageContent } from "@/content/industries-subpages";

export const metadata: Metadata = {
  title: `${saasPageContent.title} | BinaryGate`,
  description: saasPageContent.description,
};

export default function SaaSPage() {
  return <ExpertiseSubpageTemplate content={saasPageContent} />;
}
