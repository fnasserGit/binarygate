import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { blogPageContent } from "@/content/insights-subpages";

export const metadata: Metadata = {
  title: `${blogPageContent.title} | BinaryGate`,
  description: blogPageContent.description,
};

export default function BlogPage() {
  return <ExpertiseSubpageTemplate content={blogPageContent} />;
}
