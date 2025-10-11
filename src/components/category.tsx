'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './category.css';
import Link from 'next/link';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const CategoryCard = ({ cat }: { cat: Category }) => (
    <div className="card h-100 text-center p-3 border-0 shadow-sm category-card">
      <div className="card-body d-flex flex-column justify-content-between p-0">
        <div>
          <div className="category-icon display-5 mb-3">{cat.icon}</div>
          <h5 className="card-title fw-semibold">{cat.title}</h5>
          <p className="text-muted small mb-3">{cat.desc}</p>
        </div>
        <div className="category-image-wrapper">
          <div 
            className="category-image" 
            style={{ backgroundImage: `url(${cat.image})` }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Discover experiences for every mood</h2>
      
      {isMobile ? (
        <div className="position-relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={false}
            className="category-swiper"
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
              },
              480: {
                slidesPerView: 2.2,
              },
              640: {
                slidesPerView: 3.2,
              }
            }}
          >
            {categories.map((cat, idx) => (
              <SwiperSlide key={idx}>
                <CategoryCard cat={cat} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="row g-4">
          {categories.map((cat, idx) => (
            <div className="col-6 col-md-4 col-lg-2" key={idx}>
              <CategoryCard cat={cat} />
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-4">
        {/* <Link href="/categories/trip">
          <button className="btn btn-primary px-4">
            View All Categories
          </button>
        </Link> */}
      </div>
    </div>
  );
}
