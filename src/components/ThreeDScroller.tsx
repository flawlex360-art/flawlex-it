"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import TunnelContent from "./TunnelContent";
import ParticlesBackground from "./ParticlesBackground";

export default function ThreeDScroller() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "var(--bg-darker)" }}>
      {/* 2D particles in the deep background for extra texture, independent of the 3D scene */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <ParticlesBackground />
      </div>

      <Canvas camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 1000 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3DBFA0" />
        
        {/* damping makes the scroll super smooth */}
        <ScrollControls pages={8} damping={0.2}>
          <TunnelContent />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
