"use client";

import Link from "next/link";
import { ExternalLink, Cpu, GraduationCap, FlaskConical, Recycle, CheckCircle } from "lucide-react";
import data from "@/data/data.json";
import ScrollReveal from "@/components/ScrollReveal";
import ImageSlideshow from "@/components/ImageSlideshow";

const iconMap: Record<string, any> = {
  Cpu,
  GraduationCap,
  FlaskConical,
  Recycle,
};

const stemImages = [
  "/stem-slideshow/slide1.jpg",
  "/stem-slideshow/slide2.jpg",
  "/stem-slideshow/slide3.jpg",
  "/stem-slideshow/slide4.jpg",
  "/stem-slideshow/slide5.jpg",
];

export default function STEMPage() {
  return (
    <>
      <div className="page-hero animated-hero-bg" style={{ 
        backgroundImage: "linear-gradient(rgba(10, 15, 28, 0.7), rgba(10, 15, 28, 1)), url('/stem-banner.png')", 
        backgroundRepeat: "no-repeat",
        padding: "var(--space-2xl) 0 var(--space-xl)"
      }}>
        <div className="container">
          <div className="section-label" style={{ color: "var(--accent)", background: "rgba(201, 98, 42, 0.12)", borderColor: "rgba(201, 98, 42, 0.2)" }}>STEM Education</div>
          <h1 className="page-hero-title">
            Empowering the <span className="text-gradient-accent">Next Generation</span>
          </h1>
          <p className="page-hero-description">
            {data.stem.description}
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="stem-intro">
            <ScrollReveal direction="left" className="stem-intro-text">
              <h3>Kpando Anglican STEM Club</h3>
              <p className="stem-intro-description">
                Our commitment to technology goes beyond commercial projects. We actively invest in the future of Ghana by running the Kpando Anglican STEM Club, a local initiative that introduces students to the wonders of Science, Technology, Engineering, and Mathematics.
              </p>
              <a href={data.stem.clubUrl} target="_blank" rel="noopener noreferrer" className="stem-club-link">
                Visit STEM Club Website <ExternalLink size={18} />
              </a>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="stem-image-placeholder" style={{ position: "relative", overflow: "hidden", minHeight: "350px", height: "100%", borderRadius: "var(--radius-lg)" }}>
                <ImageSlideshow images={stemImages} interval={3500} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our <span className="text-gradient-accent">Programs</span></h2>
          </div>
          <div className="programs-grid">
            {data.stem.programs.map((program, index) => {
              const IconComponent = iconMap[program.icon] || Cpu;
              return (
                <ScrollReveal key={program.title} delay={index * 150}>
                  <div className="card" style={{ borderColor: "rgba(201, 98, 42, 0.2)" }}>
                    <div className="card-icon" style={{ color: "var(--accent)", background: "rgba(201, 98, 42, 0.1)" }}>
                      <IconComponent size={28} />
                    </div>
                    <h3 className="card-title">{program.title}</h3>
                    <p className="card-description">{program.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section stats-section" style={{ borderTopColor: "rgba(201, 98, 42, 0.2)", borderBottomColor: "rgba(201, 98, 42, 0.2)" }}>
        <div className="container">
          <div className="stats-grid">
            {data.stem.impact.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value" style={{ color: "var(--accent)" }}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ledger-section">
            <ScrollReveal direction="left">
              <div className="ledger-image-placeholder" style={{ position: "relative", overflow: "hidden", minHeight: "400px", borderRadius: "var(--radius-lg)", backgroundColor: "#f8f9fa", border: "1px solid rgba(0,0,0,0.1)" }}>
                <img 
                  src="/stem-ledger-app.png" 
                  alt="Flawlex STEM Ledger App Dashboard" 
                  style={{ objectFit: "contain", width: "100%", height: "100%", position: "absolute", inset: 0, padding: "16px" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h3 style={{ fontSize: "var(--text-3xl)", marginBottom: "var(--space-md)" }}>{data.stem.ledger.title}</h3>
              <p className="text-secondary" style={{ marginBottom: "var(--space-xl)", fontSize: "var(--text-lg)" }}>
                {data.stem.ledger.description}
              </p>
              <div className="ledger-features">
                {data.stem.ledger.features.map((feature, i) => (
                  <div key={i} className="ledger-feature-item">
                    <CheckCircle size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "var(--space-xl)" }}>
                <Link href="/portfolio/stem-equipment-ledger" className="btn btn-outline">
                  View Case Study
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div className="cta-banner" style={{ border: "1px solid rgba(201, 98, 42, 0.3)" }}>
              <div className="cta-banner-content">
                <h2 className="cta-banner-title">Partner With Us for STEM</h2>
                <p className="cta-banner-description">
                  Are you a school, NGO, or corporate sponsor looking to collaborate on STEM education in Ghana? We'd love to partner with you.
                </p>
                <div className="hero-actions">
                  <Link href="/contact" className="btn btn-accent btn-lg glow-pulse">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
