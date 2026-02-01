"use client";
import React, { useState, useEffect, useRef } from "react";
import Layout from "./../../components/layout";
const CATEGORIES = [
  {
    icon: "🏨",
    label: "Hotels",
    desc: "Luxury & boutique stays along the coast",
  },
  {
    icon: "☕",
    label: "Cafes",
    desc: "Cozy spots for chai, snacks & chilling",
  },
  {
    icon: "🍽️",
    label: "Restaurants",
    desc: "Authentic Konkan cuisine & seafood joints",
  },
  {
    icon: "🏡",
    label: "Homestays",
    desc: "Experience local life & warm hospitality",
  },
  {
    icon: "🏄",
    label: "Water Sports",
    desc: "Surfing, kayaking, snorkeling & more",
  },
  {
    icon: "🚤",
    label: "Boat Tours",
    desc: "Scenic island & coastal cruises",
  },
  {
    icon: "🧘",
    label: "Wellness",
    desc: "Yoga retreats & Ayurvedic experiences",
  },
  {
    icon: "🎨",
    label: "Cultural Tours",
    desc: "Heritage walks, art & local traditions",
  },
];

export default function ListYourBusinessPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    Array(CATEGORIES.length).fill(false)
  );
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, idx) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <Layout>
    <div
      style={{
        minHeight: "100vh",
        background: "#0a1628",
        color: "#fff",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* === Animated Background Orbs === */}
      {[
        { top: "-10%", left: "-5%", w: 500, h: 500, color: "rgba(20,160,180,0.12)" },
        { top: "50%", left: "70%", w: 400, h: 400, color: "rgba(255,120,60,0.08)" },
        { top: "80%", left: "20%", w: 350, h: 350, color: "rgba(20,160,180,0.07)" },
      ].map((orb, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: orb.top,
            left: orb.left,
            width: orb.w,
            height: orb.h,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: "blur(60px)",
            animation: `floatOrb ${6 + i * 2}s ease-in-out infinite alternate`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}

      {/* === Subtle Grid Overlay === */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* === Content === */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Top Nav Pill */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 32,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 40,
              padding: "8px 20px",
              fontSize: 13,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: 0.5,
              backdropFilter: "blur(8px)",
            }}
          >
            🌊 Visit Konkan — Business Partner Program
          </div>
        </div>

        {/* Hero */}
        <div
          style={{
            textAlign: "center",
            padding: "72px 20px 40px",
            maxWidth: 780,
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: -1.5,
              margin: 0,
              background:
                "linear-gradient(135deg, #ffffff 30%, #5dd9e8 60%, #ff8a50 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Grow Your Business
            <br />
            With Konkan's Travelers
          </h1>

          <p
            style={{
              marginTop: 24,
              fontSize: 17,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 540,
              margin: "24px auto 0",
              lineHeight: 1.7,
            }}
          >
            A dedicated platform connecting local Konkan businesses with
            thousands of travelers planning their perfect coastal escape.
          </p>

          {/* Live badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 32,
              background: "rgba(255,120,60,0.12)",
              border: "1px solid rgba(255,120,60,0.3)",
              borderRadius: 40,
              padding: "6px 16px",
              fontSize: 13,
              color: "#ff8a50",
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#ff8a50",
                boxShadow: "0 0 6px #ff8a50",
                animation: "pulse 1.5s ease-in-out infinite",
                display: "inline-block",
              }}
            />
            Launching Soon — Register Your Interest
          </div>
        </div>

        {/* === Category Grid === */}
        <div
          style={{
            maxWidth: 900,
            margin: "56px auto 0",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 28,
            }}
          >
            Business Categories
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 14,
            }}
          >
            {CATEGORIES.map((cat, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background:
                    hoveredCard === i
                      ? "rgba(93,217,232,0.1)"
                      : "rgba(255,255,255,0.04)",
                  border:
                    hoveredCard === i
                      ? "1px solid rgba(93,217,232,0.35)"
                      : "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 18,
                  padding: "24px 20px",
                  cursor: "default",
                  transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
                  transform: visibleCards[i]
                    ? hoveredCard === i
                      ? "translateY(-4px) scale(1.02)"
                      : "translateY(0)"
                    : "translateY(30px)",
                  opacity: visibleCards[i] ? 1 : 0,
                  transitionDelay: visibleCards[i] ? `${i * 60}ms` : "0ms",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    marginBottom: 10,
                    transform:
                      hoveredCard === i ? "scale(1.15)" : "scale(1)",
                    transition: "transform 0.3s ease",
                    display: "inline-block",
                  }}
                >
                  {cat.icon}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: hoveredCard === i ? "#5dd9e8" : "#fff",
                    transition: "color 0.3s",
                    marginBottom: 4,
                  }}
                >
                  {cat.label}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.38)",
                    lineHeight: 1.5,
                  }}
                >
                  {cat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Email CTA === */}
        <div
          style={{
            maxWidth: 520,
            margin: "72px auto 0",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 8px",
            }}
          >
            Be the first to list your business
          </h3>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.45)",
              margin: "0 0 24px",
              lineHeight: 1.6,
            }}
          >
            Drop your email and we'll notify you the moment the platform goes
            live — plus early-bird perks.
          </p>

          {!submitted ? (
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                style={{
                  flex: "1 1 240px",
                  maxWidth: 320,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 50,
                  padding: "13px 22px",
                  color: "#fff",
                  fontSize: 14,
                  outline: "none",
                  transition: "border 0.3s",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(93,217,232,0.5)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.12)")
                }
              />
              <button
                onClick={handleSubmit}
                style={{
                  background: "linear-gradient(135deg, #14a0b4, #0d8a9c)",
                  border: "none",
                  borderRadius: 50,
                  padding: "13px 30px",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  boxShadow: "0 4px 20px rgba(20,160,180,0.3)",
                  letterSpacing: 0.3,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.transform = "scale(1.05)";
                  (e.target as HTMLElement).style.boxShadow =
                    "0 6px 28px rgba(20,160,180,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.transform = "scale(1)";
                  (e.target as HTMLElement).style.boxShadow =
                    "0 4px 20px rgba(20,160,180,0.3)";
                }}
              >
                Notify Me
              </button>
            </div>
          ) : (
            <div
              style={{
                background: "rgba(93,217,232,0.1)",
                border: "1px solid rgba(93,217,232,0.25)",
                borderRadius: 16,
                padding: "20px 28px",
                animation: "fadeIn 0.4s ease",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 6 }}>🎉</div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#5dd9e8",
                  marginBottom: 4,
                }}
              >
                You're on the list!
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                We'll reach out as soon as listings open up.
              </div>
            </div>
          )}
        </div>

        {/* === Stats Row === */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px, 6vw, 80px)",
            flexWrap: "wrap",
            marginTop: 80,
            padding: "0 20px",
          }}
        >
          {[
            { value: "50K+", label: "Annual Visitors" },
            { value: "8", label: "Categories" },
            { value: "∞", label: "Growth Potential" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg, #5dd9e8, #ff8a50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: -1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.35)",
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  marginTop: 4,
                  fontWeight: 600,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* === Back Button + Footer === */}
        <div
          style={{
            textAlign: "center",
            padding: "64px 20px 56px",
          }}
        >
          <button
            onClick={() => window.history.back()}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 50,
              padding: "10px 28px",
              color: "rgba(255,255,255,0.55)",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.25s",
              letterSpacing: 0.3,
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.borderColor =
                "rgba(93,217,232,0.4)";
              (e.target as HTMLElement).style.color = "#5dd9e8";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.15)";
              (e.target as HTMLElement).style.color =
                "rgba(255,255,255,0.55)";
            }}
          >
            ← Back to Home
          </button>

          <p
            style={{
              marginTop: 40,
              fontSize: 12,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: 0.5,
            }}
          >
            © 2025 Visit Konkan · All rights reserved
          </p>
        </div>
      </div>

      {/* === Keyframes === */}
      <style>{`
        @keyframes floatOrb {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, -40px) scale(1.08); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.35; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        input::placeholder { color: rgba(255,255,255,0.28); }
        input:focus { outline: none; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
    </Layout>
  );
}