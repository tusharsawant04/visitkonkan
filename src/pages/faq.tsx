"use client";
import React, { useState } from "react";
import Layout from "../components/layout";
const faqs = [
  {
    id: 1,
    icon: "🌊",
    question: "What is Visit Konkan?",
    answer:
      "Visit Konkan is a digital platform that helps travelers explore the Konkan region — from scenic beaches to local food, culture, and hidden spots. We also help local businesses connect with visitors.",
  },
  {
    id: 2,
    icon: "🏪",
    question: "How can I list my business on Visit Konkan?",
    answer:
      'You can use the "List Your Business" page to submit details about your homestay, restaurant, or tour. Once our team reviews your submission, your listing will appear on our site.',
  },
  {
    id: 3,
    icon: "💰",
    question: "Is there any cost to list my business?",
    answer:
      "Currently, listing your business is free while we build the platform. In the future, we may offer premium plans with added features.",
  },
  {
    id: 4,
    icon: "🎫",
    question: "Can I book hotels or tours directly from Visit Konkan?",
    answer:
      "We're working on adding direct booking features. For now, you can contact listed businesses directly through their details on our site.",
  },
  {
    id: 5,
    icon: "📬",
    question: "How can I contact the Visit Konkan team?",
    answer: null, // special render
  },
  {
    id: 6,
    icon: "✅",
    question: "Do you verify listed businesses?",
    answer:
      "Yes, all listings are reviewed before being published to ensure authenticity and accuracy. We aim to promote only genuine local businesses from the Konkan region.",
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --ocean: #0a7ea5;
          --ocean-light: #d6f0fb;
          --sand: #f5efe6;
          --sand-dark: #e8ddd0;
          --text: #1e2a3a;
          --text-muted: #6b7f94;
          --white: #ffffff;
          --accent: #e8734a;
          --accent-light: #fde8df;
        }

        .faq-page {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: var(--sand);
          color: var(--text);
          position: relative;
          overflow: hidden;
        }

        /* Decorative background blobs */
        .faq-page::before {
          content: '';
          position: fixed;
          top: -180px;
          right: -180px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(10,126,165,0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .faq-page::after {
          content: '';
          position: fixed;
          bottom: -200px;
          left: -150px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(232,115,74,0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        /* Wave SVG divider */
        .wave-divider {
          width: 100%;
          display: block;
          line-height: 0;
        }

        /* Hero section */
        .faq-hero {
          position: relative;
          z-index: 1;
          background: linear-gradient(135deg, #0a7ea5 0%, #0d5f7e 50%, #1a3a4a 100%);
          padding: 100px 24px 0;
          text-align: center;
        }
        .faq-hero .badge-pill {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.18);
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 8px 20px;
          border-radius: 40px;
          margin-bottom: 28px;
        }
        .faq-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
          line-height: 1.2;
        }
        .faq-hero h1 span {
          color: #7dd3ec;
        }
        .faq-hero p {
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          max-width: 520px;
          margin: 0 auto 48px;
          line-height: 1.6;
        }

        /* FAQ Body */
        .faq-body {
          position: relative;
          z-index: 1;
          background: var(--sand);
          padding: 60px 24px 80px;
        }
        .faq-container {
          max-width: 740px;
          margin: 0 auto;
        }

        /* Accordion Item */
        .faq-item {
          background: var(--white);
          border-radius: 16px;
          margin-bottom: 12px;
          border: 1px solid transparent;
          box-shadow: 0 2px 12px rgba(26,58,74,0.06);
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
        }
        .faq-item:hover {
          border-color: var(--ocean-light);
          box-shadow: 0 4px 20px rgba(10,126,165,0.1);
          transform: translateY(-1px);
        }
        .faq-item.open {
          border-color: var(--ocean-light);
          box-shadow: 0 6px 24px rgba(10,126,165,0.13);
        }

        /* Trigger row */
        .faq-trigger {
          display: flex;
          align-items: center;
          width: 100%;
          background: none;
          border: none;
          padding: 22px 24px;
          cursor: pointer;
          text-align: left;
          gap: 16px;
        }
        .faq-trigger .icon-wrap {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: var(--ocean-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: background 0.3s;
        }
        .faq-item.open .faq-trigger .icon-wrap {
          background: linear-gradient(135deg, #b3e5f7, #7dd3ec);
        }
        .faq-trigger .question-text {
          flex: 1;
          font-size: 15.5px;
          font-weight: 600;
          color: var(--text);
          line-height: 1.4;
        }
        .faq-trigger .chevron {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--sand);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(.4,0,.2,1), background 0.3s;
        }
        .faq-item.open .faq-trigger .chevron {
          transform: rotate(180deg);
          background: var(--ocean-light);
        }
        .faq-trigger .chevron svg {
          width: 14px;
          height: 14px;
          stroke: var(--ocean);
          fill: none;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* Answer panel */
        .faq-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(.4,0,.2,1);
        }
        .faq-item.open .faq-panel {
          max-height: 200px;
        }
        .faq-panel-inner {
          padding: 0 24px 24px 82px;
          font-size: 14.5px;
          color: var(--text-muted);
          line-height: 1.7;
        }
        .faq-panel-inner a {
          color: var(--ocean);
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1.5px solid var(--ocean-light);
          transition: border-color 0.2s;
        }
        .faq-panel-inner a:hover {
          border-color: var(--ocean);
        }

        /* Footer CTA */
        .faq-footer {
          text-align: center;
          margin-top: 48px;
          padding: 36px 24px;
          background: linear-gradient(135deg, var(--ocean-light), var(--accent-light));
          border-radius: 20px;
        }
        .faq-footer p {
          font-size: 15px;
          color: var(--text);
          margin: 0 0 18px;
          font-weight: 500;
        }
        .faq-footer a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--ocean), #0d5f7e);
          color: #fff;
          text-decoration: none;
          padding: 12px 28px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.3px;
          box-shadow: 0 4px 16px rgba(10,126,165,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .faq-footer a:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(10,126,165,0.4);
        }
      `}</style>

      <div className="faq-page">
        {/* Hero */}
        <div className="faq-hero">
          <div className="badge-pill">Help Center</div>
          <h1>Got any <span>questions?</span></h1>
          <p>
            Everything you need to know about Visit Konkan — exploring the coast, listing your business, and more.
          </p>
        </div>

        {/* Wave */}
        <svg className="wave-divider" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ background: 'linear-gradient(135deg, #0a7ea5 0%, #0d5f7e 50%, #1a3a4a 100%)', display:'block' }}>
          <path fill="#f5efe6" d="M0,50 C360,100 720,-20 1080,50 C1260,80 1380,40 1440,50 L1440,80 L0,80 Z" />
        </svg>

        {/* Body */}
        <div className="faq-body">
          <div className="faq-container">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className={`faq-item${isOpen ? " open" : ""}`}>
                  <button className="faq-trigger" onClick={() => toggle(faq.id)} aria-expanded={isOpen}>
                    <span className="icon-wrap">{faq.icon}</span>
                    <span className="question-text">{faq.question}</span>
                    <span className="chevron">
                      <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
                    </span>
                  </button>
                  <div className="faq-panel">
                    <div className="faq-panel-inner">
                      {faq.id === 5 ? (
                        <>
                          You can reach us anytime at{" "}
                          <a href="mailto:konkanvisit@gmail.com">konkanvisit@gmail.com</a>
                          . We'll be happy to assist you!
                        </>
                      ) : (
                        faq.answer
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Footer CTA */}
            <div className="faq-footer">
              <p>Still can't find what you're looking for?</p>
              <a href="mailto:konkanvisit@gmail.com">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}