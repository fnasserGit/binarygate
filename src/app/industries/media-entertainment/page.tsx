import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { mediaEntertainmentPageContent } from "@/content/industries-subpages";

export const metadata: Metadata = {
  title: `${mediaEntertainmentPageContent.title} | BinaryGate`,
  description: mediaEntertainmentPageContent.description,
};

export default function MediaEntertainmentPage() {
  return <ExpertiseSubpageTemplate content={mediaEntertainmentPageContent} />;
}
