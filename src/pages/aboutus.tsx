"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";

export default function AboutPage() {
  return (
    <Layout>
      <section
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center text-dark px-3"
        style={{
          background: "linear-gradient(to right, #e0f7fa, #ffffff)",
          fontFamily: "'Poppins', sans-serif",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="fw-bold mb-4 text-primary">
            About <span className="text-info">Visit Konkan</span>
          </h1>

          <p className="lead mb-5 text-secondary">
            Welcome to <strong>Visit Konkan</strong> — your friendly guide to
            Maharashtra’s serene coastal region. From calm beaches to delicious
            seafood, we bring you the best of Konkan in one place.
          </p>

          <div className="bg-white shadow-sm rounded-4 p-4 mb-4 text-start">
            <h4 className="fw-semibold text-primary mb-2">Our Story</h4>
            <p className="text-muted mb-0">
              Visit Konkan started with a simple goal — to help people discover
              the real Konkan. We highlight local culture, food, and natural
              beauty while supporting small communities and local tourism.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-4 p-4 mb-4 text-start">
            <h4 className="fw-semibold text-primary mb-2">Our Mission</h4>
            <p className="text-muted mb-0">
              To promote sustainable tourism and empower locals by connecting
              travelers with authentic and meaningful experiences across the
              Konkan coast.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-4 p-4 text-start">
            <h4 className="fw-semibold text-primary mb-2">Join Us</h4>
            <p className="text-muted">
              Are you a homestay owner, local guide, or small business in
              Konkan? We’d love to work with you! Let’s grow together and help
              the world discover the beauty of coastal Maharashtra.
            </p>
            <a
              href="/list-your-business"
              className="btn btn-info fw-semibold px-4 py-2 rounded-pill mt-2"
            >
              🚀 List Your Business
            </a>
          </div>

          <footer className="mt-5 text-secondary small">
            Made with ❤️ by the Visit Konkan Team
          </footer>
        </div>
      </section>
    </Layout>
  );
}
