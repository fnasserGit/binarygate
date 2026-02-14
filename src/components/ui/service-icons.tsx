import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export function ArchitectureIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3.5" y="4.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="4.5" width="7" height="7" rx="1.5" />
      <rect x="8.5" y="12.5" width="7" height="7" rx="1.5" />
      <path d="M7 12.5v3M17 12.5v3M12 11.5v1" />
    </svg>
  );
}

export function SecurityIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3.5l7 3v5.2c0 4.6-3.1 7.6-7 8.8-3.9-1.2-7-4.2-7-8.8V6.5l7-3z" />
      <path d="M8.5 12.5l2.2 2.2L15.5 10" />
    </svg>
  );
}

export function PipelineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6h7M18 8.5v7M6 8.5v3.5h6.5" />
    </svg>
  );
}

export function CostIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 13.5l3-3 2.5 2 3.5-3.5" />
      <path d="M15.5 9.5h2.5v2.5" />
    </svg>
  );
}

export function PlatformIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="5" width="16" height="5" rx="1.5" />
      <rect x="4" y="14" width="16" height="5" rx="1.5" />
      <path d="M8 10v4M16 10v4" />
    </svg>
  );
}

export function ObservabilityIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M7 16l1.8-1.8M17 16l-1.8-1.8" />
    </svg>
  );
}
