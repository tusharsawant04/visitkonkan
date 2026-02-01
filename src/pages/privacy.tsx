"use client";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout";

const sections = [
  {
    id: "collect",
    icon: "📦",
    title: "Information We Collect",
    paragraphs: [
      "We gather only what's necessary to deliver a great experience. When you interact with Visit Konkan, we may collect the following:",
    ],
    items: [
      {
        label: "Personal Data",
        desc: "Name, email address, and messages you submit through our contact or inquiry forms.",
      },
      {
        label: "Non-Personal Data",
        desc: "Cookies, browser analytics, device info, and IP addresses to help us understand site usage.",
      },
    ],
  },
  {
    id: "use",
    icon: "🎯",
    title: "How We Use Your Information",
    paragraphs: [
      "Every piece of data we collect serves a clear purpose. We never sell or trade your information.",
    ],
    items: [
      {
        label: "Respond & Assist",
        desc: "To answer your inquiries and deliver the services you've requested promptly.",
      },
      {
        label: "Improve Experience",
        desc: "To refine our platform, fix issues, and make your next visit even better.",
      },
      {
        label: "Occasional Updates",
        desc: "To send travel tips or notifications — only if you've opted in.",
      },
    ],
  },
  {
    id: "protection",
    icon: "🔐",
    title: "Data Protection",
    paragraphs: [
      "We take the security of your data seriously. Industry-standard encryption and security protocols are in place to protect your personal information from unauthorized access, alteration, or disclosure at every layer of our infrastructure.",
    ],
  },
  {
    id: "third-party",
    icon: "🔗",
    title: "Third-Party Links",
    paragraphs: [
      "Our website may link to external sites for travel bookings, maps, or social media. Visit Konkan is not responsible for the privacy practices of these third-party sites. We encourage you to review their individual policies before sharing any information.",
    ],
  },
  {
    id: "changes",
    icon: "📋",
    title: "Changes to This Policy",
    paragraphs: [
      "Our Privacy Policy may evolve as our services grow. Any updates will be posted right here on this page. We recommend checking back periodically so you stay informed.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --ocean: #0a3d62;
          --sand: #f5efe6;
          --coral: #e07a5f;
          --seafoam: #81b29a;
          --sky: #3d405b;
          --light: #f2cc8f;
          --muted: #6b7280;
        }

        .pp-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--sand);
          min-height: 100vh;
          color: var(--ocean);
          overflow-x: hidden;
        }

        /* Hero */
        .pp-hero {
          position: relative;
          min-height: 320px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 80px 24px 60px;
          background: linear-gradient(145deg, var(--ocean) 0%, #1a5276 50%, #2e86ab 100%);
          overflow: hidden;
        }
        .pp-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(129,178,154,0.25) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 60%, rgba(224,122,95,0.15) 0%, transparent 70%);
        }
        .pp-hero-wave {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 80px;
        }
        .pp-hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 680px;
        }
        .pp-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 40px;
          padding: 8px 20px;
          color: rgba(255,255,255,0.85);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
        }
        .pp-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin: 0 0 16px;
        }
        .pp-hero p {
          color: rgba(255,255,255,0.7);
          font-size: 15px;
          font-weight: 300;
          line-height: 1.6;
          margin: 0;
        }

        /* Floating date tag */
        .pp-date-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 6px;
          padding: 5px 12px;
          color: rgba(255,255,255,0.55);
          font-size: 12px;
          margin-top: 20px;
        }

        /* Body */
        .pp-body {
          max-width: 760px;
          margin: 0 auto;
          padding: 56px 24px 100px;
        }

        /* Section Card */
        .pp-card {
          background: #fff;
          border-radius: 18px;
          border: 1px solid rgba(10,61,98,0.07);
          margin-bottom: 20px;
          overflow: hidden;
          transition: box-shadow 0.3s ease, transform 0.25s ease;
        }
        .pp-card:hover {
          box-shadow: 0 8px 40px rgba(10,61,98,0.08);
          transform: translateY(-2px);
        }

        /* Card Header (clickable) */
        .pp-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px 28px;
          cursor: pointer;
          user-select: none;
          transition: background 0.2s;
        }
        .pp-card-header:hover {
          background: rgba(129,178,154,0.04);
        }
        .pp-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .pp-card-header h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--ocean);
          margin: 0;
          flex: 1;
        }
        .pp-chevron {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--sand);
          transition: transform 0.3s ease, background 0.2s;
          flex-shrink: 0;
        }
        .pp-chevron.open {
          transform: rotate(180deg);
          background: var(--ocean);
        }
        .pp-chevron svg {
          width: 12px;
          height: 12px;
          stroke: var(--ocean);
          fill: none;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke 0.2s;
        }
        .pp-chevron.open svg {
          stroke: #fff;
        }

        /* Card Body */
        .pp-card-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(.4,0,.2,1), padding 0.3s ease;
        }
        .pp-card-body.open {
          max-height: 600px;
          padding-bottom: 28px;
        }
        .pp-card-body-inner {
          padding: 0 28px;
        }
        .pp-card-body p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.75;
          margin: 0 0 18px;
          font-weight: 300;
        }

        /* Item list inside cards */
        .pp-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 14px 18px;
          border-radius: 12px;
          background: linear-gradient(135deg, #fafafa, var(--sand));
          margin-bottom: 10px;
          border: 1px solid rgba(10,61,98,0.05);
        }
        .pp-item:last-child { margin-bottom: 0; }
        .pp-item-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--seafoam);
          flex-shrink: 0;
          margin-top: 7px;
        }
        .pp-item strong {
          display: block;
          color: var(--ocean);
          font-size: 13.5px;
          font-weight: 500;
          margin-bottom: 3px;
        }
        .pp-item span {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.6;
          font-weight: 300;
        }

        /* Footer note */
        .pp-footer-note {
          text-align: center;
          margin-top: 48px;
          padding: 28px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(10,61,98,0.04), rgba(129,178,154,0.08));
          border: 1px solid rgba(10,61,98,0.06);
        }
        .pp-footer-note p {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
          font-weight: 300;
        }
        .pp-footer-note strong {
          color: var(--ocean);
        }

        /* Responsive */
        @media (max-width: 600px) {
          .pp-hero { min-height: 260px; padding: 60px 20px 50px; }
          .pp-card-header { padding: 20px; }
          .pp-card-body-inner { padding: 0 20px; }
          .pp-card-body.open { padding-bottom: 20px; }
        }
      `}</style>

      <div className="pp-root">
        {/* Hero */}
        <div className="pp-hero">
          <svg className="pp-hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path
              d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
              fill="#f5efe6"
            />
          </svg>
          <div className="pp-hero-content">
            <div className="pp-hero-badge">
              <span>🛡️</span> Privacy &amp; Data Protection
            </div>
            <h1>Your Privacy,<br />Our Responsibility</h1>
            <p>
              We are committed to protecting your personal information with transparency,
              care, and industry-leading security.
            </p>
            <div className="pp-date-tag">
              <span>📅</span> Last updated: January 2025
            </div>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="pp-body">
          {sections.map((section) => {
            const isOpen = activeSection === section.id;
            return (
              <div key={section.id} className="pp-card">
                <div
                  className="pp-card-header"
                  onClick={() =>
                    setActiveSection(isOpen ? null : section.id)
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveSection(isOpen ? null : section.id);
                    }
                  }}
                >
                  <div className="pp-card-icon">{section.icon}</div>
                  <h3>{section.title}</h3>
                  <div className={`pp-chevron ${isOpen ? "open" : ""}`}>
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,4 6,8 10,4" />
                    </svg>
                  </div>
                </div>

                <div className={`pp-card-body ${isOpen ? "open" : ""}`}>
                  <div className="pp-card-body-inner">
                    {section.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {section.items &&
                      section.items.map((item, i) => (
                        <div key={i} className="pp-item">
                          <div className="pp-item-dot" />
                          <div>
                            <strong>{item.label}</strong>
                            <span>{item.desc}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Footer Note */}
          <div className="pp-footer-note">
            <p>
              Have questions about how we handle your data? Reach out to us at{" "}
              <strong>privacy@visitkonkan.com</strong> — we're happy to help. By continuing to use
              Visit Konkan, you agree to the terms outlined in this policy.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}