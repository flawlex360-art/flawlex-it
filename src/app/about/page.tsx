"use client";

import { Target, Heart, Zap, Search, PenTool, Code, Rocket } from "lucide-react";
import data from "@/data/data.json";
import ScrollReveal from "@/components/ScrollReveal";

const iconMap: Record<string, any> = {
  Search,
  PenTool,
  Code,
  Rocket,
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero animated-hero-bg" style={{ 
        backgroundImage: "linear-gradient(rgba(10, 15, 28, 0.7), rgba(10, 15, 28, 1)), url('/about-banner.png')", 
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container">
          <div className="section-label">About Us</div>
          <h1 className="page-hero-title">
            The Story Behind <span className="text-gradient">Flawlex Technologies</span>
          </h1>
          <p className="page-hero-description">
            Driven by passion for technology and a commitment to STEM education
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <ScrollReveal direction="left" className="about-story-content">
              <h3>Our Journey</h3>
              <p className="about-story-text">
                Founded in Kpando, Ghana, Flawlex Technologies began with a simple mission: to deliver world-class IT solutions that solve real business problems. What started as a passion for coding and technology has evolved into a comprehensive IT consulting and software development firm.
              </p>
              <p className="about-story-text">
                We bridge the gap between complex technology and business success, serving clients across West Africa and globally. Our roots in STEM education keep us innovative and grounded, ensuring we always build with the future in mind.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="about-story-image" style={{ position: "relative", overflow: "hidden", minHeight: "300px", borderRadius: "var(--radius-lg)" }}>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
                  alt="Our Journey" 
                  style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", inset: 0 }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our <span className="text-gradient">Values</span></h2>
          </div>
          <div className="values-grid">
            <ScrollReveal delay={0}>
              <div className="card">
                <div className="card-icon"><Target size={28} /></div>
                <h3 className="card-title">Excellence</h3>
                <p className="card-description">We deliver nothing short of exceptional quality in every line of code we write and every solution we design.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="card">
                <div className="card-icon"><Heart size={28} /></div>
                <h3 className="card-title">Integrity</h3>
                <p className="card-description">Transparency and honesty are at the core of our client relationships. We do what we say we'll do.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="card">
                <div className="card-icon"><Zap size={28} /></div>
                <h3 className="card-title">Innovation</h3>
                <p className="card-description">We embrace cutting-edge technology and continuous learning to provide the most advanced solutions.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">Our <span className="text-gradient">Process</span></h2>
          </div>
          <div className="process-grid">
            {data.process.map((step, index) => {
              const IconComponent = iconMap[step.icon] || Code;
              return (
                <ScrollReveal key={step.step} delay={index * 150} className="process-step">
                  <div className="process-step-number">{step.step}</div>
                  <h4 className="process-step-title">{step.title}</h4>
                  <p className="process-step-description">{step.description}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet the <span className="text-gradient">Founder</span></h2>
          </div>
          <ScrollReveal direction="scale">
            <div className="profile-section card glass-strong">
              <div className="profile-image-wrapper">
                <div className="profile-image-glow"></div>
                <div className="profile-image" style={{ position: "relative", overflow: "hidden" }}>
                   <img 
                      src={data.profile.image} 
                      alt={data.profile.name} 
                      style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", inset: 0 }}
                    />
                </div>
              </div>
              <div>
                <h3 className="profile-name">{data.profile.name}</h3>
                <div className="profile-role">{data.profile.role}</div>
                <p className="profile-bio">{data.profile.bio}</p>
                <div className="profile-skills">
                  {data.profile.skills.map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
