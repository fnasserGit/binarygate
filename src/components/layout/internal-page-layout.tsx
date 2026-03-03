import Link from "next/link";
import { InternalHero } from "@/components/sections/internal-hero";
import { LetsTalk } from "@/components/sections/lets-talk";

type Breadcrumb = {
  label: string;
  href?: string;
};

type InternalPageLayoutProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children: React.ReactNode;
  afterHero?: React.ReactNode;
  hideHero?: boolean;
  heroFirst?: boolean;
  hideBreadcrumbs?: boolean;
  showLetsTalk?: boolean;
  letsTalkServiceName?: string;
};

export function InternalPageLayout({
  title,
  subtitle,
  breadcrumbs = [],
  children,
  afterHero,
  hideHero = false,
  heroFirst = true,
  hideBreadcrumbs = false,
  showLetsTalk = false,
  letsTalkServiceName,
}: InternalPageLayoutProps) {
  return (
    <main className="bg-white">
      {!hideBreadcrumbs && breadcrumbs.length > 0 ? (
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10">
          <nav className="pt-6 text-xs text-neutral-500">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition hover:text-neutral-700">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-neutral-600">{crumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 ? <span>/</span> : null}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      ) : null}

      {hideHero ? null : heroFirst ? <InternalHero title={title} subtitle={subtitle} /> : null}

      {afterHero}

      {hideHero ? null : !heroFirst ? <InternalHero title={title} subtitle={subtitle} /> : null}

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        {children}
      </div>

      {showLetsTalk ? <LetsTalk serviceName={letsTalkServiceName ?? title} /> : null}
    </main>
  );
}
