import React from "react";

type BarDatum = {
  label: string;
  value: number;
};

type BarChartProps = {
  data: BarDatum[];
  accent: string;
  height?: number;
};

export function BarChart({ data, accent, height = 160 }: BarChartProps) {
  const width = 320;
  const padding = 16;
  const max = Math.max(...data.map((d) => d.value), 1);
  const barWidth = (width - padding * 2) / data.length - 12;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full"
      role="img"
      aria-label="Bar chart"
    >
      <rect x="0" y="0" width={width} height={height} fill="transparent" />
      {data.map((datum, idx) => {
        const barHeight = ((height - padding * 2) * datum.value) / max;
        const x = padding + idx * ((width - padding * 2) / data.length) + 6;
        const y = height - padding - barHeight;
        return (
          <g key={datum.label}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              rx={4}
              fill={accent}
              fillOpacity={idx === data.length - 1 ? 0.85 : 0.45}
            />
            <text
              x={x + barWidth / 2}
              y={height - padding + 12}
              fontSize="10"
              textAnchor="middle"
              fill="#94a3b8"
            >
              {datum.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
