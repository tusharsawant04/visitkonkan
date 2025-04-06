'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './LocalExperiences.css';

const experiences = [
  {
    id: 1,
    title: 'Local Cooking Classes',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    description: 'Learn authentic Malvani cuisine',
    price: '₹1,499',
    duration: '3 hours'
  },
  {
    id: 2,
    title: 'Fishing Tours',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    description: 'Experience traditional fishing methods',
    price: '₹999',
    duration: '4 hours'
  },
  {
    id: 3,
    title: 'Temple Tours',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    description: 'Visit ancient temples and learn their history',
    price: '₹799',
    duration: '5 hours'
  }
];

const LocalExperiences = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="local-experiences py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Authentic Experiences</span>
          <h2 className="section-title">Experience Local Life</h2>
          <p className="section-description">Immerse yourself in the rich culture of Konkan</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="experiences-slider"
        >
          {experiences.map((exp) => (
            <SwiperSlide key={exp.id}>
              <div 
                className="experience-card"
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="experience-image-wrapper">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    width={400}
                    height={300}
                    className="experience-image"
                  />
                  <div className="experience-meta">
                    <span className="duration">
                      <i className="bi bi-clock"></i> {exp.duration}
                    </span>
                    <span className="price">{exp.price}</span>
                  </div>
                </div>
                <div className="experience-content">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-description">{exp.description}</p>
                  <button 
                    className={`book-now-btn ${hoveredId === exp.id ? 'hovered' : ''}`}
                  >
                    Book Experience
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LocalExperiences;