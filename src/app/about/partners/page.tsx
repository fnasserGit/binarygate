import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { partnersPageContent } from "@/content/about-subpages";

export const metadata: Metadata = {
  title: `${partnersPageContent.title} | BinaryGate`,
  description: partnersPageContent.description,
};

export default function PartnersPage() {
  return <ExpertiseSubpageTemplate content={partnersPageContent} />;
}
