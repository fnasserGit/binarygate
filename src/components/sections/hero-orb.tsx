"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import PresetC_Cubes from "@/components/hero/presets/PresetC_Cubes";
import SphereSparks, {
  ARC_SAMPLE_POINTS_DESKTOP,
  ARC_SAMPLE_POINTS_MOBILE,
  MIN_ARC_DISTANCE,
  SPARK_COUNT_DESKTOP as SPHERE_SPARK_COUNT_DESKTOP,
  SPARK_COUNT_MOBILE as SPHERE_SPARK_COUNT_MOBILE,
  SPARK_SPEED_DESKTOP,
  SPARK_SPEED_MOBILE,
  SphereSparkState,
} from "@/components/hero/effects/SphereSparks";

type PresetName = "globe" | "scatter" | "ring";

type OrbConfig = {
  particleCount: number;
  tendrilCount: number;
  tendrilSegments: number;
  coreRadius: number;
  outerRadius: number;
  startGap: number;
  curvatureAmp: number;
  curvatureFreq: number;
  radiusJitter: number;
  bandPercent: number;
  bandWidth: number;
  shellPercent: number;
  shellPush: number;
  pointSize: number;
  radiusScale: number;
  depth: number;
  tendrilOpacity: number;
  rotateSpeed: number;
  wobble: number;
  pulse: boolean;
};

type PresetData = {
  positions: Record<PresetName, Float32Array>;
};

const PRESET_SEQUENCE: PresetName[] = ["globe", "scatter", "ring"];
const INTERVAL_MS = 6000;
const TRANSITION_MS = 1400;
const SHOW_MS = INTERVAL_MS - TRANSITION_MS;

export {
  COLOR_ACCENT,
  FRONT_SETTLE_START,
  FRONT_SETTLE_END,
  C_AUTO_YAW_MULT,
  C_PITCH_RETURN_DAMP,
  TRANSITION_MS,
  SHOW_MS,
};
const COLOR_ACCENT = "#33C6FF";
const FRONT_SETTLE_START = 0.55;
const FRONT_SETTLE_END = 1.0;
const C_AUTO_YAW_MULT = 0.35;
const C_PITCH_RETURN_DAMP = 0.08;
const ROTATION_SPEED = 0.12;
const X_WOBBLE_AMP = 0.04;
const PARTICLE_OPACITY_ACTIVE = 0.85;
const PARTICLE_OPACITY_DIM = 0.0;
const DEBUG_SHAPES = false;
const DEV_ONLY = false;
const DRAG_SENS_X = 0.003;
const DRAG_SENS_Y = 0.004;
const DAMPING = 0.12;
const INERTIA_DECAY = 0.93;
const MAX_TILT = 0.45;

