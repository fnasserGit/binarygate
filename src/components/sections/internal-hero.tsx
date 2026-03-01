type InternalHeroProps = {
  title: string;
  subtitle?: string;
};

export function InternalHero({ title, subtitle }: InternalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-white" />
        <div className="absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(51,198,255,0.18)_0%,rgba(51,198,255,0)_70%)] blur-2xl" />
        <svg
          className="absolute left-1/2 top-8 h-40 w-[680px] -translate-x-1/2 opacity-20"
          viewBox="0 0 680 160"
          aria-hidden="true"
        >
          <path
            d="M0 80 C 120 40, 220 120, 340 80 C 460 40, 560 120, 680 80"
            stroke="rgba(15,23,42,0.25)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0 110 C 120 70, 220 150, 340 110 C 460 70, 560 150, 680 110"
            stroke="rgba(15,23,42,0.18)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            {title}
          </h1>
          <span className="mx-auto mt-4 block h-1.5 w-12 rounded-full bg-[var(--spark)]" />
          {subtitle ? (
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
