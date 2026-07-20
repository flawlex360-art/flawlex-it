"use client";

import { useScroll, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import Link from "next/link";
import { ArrowRight, Code, Lightbulb, Network, Shield, Cloud, Headphones, Award, Clock, Users, Wrench } from "lucide-react";
import data from "@/data/data.json";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HeroSection from "@/components/HeroSection";

const iconMap: Record<string, any> = {
  Code, Lightbulb, Network, Shield, Cloud, Headphones,
};

export default function TunnelContent() {
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null);
  
  // Total depth of the tunnel
  const zSpacing = 30; // Distance between each section
  const totalSections = 8;
  const tunnelDepth = (totalSections - 1) * zSpacing;

  useFrame((state) => {
    // Scroll offset goes from 0 to 1
    // We want the camera to start at z=5 and move forward (negative Z)
    // When scroll.offset is 1, camera should be past the last section
    const targetZ = 5 - (scroll.offset * (tunnelDepth + 10));
    
    // Smooth camera movement
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1);
    
    // Optional: Add slight sway based on mouse or scroll for extra immersion
    // state.camera.position.x = Math.sin(scroll.offset * Math.PI * 2) * 0.5;
    // state.camera.position.y = Math.cos(scroll.offset * Math.PI * 2) * 0.2;
  });

  // Base styling for Html elements to look good in 3D
  const htmlStyle = {
    width: "100vw",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "auto" as any,
  };

  return (
    <group ref={groupRef}>
      
      {/* 0: Hero Section */}
      <Html transform position={[0, 0, 0]} style={htmlStyle} zIndexRange={[100, 0]} className="tunnel-html">
        <div style={{ width: "100%", padding: "0 20px" }}>
          <HeroSection isZAxis={true} />
        </div>
      </Html>

      {/* 1: Services */}
      <Html transform position={[0, 0, -zSpacing]} style={htmlStyle} zIndexRange={[100, 0]} className="tunnel-html">
        <div className="container glass-strong" style={{ padding: "var(--space-2xl)", borderRadius: "var(--radius-xl)", width: "100%" }}>
          <div className="section-header">
            <div className="section-label">Our Services</div>
            <h2 className="section-title">What We <span className="text-gradient">Deliver</span></h2>
            <p className="section-description">Comprehensive IT solutions designed to empower your business, optimize operations, and drive growth.</p>
          </div>
          <div className="services-grid">
            {data.services.map((service) => {
              const IconComponent = iconMap[service.icon] || Code;
              return (
                <div key={service.id} className="card glass">
                  <div className="card-icon"><IconComponent size={28} /></div>
                  <h3 className="card-title">{service.title}</h3>
                  <div className="card-subtitle">{service.subtitle}</div>
                  <p className="card-description">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Html>

      {/* 2: Why Choose Us */}
      <Html transform position={[0, 0, -zSpacing * 2]} style={htmlStyle} zIndexRange={[100, 0]} className="tunnel-html">
        <div className="container">
          <div className="why-section glass-strong" style={{ padding: "var(--space-xl)", borderRadius: "var(--radius-xl)" }}>
            <div>
              <div className="why-image">
                <div className="why-image-glow"></div>
              </div>
            </div>
            <div>
              <div className="section-header" style={{ textAlign: "left", marginBottom: "var(--space-2xl)" }}>
                <div className="section-label">Why Choose Us</div>
                <h2 className="section-title" style={{ fontSize: "var(--text-4xl)" }}>
                  Your Trusted Technology <span className="text-gradient">Partner</span>
                </h2>
              </div>
              <div className="why-features">
                <div className="why-feature">
                  <div className="why-feature-icon"><Award size={24} /></div>
                  <div>
                    <h4 className="why-feature-title">Proven Expertise</h4>
                    <p className="why-feature-description">Years of hands-on experience delivering successful IT projects.</p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="why-feature-icon"><Clock size={24} /></div>
                  <div>
                    <h4 className="why-feature-title">On-Time Delivery</h4>
                    <p className="why-feature-description">We respect deadlines and ensure your project is completed.</p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="why-feature-icon"><Users size={24} /></div>
                  <div>
                    <h4 className="why-feature-title">Client-Focused</h4>
                    <p className="why-feature-description">Your success is our priority.</p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="why-feature-icon"><Wrench size={24} /></div>
                  <div>
                    <h4 className="why-feature-title">End-to-End Support</h4>
                    <p className="why-feature-description">From initial planning to post-launch maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Html>

      {/* 3: Stats */}
      <Html transform position={[0, 0, -zSpacing * 3]} style={htmlStyle} zIndexRange={[100, 0]} className="tunnel-html">
        <div className="container">
          <div className="glass-strong" style={{ padding: "var(--space-3xl)", borderRadius: "var(--radius-xl)", width: "100%" }}>
            <StatsCounter />
          </div>
        </div>
      </Html>

      {/* 4: Featured Projects */}
      <Html transform position={[0, 0, -zSpacing * 4]} style={htmlStyle} zIndexRange={[100, 0]} className="tunnel-html">
        <div className="container glass-strong" style={{ padding: "var(--space-2xl)", borderRadius: "var(--radius-xl)", width: "100%" }}>
          <div className="section-header">
            <div className="section-label">Featured Projects</div>
            <h2 className="section-title">Our Recent <span className="text-gradient">Work</span></h2>
          </div>
          <div className="portfolio-grid grid-3">
            {data.portfolio.slice(0, 3).map((project) => (
              <Link key={project.slug} href={`/portfolio/${project.slug}`} className="project-card glass">
                <div className="project-card-image" style={{ position: "relative", width: "100%", height: "240px", overflow: "hidden" }}>
                  <img src={project.image} alt={project.title} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
                <div className="project-card-category tag">{project.category}</div>
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="tag-group" style={{ marginBottom: "var(--space-lg)", marginTop: "1rem" }}>
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="tag tag-accent" style={{ fontSize: "0.75rem" }}>{tech}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Html>

      {/* 5: STEM Spotlight */}
      <Html transform position={[0, 0, -zSpacing * 5]} style={htmlStyle} zIndexRange={[100, 0]} className="tunnel-html">
        <div className="container">
          <div className="stem-spotlight glass-strong" style={{ borderRadius: "var(--radius-xl)" }}>
            <div className="stem-spotlight-image" style={{ position: "relative", overflow: "hidden" }}>
               <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200" 
                  alt="STEM Showcase" 
                  style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", inset: 0 }}
                />
            </div>
            <div className="stem-spotlight-content" style={{ padding: "var(--space-2xl)", position: "relative", zIndex: 2 }}>
              <h3>Empowering <span className="text-gradient-accent">STEM Education</span></h3>
              <p>{data.stem.description}</p>
              <div className="stem-spotlight-stats">
                <div className="stem-stat"><div className="stem-stat-value">500+</div><div className="stem-stat-label">Students</div></div>
                <div className="stem-stat"><div className="stem-stat-value">50+</div><div className="stem-stat-label">Projects</div></div>
                <div className="stem-stat"><div className="stem-stat-value">10+</div><div className="stem-stat-label">Schools</div></div>
              </div>
              <Link href="/stem" className="btn btn-accent">Explore STEM Programs</Link>
            </div>
          </div>
        </div>
      </Html>

      {/* 6: Testimonials */}
      <Html transform position={[0, 0, -zSpacing * 6]} style={htmlStyle} zIndexRange={[100, 0]} className="tunnel-html">
        <div className="container glass-strong" style={{ padding: "var(--space-3xl)", borderRadius: "var(--radius-xl)", width: "100%" }}>
          <div className="section-header">
            <div className="section-label">Testimonials</div>
            <h2 className="section-title">What Our <span className="text-gradient">Clients Say</span></h2>
          </div>
          <TestimonialCarousel />
        </div>
      </Html>

      {/* 7: CTA */}
      <Html transform position={[0, 0, -zSpacing * 7]} style={htmlStyle} zIndexRange={[100, 0]} className="tunnel-html">
        <div className="container">
          <div className="cta-banner glass-strong">
            <h2 className="cta-title">Ready to Transform Your IT?</h2>
            <p className="cta-description">Let's discuss how we can help your business leverage technology for sustainable growth and efficiency.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
              <Link href="/services" className="btn btn-outline btn-lg">Learn More</Link>
            </div>
          </div>
        </div>
      </Html>

      {/* 3D Decorators (Optional spatial elements floating in the tunnel) */}
      <mesh position={[-5, 5, -15]}>
         <octahedronGeometry args={[1, 0]} />
         <meshStandardMaterial color="#3DBFA0" wireframe />
      </mesh>
      
      <mesh position={[6, -4, -45]}>
         <icosahedronGeometry args={[1.5, 0]} />
         <meshStandardMaterial color="#C9622A" wireframe />
      </mesh>

    </group>
  );
}
