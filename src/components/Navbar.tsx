"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "STEM", href: "/stem" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/logo.png" alt="Flawlex Technologies" style={{ height: "45px", width: "auto", maxHeight: "none", filter: "brightness(0) invert(1)" }} />
          </Link>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`navbar-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="navbar-cta desktop-only">
            <Link href="/contact" className="btn btn-primary glow-pulse">
              Get a Quote
            </Link>
          </div>

          <div
            className={`navbar-mobile-toggle ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div
        className={`navbar-mobile-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={closeMobileMenu}
      ></div>

      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`navbar-link ${pathname === link.href ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            {link.name}
          </Link>
        ))}
        <div className="navbar-cta" style={{ marginTop: "1rem", marginLeft: "0" }}>
          <Link href="/contact" className="btn btn-primary" onClick={closeMobileMenu}>
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
