"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Shield, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/data.json";

interface HeroSectionProps {
  isZAxis?: boolean;
}

export default function HeroSection({ isZAxis = false }: HeroSectionProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Drive Results", "Scale Fast", "Enhance Security", "Fuel Growth"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [words.length]);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" style={{ position: "relative", overflow: "hidden", minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {/* Immersive Background Layers */}
      {!isZAxis && (
        <>
          <div className="hero-bg" style={{ background: "transparent", position: "absolute", inset: 0 }}></div>
        </>
      )}

      {/* Content */}
      <div className="hero-content" style={{ position: "relative", zIndex: 10, pointerEvents: "none" }}>

        {/* Badges Container */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", pointerEvents: "auto" }}>
          
          {/* Cybersecurity Status Badge */}
          <motion.div
            className="hero-label"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background: "rgba(10, 15, 10, 0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(0, 255, 128, 0.3)",
              boxShadow: "0 0 20px rgba(0, 255, 128, 0.15)",
              color: "#00ff80",
              fontWeight: 600,
              letterSpacing: "0.5px"
            }}
          >
            <div style={{ position: "relative", width: "10px", height: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "4px" }}>
               <motion.div 
                 animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 style={{ position: "absolute", inset: 0, background: "#00ff80", borderRadius: "50%" }}
               />
               <div style={{ width: "6px", height: "6px", background: "#00ff80", borderRadius: "50%", zIndex: 2 }} />
            </div>
            ZERO-TRUST SECURITY ACTIVE
            <Shield size={14} style={{ marginLeft: "4px" }} />
          </motion.div>

          {/* Premium IT Badge */}
          <motion.div 
            className="hero-label"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              background: "rgba(10, 15, 20, 0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(0, 191, 255, 0.3)",
              boxShadow: "0 0 20px rgba(0, 191, 255, 0.15)",
              color: "#00bfff",
              fontWeight: 600,
              letterSpacing: "0.5px"
            }}
          >
            <div style={{ position: "relative", width: "10px", height: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "4px" }}>
               <motion.div 
                 animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 style={{ position: "absolute", inset: 0, background: "#00bfff", borderRadius: "50%" }}
               />
               <div style={{ width: "6px", height: "6px", background: "#00bfff", borderRadius: "50%", zIndex: 2 }} />
            </div>
            PREMIUM IT & AVIATION GRADE TECH
          </motion.div>
        </div>
        
        <motion.h1 
          className="hero-title" 
          style={{ minHeight: "160px", textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Engineering Solutions That <br />
          <AnimatePresence mode="wait">
            <motion.span 
              key={wordIndex}
              className="text-gradient" 
              style={{ display: "inline-block", minWidth: "280px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}
        >
          {data.company.description}
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ pointerEvents: "auto" }}
        >
          <Link href="/portfolio" className="btn btn-primary btn-lg glow-pulse">
            Explore Our Work
          </Link>
          <Link href="/contact" className="btn btn-outline btn-lg" style={{ background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(10px)" }}>
            Get a Free Consultation
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="hero-scroll-indicator" 
        onClick={scrollDown}
        style={{ pointerEvents: "auto", cursor: "pointer" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