type ViewportTier = "mobile" | "tablet" | "desktop";

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const value = Number.parseInt(clean, 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function getViewportTier() : ViewportTier {
  if (typeof window === "undefined") return "desktop";
  if (window.matchMedia("(max-width: 768px)").matches) return "mobile";
  if (window.matchMedia("(max-width: 1023px)").matches) return "tablet";
  return "desktop";
}

function getConfig(tier: ViewportTier): OrbConfig {
  if (tier === "mobile") {
    return {
      particleCount: 750,
      tendrilCount: 48,
      tendrilSegments: 26,
      coreRadius: 0.21,
      outerRadius: 1.05,
      startGap: 0.03,
      curvatureAmp: 0.18,
      curvatureFreq: 2.0,
      radiusJitter: 0.04,
      bandPercent: 0.12,
      bandWidth: 0.55,
      shellPercent: 0.28,
      shellPush: 0.08,
      pointSize: 1.6,
      radiusScale: 1.12,
      depth: 2.6,
      tendrilOpacity: 0.18,
      rotateSpeed: 0.11,
      wobble: 0.03,
      pulse: false,
    };
  }
  if (tier === "tablet") {
    return {
      particleCount: 1100,
      tendrilCount: 48,
      tendrilSegments: 30,
      coreRadius: 0.23,
      outerRadius: 1.08,
      startGap: 0.03,
      curvatureAmp: 0.2,
      curvatureFreq: 2.2,
      radiusJitter: 0.05,
      bandPercent: 0.12,
      bandWidth: 0.55,
      shellPercent: 0.28,
      shellPush: 0.08,
      pointSize: 1.5,
      radiusScale: 1.08,
      depth: 3.0,
      tendrilOpacity: 0.2,
      rotateSpeed: 0.13,
      wobble: 0.04,
      pulse: true,
    };
  }
  return {
    particleCount: 1300,
    tendrilCount: 64,
    tendrilSegments: 36,
    coreRadius: 0.24,
    outerRadius: 1.05,
    startGap: 0.03,
    curvatureAmp: 0.24,
    curvatureFreq: 2.3,
    radiusJitter: 0.055,
    bandPercent: 0.12,
    bandWidth: 0.55,
    shellPercent: 0.28,
    shellPush: 0.08,
    pointSize: 1.4,
    radiusScale: 1.0,
    depth: 3.2,
    tendrilOpacity: 0.2,
    rotateSpeed: 0.15,
    wobble: 0.05,
    pulse: true,
  };
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function fibonacciSphere(count: number) {
  const points = new Float32Array(count * 3);
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points[i * 3] = Math.cos(theta) * radius;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = Math.sin(theta) * radius;
  }
  return points;
}

function recenterPositions(positions: Float32Array) {
  let sumX = 0;
  let sumY = 0;
  let sumZ = 0;
  const count = positions.length / 3;
  for (let i = 0; i < positions.length; i += 3) {
    sumX += positions[i];
    sumY += positions[i + 1];
    sumZ += positions[i + 2];
  }
  const cx = sumX / count;
  const cy = sumY / count;
  const cz = sumZ / count;
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] -= cx;
    positions[i + 1] -= cy;
    positions[i + 2] -= cz;
  }
  if (DEV_ONLY) {
    let maxR = 0;
    for (let i = 0; i < positions.length; i += 3) {
      const r = Math.hypot(positions[i], positions[i + 1], positions[i + 2]);
      maxR = Math.max(maxR, r);
    }
    // eslint-disable-next-line no-console
    console.info("[HeroOrb] boundingSphere radius:", maxR.toFixed(3));
  }
  if (DEV_ONLY) {
    // eslint-disable-next-line no-console
    console.info("[HeroOrb] center offset:", cx.toFixed(3), cy.toFixed(3), cz.toFixed(3));
  }
  return positions;
}

function buildScatter(config: OrbConfig) {
  const scatter = new Float32Array(config.particleCount * 3);
  const maxRadius = 1;

  for (let i = 0; i < config.particleCount; i += 1) {
    let dir = normalize([
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
    ]);
    let radius = Math.cbrt(Math.random()) * maxRadius;

    if (Math.random() < config.shellPercent) {
      radius = Math.min(maxRadius, radius + config.shellPush);
    }

    if (Math.random() < config.bandPercent) {
      dir = normalize([
        Math.random() * 2 - 1,
        (Math.random() * 2 - 1) * config.bandWidth * 0.6,
        Math.random() * 2 - 1,
      ]);
    }

    const jitter = (Math.random() * 2 - 1) * config.radiusJitter;
    radius = Math.min(maxRadius, Math.max(0, radius + jitter));

    const idx = i * 3;
    scatter[idx] = dir[0] * radius;
    scatter[idx + 1] = dir[1] * radius;
    scatter[idx + 2] = dir[2] * radius;
  }

  if (DEBUG_SHAPES) {
    let minR = 10;
    let maxR = 0;
    for (let i = 0; i < scatter.length; i += 3) {
      const r = Math.hypot(scatter[i], scatter[i + 1], scatter[i + 2]);
      minR = Math.min(minR, r);
      maxR = Math.max(maxR, r);
    }
    // eslint-disable-next-line no-console
    console.info("[HeroOrb] Scatter radius range:", minR.toFixed(3), maxR.toFixed(3));
  }

  return scatter;
}


