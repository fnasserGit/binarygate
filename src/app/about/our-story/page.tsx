import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { ourStoryPageContent } from "@/content/about-subpages";

export const metadata: Metadata = {
  title: `${ourStoryPageContent.title} | BinaryGate`,
  description: ourStoryPageContent.description,
};

export default function OurStoryPage() {
  return <ExpertiseSubpageTemplate content={ourStoryPageContent} />;
}
