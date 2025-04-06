'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './FeaturedDestinations.css';

const destinations = [
  {
    id: 1,
    name: 'Ganpatipule Beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    description: 'Beautiful beach with famous Ganpati temple',
    rating: 4.5,
    category: 'Beach'
  },
  {
    id: 2,
    name: 'Tarkarli Beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    description: 'Crystal clear waters perfect for water sports',
    rating: 4.8,
    category: 'Beach'
  },
  {
    id: 3,
    name: 'Sindhudurg Fort',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    description: 'Historic sea fort with amazing architecture',
    rating: 4.7,
    category: 'Heritage'
  }
];

const FeaturedDestinations = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="featured-destinations py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Popular Destinations</span>
          <h2 className="section-title">Explore Konkans Finest</h2>
          <p className="section-description">Discover the most loved destinations in Konkan</p>
          <p>Explore the region&apos;s most popular destinations.</p>
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
          className="destinations-slider"
        >
          {destinations.map((dest) => (
            <SwiperSlide key={dest.id}>
              <div 
                className="destination-card"
                onMouseEnter={() => setHoveredId(dest.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="destination-image-wrapper">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    width={400}
                    height={300}
                    className="destination-image"
                  />
                  <span className="destination-category">{dest.category}</span>
                  <div className="destination-rating">
                    <span>⭐ {dest.rating}</span>
                  </div>
                </div>
                <div className="destination-content">
                  <h3 className="destination-title">{dest.name}</h3>
                  <p className="destination-description">{dest.description}</p>
                  <Link 
                    href={`/discover/${dest.id}`} 
                    className={`discover-link ${hoveredId === dest.id ? 'hovered' : ''}`}
                  >
                    Discover More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedDestinations;