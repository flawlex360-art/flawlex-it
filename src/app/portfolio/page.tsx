"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import data from "@/data/data.json";
import ScrollReveal from "@/components/ScrollReveal";

const filters = ["All", "Software", "Infrastructure", "Consulting", "STEM"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? data.portfolio
      : data.portfolio.filter(
          (project) =>
            project.category === activeFilter ||
            (activeFilter === "STEM" && project.categoryTag === "stem")
        );

  return (
    <>
      <div className="page-hero animated-hero-bg" style={{ 
        backgroundImage: "linear-gradient(rgba(10, 15, 28, 0.7), rgba(10, 15, 28, 1)), url('/portfolio-banner.png')", 
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container">
          <div className="section-label">Our Work</div>
          <h1 className="page-hero-title">
            Project <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="page-hero-description">
            Explore our recent projects and see how we've helped businesses and educational institutions achieve their technology goals.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`portfolio-filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 100}>
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
          
          {filteredProjects.length === 0 && (
            <div style={{ textAlign: "center", padding: "var(--space-4xl) 0" }}>
              <p className="text-secondary">No projects found for this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
