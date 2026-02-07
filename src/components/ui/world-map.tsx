"use client";

import { useRef, useMemo, useState, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { X, Cloud, Shield, GitBranch, Server, BarChart3, Zap } from "lucide-react";

/* ─── Types ─── */
type InfraType = "cloud" | "hybrid" | "on-prem";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

const INFRA_COLORS: Record<InfraType, string> = {
  cloud: "#2dd4bf",
  hybrid: "#3b82f6",
  "on-prem": "#1d8bc4",
};

const INFRA_WEIGHTED: InfraType[] = [
  "cloud", "cloud", "cloud", "cloud", "cloud", "cloud",
  "hybrid", "hybrid", "hybrid",
  "on-prem",
];

const INFRA_LABELS: Record<InfraType, string> = {
  cloud: "Cloud",
  hybrid: "Hybrid",
  "on-prem": "On-Prem",
};

/* ─── Region definitions ─── */
type RegionId = "middle-east" | "africa" | "europe" | "americas" | "asia-pacific";

interface RegionProject {
  title: string;
  type: InfraType;
  description: string;
  icon: typeof Cloud;
}

interface RegionData {
  id: RegionId;
  label: string;
  subtitle: string;
  x: number; y: number; w: number; h: number;
  projects: RegionProject[];
}

const REGIONS: RegionData[] = [
  {
    id: "middle-east", label: "Middle East", subtitle: "Dubai · Riyadh · Doha · Cairo",
    x: 430, y: 120, w: 110, h: 80,
    projects: [
      { title: "Multi-Cloud Landing Zone", type: "cloud", description: "AWS + Azure landing zone for a fintech group across UAE, KSA, and Bahrain with full compliance automation.", icon: Cloud },
      { title: "Zero-Trust Security Framework", type: "hybrid", description: "Designed and deployed zero-trust network architecture for a government entity spanning on-prem data centers and Azure.", icon: Shield },
      { title: "CI/CD Platform Modernization", type: "cloud", description: "Migrated legacy Jenkins pipelines to GitHub Actions + ArgoCD for a telecom operator, cutting release cycles from weeks to hours.", icon: GitBranch },
      { title: "Kubernetes Cost Optimization", type: "cloud", description: "Right-sized and automated EKS clusters for an e-commerce platform, reducing monthly cloud spend by 38%.", icon: BarChart3 },
    ],
  },
  {
    id: "africa", label: "Africa", subtitle: "Nairobi · Lagos · Cape Town · Cairo",
    x: 410, y: 200, w: 120, h: 110,
    projects: [
      { title: "Cloud Migration Program", type: "cloud", description: "Migrated 120+ microservices from on-prem to AWS for a pan-African payments platform with zero downtime.", icon: Cloud },
      { title: "Infrastructure as Code Rollout", type: "cloud", description: "Terraform-based IaC for multi-region deployment across AWS Africa (Cape Town) and EU (Ireland) regions.", icon: Server },
      { title: "Security Hardening & SOC 2", type: "hybrid", description: "Implemented security controls and achieved SOC 2 Type II certification for a fintech serving 5 African markets.", icon: Shield },
    ],
  },
  {
    id: "europe", label: "Europe", subtitle: "London · Berlin · Paris · Dublin",
    x: 370, y: 60, w: 100, h: 70,
    projects: [
      { title: "GDPR-Compliant Platform", type: "cloud", description: "Designed data-residency-aware cloud architecture on GCP with automated compliance checks for a healthtech SaaS.", icon: Shield },
      { title: "Platform Engineering", type: "cloud", description: "Built an internal developer platform with Backstage, ArgoCD, and Crossplane for a 200-engineer organization.", icon: Server },
      { title: "Hybrid Cloud Integration", type: "hybrid", description: "Connected on-prem Kubernetes clusters with Azure Arc for a manufacturing company's edge-to-cloud pipeline.", icon: GitBranch },
    ],
  },
  {
    id: "americas", label: "Americas", subtitle: "New York · San Francisco · Toronto · São Paulo",
    x: 80, y: 80, w: 200, h: 180,
    projects: [
      { title: "Multi-Region HA Architecture", type: "cloud", description: "Active-active multi-region setup on AWS for a real-time trading platform with sub-10ms failover.", icon: Cloud },
      { title: "DevSecOps Pipeline", type: "cloud", description: "End-to-end DevSecOps with SAST, DAST, container scanning, and policy-as-code for a Series C startup.", icon: Shield },
      { title: "On-Prem to Cloud Migration", type: "on-prem", description: "Migrated legacy .NET workloads from co-located data centers to Azure with hybrid connectivity during transition.", icon: Server },
      { title: "Observability Stack", type: "cloud", description: "Deployed Grafana, Prometheus, Loki, and Tempo across 40+ services for full-stack observability.", icon: BarChart3 },
    ],
  },
  {
    id: "asia-pacific", label: "Asia Pacific", subtitle: "Tokyo · Singapore · Sydney · Seoul",
    x: 570, y: 100, w: 180, h: 150,
    projects: [
      { title: "Edge Computing Platform", type: "hybrid", description: "Built edge computing infrastructure using AWS Outposts and EKS Anywhere for an IoT logistics provider.", icon: Server },
      { title: "Cloud Cost Optimization", type: "cloud", description: "Reduced AWS spend by 45% for a gaming company through reserved instances, spot fleets, and right-sizing.", icon: BarChart3 },
      { title: "Disaster Recovery Automation", type: "cloud", description: "Automated multi-region DR with RTO < 15min and RPO < 1min for a banking platform across APAC.", icon: Cloud },
    ],
  },
];

/* ─── Hub cities — labelled service markers ─── */
interface HubCity {
  lat: number;
  lng: number;
  city: string;
  service: string;
  color: string;
  icon: typeof Cloud;
}

const HUB_CITIES: HubCity[] = [
  { lat: 25.2048, lng: 55.2708, city: "Dubai", service: "Cloud Architecture", color: "#2dd4bf", icon: Cloud },
  { lat: 51.5074, lng: -0.1278, city: "London", service: "Platform Engineering", color: "#1d8bc4", icon: Server },
  { lat: 40.7128, lng: -74.006, city: "New York", service: "Security & Compliance", color: "#34d399", icon: Shield },
  { lat: 1.3521, lng: 103.8198, city: "Singapore", service: "Cost Optimization", color: "#3b82f6", icon: BarChart3 },
  { lat: 35.6895, lng: 139.6917, city: "Tokyo", service: "Observability", color: "#60a5fa", icon: Zap },
  { lat: -1.2921, lng: 36.8219, city: "Nairobi", service: "Cloud Migration", color: "#2dd4bf", icon: Cloud },
  { lat: 37.7749, lng: -122.4194, city: "San Francisco", service: "CI/CD Automation", color: "#67e8f9", icon: GitBranch },
];

/* ─── Service ticker entries ─── */
const SERVICE_TICKER = [
  { label: "Cloud Architecture", color: "#2dd4bf" },
  { label: "Security & Compliance", color: "#34d399" },
  { label: "CI/CD Automation", color: "#67e8f9" },
  { label: "Cost Optimization", color: "#3b82f6" },
  { label: "Platform Engineering", color: "#1d8bc4" },
  { label: "Observability", color: "#60a5fa" },
];

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

/* ─── Connection data type ─── */
interface ConnectionData {
  startPoint: { x: number; y: number };
  endPoint: { x: number; y: number };
  path: string;
  length: number;
  type: InfraType;
  color: string;
  dur: number;
  delay: number;
  index: number;
  direction: "outbound" | "inbound";
}

/* ─── Memoized animated layer — NEVER re-renders unless pathData ref changes ─── */
const AnimatedConnections = memo(function AnimatedConnections({ pathData }: { pathData: ConnectionData[] }) {
  return (
    <>
      {pathData.filter(d => d.direction === "outbound").map(({ path, color, index }) => (
        <path key={`hint-${index}`} d={path} fill="none" stroke={color} strokeWidth="0.6" opacity="0.1" strokeLinecap="round" filter="url(#route-glow)" />
      ))}
      {pathData.map(({ path, length, color, type, dur, delay, index, direction }) => {
        const ib = direction === "inbound";
        const ps = Math.max(8, length * 0.04) * (ib ? 0.7 : 1);
        const ts = Math.max(30, length * 0.15) * (ib ? 0.6 : 1);
        const hw = ib ? 1.4 : 2.2;
        const ho = ib ? 0.6 : 0.9;
        const to = ib ? 0.15 : 0.25;
        const cw = ib ? 0.5 : 0.8;
        const co = ib ? 0.4 : 0.7;
        return (
          <g key={`p-${index}`}>
            <path d={path} fill="none" stroke={color} strokeWidth={ib ? 0.8 : 1.2} strokeLinecap="round" opacity="0" strokeDasharray={`${ts} ${length - ts}`}>
              <animate attributeName="stroke-dashoffset" from={`${length}`} to={`${-length}`} dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values={`0;${to};${to};0`} keyTimes="0;0.1;0.8;1" dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
            </path>
            <path d={path} fill="none" stroke={color} strokeWidth={hw} strokeLinecap="round" filter={`url(#glow-${type})`} strokeDasharray={`${ps} ${length - ps}`}>
              <animate attributeName="stroke-dashoffset" from={`${length}`} to={`${-length}`} dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values={`0;${ho};${ho};0`} keyTimes="0;0.05;0.85;1" dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
            </path>
            <path d={path} fill="none" stroke="white" strokeWidth={cw} strokeLinecap="round" strokeDasharray={`${ps * 0.35} ${length - ps * 0.35}`}>
              <animate attributeName="stroke-dashoffset" from={`${length}`} to={`${-length}`} dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values={`0;${co};${co};0`} keyTimes="0;0.05;0.85;1" dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
            </path>
          </g>
        );
      })}
      {pathData.map(({ endPoint, color, dur, delay, index }) => {
        const ad = delay + dur * 0.85;
        const at = dur * 0.35;
        return (
          <g key={`a-${index}`}>
            <circle cx={endPoint.x} cy={endPoint.y} r="2" fill={color} opacity="0">
              <animate attributeName="r" values="2;12" dur={`${at}s`} begin={`${ad}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0" dur={`${at}s`} begin={`${ad}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}
      {pathData.filter(d => d.direction === "outbound").map(({ startPoint, endPoint, color, index }) => (
        <g key={`n-${index}`}>
          {[startPoint, endPoint].map((pt, j) => (
            <g key={`nd-${index}-${j}`}>
              <circle cx={pt.x} cy={pt.y} r="1.8" fill={color} opacity="0.5" />
              <circle cx={pt.x} cy={pt.y} r="0.8" fill="white" opacity="0.7" />
            </g>
          ))}
        </g>
      ))}
    </>
  );
});

/* ─── Main Component ─── */
export function WorldMap({ dots = [] }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<RegionId | null>(null);

  const mapSvg = useMemo(() => {
    const m = new DottedMap({ height: 100, grid: "diagonal" });
    return m.getSVG({ radius: 0.22, color: "#FFFFFF25", shape: "circle", backgroundColor: "transparent" });
  }, []);

  const projectPoint = useCallback((lat: number, lng: number) => {
    return { x: (lng + 180) * (800 / 360), y: (90 - lat) * (400 / 180) };
  }, []);

  const createCurvedPath = useCallback((start: { x: number; y: number }, end: { x: number; y: number }) => {
    const dx = end.x - start.x, dy = end.y - start.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - Math.max(30, dist * 0.2);
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  }, []);

  const estimateLen = useCallback((s: { x: number; y: number }, e: { x: number; y: number }) => {
    const dx = e.x - s.x, dy = e.y - s.y;
    return Math.sqrt(dx * dx + dy * dy) * 1.3;
  }, []);

  const isInRegion = useCallback((pt: { x: number; y: number }, r: RegionData) => {
    return pt.x >= r.x && pt.x <= r.x + r.w && pt.y >= r.y && pt.y <= r.y + r.h;
  }, []);

  // Compute ONCE: per-region connection groups (stable references)
  const { regionGroups, otherGroup, allPaths } = useMemo(() => {
    const forward = dots.map((dot, i) => {
      const sp = projectPoint(dot.start.lat, dot.start.lng);
      const ep = projectPoint(dot.end.lat, dot.end.lng);
      return {
        startPoint: sp, endPoint: ep,
        path: createCurvedPath(sp, ep), length: estimateLen(sp, ep),
        type: INFRA_WEIGHTED[Math.floor(seededRandom(i) * INFRA_WEIGHTED.length)],
        color: INFRA_COLORS[INFRA_WEIGHTED[Math.floor(seededRandom(i) * INFRA_WEIGHTED.length)]],
        dur: 3 + seededRandom(i + 100) * 3, delay: seededRandom(i + 200) * 5,
        index: i, direction: "outbound" as const,
      };
    });
    const reverse = dots.map((dot, i) => {
      const sp = projectPoint(dot.end.lat, dot.end.lng);
      const ep = projectPoint(dot.start.lat, dot.start.lng);
      return {
        startPoint: sp, endPoint: ep,
        path: createCurvedPath(sp, ep), length: estimateLen(sp, ep),
        type: INFRA_WEIGHTED[Math.floor(seededRandom(i) * INFRA_WEIGHTED.length)],
        color: INFRA_COLORS[INFRA_WEIGHTED[Math.floor(seededRandom(i) * INFRA_WEIGHTED.length)]],
        dur: 3.5 + seededRandom(i + 150) * 2.5, delay: seededRandom(i + 300) * 5 + 1.5,
        index: i + dots.length, direction: "inbound" as const,
      };
    });
    const all = [...forward, ...reverse];
    const groups: Record<RegionId, ConnectionData[]> = {
      "middle-east": [], africa: [], europe: [], americas: [], "asia-pacific": [],
    };
    const other: ConnectionData[] = [];
    for (const c of all) {
      let matched = false;
      for (const r of REGIONS) {
        if (isInRegion(c.startPoint, r) || isInRegion(c.endPoint, r)) {
          groups[r.id].push(c); matched = true; break;
        }
      }
      if (!matched) other.push(c);
    }
    return { regionGroups: groups, otherGroup: other, allPaths: all };
  }, [dots, projectPoint, createCurvedPath, estimateLen, isInRegion]);

  // Hub city projected positions — computed once
  const hubPositions = useMemo(() => {
    return HUB_CITIES.map((hub) => ({
      ...hub,
      ...projectPoint(hub.lat, hub.lng),
    }));
  }, [projectPoint]);

  // Service ticker rotation
  const [tickerIndex, setTickerIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % SERVICE_TICKER.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleRegionClick = useCallback((region: RegionData) => {
    setSelectedRegion((prev) => prev?.id === region.id ? null : region);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedRegion(null);
  }, []);

  return (
    <div className="w-full aspect-[2/1] relative font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,15,30,1),rgba(0,0,0,1))]" />

      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(mapSvg)}`}
        className="h-full w-full -translate-y-4 pointer-events-none select-none relative z-[1]"
        alt="world map" height="495" width="1056" draggable={false}
      />

      {/* SVG: pointer-events NONE on the svg itself, only enabled on hotspot rects */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="absolute inset-0 h-full w-full -translate-y-4 select-none z-[2]"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          {(Object.keys(INFRA_COLORS) as InfraType[]).map((type) => (
            <filter key={`glow-${type}`} id={`glow-${type}`} x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feFlood floodColor={INFRA_COLORS[type]} floodOpacity="0.5" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="colorBlur" />
              <feMerge><feMergeNode in="colorBlur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          ))}
          <filter id="arrive-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="route-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/*
          ALWAYS render all groups. Use CSS opacity transition to dim/brighten.
          The AnimatedConnections instances are stable — React never unmounts them.
        */}
        {REGIONS.map((region) => (
          <g
            key={region.id}
            style={{
              opacity: !selectedRegion ? 1 : selectedRegion.id === region.id ? 1 : 0.07,
              transition: "opacity 0.4s ease",
            }}
          >
            <AnimatedConnections pathData={regionGroups[region.id]} />
          </g>
        ))}
        <g
          style={{
            opacity: !selectedRegion ? 1 : 0.07,
            transition: "opacity 0.4s ease",
          }}
        >
          <AnimatedConnections pathData={otherGroup} />
        </g>

        {/* ─── Hub city markers with pulse rings and service labels ─── */}
        {hubPositions.map((hub, i) => (
          <g key={`hub-${i}`} style={{ pointerEvents: "none" }}>
            {/* Outer pulse ring */}
            <circle cx={hub.x} cy={hub.y} r="3" fill="none" stroke={hub.color} strokeWidth="0.5" opacity="0">
              <animate attributeName="r" values="3;18" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
            {/* Inner pulse ring */}
            <circle cx={hub.x} cy={hub.y} r="3" fill="none" stroke={hub.color} strokeWidth="0.3" opacity="0">
              <animate attributeName="r" values="3;12" dur="3s" begin={`${i * 0.5 + 1}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0" dur="3s" begin={`${i * 0.5 + 1}s`} repeatCount="indefinite" />
            </circle>
            {/* Hub dot — outer glow */}
            <circle cx={hub.x} cy={hub.y} r="3.5" fill={hub.color} opacity="0.15" />
            {/* Hub dot — main */}
            <circle cx={hub.x} cy={hub.y} r="2.2" fill={hub.color} opacity="0.7">
              <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            {/* Hub dot — white core */}
            <circle cx={hub.x} cy={hub.y} r="0.9" fill="white" opacity="0.8" />
            {/* City name */}
            <text
              x={hub.x} y={hub.y - 6}
              textAnchor="middle" fill="white" fontSize="5" fontFamily="system-ui, sans-serif"
              fontWeight="600" opacity="0.7" letterSpacing="0.3"
            >
              {hub.city}
            </text>
            {/* Service label */}
            <text
              x={hub.x} y={hub.y + 8}
              textAnchor="middle" fill={hub.color} fontSize="3.5" fontFamily="ui-monospace, monospace"
              opacity="0.55" letterSpacing="0.5" textDecoration="none"
            >
              {hub.service.toUpperCase()}
            </text>
          </g>
        ))}

        {/* Region hotspots — pointer-events enabled only here */}
        {REGIONS.map((region) => {
          const isHovered = hoveredRegion === region.id;
          const isSelected = selectedRegion?.id === region.id;
          return (
            <g key={`hotspot-${region.id}`} style={{ pointerEvents: "all" }}>
              {(isHovered || isSelected) && (
                <rect
                  x={region.x} y={region.y} width={region.w} height={region.h} rx="8"
                  fill={isSelected ? "rgba(45,212,191,0.06)" : "rgba(45,212,191,0.03)"}
                  stroke={isSelected ? "rgba(45,212,191,0.3)" : "rgba(45,212,191,0.15)"}
                  strokeWidth="0.8"
                  strokeDasharray={isSelected ? "none" : "4 3"}
                  style={{ pointerEvents: "none" }}
                />
              )}
              <rect
                x={region.x} y={region.y} width={region.w} height={region.h}
                fill="transparent" className="cursor-pointer"
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => handleRegionClick(region)}
              />
              {(isHovered || isSelected) && (
                <text
                  x={region.x + region.w / 2} y={region.y - 6}
                  textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace"
                  opacity={isSelected ? 0.9 : 0.6} style={{ pointerEvents: "none" }}
                >
                  {region.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Region detail panel — z-30 so it's ABOVE the SVG */}
      <AnimatePresence>
        {selectedRegion && (
          <motion.div
            key={selectedRegion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-2 top-2 z-30 sm:inset-x-auto sm:top-3 sm:right-3 sm:w-[340px] max-h-[calc(100%-16px)] sm:max-h-[calc(100%-24px)] overflow-y-auto rounded-xl border border-white/[0.1] bg-black/90 sm:bg-black/85 backdrop-blur-lg"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.08] bg-black/90 px-5 py-4">
              <div>
                <h3 className="text-sm font-semibold text-white">{selectedRegion.label}</h3>
                <p className="mt-0.5 text-[11px] text-neutral-500">{selectedRegion.subtitle}</p>
              </div>
              <button
                onClick={handleClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-neutral-400 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3 p-4">
              {selectedRegion.projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-4"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${INFRA_COLORS[project.type]}15` }}
                    >
                      <project.icon className="h-4 w-4" style={{ color: INFRA_COLORS[project.type] }} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[13px] font-medium text-white leading-tight">{project.title}</h4>
                      <span
                        className="mt-1 inline-block rounded-full px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider"
                        style={{ color: INFRA_COLORS[project.type], backgroundColor: `${INFRA_COLORS[project.type]}15` }}
                      >
                        {INFRA_LABELS[project.type]}
                      </span>
                      <p className="mt-2 text-[11px] leading-relaxed text-neutral-400">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Infrastructure legend */}
      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 z-10 flex items-center gap-2 md:gap-5 rounded-lg bg-black/80 backdrop-blur-sm border border-white/[0.08] px-2 py-1.5 md:px-4 md:py-2.5">
        {(Object.keys(INFRA_COLORS) as InfraType[]).map((type) => (
          <div key={type} className="flex items-center gap-1 md:gap-2">
            <span className="h-1.5 w-1.5 md:h-2.5 md:w-2.5 rounded-full" style={{ backgroundColor: INFRA_COLORS[type], boxShadow: `0 0 8px ${INFRA_COLORS[type]}` }} />
            <span className="text-[8px] md:text-[11px] font-mono uppercase tracking-wider text-neutral-300">{INFRA_LABELS[type]}</span>
          </div>
        ))}
      </div>

      {/* Service ticker badge — hidden on very small screens to avoid overlap */}
      <AnimatePresence>
        {!selectedRegion && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-2 md:top-4 right-2 md:right-4 z-10 hidden sm:block">
            <div className="rounded-lg bg-black/80 backdrop-blur-sm border border-white/[0.08] px-3 py-2 md:px-4 md:py-3">
              <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
                </span>
                <span className="text-[8px] md:text-[10px] font-mono uppercase tracking-wider text-neutral-400">BinaryGate Global Delivery</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={tickerIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: SERVICE_TICKER[tickerIndex].color, boxShadow: `0 0 6px ${SERVICE_TICKER[tickerIndex].color}` }}
                  />
                  <span className="text-[10px] md:text-[11px] font-medium text-white">{SERVICE_TICKER[tickerIndex].label}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click hint — hidden on mobile to save space */}
      <AnimatePresence>
        {!selectedRegion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-2 md:bottom-4 right-2 md:right-4 z-10 hidden md:block"
          >
            <div className="rounded-lg bg-black/80 backdrop-blur-sm border border-white/[0.08] px-3 py-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Click a region to explore projects</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
