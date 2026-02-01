"use client";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [bubbles, setBubbles] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8,
      size: 8 + Math.random() * 40,
    }));
    setBubbles(generated);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4000);
  };

  return (
    <>
    <Layout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .contact-page {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: linear-gradient(180deg, #0a1628 0%, #0f2847 30%, #153d6b 60%, #1a5276 100%);
          position: relative;
          overflow: hidden;
          color: #fff;
        }

        /* Deep ocean ambient background */
        .ocean-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 50% at 20% 80%, rgba(20, 100, 160, 0.3) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(15, 70, 130, 0.25) 0%, transparent 55%),
            radial-gradient(ellipse 50% 30% at 50% 30%, rgba(10, 50, 100, 0.2) 0%, transparent 60%);
          z-index: 0;
        }

        /* Floating bubbles */
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(100, 200, 255, 0.15), rgba(20, 80, 150, 0.05));
          border: 1px solid rgba(100, 200, 255, 0.1);
          animation: floatUp linear infinite;
          z-index: 1;
        }
        @keyframes floatUp {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-120px) scale(1); opacity: 0; }
        }

        /* Subtle wave at bottom */
        .wave-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 160px;
          z-index: 1;
          overflow: hidden;
        }
        .wave {
          position: absolute;
          bottom: 0;
          left: -50%;
          width: 200%;
          height: 100%;
        }
        .wave svg { width: 100%; height: 100%; }
        .wave--1 { animation: wave 8s linear infinite; opacity: 0.4; }
        .wave--2 { animation: wave 12s linear infinite reverse; opacity: 0.25; transform: translateY(12px); }
        .wave--3 { animation: wave 16s linear infinite; opacity: 0.15; transform: translateY(24px); }
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }

        /* Main layout */
        .contact-wrapper {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px 100px;
        }

        /* Header */
        .contact-header { text-align: center; margin-bottom: 48px; }
        .contact-header .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(130, 210, 255, 0.7);
          margin-bottom: 16px;
        }
        .contact-header .eyebrow .line {
          width: 32px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(130, 210, 255, 0.5));
        }
        .contact-header .eyebrow .line--right {
          background: linear-gradient(270deg, transparent, rgba(130, 210, 255, 0.5));
        }
        .contact-header h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 1.2;
          background: linear-gradient(135deg, #ffffff 0%, #a8dff0 50%, #6bb8d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-header p {
          margin-top: 14px;
          font-size: 15px;
          font-weight: 300;
          color: rgba(180, 215, 240, 0.7);
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        /* Contact grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 40px;
          width: 100%;
          max-width: 980px;
          align-items: start;
        }

        /* Info cards (left) */
        .info-panel { display: flex; flex-direction: column; gap: 20px; }
        .info-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 28px 24px;
          backdrop-filter: blur(8px);
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }
        .info-card:hover {
          transform: translateY(-3px);
          border-color: rgba(130, 210, 255, 0.25);
          background: rgba(255, 255, 255, 0.07);
        }
        .info-card .icon-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 10px;
        }
        .info-card .icon-box {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(100, 200, 255, 0.15), rgba(40, 120, 200, 0.1));
          border: 1px solid rgba(130, 210, 255, 0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
        }
        .info-card .info-title {
          font-size: 13px;
          font-weight: 500;
          color: rgba(130, 210, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .info-card .info-value {
          font-size: 15px;
          font-weight: 300;
          color: rgba(200, 225, 245, 0.85);
          line-height: 1.6;
          padding-left: 60px;
        }

        /* Konkan highlight card */
        .highlight-card {
          background: linear-gradient(135deg, rgba(20, 80, 140, 0.4), rgba(10, 50, 100, 0.3));
          border: 1px solid rgba(130, 210, 255, 0.18);
          border-radius: 18px;
          padding: 28px 24px;
          backdrop-filter: blur(8px);
        }
        .highlight-card .highlight-title {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 600;
          color: #a8dff0;
          margin-bottom: 10px;
        }
        .highlight-card p {
          font-size: 13.5px;
          font-weight: 300;
          color: rgba(180, 215, 240, 0.65);
          line-height: 1.75;
        }
        .highlight-card .tags {
          display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px;
        }
        .highlight-card .tag {
          font-size: 11.5px;
          padding: 5px 12px;
          border-radius: 20px;
          background: rgba(130, 210, 255, 0.08);
          border: 1px solid rgba(130, 210, 255, 0.18);
          color: rgba(130, 210, 255, 0.75);
          letter-spacing: 0.5px;
        }

        /* Form panel (right) */
        .form-panel {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px 36px;
          backdrop-filter: blur(12px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
        }
        .form-panel .form-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 6px;
          color: #fff;
        }
        .form-panel .form-subtitle {
          font-size: 13px;
          color: rgba(180, 215, 240, 0.55);
          font-weight: 300;
          margin-bottom: 32px;
        }

        /* Input groups */
        .input-group-custom { margin-bottom: 22px; position: relative; }
        .input-group-custom label {
          display: block;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: rgba(130, 210, 255, 0.6);
          margin-bottom: 8px;
          transition: color 0.3s;
        }
        .input-group-custom.active label { color: rgba(130, 210, 255, 0.95); }

        .input-group-custom input,
        .input-group-custom textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 14px 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #fff;
          outline: none;
          transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }
        .input-group-custom input::placeholder,
        .input-group-custom textarea::placeholder {
          color: rgba(180, 215, 240, 0.3);
        }
        .input-group-custom input:focus,
        .input-group-custom textarea:focus {
          border-color: rgba(130, 210, 255, 0.4);
          background: rgba(255, 255, 255, 0.09);
          box-shadow: 0 0 0 3px rgba(130, 210, 255, 0.1);
        }
        .input-group-custom textarea {
          resize: vertical;
          min-height: 120px;
        }

        /* Two-col row */
        .row-two { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

        /* Submit button */
        .submit-btn {
          width: 100%;
          padding: 15px 24px;
          border: none;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #0a1628;
          background: linear-gradient(135deg, #6dd5fa, #4fc3f7, #81d4fa);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          margin-top: 8px;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(100, 200, 255, 0.3);
        }
        .submit-btn:active { transform: translateY(0); }
        .submit-btn .btn-shine {
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: shine 2.5s infinite;
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        /* Success overlay */
        .success-overlay {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          background: rgba(10, 22, 40, 0.92);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .success-overlay .check-circle {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4fc3f7, #6dd5fa);
          display: flex; align-items: center; justify-content: center;
          font-size: 30px;
          color: #0a1628;
          margin-bottom: 20px;
          animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes popIn {
          0% { transform: scale(0); }
          100% { transform: scale(1); }
        }
        .success-overlay h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          color: #fff;
          margin-bottom: 6px;
        }
        .success-overlay p {
          font-size: 13px;
          color: rgba(180, 215, 240, 0.6);
          font-weight: 300;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 28px; }
          .row-two { grid-template-columns: 1fr; }
          .form-panel { padding: 32px 24px; }
          .contact-wrapper { padding: 50px 16px 100px; }
        }
      `}</style>

      <div className="contact-page">
        <div className="ocean-bg" />

        {/* Bubbles */}
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble"
            style={{
              left: `${b.left}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}

        {/* Waves */}
        <div className="wave-container">
          <div className="wave wave--1">
            <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
              <path d="M0,80 C240,140 480,20 720,80 C960,140 1200,20 1440,80 L1440,160 L0,160 Z" fill="rgba(10,30,60,0.5)" />
            </svg>
          </div>
          <div className="wave wave--2">
            <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
              <path d="M0,60 C200,120 440,30 720,70 C1000,110 1240,40 1440,60 L1440,160 L0,160 Z" fill="rgba(8,25,50,0.4)" />
            </svg>
          </div>
          <div className="wave wave--3">
            <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
              <path d="M0,100 C300,50 600,130 720,90 C840,50 1100,120 1440,100 L1440,160 L0,160 Z" fill="rgba(6,20,45,0.3)" />
            </svg>
          </div>
        </div>

        <div className="contact-wrapper">
          {/* Header */}
          <div className="contact-header">
            <div className="eyebrow">
              <span className="line" />
              Get In Touch
              <span className="line line--right" />
            </div>
            <h1>We'd Love to Hear<br />From You</h1>
            <p>Planning your perfect Konkan escape? Our team is here to help you craft an unforgettable coastal journey.</p>
          </div>

          {/* Grid */}
          <div className="contact-grid">
            {/* Left — info */}
            <div className="info-panel">
              {/* <div className="info-card">
                <div className="icon-row">
                  <div className="icon-box">📍</div>
                  <span className="info-title">Visit Us</span>
                </div>
                <div className="info-value">123 Coastal Road, Panaji<br />Goa – 403 001, India</div>
              </div> */}

              <div className="info-card">
                <div className="icon-row">
                  <div className="icon-box">📞</div>
                  <span className="info-title">Call Us</span>
                </div>
                <div className="info-value">+91 98765 43210<br />Mon – Sat, 9am – 6pm IST</div>
              </div>

              <div className="info-card">
                <div className="icon-row">
                  <div className="icon-box">✉️</div>
                  <span className="info-title">Email Us</span>
                </div>
                <div className="info-value">hello@visitkonkan.com<br />We reply within 24 hours</div>
              </div>

              <div className="highlight-card">
                <div className="highlight-title">🌊 Why Konkan?</div>
                <p>Discover pristine beaches, ancient forts, lush Western Ghats, and authentic coastal cuisine — all along India's most scenic coastline.</p>
                <div className="tags">
                  <span className="tag">🏖️ Pristine Beaches</span>
                  <span className="tag">🏰 Historic Forts</span>
                  <span className="tag">🌿 Lush Forests</span>
                  <span className="tag">🍛 Local Cuisine</span>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="form-panel" style={{ position: "relative" }}>
              {submitted && (
                <div className="success-overlay">
                  <div className="check-circle">✓</div>
                  <h3>Message Sent!</h3>
                  <p>We'll get back to you shortly.</p>
                </div>
              )}

              <div className="form-title">Send a Message</div>
              <div className="form-subtitle">Fill in the details below and we'll be in touch soon.</div>

              <form onSubmit={handleSubmit}>
                <div className="row-two">
                  <div className={`input-group-custom ${focused === "name" ? "active" : ""}`}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className={`input-group-custom ${focused === "phone" ? "active" : ""}`}>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className={`input-group-custom ${focused === "email" ? "active" : ""}`}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className={`input-group-custom ${focused === "message" ? "active" : ""}`}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell us about your dream Konkan trip..."
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  <span className="btn-shine" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}