"use client";

import {
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";
import React from "react";
import Link from "next/link";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { WorldMap } from "@/components/ui/world-map";
import {
  Cloud,
  Shield,
  GitBranch,
  BarChart3,
  Server,
  Zap,
  ArrowRight,
} from "lucide-react";

const connectionDots = [
  // ── Global routes ──
  { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 51.5074, lng: -0.1278 } },
  { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 35.6895, lng: 139.6917 } },
  { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: 1.3521, lng: 103.8198 } },
  { start: { lat: 52.52, lng: 13.405 }, end: { lat: 28.6139, lng: 77.209 } },
  { start: { lat: 43.6532, lng: -79.3832 }, end: { lat: 53.3498, lng: -6.2603 } },
  { start: { lat: 19.4326, lng: -99.1332 }, end: { lat: -34.6037, lng: -58.3816 } },
  { start: { lat: 31.2304, lng: 121.4737 }, end: { lat: 37.5665, lng: 126.978 } },
  // ── MEA ──
  { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 24.7136, lng: 46.6753 } },
  { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 30.0444, lng: 31.2357 } },
  { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 41.0082, lng: 28.9784 } },
  { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 25.2854, lng: 51.531 } },
  { start: { lat: 24.7136, lng: 46.6753 }, end: { lat: 21.4225, lng: 39.8262 } },
  { start: { lat: 30.0444, lng: 31.2357 }, end: { lat: -1.2921, lng: 36.8219 } },
  { start: { lat: 41.0082, lng: 28.9784 }, end: { lat: 55.7558, lng: 37.6173 } },
  // ── Africa ──
  { start: { lat: -1.2921, lng: 36.8219 }, end: { lat: -33.9249, lng: 18.4241 } },
  { start: { lat: -1.2921, lng: 36.8219 }, end: { lat: 6.5244, lng: 3.3792 } },
  { start: { lat: 30.0444, lng: 31.2357 }, end: { lat: 33.8869, lng: 9.5375 } },
  // ── MEA ↔ Global ──
  { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 25.2048, lng: 55.2708 } },
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 30.0444, lng: 31.2357 } },
  { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 25.2048, lng: 55.2708 } },
];

/* ─── Business pillars — horizontal strip above gemini title ─── */
const pillars = [
  { icon: Cloud, title: "Cloud Architecture", color: "#2dd4bf", slug: "cloud-architecture" },
  { icon: Shield, title: "Security Hardening", color: "#34d399", slug: "security-hardening" },
  { icon: GitBranch, title: "CI/CD Automation", color: "#67e8f9", slug: "cicd-automation" },
  { icon: BarChart3, title: "Cost Optimization", color: "#3b82f6", slug: "cost-optimization" },
  { icon: Server, title: "Platform Engineering", color: "#1d8bc4", slug: "platform-engineering" },
  { icon: Zap, title: "Observability", color: "#60a5fa", slug: "observability" },
];

export function HeroEffectsSection() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const staticPath = useMotionValue(1);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    mass: 0.3,
  });

  // Gemini path draws
  const pathLengthFirst = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const pathLengthSecond = useTransform(smoothProgress, [0.02, 0.42], [0, 1]);
  const pathLengthThird = useTransform(smoothProgress, [0.04, 0.44], [0, 1]);
  const pathLengthFourth = useTransform(smoothProgress, [0.06, 0.46], [0, 1]);
  const pathLengthFifth = useTransform(smoothProgress, [0.08, 0.48], [0, 1]);

  // World map reveal
  const mapOpacity = useTransform(smoothProgress, [0.35, 0.6], [0, 1]);
  const mapY = useTransform(smoothProgress, [0.35, 0.6], [60, 0]);
  const mapScale = useTransform(smoothProgress, [0.35, 0.6], [0.95, 1]);

  // Gemini fades out
  const geminiOpacity = useTransform(smoothProgress, [0.3, 0.5], [1, 0]);

  // Staggered pillar reveals — each fades in and stays; geminiOpacity handles the group fade-out
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p0Opacity = useTransform(smoothProgress, [0.02, 0.07], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p0Y = useTransform(smoothProgress, [0.02, 0.07], [16, 0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p1Opacity = useTransform(smoothProgress, [0.06, 0.11], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p1Y = useTransform(smoothProgress, [0.06, 0.11], [16, 0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p2Opacity = useTransform(smoothProgress, [0.10, 0.15], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p2Y = useTransform(smoothProgress, [0.10, 0.15], [16, 0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p3Opacity = useTransform(smoothProgress, [0.14, 0.19], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p3Y = useTransform(smoothProgress, [0.14, 0.19], [16, 0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p4Opacity = useTransform(smoothProgress, [0.18, 0.23], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p4Y = useTransform(smoothProgress, [0.18, 0.23], [16, 0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p5Opacity = useTransform(smoothProgress, [0.22, 0.27], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const p5Y = useTransform(smoothProgress, [0.22, 0.27], [16, 0]);

  const pillarMotion = [
    { opacity: p0Opacity, y: p0Y },
    { opacity: p1Opacity, y: p1Y },
    { opacity: p2Opacity, y: p2Y },
    { opacity: p3Opacity, y: p3Y },
    { opacity: p4Opacity, y: p4Y },
    { opacity: p5Opacity, y: p5Y },
  ];

  return (
    <section className="relative bg-black text-white">
      <div ref={ref} className="relative h-[320vh]">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.1),transparent_50%),radial-gradient(ellipse_at_30%_20%,rgba(52,211,153,0.07),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_center,rgba(148,163,184,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3),rgba(0,0,0,0.92))]" />

        {/* Gemini Effect — pillars stagger in above the title, fade out together */}
        <GoogleGeminiEffect
          className="pointer-events-none"
          title="Beyond Code. Beyond Infrastructure."
          description="BinaryGate designs secure cloud foundations and automates delivery pipelines that scale across regions without slowing teams down."
          opacity={geminiOpacity}
          pathLengths={[
            reduceMotion ? staticPath : pathLengthFirst,
            reduceMotion ? staticPath : pathLengthSecond,
            reduceMotion ? staticPath : pathLengthThird,
            reduceMotion ? staticPath : pathLengthFourth,
            reduceMotion ? staticPath : pathLengthFifth,
          ]}
          topContent={
            <div className="flex flex-wrap items-center justify-center gap-3 px-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.slug}
                  style={{ opacity: pillarMotion[i].opacity, y: pillarMotion[i].y }}
                >
                  <Link
                    href={`/services/${pillar.slug}`}
                    style={{ pointerEvents: "auto" }}
                    className="group flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-black/40 px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-white/[0.15] hover:bg-black/60 hover:scale-[1.04]"
                  >
                    <div
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.08] transition-colors group-hover:border-white/[0.15]"
                      style={{ backgroundColor: `${pillar.color}12` }}
                    >
                      <pillar.icon className="h-3.5 w-3.5" style={{ color: pillar.color }} />
                    </div>
                    <span className="text-xs font-medium text-neutral-300 transition-colors group-hover:text-white whitespace-nowrap">
                      {pillar.title}
                    </span>
                    <ArrowRight
                      className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-60"
                      style={{ color: pillar.color }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          }
        />

        {/* World Map */}
        <motion.div
          style={{ opacity: mapOpacity, y: mapY, scale: mapScale }}
          className="absolute bottom-0 left-0 w-full"
        >
          <WorldMap dots={connectionDots} lineColor="#2dd4bf" />
        </motion.div>

        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>
    </section>
  );
}
