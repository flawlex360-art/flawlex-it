"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Lightbulb, Network, Shield, Cloud, Headphones, Award, Clock, Users, Wrench } from "lucide-react";
import data from "@/data/data.json";
import ScrollReveal from "@/components/ScrollReveal";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HeroSection from "@/components/HeroSection";
import ServerRoomBackground from "@/components/ServerRoomBackground";

const iconMap: Record<string, any> = {
  Code,
  Lightbulb,
  Network,
  Shield,
  Cloud,
  Headphones,
};

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Services Overview */}
      <section className="section" style={{ position: "relative" }}>
        <ServerRoomBackground />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-header">
            <div className="section-label">Our Services</div>
            <h2 className="section-title">
              What We <span className="text-gradient">Deliver</span>
            </h2>
            <p className="section-description">
              Comprehensive IT solutions designed to empower your business, optimize operations, and drive growth.
            </p>
          </div>
          <div className="services-grid">
            {data.services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Code;
              return (
                <ScrollReveal key={service.id} delay={index * 100}>
                  <div className="card">
                    <div className="card-icon">
                      <IconComponent size={28} />
                    </div>
                    <h3 className="card-title">{service.title}</h3>
                    <div className="card-subtitle">{service.subtitle}</div>
                    <p className="card-description">{service.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="why-section">
            <ScrollReveal direction="left">
              <div className="why-image">
                <Image 
                  src="/lab-computers.jpg" 
                  alt="Flawlex IT Computer Lab" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  priority
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="section-header" style={{ textAlign: "left", marginBottom: "var(--space-md)" }}>
                <div className="section-label">Why Choose Us</div>
                <h2 className="section-title" style={{ fontSize: "var(--text-4xl)" }}>
                  Your Trusted Technology <span className="text-gradient">Partner</span>
                </h2>
              </div>
              <div className="why-features">
                <div className="why-feature">
                  <div className="why-feature-icon">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="why-feature-title">Proven Expertise</h4>
                    <p className="why-feature-description">Years of hands-on experience delivering successful IT projects across various industries.</p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="why-feature-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="why-feature-title">On-Time Delivery</h4>
                    <p className="why-feature-description">We respect deadlines and ensure your project is completed within the agreed timeframe.</p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="why-feature-icon">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="why-feature-title">Client-Focused</h4>
                    <p className="why-feature-description">Your success is our priority. We work closely with you to understand and meet your unique needs.</p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="why-feature-icon">
                    <Wrench size={24} />
                  </div>
                  <div>
                    <h4 className="why-feature-title">End-to-End Support</h4>
                    <p className="why-feature-description">From initial planning to post-launch maintenance, we are with you every step of the way.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Featured Projects</div>
            <h2 className="section-title">
              Our Recent <span className="text-gradient">Work</span>
            </h2>
          </div>
          <div className="portfolio-grid grid-3">
            {data.portfolio.slice(0, 3).map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 150}>
                <Link href={`/portfolio/${project.slug}`} className="project-card">
                  <div className="project-card-image" style={{ position: "relative", width: "100%", height: "240px", overflow: "hidden" }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ objectFit: "cover", width: "100%", height: "100%", transition: "transform 0.5s ease" }}
                    />
                  </div>
                  <div className="project-card-category tag">{project.category}</div>
                  <div className="project-card-body">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-description">{project.description}</p>
                    <div className="tag-group" style={{ marginBottom: "var(--space-lg)" }}>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="tag tag-accent">{tech}</span>
                      ))}
                    </div>
                    <div className="project-card-footer">
                      <span className="project-card-link">
                        View Case Study <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STEM Spotlight */}
      <section className="section">
        <div className="container">
          <div className="stem-spotlight">
            <ScrollReveal direction="left">
              <div className="stem-spotlight-image" style={{ position: "relative", overflow: "hidden" }}>
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200" 
                  alt="STEM Showcase" 
                  style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", inset: 0 }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="stem-spotlight-content">
                <h3>
                  Empowering <span className="text-gradient-accent">STEM Education</span>
                </h3>
                <p>{data.stem.description}</p>
                
                <div className="stem-spotlight-stats">
                  <div className="stem-stat">
                    <div className="stem-stat-value">500+</div>
                    <div className="stem-stat-label">Students</div>
                  </div>
                  <div className="stem-stat">
                    <div className="stem-stat-value">50+</div>
                    <div className="stem-stat-label">Projects</div>
                  </div>
                  <div className="stem-stat">
                    <div className="stem-stat-value">10+</div>
                    <div className="stem-stat-label">Schools</div>
                  </div>
                </div>
                
                <Link href="/stem" className="btn btn-accent">
                  Explore STEM Programs
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Testimonials</div>
            <h2 className="section-title">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </div>
          <ScrollReveal direction="up">
            <TestimonialCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section">
        <div className="container">
          <ScrollReveal direction="scale">
            <div className="cta-banner">
              <h2 className="cta-title">Ready to Transform Your IT?</h2>
              <p className="cta-description">
                Let's discuss how we can help your business leverage technology for sustainable growth and efficiency.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Start a Project
                </Link>
                <Link href="/services" className="btn btn-outline btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
