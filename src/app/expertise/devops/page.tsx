import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { devopsPageContent } from "@/content/expertise-subpages";

export const metadata: Metadata = {
  title: `${devopsPageContent.title} | BinaryGate`,
  description: devopsPageContent.description,
};

export default function DevopsPage() {
  return <ExpertiseSubpageTemplate content={devopsPageContent} />;
}
