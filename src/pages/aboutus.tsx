"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";

export default function AboutPage() {
  return (
<Layout>
  <section
      className="text-white position-relative overflow-hidden d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/konkan-beach.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "60px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Animated Gradient Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,123,255,0.6), rgba(0,198,255,0.6))",
          backgroundSize: "400% 400%",
          animation: "waveAnimation 12s ease infinite",
          zIndex: 0,
        }}
      ></div>

      {/* Floating Emojis */}
      <span
        className="floating-emoji"
        style={{ top: "15%", left: "10%" }}
      >
        🌴
      </span>
      <span
        className="floating-emoji"
        style={{ top: "25%", right: "15%" }}
      >
        🌅
      </span>
      <span
        className="floating-emoji"
        style={{ bottom: "10%", left: "20%" }}
      >
        ✨
      </span>

      <div className="container position-relative z-1" style={{ maxWidth: "900px" }}>
        <h1
          className="fw-bold display-5 mb-4"
          style={{ textShadow: "0 0 15px rgba(0,0,0,0.7)" }}
        >
          🌴 About <span className="text-warning">Visit Konkan</span>
        </h1>

        <p
          className="lead mb-5"
          style={{ fontSize: "1.2rem", lineHeight: "1.8" }}
        >
          Welcome to <strong>Visit Konkan</strong> — your gateway to the untouched beauty
          of India’s western coastline! From hidden waterfalls and peaceful beaches
          to authentic Konkan cuisine, we’re here to showcase the charm of Maharashtra’s
          coastal paradise. 🌊
        </p>

        {/* Story Section */}
        <div className="bg-light text-dark rounded-4 shadow-lg p-4 mb-5 about-card">
          <h3 className="fw-bold mb-3">🌺 Our Story</h3>
          <p>
            Visit Konkan was born from a simple idea — to connect travelers with the real
            Konkan experience. Whether it’s a cozy homestay in Ratnagiri, a seafood joint
            in Malvan, or a scenic drive through Guhagar’s green lanes — we bring Konkan’s
            hidden gems to your fingertips.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-light text-dark rounded-4 shadow-lg p-4 mb-5 about-card">
          <h3 className="fw-bold mb-3">🌊 Our Mission</h3>
          <p>
            To promote sustainable tourism by helping local communities grow while giving
            travelers authentic, memorable, and eco-friendly experiences across the Konkan
            coast.
          </p>
        </div>

        {/* Join Us Section */}
        <div className="bg-light text-dark rounded-4 shadow-lg p-4 about-card">
          <h3 className="fw-bold mb-3">🤝 Join Us</h3>
          <p>
            Are you a homestay owner, local guide, or small business from Konkan?  
            We’d love to feature you! Join hands with Visit Konkan and help the world
            discover the coastal beauty of Maharashtra. 🌅
          </p>
          <a
            href="/list-your-business"
            className="btn btn-primary fw-bold px-4 py-2 rounded-pill mt-3"
          >
            🚀 List Your Business
          </a>
        </div>

        <footer className="mt-5 text-light small">
          Made with ❤️ by the Visit Konkan Team | Bringing Konkan Closer to You
        </footer>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes waveAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .floating-emoji {
          position: absolute;
          font-size: 2rem;
          opacity: 0.9;
          animation: float 6s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }

        .about-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s forwards;
        }

        .about-card:nth-child(1) { animation-delay: 0.3s; }
        .about-card:nth-child(2) { animation-delay: 0.6s; }
        .about-card:nth-child(3) { animation-delay: 0.9s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
</Layout>

  );
}
