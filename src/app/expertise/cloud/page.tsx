import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { cloudPageContent } from "@/content/expertise-subpages";

export const metadata: Metadata = {
  title: `${cloudPageContent.title} | BinaryGate`,
  description: cloudPageContent.description,
};

export default function CloudPage() {
  return <ExpertiseSubpageTemplate content={cloudPageContent} />;
}
