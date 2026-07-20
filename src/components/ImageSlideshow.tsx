"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
  className?: string;
}

export default function ImageSlideshow({
  images,
  interval = 4000,
  className = "",
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div 
      className={className} 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        borderRadius: '16px',
        width: '100%',
        height: '100%',
        minHeight: '350px',
        backgroundColor: '#0a0f16'
      }}
    >
      {/* Blurred background layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`blur-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}
        >
          <Image
            src={images[currentIndex]}
            alt="background blur"
            fill
            style={{ objectFit: 'cover', filter: 'blur(30px)', transform: 'scale(1.2)' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Image Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05, y: -10 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ position: 'absolute', top: '16px', left: '16px', right: '16px', bottom: '40px', zIndex: 10 }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Image
              src={images[currentIndex]}
              alt={`STEM Activity ${currentIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              priority={currentIndex === 0}
            />
            {/* Glossy overlay effect */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top right, rgba(0,0,0,0.4), transparent, rgba(255,255,255,0.1))', pointerEvents: 'none' }} />
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Controls / Dots Indicator */}
      {images.length > 1 && (
        <div style={{ position: 'absolute', bottom: '16px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 20 }}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                height: '8px',
                borderRadius: '999px',
                transition: 'all 0.5s ease-out',
                width: idx === currentIndex ? '32px' : '8px',
                backgroundColor: idx === currentIndex ? 'var(--accent)' : 'rgba(255,255,255,0.6)',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
