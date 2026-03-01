import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-6 py-8 sm:px-8 md:py-12 lg:px-10">
        <div className="max-w-2xl text-left">
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            Services
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Explore our core service lines for cloud and hybrid infrastructure transformation.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/services/cloud"
            className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
          >
            Explore Cloud
          </Link>
          <Link
            href="/services/hybrid-on-prem"
            className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
          >
            Explore Hybrid &amp; On-Prem
          </Link>
        </div>
      </div>
    </section>
  );
}
