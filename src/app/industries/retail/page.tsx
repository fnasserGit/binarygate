import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { retailPageContent } from "@/content/industries-subpages";

export const metadata: Metadata = {
  title: `${retailPageContent.title} | BinaryGate`,
  description: retailPageContent.description,
};

export default function RetailPage() {
  return <ExpertiseSubpageTemplate content={retailPageContent} />;
}
