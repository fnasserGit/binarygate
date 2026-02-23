"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import DarkVeil from "@/components/backgrounds/DarkVeil";

const MOBILE_BREAKPOINT_PX = 768;

export default function HeroDarkVeil() {
  const reduceMotionPref = useReducedMotion();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setReduceMotion(reduceMotionPref);
  }, [reduceMotionPref]);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX}px)`);
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const veilProps = useMemo(() => {
    if (reduceMotion) {
      return {
        hueShift: 40,
        noiseIntensity: 0,
        scanlineIntensity: 0.6,
        scanlineFrequency: 0.8,
        speed: 0,
        warpAmount: 0,
        resolutionScale: 1,
      };
    }

    return {
      hueShift: 40,
      noiseIntensity: 0,
      scanlineIntensity: 0.6,
      scanlineFrequency: 0.8,
      speed: 3,
      warpAmount: 0.65,
      resolutionScale: 1,
    };
  }, [isMobile, reduceMotion]);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[#0B0F14]" />
      <div className="absolute inset-0">
        <DarkVeil {...veilProps} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65 pointer-events-none" />
    </div>
  );
}
