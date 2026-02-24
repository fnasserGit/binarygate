"use client";

import { MutableRefObject, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import DotCube from "@/components/hero/presets/DotCube";

type PresetCProps = {
  className?: string;
  accentColor: string;
  isMobile: boolean;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  glowRef: MutableRefObject<HTMLDivElement | null>;
  size: number;
  rotation: { x: number; y: number; z?: number };
  triggerKey: number;
};

export default function PresetC_Cubes({
  className = "",
  accentColor,
  isMobile,
  containerRef,
  glowRef,
  size,
  rotation,
  triggerKey,
}: PresetCProps) {
  const reduceMotionPref = useReducedMotion();
  const [reduceMotion, setReduceMotion] = useState(false);
  const dotsPerSide = isMobile ? 11 : 13;

  useEffect(() => {
    setReduceMotion(!!reduceMotionPref);
  }, [reduceMotionPref]);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        ref={containerRef}
        className={`relative ${className}`}
        style={{
          width: size,
          height: size,
          opacity: 1,
          transform: "scale(1)",
          filter: "none",
          transition: "opacity 150ms ease-out, transform 150ms ease-out, filter 150ms ease-out",
        }}
      >
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${accentColor}22 0%, rgba(0,0,0,0) 65%)`,
          }}
        />
        <DotCube
          sizePx={size}
          dotsPerSide={dotsPerSide}
          isMobile={isMobile}
          rotation={rotation}
          reduceMotion={reduceMotion}
        />
      </div>
    </div>
  );
}
