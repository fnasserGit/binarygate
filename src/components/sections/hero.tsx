"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HeroOrb } from "@/components/sections/hero-orb";
import HeroDarkVeil from "@/components/backgrounds/HeroDarkVeil";
import { LogoStrip } from "@/components/logo-strip";
import { CONSULTATION_URL } from "@/lib/links";

const HERO_MIN_SVH_MOBILE = "calc(100svh - var(--header-height))";
const HERO_MIN_SVH_DESKTOP = "calc(100svh - var(--header-height))";
const ORB_HEIGHT_CLAMP_MOBILE = "clamp(260px,34svh,380px)";
const HEADER_HEIGHT = "4rem";

export function Hero() {
  const reduceMotionPref = useReducedMotion();
  const [reduceMotion, setReduceMotion] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(heroRef, { amount: 0.25, once: true });
  const shouldAnimate = inView && !reduceMotion;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduceMotion(!!reduceMotionPref);
  }, [reduceMotionPref]);

  const headlineVariants = {
    hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0 0 0)",
      transition: { duration: 0.8 },
    },
  } as const;

  const subheadVariants = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.75 },
    },
  } as const;

  return (
    <section
      className="relative overflow-hidden bg-[#0B0F14] text-[#F8FAFC] min-h-[100svh] min-h-[var(--hero-min-mobile)] sm:min-h-[var(--hero-min-desktop)]"
      style={{
        ["--hero-min-mobile" as string]: HERO_MIN_SVH_MOBILE,
        ["--hero-min-desktop" as string]: HERO_MIN_SVH_DESKTOP,
        ["--header-height" as string]: HEADER_HEIGHT,
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <HeroDarkVeil />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2 sm:h-3 bg-gradient-to-b from-transparent to-white"
        aria-hidden="true"
      />
      <style>{`
        @keyframes hero-shimmer {
          0%, 100% { opacity: 0.25; transform: translateX(0); }
          50% { opacity: 0.5; transform: translateX(6px); }
        }
      `}</style>
      <div
        ref={heroRef}
        className="relative z-20 mx-auto flex min-h-[var(--hero-min-mobile)] max-w-[1240px] flex-col justify-center px-6 pb-28 pt-20 sm:min-h-[var(--hero-min-desktop)] sm:px-8 sm:pb-36 sm:pt-24 lg:px-10 lg:pb-40 lg:pt-28"
      >
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(200px,0.55fr)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0 max-w-2xl order-2 sm:order-1 text-left">
            <motion.h1
              className="mt-4 text-[clamp(34px,5vw,72px)] font-light leading-[1.05] tracking-[-0.02em] text-[#F8FAFC]"
              initial="hidden"
              animate={shouldAnimate ? "visible" : "visible"}
              variants={reduceMotion ? undefined : headlineVariants}
              transition={{ delay: 0.14 }}
              style={{ opacity: reduceMotion ? 1 : undefined }}
            >
              Stability and growth{" "}
              <span className="relative inline-block text-[0.8em] font-normal">
                across cloud, hybrid, and on-prem.
                <span
                  className="pointer-events-none absolute -bottom-2 left-0 h-[6px] w-full rounded-full opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(248,250,252,0.5) 0%, rgba(248,250,252,0) 70%)",
                    animation: reduceMotion ? "none" : "hero-shimmer 3s ease-in-out infinite",
                  }}
                />
              </span>
            </motion.h1>
            <motion.p
              className="mt-4 text-[clamp(15px,1.6vw,18px)] leading-relaxed text-[#F8FAFC]/80"
              initial="hidden"
              animate={shouldAnimate ? "visible" : "visible"}
              variants={reduceMotion ? undefined : subheadVariants}
              transition={{ delay: 0.34 }}
              style={{ opacity: reduceMotion ? 1 : undefined }}
            >
              Reliable, scalable platforms engineered for real-world complexity.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={CONSULTATION_URL}
                className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1113]"
                style={{ backgroundColor: "var(--spark)" }}
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          <div
            className="flex justify-center order-1 sm:order-2 sm:justify-end pb-6 sm:pb-0"
            style={{ ["--orb-h-mobile" as string]: ORB_HEIGHT_CLAMP_MOBILE }}
          >
            <HeroOrb
              className="w-full max-w-[440px] mx-auto h-[var(--orb-h-mobile)] sm:h-[300px] sm:max-w-[300px] md:h-[360px] md:max-w-[380px] lg:h-[460px] lg:max-w-[520px]"
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none flex justify-center pb-6 md:pb-8 md:absolute md:inset-x-0 md:bottom-0 md:z-10 mt-6 md:mt-0">
        <div className="w-[160vw] max-w-none opacity-90 md:w-[130vw] lg:w-[115vw]">
          <LogoStrip />
        </div>
      </div>
    </section>
  );
}
