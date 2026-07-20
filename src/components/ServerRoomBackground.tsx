"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ServerRoomBackground() {
  const [lights, setLights] = useState<{ id: number; color: string; left: string; top: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate random server lights (mix of green, red, and occasionally blue)
    const newLights = Array.from({ length: 15 }).map((_, i) => {
      const isRed = Math.random() > 0.85; // 15% chance of red
      const isBlue = Math.random() > 0.9; // 10% chance of blue
      const color = isRed ? "#ff003c" : isBlue ? "#00bfff" : "#00ff80";
      
      return {
        id: i,
        color,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
        duration: 0.5 + Math.random() * 2, // Random blink speed
      };
    });
    setLights(newLights);
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", backgroundColor: "var(--bg-primary)" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.25, // Slightly brighter so the video is clearly visible
          filter: "grayscale(20%)", // Keep some color
        }}
      >
        <source src="/server-maintenance.mp4" type="video/mp4" />
      </video>
      
      {/* Heavy Dark Overlay for Maximum Readability */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, var(--bg-primary) 0%, rgba(10, 15, 20, 0.75) 50%, var(--bg-primary) 100%)",
        }}
      />

      {/* Animated LED Lights */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.6 }}>
        {lights.map((light) => (
          <motion.div
            key={light.id}
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{
              duration: light.duration,
              repeat: Infinity,
              delay: light.delay,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: light.left,
              top: light.top,
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              backgroundColor: light.color,
              boxShadow: `0 0 8px ${light.color}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
