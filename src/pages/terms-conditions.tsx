"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";

export default function TermsAndConditionsPage() {
  return (
    <Layout>
      <section
        className="d-flex flex-column justify-content-center align-items-center text-start min-vh-100 px-3"
        style={{
          background: "linear-gradient(to right, #f8f9fa, #e8f5ff)",
          fontFamily: "'Poppins', sans-serif",
          color: "#333",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="fw-bold mb-4 text-primary text-center">
            📜 Terms & Conditions
          </h1>

          <p className="text-secondary mb-4 text-center">
            Please read these terms carefully before using our website.  
            By accessing or using <strong>Visit Konkan</strong>, you agree to be bound by these Terms & Conditions.
          </p>

          <div className="bg-white shadow-sm rounded-4 p-4 mb-4">
            <h4 className="fw-semibold text-primary mb-2">1. Acceptance of Terms</h4>
            <p className="text-muted mb-0">
              By using our website, you confirm that you have read, understood,
              and agreed to these Terms & Conditions. If you do not agree, please
              do not use our services.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-4 p-4 mb-4">
            <h4 className="fw-semibold text-primary mb-2">2. Use of Website</h4>
            <p className="text-muted mb-0">
              You agree to use Visit Konkan only for lawful purposes. Any attempt
              to damage, disrupt, or misuse the website may lead to legal action.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-4 p-4 mb-4">
            <h4 className="fw-semibold text-primary mb-2">3. Business Listings</h4>
            <p className="text-muted mb-0">
              Businesses listed on Visit Konkan are responsible for the accuracy
              of their information. We do not guarantee the quality of services
              provided by listed businesses.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-4 p-4 mb-4">
            <h4 className="fw-semibold text-primary mb-2">4. Content Ownership</h4>
            <p className="text-muted mb-0">
              All content, images, and materials on this site are owned by Visit Konkan
              unless otherwise stated. Reproduction without permission is prohibited.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-4 p-4 mb-4">
            <h4 className="fw-semibold text-primary mb-2">5. Limitation of Liability</h4>
            <p className="text-muted mb-0">
              Visit Konkan is not responsible for any direct, indirect, or incidental
              damages arising from your use of the website or reliance on its content.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-4 p-4 mb-4">
            <h4 className="fw-semibold text-primary mb-2">6. Changes to Terms</h4>
            <p className="text-muted mb-0">
              We may update these Terms & Conditions at any time. Updated versions
              will be posted on this page with the revised date.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-4 p-4">
            <h4 className="fw-semibold text-primary mb-2">7. Contact Us</h4>
            <p className="text-muted mb-0">
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:konkanvisit@gmail.com" className="text-primary">
                konkanvisit@gmail.com
              </a>.
            </p>
          </div>

          <footer className="mt-5 text-center text-secondary small">
            © {new Date().getFullYear()} Visit Konkan. All Rights Reserved.
          </footer>
        </div>
      </section>
    </Layout>
  );
}
