'use client';
import React from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const ideaEvents = [
  { id: 1, title: "Music Festival", emoji: "🎵" },
  { id: 2, title: "Cultural Parade", emoji: "🎭" },
  { id: 3, title: "Adventure Marathon", emoji: "🏃‍♂️" },
  { id: 4, title: "Food & Craft Fair", emoji: "🍲" },
  { id: 5, title: "Beach Party", emoji: "🏖️" },
];

const Events = () => {
  return (
    <Layout>
      {/* Banner */}
      <section
        className="text-center text-white position-relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 20px",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60"></div>
        <div className="container position-relative z-1">
          <h1 className="display-4 fw-bold">🌟 Upcoming Events – Stay Tuned!</h1>
          <p className="lead">We’re planning something exciting for Konkan – festivals, adventure, culture & fun!</p>
          <button className="btn btn-warning btn-lg mt-3">Register Your Interest</button>
        </div>
      </section>

      {/* Teaser Event Cards */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Sneak Peek of Ideas</h2>
        <div className="row g-4 justify-content-center">
          {ideaEvents.map(event => (
            <div key={event.id} className="col-6 col-sm-4 col-md-3">
              <div className="card shadow-lg h-100 text-center p-4 teaser-card">
                <div className="display-1">{event.emoji}</div>
                <h5 className="card-title mt-3">{event.title}</h5>
                <p className="card-text text-muted">Coming Soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center my-5">
        <div className="container">
          <h2>Excited? Stay Connected!</h2>
          <p className="lead">Be the first to know when our events go live. Subscribe to updates.</p>
          <button className="btn btn-primary btn-lg">Subscribe Now</button>
        </div>
      </section>

      <style jsx>{`
        .teaser-card {
          border-radius: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .teaser-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
      `}</style>
    </Layout>
  );
};

export default Events;
