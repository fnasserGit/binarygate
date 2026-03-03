import type { Metadata } from "next";
import { navMenus } from "@/data/navigation";
import { NavOverviewPage } from "@/components/pages/nav-overview-page";
import DottedSurfaceFeatureSection from "@/components/ui/dotted-surface-feature-section";

const menu = navMenus.find((item) => item.label === "What we do");

export const metadata: Metadata = {
  title: "What we do | BinaryGate",
  description:
    "Discover BinaryGate delivery pillars across cloud transformation, DevOps, and managed services.",
};

export default function WhatWeDoPage() {
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
            { label: "What we do" },
          ]}
          title="What we do"
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
