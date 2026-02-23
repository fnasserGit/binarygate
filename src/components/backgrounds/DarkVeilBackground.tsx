"use client";

export function DarkVeilBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#0B0F14]">
      <style>{`
        @keyframes veil-drift-a {
          0% { transform: translate3d(-20px, -10px, 0) scale(1); opacity: 0.22; }
          50% { transform: translate3d(10px, 20px, 0) scale(1.08); opacity: 0.28; }
          100% { transform: translate3d(20px, -10px, 0) scale(1); opacity: 0.22; }
        }
        @keyframes veil-drift-b {
          0% { transform: translate3d(10px, 20px, 0) scale(1); opacity: 0.18; }
          50% { transform: translate3d(-20px, -10px, 0) scale(1.06); opacity: 0.26; }
          100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.18; }
        }
        @keyframes veil-drift-c {
          0% { transform: translate3d(0, -20px, 0) scale(1); opacity: 0.16; }
          50% { transform: translate3d(18px, 10px, 0) scale(1.05); opacity: 0.22; }
          100% { transform: translate3d(-10px, 12px, 0) scale(1); opacity: 0.16; }
        }
        @media (prefers-reduced-motion: reduce) {
          .veil-blob { animation: none !important; }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(51,198,255,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(8,15,25,0.8),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(14,25,38,0.6),transparent_60%)]" />

      <div
        className="veil-blob absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(51,198,255,0.28),transparent_65%)] blur-3xl"
        style={{ animation: "veil-drift-a 18s ease-in-out infinite alternate" }}
      />
      <div
        className="veil-blob absolute -bottom-32 -right-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(30,45,70,0.35),transparent_65%)] blur-3xl"
        style={{ animation: "veil-drift-b 20s ease-in-out infinite alternate" }}
      />
      <div
        className="veil-blob absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(51,198,255,0.18),transparent_65%)] blur-3xl"
        style={{ animation: "veil-drift-c 16s ease-in-out infinite alternate" }}
      />
    </div>
  );
}
