import Image from "next/image";
import type { Metadata } from "next";

import HeroDarkVeil from "@/components/backgrounds/HeroDarkVeil";
import WhatWellDiscuss from "@/components/WhatWellDiscuss";
import ExpectationsPanel from "@/components/book-consultation/ExpectationsPanel";

export const metadata: Metadata = {
  title: "Book a Consultation | BinaryGate",
  description: "Schedule a focused strategy call with BinaryGate.",
};

export default function BookConsultationPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-transparent text-white">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <HeroDarkVeil />
      </div>
      <div className="relative z-10">
        <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Want to learn more? Schedule time with our team now
            </h1>
          </div>
          <div className="mt-10 rounded-3xl border border-black/10 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.15)]">
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.05fr_1.4fr]">
              <div className="relative border-b border-black/10 p-10 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-3 text-sm text-black/60">
                  <div className="relative h-6 w-6">
                    <Image
                      src="/logo.png"
                      alt="BinaryGate logo"
                      fill
                      className="object-contain"
                      sizes="24px"
                    />
                  </div>
                  <span className="font-semibold tracking-wide text-black/60">
                    BinaryGate
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-[#0f2b46]">
                  Discovery call
                </h2>
                <div className="mt-4 flex items-center gap-3 text-sm text-black/60">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-black/50"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                  </span>
                  <span className="text-base font-medium text-black/70">
                    30 min
                  </span>
                </div>
                <p className="mt-5 max-w-md text-base leading-relaxed text-black/60">
                  Walk through your priorities, align on outcomes, and map a
                  focused strategy for your next build.
                </p>
                <button
                  type="button"
                  className="mt-12 text-sm font-semibold text-[#1f6feb]"
                >
                  Cookie settings
                </button>
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <iframe
                  src="https://app.simplymeet.me/binary-gate/binary-gate-30-1772138773563?is_widget=1&view=compact&specific-meeting-type=1"
                  style={{ width: "100%", height: "650px" }}
                  frameBorder="0"
                  scrolling="yes"
                  title="Schedule a session"
                />
              </div>
            </div>
          </div>
          <div className="mt-16">
          <ExpectationsPanel />
        </div>
        <WhatWellDiscuss />
        </section>
      </div>
    </main>
  );
}
