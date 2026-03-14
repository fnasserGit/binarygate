import type { Metadata } from "next";
import { ExpertiseSubpageTemplate } from "@/components/pages/expertise-subpage-template";
import { cloudMigrationPageContent } from "@/content/what-we-do-subpages";

export const metadata: Metadata = {
  title: `${cloudMigrationPageContent.title} | BinaryGate`,
  description: cloudMigrationPageContent.description,
};

export default function CloudMigrationPage() {
  return <ExpertiseSubpageTemplate content={cloudMigrationPageContent} />;
}
