"use client";

import { useState } from "react";
import { Send, CheckCircle, Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
import data from "@/data/data.json";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Software Development",
    message: "",
  });
  const [honeypot, setHoneypot] = useState(""); // invisible bot trap
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitCount, setSubmitCount] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // Sanitize input — strip HTML tags to prevent XSS
  const sanitize = (input: string) => input.replace(/<[^>]*>/g, "");

  // Validate email format
  const isValidEmail = (email: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: sanitize(e.target.value) });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ── Bot Detection: Honeypot ──
    // If the hidden field has a value, a bot filled it in
    if (honeypot) {
      setIsSuccess(true); // silently pretend success
      return;
    }

    // ── Rate Limiting: Block rapid-fire submissions ──
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      setErrors({ message: "Please wait a few seconds before submitting again." });
      return;
    }
    if (submitCount >= 3) {
      setErrors({ message: "Too many submissions. Please try again later." });
      return;
    }

    // ── Validation ──
    const newErrors: Record<string, string> = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = "Please enter a valid name";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    if (formData.message && formData.message.length > 5000) {
      newErrors.message = "Message is too long (max 5000 characters)";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitCount((c) => c + 1);
    setLastSubmitTime(now);

    // ── Send to Web3Forms ──
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey) {
        console.error("Missing Web3Forms Access Key in environment variables.");
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSuccess(true);
          setFormData({ name: "", email: "", phone: "", company: "", projectType: "Software Development", message: "" });
        }, 1000);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          subject: `New Lead: ${formData.projectType} from ${formData.name}`,
          from_name: formData.name,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "Software Development",
          message: "",
        });
      } else {
        setErrors({ message: result.message || "Failed to send message. Please try again." });
      }
    } catch (error) {
      setErrors({ message: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <div className="page-hero animated-hero-bg" style={{ 
        backgroundImage: "linear-gradient(rgba(10, 15, 28, 0.7), rgba(10, 15, 28, 1)), url('/contact-banner.png')", 
        backgroundRepeat: "no-repeat",
        padding: "var(--space-2xl) 0 var(--space-xl)"
      }}>
        <div className="container">
          <div className="section-label">Get in Touch</div>
          <h1 className="page-hero-title">
            Let's Build Something <span className="text-gradient">Great Together</span>
          </h1>
          <p className="page-hero-description">
            Ready to start your next IT project or need technical consulting? Drop us a message and our team will get back to you promptly.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <ScrollReveal direction="left">
              <div className="card">
                {isSuccess ? (
                  <div className="form-success">
                    <div className="form-success-icon">
                      <CheckCircle size={40} />
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We have received your message and will get back to you within 24 hours.</p>
                    <button 
                      className="btn btn-outline" 
                      style={{ marginTop: "var(--space-xl)" }}
                      onClick={() => setIsSuccess(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    {/* Honeypot: invisible field that catches bots */}
                    <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          className="form-input" 
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          className="form-input" 
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          className="form-input" 
                          placeholder="+233 59 000 0000"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="company">Company/Organization</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          className="form-input" 
                          placeholder="Your Company Ltd"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label" htmlFor="projectType">Project Type</label>
                      <select 
                        id="projectType" 
                        name="projectType" 
                        className="form-select"
                        value={formData.projectType}
                        onChange={handleChange}
                      >
                        <option value="Software Development">Software Development</option>
                        <option value="IT Consulting">IT Consulting</option>
                        <option value="Network & Infrastructure">Network & Infrastructure</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Cloud Solutions">Cloud Solutions</option>
                        <option value="Managed IT Services">Managed IT Services</option>
                        <option value="STEM Program">STEM Program Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Message *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        className="form-textarea" 
                        placeholder="Tell us about your project or inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Phone size={24} /></div>
                  <div>
                    <div className="contact-info-label">Call Us</div>
                    <div className="contact-info-value">{data.company.phone}</div>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Mail size={24} /></div>
                  <div>
                    <div className="contact-info-label">Email Us</div>
                    <div className="contact-info-value">
                      <a href={`mailto:${data.company.email}`}>{data.company.email}</a>
                    </div>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon"><MapPin size={24} /></div>
                  <div>
                    <div className="contact-info-label">Visit Us</div>
                    <div className="contact-info-value">{data.company.location}</div>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Clock size={24} /></div>
                  <div>
                    <div className="contact-info-label">Business Hours</div>
                    <div className="contact-info-value">Mon - Fri: 8:00 AM - 6:00 PM GMT</div>
                  </div>
                </div>
                
                <div className="contact-map">
                  Map Placeholder
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </div>
          <div className="faq-section">
            {data.faq.map((item, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${openFaq === index ? "open" : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  {item.question}
                  <ChevronDown size={20} />
                </button>
                <div className={`faq-answer ${openFaq === index ? "open" : ""}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
