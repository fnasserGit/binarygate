import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { devSecOpsPageContent } from "@/content/what-we-do-subpages";

export const metadata: Metadata = {
  title: `${devSecOpsPageContent.title} | BinaryGate`,
  description: devSecOpsPageContent.description,
};

export default function DevSecOpsPage() {
  return <ExpertiseSubpageTemplate content={devSecOpsPageContent} />;
}
