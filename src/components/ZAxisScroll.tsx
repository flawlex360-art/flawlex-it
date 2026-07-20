"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ZAxisContainerProps {
  children: ReactNode;
  pages: number;
}

export function ZAxisContainer({ children, pages }: ZAxisContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We track the scroll progress of this highly-tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} style={{ height: `${pages * 100}vh`, position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        {/* Pass scrollYProgress to children implicitly using context or cloneElement, but doing it explicitly via a prop on children is safer in Next.js */}
        {/* Actually, Framer motion useScroll can be passed directly, or we can just provide it via React.Children.map */}
        {/* We will just export the context or pass it to children if they are ZAxisSection */}
        <ScrollProgressContext.Provider value={scrollYProgress}>
          {children}
        </ScrollProgressContext.Provider>
      </div>
    </div>
  );
}

import { createContext, useContext } from "react";

const ScrollProgressContext = createContext<MotionValue<number> | null>(null);

interface ZAxisSectionProps {
  children: ReactNode;
  pageIndex: number;
  totalPages: number;
}

export function ZAxisSection({ children, pageIndex, totalPages }: ZAxisSectionProps) {
  const scrollYProgress = useContext(ScrollProgressContext);
  
  if (!scrollYProgress) {
    return <>{children}</>;
  }

  // Calculate the scroll range for THIS page to be active
  // e.g. for 5 pages:
  // page 0: active from 0 to 0.2
  // page 1: active from 0.2 to 0.4
  // page 2: active from 0.4 to 0.6
  // But we want it to start scaling up *before* it becomes active, and scale *past* screen after.
  
  const step = 1 / totalPages;
  const startEntering = Math.max(0, (pageIndex - 1) * step);
  const fullyVisible = pageIndex * step;
  const startExiting = fullyVisible + (step * 0.5); // Start zooming past camera halfway through its active period
  const fullyExited = (pageIndex + 1) * step;

  // Scale: 
  // Before entering: 0.1
  // Fully visible: 1
  // Exited: 5 (zoomed way past camera)
  const scale = useTransform(
    scrollYProgress,
    [startEntering, fullyVisible, startExiting, fullyExited],
    [pageIndex === 0 ? 1 : 0.2, 1, 1, 5]
  );

  // Opacity:
  // Before entering: 0
  // Fully visible: 1
  // Exited: 0
  const opacity = useTransform(
    scrollYProgress,
    [startEntering, fullyVisible, startExiting, fullyExited],
    [pageIndex === 0 ? 1 : 0, 1, 1, 0]
  );

  // Blur (optional cool effect)
  const filter = useTransform(
    scrollYProgress,
    [startEntering, fullyVisible, startExiting, fullyExited],
    ["blur(10px)", "blur(0px)", "blur(0px)", "blur(20px)"]
  );
  
  // Z-Index: ensure pages render on top of each other properly, or rather, the active page is on top
  const zIndex = totalPages - pageIndex;

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        scale,
        opacity,
        filter,
        zIndex,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transformOrigin: "center center",
        pointerEvents: "auto", // Allow interaction when visible
      }}
    >
      <div style={{ width: "100%", height: "100%", overflowY: "auto" }}>
        {children}
      </div>
    </motion.div>
  );
}
