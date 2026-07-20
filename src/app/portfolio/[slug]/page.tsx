import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";
import data from "@/data/data.json";
import ScrollReveal from "@/components/ScrollReveal";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = data.portfolio.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="case-study-hero" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
           <img 
              src={project.image} 
              alt={project.title} 
              style={{ objectFit: "cover", width: "100%", height: "100%", opacity: 0.3 }}
            />
           <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg-darker), transparent)" }}></div>
        </div>
        <div className="case-study-hero-content" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/portfolio" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--text-muted)", marginBottom: "var(--space-lg)" }}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <h1 className="hero-title" style={{ marginBottom: "var(--space-md)", fontSize: "var(--text-5xl)" }}>
            {project.title}
          </h1>
          <div className="case-study-meta">
            <div className="case-study-meta-item">
              <span className="case-study-meta-label">Industry</span>
              <span className="case-study-meta-value">{project.industry}</span>
            </div>
            <div className="case-study-meta-item">
              <span className="case-study-meta-label">Duration</span>
              <span className="case-study-meta-value">{project.duration}</span>
            </div>
            <div className="case-study-meta-item">
              <span className="case-study-meta-label">Category</span>
              <span className="case-study-meta-value tag" style={{ marginTop: "4px" }}>{project.category}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section case-study-content">
        <div className="container container-narrow">
          <ScrollReveal className="case-study-section">
            <h2 className="case-study-section-title">The Challenge</h2>
            <p className="text-secondary" style={{ fontSize: "var(--text-lg)" }}>
              {project.challenge}
            </p>
          </ScrollReveal>

          <ScrollReveal className="case-study-section">
            <h2 className="case-study-section-title">Our Solution</h2>
            <p className="text-secondary" style={{ fontSize: "var(--text-lg)" }}>
              {project.solution}
            </p>
          </ScrollReveal>

          {project.features && (
            <ScrollReveal className="case-study-section">
              <h2 className="case-study-section-title">Ecosystem Features</h2>
              <div className="case-study-features">
                {project.features.map((feature: any, i: number) => (
                  <div key={i} style={{ marginBottom: "1.5rem", padding: "1.5rem", background: "rgba(255,255,255,0.03)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <h3 style={{ color: "var(--primary)", marginBottom: "0.5rem", fontSize: "var(--text-xl)" }}>
                      {feature.title}
                    </h3>
                    <p className="text-secondary" style={{ fontSize: "var(--text-md)", lineHeight: "1.6" }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal className="case-study-section">
            <h2 className="case-study-section-title">Results</h2>
            <div className="case-study-results">
              {project.results.map((result, i) => (
                <div key={i} className="case-study-result-item">
                  <CheckCircle size={20} />
                  <span className="text-secondary">{result}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="case-study-section">
            <h2 className="case-study-section-title">Technologies Used</h2>
            <div className="tag-group">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag tag-accent" style={{ padding: "0.5rem 1rem", fontSize: "var(--text-sm)" }}>
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
          
          <div style={{ textAlign: "center", marginTop: "var(--space-4xl)" }}>
            <Link href="/contact" className="btn btn-primary btn-lg glow-pulse">
              Start a Similar Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
