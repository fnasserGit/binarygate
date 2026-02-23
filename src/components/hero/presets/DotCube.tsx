"use client";

import { useMemo } from "react";

type DotCubeProps = {
  sizePx: number;
  dotsPerSide?: number;
  isMobile: boolean;
  rotation: { x: number; y: number; z?: number };
  reduceMotion: boolean;
};

type Dot = { cx: number; cy: number; accent: boolean };

export default function DotCube({
  sizePx,
  dotsPerSide = 13,
  isMobile,
  rotation,
  reduceMotion,
}: DotCubeProps) {
  const edge = Math.round(sizePx * 0.62 * 0.8);
  const depth = Math.round(edge / 2);
  const r = isMobile ? 1.4 : 1.9;
  const fillColor = "rgba(255,255,255,0.92)";

  const dots = useMemo(() => {
    const size = Math.max(1, edge);
    const step = size / Math.max(1, dotsPerSide - 1);
    const out: Dot[] = [];
    for (let i = 0; i < dotsPerSide; i += 1) {
      for (let j = 0; j < dotsPerSide; j += 1) {
        const cx = i * step;
        const cy = j * step;
        out.push({ cx, cy, accent: false });
      }
    }
    return out;
  }, [edge, dotsPerSide]);

  const targetRot = reduceMotion ? { x: 0, y: 0, z: 0 } : rotation;

  const face = (transform: string) => (
    <div
      className="absolute inset-0"
      style={{
        width: edge,
        height: edge,
        transform,
        transformStyle: "preserve-3d",
      }}
    >
      <svg
        width={edge}
        height={edge}
        viewBox={`0 0 ${edge} ${edge}`}
        aria-hidden="true"
        className="pointer-events-none"
        style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.28))" }}
      >
        {dots.map((dot, i) => (
          <circle
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={r}
            fill={fillColor}
          />
        ))}
      </svg>
    </div>
  );

  const BASE_TILT_X = 30;
  const BASE_TILT_Y = 30;

  return (
    <div
      className="absolute inset-0 pointer-events-auto touch-none"
      style={{ perspective: "1200px" }}
      aria-hidden="true"
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: edge,
          height: edge,
          transformStyle: "preserve-3d",
          transform: `translate(-50%, -50%) rotateX(${targetRot.x + BASE_TILT_X}deg) rotateY(${targetRot.y + BASE_TILT_Y}deg) rotateZ(${targetRot.z || 0}deg)`,
        }}
      >
        {face(`translateZ(${depth}px)`)}
        {face(`rotateY(180deg) translateZ(${depth}px)`)}
        {face(`rotateY(90deg) translateZ(${depth}px)`)}
        {face(`rotateY(-90deg) translateZ(${depth}px)`)}
        {face(`rotateX(90deg) translateZ(${depth}px)`)}
        {face(`rotateX(-90deg) translateZ(${depth}px)`)}
      </div>
    </div>
  );
}
