import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="navbar-logo">
              <img src="/logo.png" alt="Flawlex Technologies" style={{ height: "45px", width: "auto", filter: "brightness(0) invert(1)" }} />
            </Link>
            <p>
              We deliver expert IT consulting, custom software development, and managed IT services to businesses across Ghana and beyond. Our passion for STEM education fuels our innovation.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>GH</span>
              </a>
              <a href="#" className="footer-social-link">
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>TW</span>
              </a>
              <a href="#" className="footer-social-link">
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>IN</span>
              </a>
              <a href="#" className="footer-social-link">
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>FB</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About Us</Link>
              <Link href="/services" className="footer-link">Services</Link>
              <Link href="/portfolio" className="footer-link">Portfolio</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Services</h4>
            <div className="footer-links">
              <Link href="/services" className="footer-link">Software Development</Link>
              <Link href="/services" className="footer-link">IT Consulting</Link>
              <Link href="/services" className="footer-link">Cybersecurity</Link>
              <Link href="/services" className="footer-link">Cloud Solutions</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-links">
              <span className="footer-link">+233 59 266 4865</span>
              <a href="mailto:info@kpandoanglicanstem.org" className="footer-link">
                info@kpandoanglicanstem.org
              </a>
              <span className="footer-link">Kpando, Volta Region, Ghana</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; 2024 Flawlex Technologies. All rights reserved.
          </div>
          <div className="footer-made-in">
            Made with ❤️ in Ghana 🇬🇭
          </div>
        </div>
      </div>
    </footer>
  );
}
