"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import data from "@/data/data.json";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = data.testimonials;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!testimonials || testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];
  // Simple avatar initials
  const initials = currentTestimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="testimonials-carousel">
      <div className="testimonial-card">
        <div className="testimonial-quote">{currentTestimonial.quote}</div>
        <div className="testimonial-author">
          <div className="testimonial-avatar">{initials}</div>
          <div className="testimonial-name">{currentTestimonial.name}</div>
          <div className="testimonial-role">
            {currentTestimonial.role}, {currentTestimonial.company}
          </div>
        </div>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="testimonial-arrows">
        <button className="testimonial-arrow" onClick={goToPrevious} aria-label="Previous">
          <ChevronLeft size={24} />
        </button>
        <button className="testimonial-arrow" onClick={goToNext} aria-label="Next">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
