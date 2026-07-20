"use client";

import Link from "next/link";
import { Code, Lightbulb, Network, Shield, Cloud, Headphones, CheckCircle } from "lucide-react";
import data from "@/data/data.json";
import ScrollReveal from "@/components/ScrollReveal";

const iconMap: Record<string, any> = {
  Code,
  Lightbulb,
  Network,
  Shield,
  Cloud,
  Headphones,
};

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero" style={{ 
        backgroundImage: "linear-gradient(rgba(10, 15, 28, 0.8), rgba(10, 15, 28, 1)), url('/services-banner.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}>
        <div className="container">
          <div className="section-label">Our Services</div>
          <h1 className="page-hero-title">
            Comprehensive IT <span className="text-gradient">Solutions</span>
          </h1>
          <p className="page-hero-description">
            From software development to managed IT services, we deliver end-to-end technology solutions tailored to your business.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-list">
            {data.services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Code;
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal
                  key={service.id}
                  direction={isEven ? "left" : "right"}
                  className="service-detail"
                >
                  <div className="service-detail-header">
                    <div className="service-detail-icon">
                      <IconComponent size={32} />
                    </div>
                    <div>
                      <h2 className="service-detail-title">{service.title}</h2>
                      <div className="service-detail-subtitle">{service.subtitle}</div>
                    </div>
                  </div>

                  <div className="service-detail-body">
                    <div>
                      <p className="service-detail-description">{service.description}</p>
                      
                      <h4 className="deliverables-title">Key Deliverables</h4>
                      <ul className="deliverables-list">
                        {service.deliverables.map((item, i) => (
                          <li key={i}>
                            <CheckCircle size={18} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="tech-title">Technologies</h4>
                      <div className="tag-group">
                        {service.technologies.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div className="cta-banner">
              <div className="cta-banner-content">
                <h2 className="cta-banner-title">Need a Custom Solution?</h2>
                <p className="cta-banner-description">
                  Don't see exactly what you're looking for? Contact us to discuss your specific requirements.
                </p>
                <div className="hero-actions">
                  <Link href="/contact" className="btn btn-primary btn-lg glow-pulse">
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
