'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExperienceList.css';

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
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400; // Adjust this value based on your card width
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="experience-section position-relative">
    {/* <video autoPlay loop muted controls>
  <source src="https://your-hls-converter.com/convert?url=https://www.youtube.com/watch?v=3r06l21ivaY" type="application/x-mpegURL" />
</video> */}

      <div className="container my-5 position-relative">
        <h2 className="fw-bold mb-4 text-white">Explore experiences, events, and guides</h2>
        
        <button 
          className="scroll-button scroll-left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        <div className="experience-slider-container">
          <div className="experience-slider" ref={sliderRef}>
            {experiences.map((exp, idx) => (
              <div className="experience-card" key={idx}>
                <Image 
                  src={exp.img} 
                  width={400} 
                  height={250} 
                  className="card-img-top" 
                  alt={exp.name}
                  objectFit="cover"
                />
                <div className="card-body">
                  <h5 className="fw-semibold text-white">{exp.name}</h5>
                  <p className="text-muted small">{exp.desc}</p>
                  <p className="text-warning small">⭐ {exp.rating}</p>
                  <button className="btn btn-outline-light">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="scroll-button scroll-right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <i className="bi bi-chevron-right"></i>
        </button>

        <div className="text-center mt-4">
          <button className="btn btn-outline-primary">Explore more experiences</button>
        </div>
      </div>
    </div>
  );
}