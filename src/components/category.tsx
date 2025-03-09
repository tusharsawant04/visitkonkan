'use client'; // Mark this file as a client-side component

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './category.css'; // Create a CSS file for custom styles and animations

interface Category {
  title: string;
  desc: string;
  icon: string;
  image: string;
}

const categories: Category[] = [
  { title: "Beaches", desc: "Golden sand & clear waters", icon: "🏝️", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { title: "Historical Forts", desc: "Ancient warrior history", icon: "🏰", image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
  { title: "Food & Cuisine", desc: "Local Konkani flavors", icon: "🥘", image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
  { title: "Adventure & Water Sports", desc: "Scuba diving, rafting", icon: "🚤", image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
  { title: "Wildlife & Nature", desc: "Bird sanctuaries, trekking", icon: "🌲", image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
  { title: "Cultural Festivals", desc: "Traditional Konkani dance & music", icon: "🎭", image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
];

export default function Category() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Discover experiences for every mood</h2>
      <div className="row g-4">
        {categories.map((cat, idx) => (
          <div className="col-6 col-md-4 col-lg-2" key={idx}>
            <div className="card text-center p-3 border-0 shadow-sm category-card">
              <div className="category-icon display-5">{cat.icon}</div>
              <h5 className="mt-2 fw-semibold">{cat.title}</h5>
              <p className="text-muted small">{cat.desc}</p>
              <div className="category-image" style={{ backgroundImage: `url(${cat.image})` }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary">View All Categories</button>
      </div>
    </div>
  );
}
