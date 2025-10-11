"use client";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layout';

export default function ListYourBusinessPage() {
  return (
    <Layout>
  <section
      className="d-flex flex-column justify-content-center align-items-center text-center text-white position-relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #007bff, #00c6ff, #00b894, #0099f7)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 10s ease infinite",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Floating Emojis */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        <span className="floating-emoji" style={{ top: "10%", left: "15%" }}>🌴</span>
        <span className="floating-emoji" style={{ top: "70%", left: "10%" }}>🏖️</span>
        <span className="floating-emoji" style={{ top: "20%", right: "15%" }}>🌅</span>
        <span className="floating-emoji" style={{ bottom: "10%", right: "20%" }}>✨</span>
      </div>

      <div className="z-1 p-4" style={{ maxWidth: "700px" }}>
        <h1
          className="fw-bold display-3 mb-3"
          style={{
            textShadow: "0 0 20px rgba(255,255,255,0.6)",
            letterSpacing: "1px",
          }}
        >
          🚀 Coming Soon
        </h1>

        <p
          className="lead mb-4"
          style={{
            fontSize: "1.3rem",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          We’re crafting something <strong>special</strong> for local Konkan businesses —  
          a platform where your <strong>homestay, restaurant, or tour</strong> can shine 🌊  
          and reach travelers across India!
        </p>

        <button
          className="btn btn-light fw-bold px-4 py-2 rounded-pill shadow-lg"
          onClick={() => window.history.back()}
          style={{
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ⬅️ Back to Home
        </button>

        <div className="mt-5">
          <p className="small text-light opacity-75">
            🌐 Stay tuned! The <strong>“List Your Business”</strong> feature will launch soon.
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .floating-emoji {
          position: absolute;
          font-size: 2.5rem;
          opacity: 0.8;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
    </Layout>

  );
}
