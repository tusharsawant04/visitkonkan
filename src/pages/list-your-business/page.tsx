"use client";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/layout';

export default function ListYourBusinessPage() {
  return (
    <Layout>
      <section
        className="d-flex flex-column justify-content-center align-items-center text-center position-relative overflow-hidden"
        style={{
          minHeight: "100vh",
          backgroundColor: "#000",
          fontFamily: "'Poppins', sans-serif",
          color: "#FFD700", // Gold/yellow accent
        }}
      >
        {/* Floating Emojis */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <span className="floating-emoji" style={{ top: "10%", left: "15%" }}>🌴</span>
          <span className="floating-emoji" style={{ top: "70%", left: "10%" }}>🌟</span>
          <span className="floating-emoji" style={{ top: "20%", right: "15%" }}>🌄</span>
          <span className="floating-emoji" style={{ bottom: "10%", right: "20%" }}>✨</span>
        </div>

        <div className="z-1 p-4" style={{ maxWidth: "700px" }}>
          <h1
            className="fw-bold display-3 mb-3"
            style={{
              color: "#fee44cff",
              textShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
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
              color: "#f1f1f1",
            }}
          >
            We’re building something <strong>unique</strong> for local Konkan businesses —  
            a way to showcase your <strong>homestay, restaurant, or tour</strong> to curious travelers 🌊  
            all over India.
          </p>

          <button
            className="btn fw-bold px-4 py-2 rounded-pill shadow-lg"
            style={{
              backgroundColor: "#FFD700",
              color: "#000",
              border: "none",
              transition: "0.3s ease-in-out",
            }}
            onClick={() => window.history.back()}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            ⬅️ Back to Home
          </button>

          <div className="mt-5">
            <p className="small" style={{ color: "#aaa" }}>
              🌐 Stay tuned! The <strong>“List Your Business”</strong> feature is launching soon.
            </p>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .floating-emoji {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.7;
            animation: float 6s ease-in-out infinite;
            color: #FFD700;
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
