import Link from "next/link";
import { InternalPageLayout } from "@/components/layout/internal-page-layout";

export default function AboutPage() {
  return (
    <InternalPageLayout
      title="About"
      subtitle="Learn more about BinaryGate, our team, and our mission."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Company", href: "/about" },
        { label: "About" },
      ]}
    >
      <div className="max-w-3xl">
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/about/story" className="underline underline-offset-4">
            Our Story
          </Link>
          <Link href="/about/team" className="underline underline-offset-4">
            Team
          </Link>
          <Link href="/about/careers" className="underline underline-offset-4">
            Careers
          </Link>
          <Link href="/about/partners" className="underline underline-offset-4">
            Partners
          </Link>
        </div>
      </div>
    </InternalPageLayout>
  );
}
