const ACCENT = "#33c6ff";

const EXPECTATIONS = [
  {
    title: "30 Minutes",
    body: "Focused discussion about your needs and goals.",
  },
  {
    title: "Virtual Meeting",
    body: "Google Meet or Zoom, join from anywhere.",
  },
  {
    title: "No Obligation",
    body: "Free consultation, no pressure.",
  },
  {
    title: "Expert Guidance",
    body: "Talk with experienced consultants.",
  },
];

export default function ExpectationsPanel() {
  return (
    <section className="flex h-full flex-col">
      <h2 className="text-2xl font-semibold text-white">What to Expect</h2>
      <div className="mt-6 flex flex-col gap-4">
        {EXPECTATIONS.map((item, index) => {
          const highlight = index === 0;
          return (
            <div
              key={item.title}
              className={`relative overflow-hidden rounded-2xl border p-6 ${
                highlight
                  ? "border-[#33c6ff]/40 bg-white shadow-[0_0_35px_rgba(51,198,255,0.18)]"
                  : "border-black/10 bg-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: "rgba(51,198,255,0.12)",
                    color: ACCENT,
                  }}
                >
                  <span className="text-lg font-semibold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0b0b0b]">{item.title}</h3>
                  <p className="mt-2 text-sm text-black/60">{item.body}</p>
                </div>
              </div>
              {highlight ? (
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#33c6ff]/40" />
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
