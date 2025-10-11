"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We received your message.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
    <section
      className="position-relative text-white d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/konkan-contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 20px",
      }}
    >
      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      <div className="container position-relative z-1" style={{ maxWidth: "700px" }}>
        <h1 className="fw-bold display-5 mb-3">📬 Contact Us</h1>
        <p className="lead mb-5">
          Have questions or suggestions? Reach out and we’ll get back to you as soon as possible!
        </p>

        <form onSubmit={handleSubmit} className="bg-light text-dark rounded-4 shadow-lg p-4">
          <div className="mb-3 text-start">
            <label htmlFor="name" className="form-label fw-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="message" className="form-label fw-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows={5}
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary fw-bold px-4 py-2 rounded-pill">
            Send Message
          </button>
        </form>

      </div>
    </section>
    </Layout>

  );
}
