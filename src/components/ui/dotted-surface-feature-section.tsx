"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { DottedSurface } from "@/components/ui/dotted-surface";

type Breadcrumb = {
  label: string;
  href?: string;
};

export default function DottedSurfaceFeatureSection({
  breadcrumbs,
  title,
  description,
}: {
  breadcrumbs?: Breadcrumb[];
  title: string;
  description: React.ReactNode;
}) {
  return (
    <section className="relative mx-auto w-full min-h-[320px] overflow-hidden rounded-none bg-white pb-16 pt-0 md:pb-24">
      <DottedSurface className="size-full opacity-80" />
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10">
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
      <div className="relative z-10 flex min-h-[260px] items-center justify-center px-6 md:min-h-[320px] md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[40px] font-semibold tracking-tight text-neutral-900">
            {title}
          </h1>
          <span className="mx-auto mt-4 block h-1.5 w-12 rounded-full bg-[var(--spark)]" />
          <p className="mt-4 text-[24px] leading-relaxed text-neutral-600">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
