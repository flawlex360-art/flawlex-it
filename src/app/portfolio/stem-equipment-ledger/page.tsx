import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function STEMLedgerCaseStudy() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <Link href="/stem" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to STEM
          </Link>
          <div className="section-label" style={{ color: "var(--accent)", background: "rgba(201, 98, 42, 0.12)", borderColor: "rgba(201, 98, 42, 0.2)" }}>Case Study</div>
          <h1 className="page-hero-title" style={{ maxWidth: '800px' }}>
            Flawlex <span className="text-gradient-accent">STEM Equipment Ledger</span>
          </h1>
          <p className="page-hero-description" style={{ maxWidth: '800px' }}>
            A comprehensive district-wide mobile and desktop solution for managing, tracking, and distributing critical STEM and science laboratory equipment across schools in Ghana.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Main Article with Wrapping Text */}
          <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
            
            <ScrollReveal>
              <div 
                style={{ 
                  float: 'right', 
                  margin: '0 0 2rem 2.5rem', 
                  width: '300px', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  border: '8px solid #1a1a1a'
                }}
              >
                <img src="/portfolio/stem-ledger/mobile1.jpg" alt="District Master Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>The Challenge</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                In many educational districts, distributing and tracking expensive STEM and science equipment is a logistical nightmare. Schools frequently borrow items like microscopes, conical flasks, and projectors from one another or from a central district repository. However, keeping track of where these items are, who approved the transfer, and the current condition of the equipment was entirely paper-based.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                This lack of visibility led to misplaced items, hoarding of broken equipment, and unequal access to crucial learning tools. We needed a digital transformation—a unified system that could give district administrators a top-down view of all assets while empowering individual schools to easily manage their inventory and request items from neighboring schools.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div 
                style={{ 
                  float: 'left', 
                  margin: '1rem 2.5rem 2rem 0', 
                  width: '300px', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  border: '8px solid #1a1a1a'
                }}
              >
                <img src="/portfolio/stem-ledger/mobile2.jpg" alt="Manage Schools" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', marginTop: '3rem', color: 'var(--text-primary)' }}>A District-Wide Solution</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We built the Flawlex STEM Ledger to act as the central nervous system for educational asset management. The platform features a <strong>District Master Dashboard</strong> that provides a real-time, birds-eye view of the total value of equipment across the entire district. Administrators can instantly see which schools have the most assets and identify broken or lost items that need replacing before the next academic term.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                The mobile companion app was designed specifically for on-the-go teachers and administrators. Using the <em>Manage Schools</em> module, district officials can easily onboard new community and STEM schools, generate secure credentials, and import existing asset lists via CSV. This completely removes the friction of transitioning from paper ledgers to a digital system.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div 
                style={{ 
                  float: 'right', 
                  margin: '1rem 0 2rem 2.5rem', 
                  width: '300px', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  border: '8px solid #1a1a1a'
                }}
              >
                <img src="/portfolio/stem-ledger/mobile3.jpg" alt="School Inventory View" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', marginTop: '3rem', color: 'var(--text-primary)' }}>School-Level Granularity</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                At the individual school level, the app acts as a powerful localized inventory tracker. Headmasters and science teachers can log in to view their specific dashboard, breaking down their total assets into clear categories: Science, IT, Mathematics, and Engineering.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                The interface immediately flags low stock alerts and highlights items that are broken or under maintenance. By color-coding these statuses, teachers can quickly assess if they have the required 92 line items ready for tomorrow's chemistry practical, or if they need to initiate a borrowing request. The clean, card-based UI ensures that even those with minimal technical training can manage complex inventories effortlessly.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div 
                style={{ 
                  float: 'left', 
                  margin: '1rem 2.5rem 2rem 0', 
                  width: '300px', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  border: '8px solid #1a1a1a'
                }}
              >
                <img src="/portfolio/stem-ledger/mobile4.jpg" alt="District Approvals" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', marginTop: '3rem', color: 'var(--text-primary)' }}>Streamlining Borrowing Requests</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                One of the most revolutionary features of the ledger is the inter-school borrowing system. When Kpando Gabi MA JHS needs a projector and a laptop for a special presentation, they no longer have to make a dozen phone calls. They simply submit a request through the app to neighboring Abanu MA JHS.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                The <strong>District Approvals</strong> hub allows authorities to monitor and review all borrowing requests district-wide. They can track pending reviews, view approved transfers, and monitor returned items. This creates a transparent, accountable chain of custody. If a piece of equipment goes missing, the system knows exactly which school had it last and when it was supposed to be returned.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div 
                style={{ 
                  float: 'right', 
                  margin: '1rem 0 2rem 2.5rem', 
                  width: '300px', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  border: '8px solid #1a1a1a'
                }}
              >
                <img src="/portfolio/stem-ledger/mobile5.jpg" alt="Review Borrow Request" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', marginTop: '3rem', color: 'var(--text-primary)' }}>Secure and Accountable</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Every borrowing request is detailed and requires strict verification. The app captures the exact date duration (e.g., 09/07/2026 - 16/07/2026), the location preference where the items will be used, and a line-item breakdown of the requested materials (Conical Flasks, Pipettes, Evaporating Dishes). 
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Administrators can review these detailed requests and click a simple "Approve" or "Disapprove" button. By digitizing this workflow, the STEM Equipment Ledger ensures that valuable educational resources are fully utilized across the district rather than sitting idle in a single cupboard, maximizing the impact of every cedi invested in STEM education.
              </p>
            </ScrollReveal>

            {/* Clearfix to ensure the container stretches past floating elements */}
            <div style={{ clear: 'both' }}></div>

          </div>
        </div>
      </section>

      <section className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: "center" }}>
            <h2 className="section-title">Key <span className="text-gradient-accent">Features</span></h2>
          </div>
          <div className="programs-grid">
            {[
              { title: "District-Wide Tracking", desc: "Top-down visibility of all assets and their financial value across multiple schools." },
              { title: "Inter-School Borrowing", desc: "Digital request and approval workflow for sharing equipment between institutions." },
              { title: "Real-Time Alerts", desc: "Automated flagging for low stock, broken items, or overdue borrowed equipment." },
              { title: "CSV Import/Export", desc: "Seamless migration of existing paper ledgers into the digital database." }
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <CheckCircle style={{ color: 'var(--accent)' }} size={24} />
                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{feature.title}</h3>
                  </div>
                  <p className="text-secondary">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
