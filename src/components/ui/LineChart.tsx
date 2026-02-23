import React from "react";

type LineChartPoint = {
  x: number;
  y: number;
};

type LineChartProps = {
  points: LineChartPoint[];
  accent: string;
  height?: number;
};

export function LineChart({ points, accent, height = 160 }: LineChartProps) {
  const width = 320;
  const padding = 16;
  const minX = Math.min(...points.map((p) => p.x));
  const maxX = Math.max(...points.map((p) => p.x));
  const minY = Math.min(...points.map((p) => p.y));
  const maxY = Math.max(...points.map((p) => p.y));

  const scaleX = (value: number) =>
    padding + ((value - minX) / (maxX - minX || 1)) * (width - padding * 2);
  const scaleY = (value: number) =>
    height - padding - ((value - minY) / (maxY - minY || 1)) * (height - padding * 2);

  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${scaleX(point.x)} ${scaleY(point.y)}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full"
      role="img"
      aria-label="Trend line chart"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={width} height={height} fill="transparent" />
      <path
        d={path}
        fill="none"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`${path} L ${scaleX(points[points.length - 1].x)} ${height - padding} L ${scaleX(points[0].x)} ${height - padding} Z`}
        fill="url(#lineGradient)"
      />
      {points.map((point, idx) => (
        <circle
          key={`point-${idx}`}
          cx={scaleX(point.x)}
          cy={scaleY(point.y)}
          r={2.2}
          fill={accent}
        />
      ))}
    </svg>
  );
}
