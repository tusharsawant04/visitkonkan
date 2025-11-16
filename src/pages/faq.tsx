"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";


export default function FAQPage() {
  return (
    <Layout>
      <section
        className="d-flex flex-column justify-content-center align-items-center min-vh-100 px-3"
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
            ❓ Frequently Asked Questions
          </h1>

          <p className="text-secondary mb-5 text-center">
            Got questions about <strong>Visit Konkan</strong>?  
            We’ve answered some of the most common ones below.
          </p>

          {/* FAQ 1 */}
          <div className="bg-white shadow-sm rounded-4 p-4 mb-3">
            <h5 className="fw-semibold text-primary mb-2">
              1. What is Visit Konkan?
            </h5>
            <p className="text-muted mb-0">
              Visit Konkan is a digital platform that helps travelers explore the
              Konkan region — from scenic beaches to local food, culture, and
              hidden spots. We also help local businesses connect with visitors.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="bg-white shadow-sm rounded-4 p-4 mb-3">
            <h5 className="fw-semibold text-primary mb-2">
              2. How can I list my business on Visit Konkan?
            </h5>
            <p className="text-muted mb-0">
              You can use the “List Your Business” page to submit details about
              your homestay, restaurant, or tour. Once our team reviews your
              submission, your listing will appear on our site.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="bg-white shadow-sm rounded-4 p-4 mb-3">
            <h5 className="fw-semibold text-primary mb-2">
              3. Is there any cost to list my business?
            </h5>
            <p className="text-muted mb-0">
              Currently, listing your business is free while we build the platform.
              In the future, we may offer premium plans with added features.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="bg-white shadow-sm rounded-4 p-4 mb-3">
            <h5 className="fw-semibold text-primary mb-2">
              4. Can I book hotels or tours directly from Visit Konkan?
            </h5>
            <p className="text-muted mb-0">
              We’re working on adding direct booking features. For now, you can
              contact listed businesses directly through their details on our site.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="bg-white shadow-sm rounded-4 p-4 mb-3">
            <h5 className="fw-semibold text-primary mb-2">
              5. How can I contact the Visit Konkan team?
            </h5>
            <p className="text-muted mb-0">
              You can reach us anytime at{" "}
              <a href="mailto:support@visitkonkan.com" className="text-primary">
                support@visitkonkan.com
              </a>
              . We’ll be happy to assist you!
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="bg-white shadow-sm rounded-4 p-4 mb-3">
            <h5 className="fw-semibold text-primary mb-2">
              6. Do you verify listed businesses?
            </h5>
            <p className="text-muted mb-0">
              Yes, all listings are reviewed before being published to ensure
              authenticity and accuracy. We aim to promote only genuine local
              businesses from the Konkan region.
            </p>
          </div>

          {/* Footer */}
          <footer className="mt-5 text-center text-secondary small">
            Can’t find your question? Reach us at{" "}
            <a href="mailto:support@visitkonkan.com" className="text-primary">
              support@visitkonkan.com
            </a>
          </footer>
        </div>
      </section>
    </Layout>
  );
}
