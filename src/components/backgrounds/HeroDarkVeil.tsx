"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import DarkVeil from "@/components/backgrounds/DarkVeil";

export default function HeroDarkVeil() {
  const reduceMotionPref = useReducedMotion();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduceMotion(!!reduceMotionPref);
  }, [reduceMotionPref]);

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
  }, [reduceMotion]);

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
