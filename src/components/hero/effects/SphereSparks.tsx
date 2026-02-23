"use client";

import { useEffect } from "react";

export const SPARK_COUNT_DESKTOP = 4;
export const SPARK_COUNT_MOBILE = 4;
export const SPARK_SPEED_DESKTOP = 2.4;
export const SPARK_SPEED_MOBILE = 1.8;
export const SEGMENT_WINDOW = 0.12;
export const MIN_ARC_DISTANCE = 0.35;
export const ARC_SAMPLE_POINTS_DESKTOP = 28;
export const ARC_SAMPLE_POINTS_MOBILE = 20;

export type SphereSpark = {
  i1: number;
  i2: number;
  headT: number;
  speed: number;
  cooldown: number;
  fade: number;
  fadingIn: boolean;
  fadingOut: boolean;
};

export type SphereSparkState = {
  sparks: SphereSpark[];
  samples: Float32Array[];
};

type SphereSparksProps = {
  sparkStateRef: React.MutableRefObject<SphereSparkState | null>;
  count: number;
  samplePoints: number;
  enabled: boolean;
};

export default function SphereSparks({
  sparkStateRef,
  count,
  samplePoints,
  enabled,
}: SphereSparksProps) {
  useEffect(() => {
    if (!enabled || count <= 0) {
      sparkStateRef.current = null;
      return;
    }

    const sparks: SphereSpark[] = [];
    for (let i = 0; i < count; i += 1) {
      sparks.push({
        i1: 0,
        i2: 1,
        headT: (i / Math.max(1, count)) * 0.3,
        speed: SPARK_SPEED_DESKTOP * (0.9 + (i % 3) * 0.06),
        cooldown: Math.random() * 0.4,
        fade: 1,
        fadingIn: false,
        fadingOut: false,
      });
    }

    const samples = Array.from({ length: count }, () => new Float32Array(samplePoints * 2));
    sparkStateRef.current = { sparks, samples };
  }, [count, enabled, samplePoints, sparkStateRef]);

  return null;
}
