import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { cybersecurityPageContent } from "@/content/expertise-subpages";

export const metadata: Metadata = {
  title: `${cybersecurityPageContent.title} | BinaryGate`,
  description: cybersecurityPageContent.description,
};

export default function CybersecurityPage() {
  return <ExpertiseSubpageTemplate content={cybersecurityPageContent} />;
}
