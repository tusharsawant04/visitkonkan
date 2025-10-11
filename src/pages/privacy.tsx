"use client";
import React from "react";
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PrivacyPolicyPage() {
  return (
    <Layout>


    <section
      className="text-dark d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#f0f8ff",
        padding: "60px 20px",
      }}
    >
      <div className="container" style={{ maxWidth: "900px" }}>
        <h1 className="fw-bold display-5 mb-4 text-primary">🛡️ Privacy Policy</h1>
        <p className="mb-4">
          At <strong>Visit Konkan</strong>, your privacy is our priority. This Privacy Policy
          explains how we collect, use, and safeguard your information when you visit our website.
        </p>

        <h3 className="fw-bold mt-4 mb-2">Information We Collect</h3>
        <ul>
          <li>Personal information you provide (name, email, message)</li>
          <li>Non-personal data (cookies, analytics, IP addresses)</li>
        </ul>

        <h3 className="fw-bold mt-4 mb-2">How We Use Your Information</h3>
        <ul>
          <li>To respond to inquiries and provide requested services</li>
          <li>To improve our website and user experience</li>
          <li>To send occasional updates or notifications (if opted-in)</li>
        </ul>

        <h3 className="fw-bold mt-4 mb-2">Data Protection</h3>
        <p>
          We implement industry-standard security measures to protect your personal information
          from unauthorized access or disclosure.
        </p>

        <h3 className="fw-bold mt-4 mb-2">Third-Party Links</h3>
        <p>
          Our website may contain links to third-party websites. Visit Konkan is not responsible
          for the privacy practices of these external sites.
        </p>

        <h3 className="fw-bold mt-4 mb-2">Changes to This Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. Changes will be posted on this page.
        </p>

      </div>
    </section>
        </Layout>
  );
}