function buildPresets(config: OrbConfig): PresetData {
  const globe = recenterPositions(fibonacciSphere(config.particleCount));
  const scatter = recenterPositions(buildScatter(config));

  return {
    positions: {
      globe,
      scatter,
      ring: globe,
    },
  };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function normalize(a: number[]) {
  const len = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / len, a[1] / len, a[2] / len];
}

export function HeroOrb({ className = "" }: { className?: string }) {
  const reduceMotionPref = useReducedMotion();
  const [reduceMotion, setReduceMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const lastLogRef = useRef(0);
  const lastRotYLogRef = useRef(0);
  const lastTimeRef = useRef(0);
  const sphereSparkRef = useRef<SphereSparkState | null>(null);
  const cubesLayerRef = useRef<HTMLDivElement | null>(null);
  const cubesGlowRef = useRef<HTMLDivElement | null>(null);
  const cubesActiveRef = useRef(false);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });
  const phaseRef = useRef<"idle" | "transition">("idle");
  const transitionStartRef = useRef<number | null>(null);
  const phaseStartRef = useRef<number | null>(null);
  const nextPresetRef = useRef<PresetName>("globe");
  const transitionOverlayRef = useRef<HTMLDivElement | null>(null);
  const transitionSweepRef = useRef<HTMLDivElement | null>(null);
  const transitionHaloRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);
  const movedRef = useRef(false);
  const rotXRef = useRef(0);
  const rotYRef = useRef(0);
  const targetRotXRef = useRef(0);
  const targetRotYRef = useRef(0);
  const velXRef = useRef(0);
  const velYRef = useRef(0);
  const [tier, setTier] = useState<ViewportTier>("desktop");
  const [config, setConfig] = useState<OrbConfig>(() => getConfig("desktop"));
  const [orbSize, setOrbSize] = useState(0);
  const [rotationState, setRotationState] = useState({ x: 0, y: 0, z: 0 });
  const [presetCTrigger, setPresetCTrigger] = useState(0);
  const presets = useMemo(() => buildPresets(config), [config]);

  const currentPreset = useRef<PresetName>("globe");
  const fromPositions = useRef<Float32Array>(presets.positions.globe.slice());
  const toPositions = useRef<Float32Array>(presets.positions.globe.slice());
  const pauseRef = useRef(false);
  const lastRotationUpdateRef = useRef(0);
  const lastRingActiveRef = useRef(false);

  useEffect(() => {
    setReduceMotion(!!reduceMotionPref);
  }, [reduceMotionPref]);

  useEffect(() => {
    const updateTier = () => setTier(getViewportTier());
    updateTier();
    const mediaMobile = window.matchMedia("(max-width: 768px)");
    const mediaTablet = window.matchMedia("(max-width: 1023px)");
    mediaMobile.addEventListener("change", updateTier);
    mediaTablet.addEventListener("change", updateTier);
    window.addEventListener("resize", updateTier);
    return () => {
      mediaMobile.removeEventListener("change", updateTier);
      mediaTablet.removeEventListener("change", updateTier);
      window.removeEventListener("resize", updateTier);
    };
  }, []);


  useEffect(() => {
    setConfig(getConfig(tier));
  }, [tier]);

  useEffect(() => {
    fromPositions.current = presets.positions[currentPreset.current].slice();
  }, [presets]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.2 : 1.5);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { width: rect.width, height: rect.height, dpr };
      const nextSize = Math.min(rect.width, rect.height);
      setOrbSize(nextSize);
      requestAnimationFrame(() => {
        setOrbSize(Math.min(rect.width, rect.height));
      });
      if (DEV_ONLY) {
        // eslint-disable-next-line no-console
        console.info("[HeroOrb] size:", rect.width, rect.height, "dpr:", dpr);
      }
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const projected = new Float32Array(config.particleCount * 3);
    const rotated = new Float32Array(config.particleCount * 3);
    const depth = config.depth;

    phaseStartRef.current = performance.now();

    const drawFrame = (time: number) => {
      const w = sizeRef.current.width || canvas.width / (window.devicePixelRatio || 1);
      const h = sizeRef.current.height || canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);
      const deltaMs = lastTimeRef.current ? time - lastTimeRef.current : 16.7;
      lastTimeRef.current = time;
      const dt = deltaMs / 1000;

      const radius = Math.min(w, h) * 0.34 * config.radiusScale;
      const t = time * 0.001;
      const dragFactor = isDraggingRef.current ? 0.15 : 1;
      const isRingPreset = currentPreset.current === "ring";
      const autoYawMult = isRingPreset ? C_AUTO_YAW_MULT : 1;
      const rotYBase = reduceMotion ? 0 : t * ROTATION_SPEED * autoYawMult * dragFactor;
      const rotXBase = reduceMotion || isRingPreset ? 0 : Math.sin(t * 0.6) * X_WOBBLE_AMP * dragFactor;

      if (!reduceMotion || isDraggingRef.current) {
        velXRef.current *= INERTIA_DECAY;
        velYRef.current *= INERTIA_DECAY;
        targetRotXRef.current = Math.max(
          -MAX_TILT,
          Math.min(MAX_TILT, targetRotXRef.current + velXRef.current),
        );
        targetRotYRef.current += velYRef.current;
      }

      if (isRingPreset && !isDraggingRef.current) {
        targetRotXRef.current += (0 - targetRotXRef.current) * C_PITCH_RETURN_DAMP;
      }
      rotXRef.current += (targetRotXRef.current - rotXRef.current) * DAMPING;
      rotYRef.current += (targetRotYRef.current - rotYRef.current) * DAMPING;

      const rotY = rotYBase + rotYRef.current;
      const rotX = rotXBase + rotXRef.current;

      const sinY = Math.sin(rotY);
      const cosY = Math.cos(rotY);
      const sinX = Math.sin(rotX);
      const cosX = Math.cos(rotX);

      if (time - lastRotationUpdateRef.current > 50) {
        const toDeg = 180 / Math.PI;
        const normalizeDeg = (deg: number) => {
          let n = deg % 360;
          if (n > 180) n -= 360;
          if (n < -180) n += 360;
          return n;
        };
        setRotationState({
          x: normalizeDeg(rotX * toDeg),
          y: normalizeDeg(rotY * toDeg),
          z: 0,
        });
        lastRotationUpdateRef.current = time;
      }

      let blend = 0;
      let inTransition = false;
      let transitionProgress = 0;
      if (!reduceMotion) {
        if (phaseRef.current === "idle") {
          if (phaseStartRef.current === null) phaseStartRef.current = time;
          const elapsedShow = time - phaseStartRef.current;
          if (elapsedShow >= SHOW_MS && !pauseRef.current) {
            const currentIndex = PRESET_SEQUENCE.indexOf(currentPreset.current);
            nextPresetRef.current = PRESET_SEQUENCE[(currentIndex + 1) % PRESET_SEQUENCE.length];
            phaseRef.current = "transition";
            transitionStartRef.current = time;
          }
        }

      if (phaseRef.current === "transition" && transitionStartRef.current !== null) {
        const elapsed = time - transitionStartRef.current;
        const tMorph = Math.min(1, elapsed / TRANSITION_MS);
        transitionProgress = tMorph;
        blend = easeInOutCubic(tMorph);
        inTransition = true;
        if (nextPresetRef.current === "ring" && !isDraggingRef.current) {
          const poseBlend = smoothstep(FRONT_SETTLE_START, FRONT_SETTLE_END, tMorph);
          targetRotXRef.current = lerp(targetRotXRef.current, 0, poseBlend);
          targetRotYRef.current = lerp(targetRotYRef.current, 0, poseBlend);
          rotXRef.current = lerp(rotXRef.current, 0, poseBlend);
          rotYRef.current = lerp(rotYRef.current, 0, poseBlend);
        }
        if (tMorph >= 1) {
          currentPreset.current = nextPresetRef.current;
          fromPositions.current = presets.positions[currentPreset.current];
          if (currentPreset.current === "ring") {
            targetRotXRef.current = 0;
            targetRotYRef.current = 0;
            rotXRef.current = 0;
            rotYRef.current = 0;
          }
          phaseRef.current = "idle";
          transitionStartRef.current = null;
          phaseStartRef.current = time;
        }
        } else {
          fromPositions.current = presets.positions[currentPreset.current];
        }
      }

      const transitioningToRing = inTransition && nextPresetRef.current === "ring";
      const transitioningFromRing = inTransition && currentPreset.current === "ring";
      const shouldPulseParticles = config.pulse && !transitioningToRing && currentPreset.current !== "ring";
      const pulse = reduceMotion || !shouldPulseParticles ? 1 : 1 + Math.sin(t * 0.8) * 0.01;

      if (inTransition) {
        fromPositions.current = presets.positions[currentPreset.current];
        toPositions.current = presets.positions[nextPresetRef.current];
      }

      const source = transitioningFromRing
        ? toPositions.current
        : fromPositions.current;
      const target = transitioningToRing
        ? fromPositions.current
        : transitioningFromRing
          ? toPositions.current
          : inTransition
            ? toPositions.current
            : fromPositions.current;

      for (let i = 0; i < config.particleCount; i += 1) {
        const idx = i * 3;
        const x = (source[idx] + (target[idx] - source[idx]) * blend) * pulse;
        const y = (source[idx + 1] + (target[idx + 1] - source[idx + 1]) * blend) * pulse;
        const z = (source[idx + 2] + (target[idx + 2] - source[idx + 2]) * blend) * pulse;

        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const scaleFactor = depth / (depth - z2);

        rotated[idx] = x1;
        rotated[idx + 1] = y2;
        rotated[idx + 2] = z2;
        projected[idx] = w / 2 + x1 * radius * scaleFactor;
        projected[idx + 1] = h / 2 + y2 * radius * scaleFactor;
        projected[idx + 2] = z2;
      }

      const ringBlend =
        inTransition && nextPresetRef.current === "ring"
          ? blend
          : inTransition && currentPreset.current === "ring"
            ? 1 - blend
            : currentPreset.current === "ring"
              ? 1
              : 0;

      const ringActive = ringBlend > 0.01;
      if (ringActive && !lastRingActiveRef.current) {
        setPresetCTrigger((prev) => prev + 1);
      }
      lastRingActiveRef.current = ringActive;

      if (cubesLayerRef.current) {
        const isRingActive =
          currentPreset.current === "ring" ||
          (inTransition && nextPresetRef.current === "ring");
        const opacity = isRingActive ? (inTransition ? ringBlend : 1) : 0;
        const blur = reduceMotion ? 0 : (1 - opacity) * 8;
        const scale = reduceMotion ? 1 : 0.96 + 0.07 * opacity;
        const settle = !reduceMotion && opacity > 0.9 ? 1.01 - (opacity - 0.9) * 0.1 : 1;
        cubesLayerRef.current.style.opacity = `${opacity}`;
        cubesLayerRef.current.style.transform = `scale(${scale * settle})`;
        cubesLayerRef.current.style.filter = blur > 0.1 ? `blur(${blur}px)` : "none";
        cubesLayerRef.current.style.pointerEvents = opacity > 0.05 ? "auto" : "none";
      }
      if (cubesGlowRef.current) {
        cubesGlowRef.current.style.opacity = `${0.08 * ringBlend}`;
      }
      cubesActiveRef.current = ringBlend > 0.01;

      if (transitionOverlayRef.current) {
        const active = inTransition && !reduceMotion;
        transitionOverlayRef.current.style.opacity = active ? "1" : "0";
        transitionOverlayRef.current.style.pointerEvents = "none";
        if (transitionSweepRef.current) {
          transitionSweepRef.current.style.animation = active ? `hero-sweep ${TRANSITION_MS}ms ease-out` : "none";
        }
        if (transitionHaloRef.current) {
          transitionHaloRef.current.style.animation = active ? `hero-halo ${TRANSITION_MS}ms ease-out` : "none";
        }
      }

      if (DEV_ONLY && time - lastLogRef.current > 1000) {
        const presetAWorldRadius = radius;
        const rotDelta = rotY - lastRotYLogRef.current;
        // eslint-disable-next-line no-console
        console.info(
          "[HeroOrb] presetAWorldRadius:",
          presetAWorldRadius.toFixed(3),
          "rotYDelta:",
          rotDelta.toFixed(4),
          "preset:",
          currentPreset.current,
        );
        lastLogRef.current = time;
        lastRotYLogRef.current = rotY;
      }

      let particleOpacity = PARTICLE_OPACITY_ACTIVE;
      if (transitioningToRing) {
        if (transitionProgress <= 0.2) {
          particleOpacity = lerp(PARTICLE_OPACITY_ACTIVE, 0, transitionProgress / 0.2);
        } else {
          particleOpacity = 0;
        }
      } else if (currentPreset.current === "ring") {
        particleOpacity = 0;
      } else if (transitioningFromRing) {
        if (transitionProgress >= 0.8) {
          particleOpacity = lerp(0, PARTICLE_OPACITY_ACTIVE, (transitionProgress - 0.8) / 0.2);
        } else {
          particleOpacity = 0;
        }
      }

      if (particleOpacity > 0.001) {
        for (let i = 0; i < config.particleCount; i += 1) {
          const depthMix = (projected[i * 3 + 2] + 1) / 2;
          const alpha = particleOpacity + depthMix * 0.2;
          ctx.fillStyle = `rgba(215,221,227,${alpha})`;
          ctx.beginPath();
          ctx.arc(projected[i * 3], projected[i * 3 + 1], config.pointSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const sphereSparkState = sphereSparkRef.current;
      const presetNow = String(currentPreset.current);
      const nextPreset = String(nextPresetRef.current);
      const allowSphereSparks =
        particleOpacity > 0.2 &&
        (presetNow === "scatter" ||
          (inTransition && (presetNow === "scatter" || nextPreset === "scatter")));

      if (sphereSparkState && allowSphereSparks && !reduceMotion) {
        const { sparks, samples } = sphereSparkState;
        const samplePoints = tier === "mobile" ? ARC_SAMPLE_POINTS_MOBILE : ARC_SAMPLE_POINTS_DESKTOP;
        const accent = hexToRgb(COLOR_ACCENT);
        const minDist = MIN_ARC_DISTANCE;
        const baseSpeed = tier === "mobile" ? SPARK_SPEED_MOBILE : SPARK_SPEED_DESKTOP;
        const fadeDuration = 0.08;
        const flicker = 0.9 + 0.1 * Math.sin(t * 15);

        const projectPoint = (x: number, y: number, z: number) => {
          const scale = depth / (depth - z);
          return {
            x: w / 2 + x * radius * scale,
            y: h / 2 + y * radius * scale,
          };
        };

        const pickPair = () => {
          const total = config.particleCount;
          let i1 = Math.floor(Math.random() * total);
          let i2 = Math.floor(Math.random() * total);
          let attempts = 0;
          while (i1 === i2 && attempts < 6) {
            i2 = Math.floor(Math.random() * total);
            attempts += 1;
          }
          attempts = 0;
          while (attempts < 10) {
            const dx = rotated[i1 * 3] - rotated[i2 * 3];
            const dy = rotated[i1 * 3 + 1] - rotated[i2 * 3 + 1];
            const dz = rotated[i1 * 3 + 2] - rotated[i2 * 3 + 2];
            if (Math.hypot(dx, dy, dz) >= minDist) break;
            i2 = Math.floor(Math.random() * total);
            attempts += 1;
          }
          return { i1, i2 };
        };

        ctx.save();
        for (let s = 0; s < sparks.length; s += 1) {
          const spark = sparks[s];
          if (spark.cooldown > 0) {
            spark.cooldown -= dt;
            continue;
          }
          spark.speed = baseSpeed * (0.92 + (s % 3) * 0.06);
          if (spark.fadingOut) {
            spark.fade = Math.max(0, spark.fade - dt / fadeDuration);
            if (spark.fade <= 0) {
              spark.fadingOut = false;
              spark.fadingIn = true;
              spark.headT = 0;
              spark.cooldown = 0.05;
              const { i1, i2 } = pickPair();
              spark.i1 = i1;
              spark.i2 = i2;
            }
          } else if (spark.fadingIn) {
            spark.fade = Math.min(1, spark.fade + dt / fadeDuration);
            if (spark.fade >= 1) {
              spark.fadingIn = false;
            }
          } else {
            spark.headT += dt * spark.speed;
            if (spark.headT >= 1) {
              spark.headT = 1;
              spark.fadingOut = true;
            }
          }

          if (spark.i1 === 0 && spark.i2 === 1 && spark.headT === 0) {
            const { i1, i2 } = pickPair();
            spark.i1 = i1;
            spark.i2 = i2;
          }

          const headT = spark.headT;
          const tailT = 0;
          const i1 = spark.i1;
          const i2 = spark.i2;
          const p1 = {
            x: rotated[i1 * 3],
            y: rotated[i1 * 3 + 1],
            z: rotated[i1 * 3 + 2],
          };
          const p2 = {
            x: rotated[i2 * 3],
            y: rotated[i2 * 3 + 1],
            z: rotated[i2 * 3 + 2],
          };
          const mx = p1.x + p2.x;
          const my = p1.y + p2.y;
          const mz = p1.z + p2.z;
          const mLen = Math.hypot(mx, my, mz) || 1;
          const mid = {
            x: (mx / mLen) * 1.08,
            y: (my / mLen) * 1.08,
            z: (mz / mLen) * 1.08,
          };
          const corePoints = samples[s];
          const step = 1 / Math.max(1, samplePoints - 1);
          for (let i = 0; i < samplePoints; i += 1) {
            const u = step * i;
            const inv = 1 - u;
            const bx = inv * inv * p1.x + 2 * inv * u * mid.x + u * u * p2.x;
            const by = inv * inv * p1.y + 2 * inv * u * mid.y + u * u * p2.y;
            const bz = inv * inv * p1.z + 2 * inv * u * mid.z + u * u * p2.z;
            const proj = projectPoint(bx, by, bz);
            corePoints[i * 2] = proj.x;
            corePoints[i * 2 + 1] = proj.y;
          }

          const alpha = particleOpacity * spark.fade * flicker;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          for (let i = 1; i < samplePoints; i += 1) {
            const u0 = (i - 1) / (samplePoints - 1);
            const u1 = i / (samplePoints - 1);
            const uMid = (u0 + u1) * 0.5;
            const dist = Math.abs(uMid - headT);
            let intensity = Math.exp(-dist * 40);
            if (dist < 0.01) intensity *= 1.8;
            intensity *= alpha;
            if (intensity < 0.02) continue;
            ctx.strokeStyle = `rgba(${accent.r},${accent.g},${accent.b},${0.9 * intensity})`;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(corePoints[(i - 1) * 2], corePoints[(i - 1) * 2 + 1]);
            ctx.lineTo(corePoints[i * 2], corePoints[i * 2 + 1]);
            ctx.stroke();
          }

          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          for (let i = 1; i < samplePoints; i += 1) {
            const u0 = (i - 1) / (samplePoints - 1);
            const u1 = i / (samplePoints - 1);
            const uMid = (u0 + u1) * 0.5;
            const dist = Math.abs(uMid - headT);
            let intensity = Math.exp(-dist * 28);
            if (dist < 0.012) intensity *= 1.6;
            intensity *= alpha * 0.4;
            if (intensity < 0.02) continue;
            ctx.strokeStyle = `rgba(${accent.r},${accent.g},${accent.b},${intensity})`;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(corePoints[(i - 1) * 2], corePoints[(i - 1) * 2 + 1]);
            ctx.lineTo(corePoints[i * 2], corePoints[i * 2 + 1]);
            ctx.stroke();
          }
          ctx.restore();
        }
        ctx.restore();
      }

      // Preset C visual checklist: clean circuit ring, no center artifacts.

      if (DEV_ONLY) {
        ctx.strokeStyle = "rgba(255,255,255,0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(w / 2 - 8, h / 2);
        ctx.lineTo(w / 2 + 8, h / 2);
        ctx.moveTo(w / 2, h / 2 - 8);
        ctx.lineTo(w / 2, h / 2 + 8);
        ctx.stroke();
      }

      if (DEBUG_SHAPES && currentPreset.current === "scatter") {
        ctx.strokeStyle = "rgba(215,221,227,0.08)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      frameRef.current = requestAnimationFrame(drawFrame);
    };

    drawFrame(0);
    frameRef.current = requestAnimationFrame(drawFrame);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      observer.disconnect();
    };
  }, [config, presets, reduceMotion, tier]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center touch-pan-y ${className}`}
      onMouseEnter={() => {
        if (window.innerWidth >= 1024) pauseRef.current = true;
      }}
      onMouseLeave={() => {
        pauseRef.current = false;
      }}
      onPointerDown={(event) => {
        const container = containerRef.current;
        if (!container) return;
        container.setPointerCapture(event.pointerId);
        isDraggingRef.current = true;
        movedRef.current = false;
        lastXRef.current = event.clientX;
        lastYRef.current = event.clientY;
        velXRef.current = 0;
        velYRef.current = 0;
      }}
      onPointerMove={(event) => {
        if (!isDraggingRef.current) return;
        const dx = event.clientX - lastXRef.current;
        const dy = event.clientY - lastYRef.current;
        if (!movedRef.current && Math.hypot(dx, dy) < 6) return;
        movedRef.current = true;
        event.preventDefault();
        lastXRef.current = event.clientX;
        lastYRef.current = event.clientY;
        targetRotXRef.current = Math.max(
          -MAX_TILT,
          Math.min(MAX_TILT, targetRotXRef.current + dy * DRAG_SENS_X),
        );
        targetRotYRef.current += dx * DRAG_SENS_Y;
        velXRef.current = dy * DRAG_SENS_X;
        velYRef.current = dx * DRAG_SENS_Y;
      }}
      onPointerUp={(event) => {
        const container = containerRef.current;
        if (container) container.releasePointerCapture(event.pointerId);
        isDraggingRef.current = false;
      }}
      onPointerCancel={(event) => {
        const container = containerRef.current;
        if (container) container.releasePointerCapture(event.pointerId);
        isDraggingRef.current = false;
      }}
    >
      <style>{`
        @keyframes hero-sweep {
          0% { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
          20% { opacity: 0.18; }
          60% { opacity: 0.22; }
          100% { transform: translateX(120%) skewX(-12deg); opacity: 0; }
        }
        @keyframes hero-halo {
          0% { opacity: 0; transform: scale(0.96); }
          35% { opacity: 0.2; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.03); }
        }
      `}</style>
      <div ref={transitionOverlayRef} className="pointer-events-none absolute inset-0 z-20">
        <div
          ref={transitionSweepRef}
          className="absolute -inset-x-1/2 top-0 h-full opacity-0"
          style={{
            background: `linear-gradient(115deg, transparent 0%, ${COLOR_ACCENT}40 45%, transparent 70%)`,
            mixBlendMode: "screen",
          }}
        />
        <div
          ref={transitionHaloRef}
          className="absolute inset-0 opacity-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${COLOR_ACCENT}2E 0%, rgba(0,0,0,0) 60%)`,
            mixBlendMode: "screen",
          }}
        />
      </div>
      <div className="absolute inset-0 z-10">
        <PresetC_Cubes
          className="h-full w-full"
          accentColor={COLOR_ACCENT}
          isMobile={tier === "mobile"}
          containerRef={cubesLayerRef}
          glowRef={cubesGlowRef}
          size={orbSize}
          rotation={rotationState}
          triggerKey={presetCTrigger}
        />
      </div>
      <SphereSparks
        sparkStateRef={sphereSparkRef}
        count={
          reduceMotion
            ? 0
            : tier === "mobile"
              ? SPHERE_SPARK_COUNT_MOBILE
              : SPHERE_SPARK_COUNT_DESKTOP
        }
        samplePoints={tier === "mobile" ? ARC_SAMPLE_POINTS_MOBILE : ARC_SAMPLE_POINTS_DESKTOP}
        enabled={!reduceMotion}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
        style={{ width: "100%", height: "100%" }}
        aria-hidden="true"
      />
    </div>
  );
}
