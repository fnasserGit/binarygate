import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { dataSolutionsPageContent } from "@/content/expertise-subpages";

export const metadata: Metadata = {
  title: `${dataSolutionsPageContent.title} | BinaryGate`,
  description: dataSolutionsPageContent.description,
};

export default function DataSolutionsPage() {
  return <ExpertiseSubpageTemplate content={dataSolutionsPageContent} />;
}
