import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { financePageContent } from "@/content/industries-subpages";

export const metadata: Metadata = {
  title: `${financePageContent.title} | BinaryGate`,
  description: financePageContent.description,
};

export default function FinancePage() {
  return <ExpertiseSubpageTemplate content={financePageContent} />;
}
