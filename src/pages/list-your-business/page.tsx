"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../components/layout";

export default function ListYourBusinessPage() {
  return (
    <Layout>
      <section
        className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100 px-3"
        style={{
          background: "linear-gradient(to right, #f8f9fa, #e8f5ff)",
          fontFamily: "'Poppins', sans-serif",
          color: "#333",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          <h1 className="fw-bold mb-3 text-primary">🚀 Coming Soon</h1>

          <p className="lead mb-4 text-secondary">
            We’re building something special for local Konkan businesses — a
            simple way to showcase your <strong>homestay</strong>,{" "}
            <strong>restaurant</strong>, or <strong>travel experience</strong>{" "}
            to travelers across India.
          </p>

          <div className="bg-white shadow-sm rounded-4 p-4 mb-4 text-start">
            <h4 className="fw-semibold text-primary mb-2">
              What You Can Expect
            </h4>
            <p className="text-muted mb-0">
              • Easy registration for local business owners <br />
              • Your profile visible to thousands of visitors <br />
              • A platform that helps you grow sustainably in tourism
            </p>
          </div>

          <div className="mt-4">
            <button
              className="btn btn-outline-primary fw-semibold px-4 py-2 rounded-pill"
              onClick={() => window.history.back()}
            >
              ⬅️ Back to Home
            </button>
          </div>

          <footer className="mt-5 text-secondary small">
            🌐 Stay tuned! <strong>“List Your Business”</strong> is launching
            soon.
          </footer>
        </div>
      </section>
    </Layout>
  );
}
