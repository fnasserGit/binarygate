import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

/* ─── Exported constants ─── */
export const EMBLEM_SIZE_PX = 1536;
export const SPOKES_DESKTOP = 28;
export const SPOKES_MOBILE = 24;
export const STROKE_WIDTH = 8;
export const TRACE_STROKE = STROKE_WIDTH * 0.65;
export const TRACE_OPACITY = 0.68;
export const NODE_MIN_R = 4;
export const NODE_MAX_R = 10;
export const EMBLEM_MAX_R_RATIO = 0.42 * 0.95;
export const CHIP_SIZE_RATIO = 0.28;
export const PINS_PER_SIDE_DESKTOP = 10;
export const PINS_PER_SIDE_MOBILE = 8;
export const PIN_LENGTH_RATIO = 0.2;
export const PIN_THICKNESS_RATIO = 0.065;
export const TRACE_COUNT_PER_PIN = 2;

/* ─── Seeded RNG (deterministic) ─── */
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function seededRange(seed: number, min: number, max: number): number {
  return min + seededRandom(seed) * (max - min);
}

type EmblemPath = {
  d: string;
  className: "emblem-stroke" | "emblem-stroke-thin";
};

type EmblemNode = {
  cx: number;
  cy: number;
  r: number;
};

export interface CircuitEmblemOptions {
  size: number;
  seed: number;
  spokes: number;
  strokeColor?: string;
  nodeColor?: string;
  strokeWidth?: number;
}

type EmblemData = {
  size: number;
  cx: number;
  cy: number;
  chipRect: { x: number; y: number; w: number; h: number; rx: number };
  innerRect: { x: number; y: number; w: number; h: number; rx: number };
  chipSize: number;
  strokeColor: string;
  nodeColor: string;
  strokeWidth: number;
  thinWidth: number;
  paths: EmblemPath[];
  nodes: EmblemNode[];
  pinRects: { x: number; y: number; w: number; h: number }[];
  chipMarker: { cx: number; cy: number; r: number };
  traces: Array<Array<{ x: number; y: number }>>;
  maxRadius: number;
};

function rotatePoint(x: number, y: number, angle: number) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: x * cos - y * sin, y: x * sin + y * cos };
}

