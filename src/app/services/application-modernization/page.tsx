import Link from "next/link";
import { SERVICES_HREF } from "@/config/navigation";

export const metadata = {
  title: "Application Modernization | BinaryGate",
  description: "Containers, Kubernetes, Serverless.",
};

export default function ApplicationModernizationPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#101316]">
      <section className="relative overflow-hidden bg-[#0f1113] text-[#E9EEF3]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(51,198,255,0.22),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(51,198,255,0.12),transparent_50%)]" />
        <div className="relative mx-auto flex min-h-[50svh] max-w-[1200px] flex-col justify-center px-6 pb-16 pt-24 sm:px-8 lg:px-10">
          <Link
            href={SERVICES_HREF}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#E9EEF3]/70 transition hover:text-white"
          >
            Back to Services
          </Link>
          <h1 className="mt-6 text-3xl font-light tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Application Modernization
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#E9EEF3]/75 sm:text-lg">
            Containers, Kubernetes, Serverless.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">
            Overview
          </h2>
          <p className="mt-4 text-sm text-neutral-600 sm:text-base">
            This service detail page is coming soon. Reach out to learn how we can help with application modernization.
          </p>
        </div>
      </section>
    </main>
  );
}
