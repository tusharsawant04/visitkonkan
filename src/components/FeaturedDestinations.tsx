'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import places from '../data/places_card.json';
import './FeaturedDestinations.css';

const FeaturedDestinations = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const featuredPlaces = places.slice(0, 10);

  // Placeholder image
  const placeholderImage =
    'https://via.placeholder.com/400x300.png?text=Konkan+Destination';

  // Handle image error
  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="featured-destinations py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Popular Destinations</span>
          <h2 className="section-title">Explore Konkan&apos;s Finest</h2>
          <p className="section-description">
            Discover the most loved destinations across Konkan.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="destinations-slider"
        >
          {featuredPlaces.map((dest) => (
            <SwiperSlide key={dest.id}>
              <div
                className="destination-card"
                onMouseEnter={() => setHoveredId(dest.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="destination-image-wrapper">
                  <Image
                    src={
                      imageErrors[dest.id]
                        ? placeholderImage
                        : dest.image_url || placeholderImage
                    }
                    alt={dest.name}
                    width={400}
                    height={300}
                    className="destination-image"
                    onError={() => handleImageError(dest.id)}
                  />
                  <span className="destination-category">
                    {dest.category}
                  </span>
                  <div className="destination-rating">⭐ {dest.rating}</div>
                </div>
                <div className="destination-content">
                  <h3 className="destination-title">{dest.name}</h3>
                  <p className="destination-description">{dest.short_desc}</p>
                  <Link href={`/discover/${dest.slug}`} className="discover-link">
                    Discover More →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-4">
          <Link href="/discover" className="btn btn-primary">
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
