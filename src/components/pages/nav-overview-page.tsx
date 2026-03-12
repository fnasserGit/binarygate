import { InternalPageLayout } from "@/components/layout/internal-page-layout";
import { ServiceCard } from "@/components/ui/service-card";
import { HowWeDoItSection } from "@/components/sections/how-we-do-it-section";
import type { NavMenu } from "@/data/navigation";

type NavOverviewPageProps = {
  menu: NavMenu;
  heroAddon?: React.ReactNode;
  hideHero?: boolean;
  heroFirst?: boolean;
  hideBreadcrumbs?: boolean;
};

export function NavOverviewPage({
  menu,
  heroAddon,
  hideHero = false,
  heroFirst = true,
  hideBreadcrumbs = false,
}: NavOverviewPageProps) {
  return (
    <InternalPageLayout
      title={menu.label}
      subtitle={`Explore ${menu.label.toLowerCase()} and the outcomes we deliver across each area.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: menu.label },
      ]}
      afterHero={heroAddon}
      hideHero={hideHero}
      heroFirst={heroFirst}
      hideBreadcrumbs={hideBreadcrumbs}
    >
      {menu.items.length > 0 ? (
        <>
          <div className="mt-5 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menu.items.map((item) => (
              <ServiceCard
                key={item.href}
                title={item.label}
                description={`${item.description} Learn how we deliver measurable outcomes.`}
                href={item.href}
              />
            ))}
          </div>
          <HowWeDoItSection />
        </>
      ) : null}
    </InternalPageLayout>
  );
}
