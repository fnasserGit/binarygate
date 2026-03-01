"use client";

import LightPillar from "@/components/LightPillar";

export default function LightPillarBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 w-screen overflow-hidden">
      <div className="absolute inset-0">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <LightPillar
          topColor="#087396"
          bottomColor="#087396"
          intensity={0.9}
          rotationSpeed={0.4}
          interactive
          glowAmount={0.001}
          pillarWidth={1}
          pillarHeight={0.5}
          noiseIntensity={0.6}
          pillarRotation={20}
        />
        </div>
      </div>
    </div>
  );
}
