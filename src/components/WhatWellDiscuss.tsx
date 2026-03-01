const DISCUSSION_ITEMS = [
  {
    title: "Your Current Infrastructure",
    body: "Review stack, cloud setup, workflows to understand where you are today.",
  },
  {
    title: "Business Challenges",
    body: "Obstacles holding you back: tech debt, scaling issues, operational risk.",
  },
  {
    title: "Goals & Desired Outcomes",
    body: "Define what success looks like and align on measurable outcomes.",
  },
  {
    title: "Potential Solutions",
    body: "Explore tailored approaches: cloud migration, AI integration, custom engineering.",
  },
  {
    title: "Timeline & Budget",
    body: "Discuss realistic timelines, resourcing, and investment levels.",
  },
  {
    title: "Next Steps",
    body: "Leave with clear recommendations and a roadmap to move forward.",
  },
];

const ACCENT = "#33c6ff";

export default function WhatWellDiscuss() {
  return (
    <section className="mt-16 md:mt-24">
      <div className="flex flex-col gap-3 text-center sm:text-left">
        <h2 className="text-3xl font-semibold text-white">What We&apos;ll Discuss</h2>
        <p className="text-sm text-white/70 sm:text-base">
          A focused walkthrough to align priorities, constraints, and next steps.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {DISCUSSION_ITEMS.map((item, index) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:border-[#33c6ff]/40 hover:shadow-[0_0_35px_rgba(51,198,255,0.16)]"
          >
            <div className="pointer-events-none absolute -top-10 right-0 h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(51,198,255,0.18)_0%,_rgba(51,198,255,0)_70%)] blur-2xl transition-opacity duration-300 group-hover:opacity-90" />
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{
                backgroundColor: "rgba(51,198,255,0.12)",
                color: ACCENT,
              }}
            >
              <span className="text-base font-semibold">{index + 1}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#0b0b0b]">{item.title}</h3>
            <p className="mt-2 text-sm text-black/60">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
