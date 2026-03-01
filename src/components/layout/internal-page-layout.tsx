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
  showLetsTalk?: boolean;
  letsTalkServiceName?: string;
};

export function InternalPageLayout({
  title,
  subtitle,
  breadcrumbs = [],
  children,
  showLetsTalk = false,
  letsTalkServiceName,
}: InternalPageLayoutProps) {
  return (
    <main className="bg-white">
      {breadcrumbs.length > 0 ? (
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

      <InternalHero title={title} subtitle={subtitle} />

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        {children}
      </div>

      {showLetsTalk ? <LetsTalk serviceName={letsTalkServiceName ?? title} /> : null}
    </main>
  );
}
