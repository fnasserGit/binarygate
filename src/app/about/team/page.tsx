import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { teamPageContent } from "@/content/about-subpages";

export const metadata: Metadata = {
  title: `${teamPageContent.title} | BinaryGate`,
  description: teamPageContent.description,
};

export default function TeamPage() {
  return <ExpertiseSubpageTemplate content={teamPageContent} />;
}
