"use client";

import { useEffect, useRef, useState } from "react";
import data from "@/data/data.json";

export default function StatsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(data.stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValues();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateValues = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 frames
    const stepDuration = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts(
        data.stats.map((stat) => {
          const progress = step / steps;
          const currentVal = stat.value * progress;
          // Ensure we don't exceed the target value
          return Math.min(
            stat.value % 1 === 0 ? Math.floor(currentVal) : Number(currentVal.toFixed(1)),
            stat.value
          );
        })
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);
  };

  return (
    <section className="section stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {data.stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