function buildEmblemData(options: CircuitEmblemOptions): EmblemData {
  const {
    size,
    seed,
    spokes,
    strokeColor = "#d7dde3",
    nodeColor = "#d7dde3",
    strokeWidth = TRACE_STROKE,
  } = options;

  const cx = size / 2;
  const cy = size / 2;
  const R = Math.min(size, size) * 0.42;
  const maxR = R * 0.95;
  const chipSize = R * CHIP_SIZE_RATIO;
  const chipHalf = chipSize / 2;
  const pinCount = spokes >= 26 ? PINS_PER_SIDE_DESKTOP : PINS_PER_SIDE_MOBILE;
  const pinLength = chipSize * 0.32;

  const paths: EmblemPath[] = [];
  const nodes: EmblemNode[] = [];
  const pinRects: { x: number; y: number; w: number; h: number }[] = [];
  const traces: Array<Array<{ x: number; y: number }>> = [];
  let maxRadius = 0;

  const chipRect = { x: cx - chipHalf, y: cy - chipHalf, w: chipSize, h: chipSize, rx: 6 };
  const innerInset = Math.max(6, Math.min(10, chipSize * 0.08));
  const innerRect = {
    x: chipRect.x + innerInset,
    y: chipRect.y + innerInset,
    w: chipRect.w - innerInset * 2,
    h: chipRect.h - innerInset * 2,
    rx: Math.max(4, chipRect.rx - 2),
  };
  const pinLen = chipSize * PIN_LENGTH_RATIO;
  const pinThick = chipSize * PIN_THICKNESS_RATIO;
  const pinMargin = chipSize * 0.14;
  const sides: { dx: number; dy: number; ox: number; oy: number; vertical: boolean }[] = [
    { dx: 0, dy: -1, ox: 0, oy: -chipHalf, vertical: true },
    { dx: 0, dy: 1, ox: 0, oy: chipHalf, vertical: true },
    { dx: -1, dy: 0, ox: -chipHalf, oy: 0, vertical: false },
    { dx: 1, dy: 0, ox: chipHalf, oy: 0, vertical: false },
  ];

  const pinTips: { x: number; y: number; nx: number; ny: number }[] = [];

  for (const side of sides) {
    for (let i = 0; i < pinCount; i++) {
      const t = (i + 1) / (pinCount + 1);
      const span = chipSize - pinMargin * 2;
      const offset = -span / 2 + span * t;
      const px = cx + side.ox + (side.dx === 0 ? offset : side.dx * 0);
      const py = cy + side.oy + (side.dy === 0 ? offset : side.dy * 0);
      const pinW = side.dx === 0 ? pinThick : pinLen;
      const pinH = side.dx === 0 ? pinLen : pinThick;
      const pinX = px + side.dx * 0.5 * pinLen - pinW / 2;
      const pinY = py + side.dy * 0.5 * pinLen - pinH / 2;
      pinRects.push({ x: pinX, y: pinY, w: pinW, h: pinH });
      pinTips.push({
        x: px + side.dx * pinLen,
        y: py + side.dy * pinLen,
        nx: side.dx,
        ny: side.dy,
      });
    }
  }

  const nodeWeights = [
    { min: NODE_MIN_R * 0.7, max: NODE_MAX_R * 0.8, threshold: 0.8 },
    { min: NODE_MIN_R * 0.85, max: NODE_MAX_R * 1.05, threshold: 0.98 },
    { min: NODE_MIN_R * 1.1, max: NODE_MAX_R * 1.3, threshold: 1.0 },
  ];

  const addNode = (x: number, y: number, seedValue: number) => {
    const pick = seededRandom(seedValue);
    const bucket = nodeWeights.find((entry) => pick <= entry.threshold) ?? nodeWeights[0];
    nodes.push({ cx: x, cy: y, r: seededRange(seedValue + 0.5, bucket.min, bucket.max) });
  };

  for (let i = 0; i < pinTips.length; i += 1) {
    const pin = pinTips[i];
    for (let tIndex = 0; tIndex < TRACE_COUNT_PER_PIN; tIndex += 1) {
      const baseSeed = seed + i * 97 + tIndex * 409;
      const segCount = 2 + Math.floor(seededRange(baseSeed, 0, 3));
      const outward1 = seededRange(baseSeed + 1, R * 0.08, R * 0.16);
      const tangential1 = seededRange(baseSeed + 2, -R * 0.12, R * 0.12);
      const outward2 = seededRange(baseSeed + 3, R * 0.08, R * 0.18);
      const tangential2 = seededRandom(baseSeed + 4) > 0.6
        ? seededRange(baseSeed + 5, -R * 0.1, R * 0.1)
        : 0;

      const points: { x: number; y: number; addNode: boolean }[] = [];
      let x = pin.x;
      let y = pin.y;
      points.push({ x, y, addNode: false });
      x += pin.nx * outward1;
      y += pin.ny * outward1;
      points.push({ x, y, addNode: true });

      if (Math.abs(tangential1) > 0.5) {
        x += pin.ny * tangential1;
        y += -pin.nx * tangential1;
        points.push({ x, y, addNode: true });
      }

      x += pin.nx * outward2;
      y += pin.ny * outward2;
      points.push({ x, y, addNode: true });

      if (segCount >= 4 && Math.abs(tangential2) > 0.5) {
        x += pin.ny * tangential2;
        y += -pin.nx * tangential2;
        points.push({ x, y, addNode: true });
        if (segCount >= 5) {
          const outward3 = seededRange(baseSeed + 6, R * 0.06, R * 0.14);
          x += pin.nx * outward3;
          y += pin.ny * outward3;
          points.push({ x, y, addNode: true });
        }
      }

      const clampedPoints = points.map((point) => {
        const dist = Math.hypot(point.x - cx, point.y - cy);
        if (dist <= maxR) return point;
        const scale = maxR / (dist || 1);
        return {
          x: cx + (point.x - cx) * scale,
          y: cy + (point.y - cy) * scale,
          addNode: point.addNode,
        };
      });

      const d = clampedPoints
        .map((point, idx) => `${idx === 0 ? "M" : "L"}${point.x} ${point.y}`)
        .join(" ");
      paths.push({ d, className: "emblem-stroke" });
      traces.push(clampedPoints.map((point) => ({ x: point.x, y: point.y })));
      for (const point of clampedPoints) {
        maxRadius = Math.max(maxRadius, Math.hypot(point.x - cx, point.y - cy));
      }

      for (let pIndex = 1; pIndex < clampedPoints.length; pIndex += 1) {
        if (!clampedPoints[pIndex].addNode) continue;
        addNode(clampedPoints[pIndex].x, clampedPoints[pIndex].y, baseSeed + 20 + pIndex * 3);
        if (seededRandom(baseSeed + 30 + pIndex) > 0.8) {
          const midX = (clampedPoints[pIndex - 1].x + clampedPoints[pIndex].x) * 0.5;
          const midY = (clampedPoints[pIndex - 1].y + clampedPoints[pIndex].y) * 0.5;
          addNode(midX, midY, baseSeed + 60 + pIndex * 5);
        }
      }

      if (seededRandom(baseSeed + 90) > 0.82) {
        const offset = seededRange(baseSeed + 91, 2, 4);
        const offsetX = pin.ny * offset;
        const offsetY = -pin.nx * offset;
        const parallel = clampedPoints.map((point) => ({
          x: point.x + offsetX,
          y: point.y + offsetY,
        }));
        const parallelD = parallel
          .map((point, idx) => `${idx === 0 ? "M" : "L"}${point.x} ${point.y}`)
          .join(" ");
        paths.push({ d: parallelD, className: "emblem-stroke-thin" });
      }
    }
  }

  const thinWidth = strokeWidth * 0.75;
  const chipMarker = {
    cx: chipRect.x + chipRect.w * 0.2,
    cy: chipRect.y + chipRect.h * 0.2,
    r: Math.max(6, chipSize * 0.06),
  };

  for (const node of nodes) {
    maxRadius = Math.max(maxRadius, Math.hypot(node.cx - cx, node.cy - cy) + node.r);
  }
  for (const pin of pinRects) {
    const corners = [
      { x: pin.x, y: pin.y },
      { x: pin.x + pin.w, y: pin.y },
      { x: pin.x, y: pin.y + pin.h },
      { x: pin.x + pin.w, y: pin.y + pin.h },
    ];
    for (const corner of corners) {
      maxRadius = Math.max(maxRadius, Math.hypot(corner.x - cx, corner.y - cy));
    }
  }
  const chipCorners = [
    { x: chipRect.x, y: chipRect.y },
    { x: chipRect.x + chipRect.w, y: chipRect.y },
    { x: chipRect.x, y: chipRect.y + chipRect.h },
    { x: chipRect.x + chipRect.w, y: chipRect.y + chipRect.h },
  ];
  for (const corner of chipCorners) {
    maxRadius = Math.max(maxRadius, Math.hypot(corner.x - cx, corner.y - cy));
  }

  return {
    size,
    cx,
    cy,
    chipRect,
    innerRect,
    chipSize,
    strokeColor,
    nodeColor,
    strokeWidth,
    thinWidth,
    paths,
    nodes,
    pinRects,
    chipMarker,
    traces,
    maxRadius,
  };
}

