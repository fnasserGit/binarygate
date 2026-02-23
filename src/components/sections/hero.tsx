"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HeroOrb } from "@/components/sections/hero-orb";
import HeroDarkVeil from "@/components/backgrounds/HeroDarkVeil";
import { RotatingUseCaseLine } from "@/components/ui/rotating-use-case-line";
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
    setReduceMotion(reduceMotionPref);
  }, [reduceMotionPref]);

  const eyebrowVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  const headlineVariants = {
    hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0 0 0)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const subheadVariants = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-[#0B0F14] text-[#F8FAFC] min-h-[100svh] min-h-[var(--hero-min-mobile)] sm:min-h-[var(--hero-min-desktop)] max-h-[100svh]"
      style={{
        ["--hero-min-mobile" as string]: HERO_MIN_SVH_MOBILE,
        ["--hero-min-desktop" as string]: HERO_MIN_SVH_DESKTOP,
        ["--header-height" as string]: HEADER_HEIGHT,
      }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <HeroDarkVeil />
      </div>
      <style>{`
        @keyframes hero-shimmer {
          0%, 100% { opacity: 0.25; transform: translateX(0); }
          50% { opacity: 0.5; transform: translateX(6px); }
        }
      `}</style>
      <div
        ref={heroRef}
        className="relative z-10 mx-auto flex min-h-[var(--hero-min-mobile)] max-w-[1240px] flex-col justify-center px-6 pb-16 pt-20 sm:min-h-[var(--hero-min-desktop)] sm:px-8 sm:pb-20 sm:pt-24 lg:px-10 lg:pb-24 lg:pt-28"
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
              Transforming Complexity{" "}
              <span className="relative inline-block text-[0.8em] font-normal">
                into scalable architecture.
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
              We take fragmented systems and engineer them into secure, automated, high-performance platforms built for growth.
            </motion.p>
              <RotatingUseCaseLine
                className="mt-5"
                textClassName="text-[#33C6FF]"
              />
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={CONSULTATION_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#E9EEF3] px-6 py-3 text-sm font-semibold text-[#0f1113] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1113]"
              >
                Book a Consultation
              </Link>
              <Link
                href="/#services"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[#E9EEF3] transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1113]"
              >
                View Services
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
    </section>
  );
}
