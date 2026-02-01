"use client";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/layout";
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --ocean: #0a3d62;
    --sand: #e8dfd0;
    --coral: #e07a5f;
    --seafoam: #81b29a;
    --cream: #f4f0eb;
    --dark: #1a1a1a;
    --muted: #6b6b6b;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  .about-root {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--dark);
    overflow-x: hidden;
  }

  /* ─── HERO ─── */
  .hero {
    position: relative;
    height: 100vh;
    min-height: 600px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0 6vw 10vw;
    overflow: hidden;
  }
  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(160deg, rgba(10,61,98,0.7) 0%, rgba(10,61,98,0.3) 50%, transparent 100%),
      url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80');
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease;
  }
  .hero:hover .hero-bg { transform: scale(1.02); }

  .hero-overlay-grain {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    opacity: 0.4;
    pointer-events: none;
  }
  .hero-content {
    position: relative;
    z-index: 2;
    color: #fff;
    max-width: 680px;
  }
  .hero-tag {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--seafoam);
    margin-bottom: 18px;
    position: relative;
    padding-left: 40px;
  }
  .hero-tag::before {
    content: '';
    position: absolute;
    left: 0; top: 50%;
    width: 28px; height: 1px;
    background: var(--seafoam);
  }
  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 6vw, 5rem);
    line-height: 1.1;
    font-weight: 700;
    margin-bottom: 24px;
    opacity: 0;
    transform: translateY(40px);
    animation: fadeUp 1s cubic-bezier(.22,1,.36,1) 0.3s forwards;
  }
  .hero h1 em {
    font-style: italic;
    color: var(--coral);
  }
  .hero p {
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255,255,255,0.75);
    max-width: 480px;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 1s cubic-bezier(.22,1,.36,1) 0.55s forwards;
  }
  .scroll-hint {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,0.5);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .scroll-hint .line {
    width: 1px; height: 40px;
    background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
    animation: scrollPulse 2s infinite;
  }

  /* ─── STATS STRIP ─── */
  .stats-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: var(--ocean);
    color: #fff;
  }
  .stat-item {
    padding: 48px 32px;
    text-align: center;
    border-right: 1px solid rgba(255,255,255,0.08);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.7s cubic-bezier(.22,1,.36,1);
  }
  .stat-item.visible { opacity: 1; transform: translateY(0); }
  .stat-item:last-child { border-right: none; }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem;
    font-weight: 700;
    color: var(--coral);
    line-height: 1;
    margin-bottom: 8px;
  }
  .stat-label {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: rgba(255,255,255,0.5);
    font-weight: 400;
  }

  /* ─── STORY SECTION ─── */
  .story {
    padding: 120px 6vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  .story-visual {
    position: relative;
  }
  .story-img {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    border-radius: 24px;
    display: block;
  }
  .story-img-accent {
    position: absolute;
    bottom: -24px;
    right: -24px;
    width: 60%;
    aspect-ratio: 1;
    border-radius: 20px;
    background: var(--seafoam);
    opacity: 0.35;
    z-index: -1;
  }
  .story-text .section-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--coral);
    margin-bottom: 16px;
    padding-left: 36px;
    position: relative;
  }
  .story-text .section-tag::before {
    content: '';
    position: absolute;
    left: 0; top: 50%;
    width: 24px; height: 1.5px;
    background: var(--coral);
  }
  .story-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    line-height: 1.25;
    font-weight: 700;
    color: var(--ocean);
    margin-bottom: 24px;
  }
  .story-text p {
    font-size: 0.95rem;
    line-height: 1.85;
    color: var(--muted);
    font-weight: 300;
    margin-bottom: 16px;
  }
  .story-text .quote-block {
    border-left: 3px solid var(--coral);
    padding: 16px 20px;
    margin: 28px 0;
    background: rgba(224,122,95,0.06);
    border-radius: 0 12px 12px 0;
  }
  .story-text .quote-block p {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.05rem;
    color: var(--ocean);
    margin-bottom: 0;
  }

  /* ─── MISSION GRID ─── */
  .mission-section {
    padding: 100px 6vw;
    background: var(--ocean);
    position: relative;
    overflow: hidden;
  }
  .mission-section::before {
    content: '';
    position: absolute;
    top: -120px; right: -120px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(129,178,154,0.15) 0%, transparent 70%);
    pointer-events: none;
  }
  .mission-header {
    text-align: center;
    margin-bottom: 70px;
    position: relative;
    z-index: 1;
  }
  .mission-header .section-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--seafoam);
    margin-bottom: 16px;
  }
  .mission-header h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: #fff;
    font-weight: 700;
  }
  .mission-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .mission-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    padding: 40px 32px;
    backdrop-filter: blur(4px);
    transition: transform 0.4s cubic-bezier(.22,1,.36,1), background 0.4s;
    opacity: 0;
    transform: translateY(30px);
    transition-property: opacity, transform, background;
  }
  .mission-card.visible { opacity: 1; transform: translateY(0); }
  .mission-card:hover {
    transform: translateY(-6px);
    background: rgba(255,255,255,0.09);
  }
  .mission-icon {
    width: 52px; height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 22px;
  }
  .icon-coral { background: rgba(224,122,95,0.2); }
  .icon-seafoam { background: rgba(129,178,154,0.2); }
  .icon-sand { background: rgba(232,223,208,0.15); }
  .mission-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 12px;
    font-weight: 600;
  }
  .mission-card p {
    font-size: 0.85rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.45);
    font-weight: 300;
  }

  /* ─── TEAM / JOIN STRIP ─── */
  .join-section {
    padding: 120px 6vw;
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 80px;
    align-items: center;
  }
  .join-text .section-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--coral);
    margin-bottom: 16px;
    padding-left: 36px;
    position: relative;
  }
  .join-text .section-tag::before {
    content: '';
    position: absolute;
    left: 0; top: 50%;
    width: 24px; height: 1.5px;
    background: var(--coral);
  }
  .join-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    color: var(--ocean);
    line-height: 1.25;
    margin-bottom: 20px;
    font-weight: 700;
  }
  .join-text p {
    font-size: 0.92rem;
    line-height: 1.85;
    color: var(--muted);
    font-weight: 300;
    margin-bottom: 32px;
  }
  .btn-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--coral);
    color: #fff;
    text-decoration: none;
    font-size: 0.82rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 16px 34px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s;
    box-shadow: 0 8px 30px rgba(224,122,95,0.3);
  }
  .btn-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(224,122,95,0.4);
  }
  .btn-cta .arrow { transition: transform 0.3s; }
  .btn-cta:hover .arrow { transform: translateX(4px); }

  .join-visual {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .join-img {
    border-radius: 18px;
    object-fit: cover;
    width: 100%;
    aspect-ratio: 3/4;
    display: block;
  }
  .join-img:first-child { margin-top: 32px; }
  .join-img:last-child { margin-top: -32px; }

  /* ─── FOOTER ─── */
  .about-footer {
    text-align: center;
    padding: 50px 20px;
    border-top: 1px solid rgba(0,0,0,0.06);
  }
  .about-footer p {
    font-size: 0.78rem;
    color: var(--muted);
    font-weight: 300;
    letter-spacing: 0.5px;
  }
  .about-footer .heart { color: var(--coral); }

  /* ─── ANIMATIONS ─── */
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes scrollPulse {
    0%, 100% { opacity: 0.5; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.3); }
  }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 768px) {
    .story { grid-template-columns: 1fr; gap: 48px; padding: 80px 6vw; }
    .story-visual { order: -1; }
    .mission-grid { grid-template-columns: 1fr; }
    .stats-strip { grid-template-columns: 1fr; }
    .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
    .stat-item:last-child { border-bottom: none; }
    .join-section { grid-template-columns: 1fr; gap: 48px; padding: 80px 6vw; }
    .join-visual { order: -1; }
  }