interface CircuitEmblemSVGProps {
  size: number;
  seed: number;
  spokes: number;
  strokeColor?: string;
  nodeColor?: string;
  strokeWidth?: number;
}

export function CircuitEmblemSVG(props: CircuitEmblemSVGProps) {
  const data = buildEmblemData(props);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${data.size} ${data.size}`}
      width={data.size}
      height={data.size}
    >
      <defs>
        <style>
          {`
          .emblem-stroke{fill:none;stroke:${data.strokeColor};stroke-width:${data.strokeWidth};stroke-linecap:round;stroke-linejoin:round;opacity:${TRACE_OPACITY}}
          .emblem-stroke-thin{fill:none;stroke:${data.strokeColor};stroke-width:${data.thinWidth};stroke-linecap:round;stroke-linejoin:round;opacity:${TRACE_OPACITY * 0.85}}
          .emblem-node{fill:none;stroke:${data.nodeColor};stroke-width:${Math.max(1.5, data.strokeWidth * 1.15)};opacity:${Math.min(0.85, TRACE_OPACITY + 0.12)}}
          .emblem-pin{fill:#BFC7D1;stroke:#7B8794;stroke-width:1}
        `}
        </style>
      </defs>
      {data.pinRects.map((pin, idx) => (
        <rect key={`pin-${idx}`} className="emblem-pin" x={pin.x} y={pin.y} width={pin.w} height={pin.h} />
      ))}
      <rect
        x={data.chipRect.x}
        y={data.chipRect.y}
        width={data.chipRect.w}
        height={data.chipRect.h}
        rx={data.chipRect.rx}
        fill="#0B0F14"
        stroke="#D7DDE3"
        strokeWidth={2}
        opacity={0.95}
      />
      <rect
        x={data.innerRect.x}
        y={data.innerRect.y}
        width={data.innerRect.w}
        height={data.innerRect.h}
        rx={data.innerRect.rx}
        fill="none"
        stroke="#D7DDE3"
        strokeWidth={1.5}
        strokeOpacity={0.35}
      />
      <circle cx={data.chipMarker.cx} cy={data.chipMarker.cy} r={data.chipMarker.r} fill="#1A212B" />
      {data.paths.map((path, idx) => (
        <path key={`path-${idx}`} className={path.className} d={path.d} />
      ))}
      {data.nodes.map((node, idx) => (
        <circle key={`node-${idx}`} className="emblem-node" cx={node.cx} cy={node.cy} r={node.r} />
      ))}
    </svg>
  );
}

/** Generate SVG string (rendered from React component for deterministic markup). */
export function generateCircuitEmblemSVG(options: CircuitEmblemOptions): string {
  return renderToStaticMarkup(<CircuitEmblemSVG {...options} />);
}

export function generateCircuitEmblemData(options: CircuitEmblemOptions): EmblemData {
  return buildEmblemData(options);
}

if (process.env.NODE_ENV !== "production") {
  const devSvg = generateCircuitEmblemSVG({
    size: EMBLEM_SIZE_PX,
    seed: 1,
    spokes: SPOKES_DESKTOP,
  });
  const circleMatches = devSvg.match(/<circle[^>]+r="([^"]+)"/g) ?? [];
  for (const circle of circleMatches) {
    const radiusMatch = circle.match(/r="([^"]+)"/);
    if (!radiusMatch) continue;
    const radius = Number(radiusMatch[1]);
    if (Number.isFinite(radius) && radius > EMBLEM_SIZE_PX * CHIP_SIZE_RATIO * 0.6) {
      throw new Error("CircuitEmblemSVG: border circle detected in SVG output.");
    }
  }
}
