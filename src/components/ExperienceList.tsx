'use client'; // Mark this file as a client-side component

import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExperienceList.css'; // Create a CSS file for custom styles and animations

interface Experience {
  name: string;
  desc: string;
  rating: string;
  img: string;
}

const experiences: Experience[] = [
  { name: "Beach Camping Under the Stars", desc: "Experience the serene beauty of Kokan's beaches at night.", rating: "4.9/5", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { name: "Trekking Through the Western Ghats", desc: "Explore the lush greenery and scenic trails.", rating: "4.8/5", img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
  { name: "Fishing with Local Fishermen", desc: "Learn traditional fishing techniques from locals.", rating: "4.7/5", img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
  { name: "Cooking Traditional Konkani Cuisine", desc: "Discover the flavors of Kokan with a local chef.", rating: "4.9/5", img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
  { name: "Backwater Boating Adventures", desc: "Enjoy a peaceful boat ride through Kokan's backwaters.", rating: "4.5/5", img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
];

export default function ExperienceList() {
  return (
    <div className="experience-section">
      <video autoPlay loop muted className="background-video">
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container my-5">
        <h2 className="fw-bold mb-4 text-white">Explore experiences, events, and guides</h2>
        <div className="experience-slider">
          {experiences.map((exp, idx) => (
            <div className="experience-card" key={idx}>
              <Image src={exp.img} width={400} height={250} className="card-img-top" alt={exp.name} />
              <div className="card-body">
                <h5 className="fw-semibold text-white">{exp.name}</h5>
                <p className="text-muted small">{exp.desc}</p>
                <p className="text-warning small">⭐ {exp.rating}</p>
                <button className="btn btn-outline-light">Learn More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-outline-primary">Explore more experiences</button>
        </div>
      </div>
    </div>
  );
}