`;

/* ─── INTERSECTION OBSERVER HOOK ─── */
function useVisible(ref: React.RefObject<HTMLElement>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return visible;
}

/* ─── STAT COUNTER ─── */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const vis = useVisible(ref as React.RefObject<HTMLElement>);
  useEffect(() => {
    if (!vis) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(start);
    }, 25);
    return () => clearInterval(interval);
  }, [vis, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutPage() {
  /* refs for scroll-triggered sections */
  const statsRef = useRef<HTMLDivElement>(null);
  const statsVis = useVisible(statsRef as React.RefObject<HTMLElement>);

  const missionRef = useRef<HTMLDivElement>(null);
  const missionVis = useVisible(missionRef as React.RefObject<HTMLElement>);

  return (
    <>
     <Layout>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="about-root">

        {/* ─── HERO ─── */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-overlay-grain" />
          <div className="hero-content">
            <span className="hero-tag">About Visit Konkan</span>
            <h1>Discover the<br /><em>soul of the coast</em></h1>
            <p>
              A curated window into Maharashtra's untouched coastline — where
              ancient villages, turquoise waters, and irresistible flavours
              come together to form memories that last a lifetime.
            </p>
          </div>
          <div className="scroll-hint">
            <div className="line" />
            <span>Scroll</span>
          </div>
        </section>

        {/* ─── STATS STRIP ─── */}
        <div className="stats-strip" ref={statsRef}>
          {[
            { num: 48, suffix: "+", label: "Coastal Villages" },
            { num: 120, suffix: "+", label: "Curated Stays" },
            { num: 15, suffix: "k+", label: "Happy Travellers" },
          ].map((s, i) => (
            <div
              key={i}
              className="stat-item"
              style={{
                opacity: statsVis ? 1 : 0,
                transform: statsVis ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.7s cubic-bezier(.22,1,.36,1) ${i * 0.15}s`,
              }}
            >
              <div className="stat-num">
                <CountUp target={s.num} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ─── OUR STORY ─── */}
        <section className="story">
          <div className="story-visual">
            <img
              className="story-img"
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
              alt="Konkan coastline"
            />
            <div className="story-img-accent" />
          </div>
          <div className="story-text">
            <span className="section-tag">Our Story</span>
            <h2>Born from a love<br />for the coastline</h2>
            <p>
              Visit Konkan was born from a simple yet powerful idea — that
              the most magical travel experiences aren't found on glossy
              brochures, but in the quiet rhythm of fishing boats at dawn
              and the warmth of a family-run homestay.
            </p>
            <div className="quote-block">
              <p>"We set out to give every traveller the kind of
              experience only locals know — raw, real, and deeply
              unforgettable."</p>
            </div>
            <p>
              Today, we connect curious wanderers with the authentic pulse
              of coastal Maharashtra, one village at a time.
            </p>
          </div>
        </section>

        {/* ─── MISSION CARDS ─── */}
        <section className="mission-section" ref={missionRef}>
          <div className="mission-header">
            <span className="section-tag">What Drives Us</span>
            <h2>Our Mission & Values</h2>
          </div>
          <div className="mission-grid">
            {[
              {
                icon: "🌊", iconCls: "icon-coral",
                title: "Sustainable Tourism",
                desc: "We champion eco-conscious travel that protects Konkan's fragile ecosystems while creating lasting economic value for local communities."
              },
              {
                icon: "🤝", iconCls: "icon-seafoam",
                title: "Empowering Locals",
                desc: "Every rupee you spend through Visit Konkan flows directly to homestay owners, local guides, and artisans — building a fairer economy."
              },
              {
                icon: "✨", iconCls: "icon-sand",
                title: "Authentic Experiences",
                desc: "No cookie-cutter itineraries. We hand-pick experiences that let you genuinely connect with the culture, cuisine, and spirit of Konkan."
              },
            ].map((c, i) => (
              <div
                key={i}
                className="mission-card"
                style={{
                  opacity: missionVis ? 1 : 0,
                  transform: missionVis ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.7s cubic-bezier(.22,1,.36,1) ${i * 0.18}s`,
                }}
              >
                <div className={`mission-icon ${c.iconCls}`}>{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── JOIN US ─── */}
        <section className="join-section">
          <div className="join-text">
            <span className="section-tag">Grow With Us</span>
            <h2>Ready to put<br />your business<br />on the map?</h2>
            <p>
              Whether you run a cosy homestay, offer guided nature walks,
              or serve the best thali on the coast — we want to amplify
              your story. Join a growing network of passionate locals
              shaping the future of Konkan tourism.
            </p>
            <a href="/list-your-business" className="btn-cta">
              List Your Business <span className="arrow">→</span>
            </a>
          </div>
          <div className="join-visual">
            <img
              className="join-img"
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80"
              alt="Coastal village"
            />
            <img
              className="join-img"
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
              alt="Beach"
            />
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="about-footer">
          <p>
            Made with <span className="heart">❤️</span> by the Visit Konkan
            Team · © 2025 Visit Konkan. All rights reserved.
          </p>
        </footer>
      </div>
      </Layout>
    </>
  );
}