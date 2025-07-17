'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExperienceList.css';
import Link from 'next/link';
interface Experience {
  name: string;
  desc: string;
    slug: string;
  rating: string;
  img: string;
}

const experiences: Experience[] = [
  {
  name: "Rajgad Trek",
  desc: "Walk the ancient paths of Shivaji Maharaj’s capital — where clouds kiss the fort and sunrise paints history in gold.",
  slug: "rajgad-trek",
  rating: "5.0/5",
  img: "https://drive.google.com/uc?export=view&id=1SnkUiDSySSG-vn8wX5VwIDYvOVMHlc1D"
},
  {
    name: "Raigad Trek",
     slug: "raigad-trek",
    desc: "Climb the steps of history at Raigad Fort — the coronation site of Chhatrapati Shivaji Maharaj.",
    rating: "4.9/5",
    img: "https://images.unsplash.com/photo-1589644873574-345111273e9b?q=80&w=648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Naneghat Trek",
     slug: "naneghat-trek",
    desc: "Trek through ancient trade routes with breathtaking valley views and rock-carved inscriptions.",
    rating: "4.8/5",
    img: "https://images.unsplash.com/photo-1599106242383-271adeb2e828?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sinhagad Trek",
    slug: "sinhagad-trek",
    desc: "Conquer one of Pune’s most iconic forts with scenic sunrise views and battlefield stories.",
    rating: "4.7/5",
    img: "https://images.unsplash.com/photo-1707840422122-268356e197c8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { name: "Beach Camping Under the Stars", slug:"beach-camping", desc: "Experience the serene beauty of Kokan's beaches at night.", rating: "4.9/5", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
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
              <div className="experience-card ms-4" key={idx}>
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
                  <Link href={`/${exp.slug}`} passHref>
                  <button className="btn btn-outline-light">Learn More</button>
                </Link>
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