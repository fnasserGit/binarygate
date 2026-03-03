import type { Metadata } from "next";
import { navMenus } from "@/data/navigation";
import { NavOverviewPage } from "@/components/pages/nav-overview-page";
import DottedSurfaceFeatureSection from "@/components/ui/dotted-surface-feature-section";

const menu = navMenus.find((item) => item.label === "Insights");

export const metadata: Metadata = {
  title: "Insights | BinaryGate",
  description: "Research, case studies, and infrastructure best practices.",
};

export default function InsightsPage() {
  if (!menu) {
    return null;
  }

  return (
    <NavOverviewPage
      menu={menu}
      heroAddon={
        <DottedSurfaceFeatureSection
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Insights" },
          ]}
          title="Insights"
          description={
            <>
              We turn{" "}
              <strong className="font-semibold text-neutral-600">
                complex infrastructure
              </strong>{" "}
              into{" "}
              <strong className="font-semibold text-neutral-600">
                intuitive, dependable products
              </strong>
              —guided by{" "}
              <strong className="font-semibold text-neutral-600">data</strong>, built for{" "}
              <strong className="font-semibold text-neutral-600">growth</strong>, and focused on{" "}
              <strong className="font-semibold text-neutral-600">outcomes</strong> that move the
              business forward.
            </>
          }
        />
      }
      heroFirst={false}
      hideHero
      hideBreadcrumbs
    />
  );
}
