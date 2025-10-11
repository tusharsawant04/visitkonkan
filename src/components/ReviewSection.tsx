'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  destination: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Pratik Gawade",
    rating: 5,
    comment: "Thank you all for the amazing memories...",
    destination: "Rajgad Trek"
  },
  {
    id: 2,
    name: "Rahul Dhayalkar",
    rating: 4,
    comment: "Well executed and planned. Unforgettable memories ❤️",
    destination: "Rajgad Trek"
  },
  {
    id: 3,
    name: "Unknown Traveler",
    rating: 4,
    comment: "Thanks Pratik and team — something new was experienced 🌍",
    destination: "Rajgad Trek"
  },
];

export default function ReviewSection() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="position-relative py-5" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      <div className="container position-relative z-2">
        <div className="text-center mb-5 text-light">
          <h2 className="fw-bold display-5">Traveler Stories</h2>
          <p className="lead">Real journeys. Real emotions. Shared with love.</p>
        </div>

        {/* Navigation Buttons */}
        <div className="d-flex justify-content-end mb-4 gap-2">
          <button ref={prevRef} className="btn btn-outline-light rounded-circle shadow p-3">
            <i className="bi bi-chevron-left fs-5"></i>
          </button>
          <button ref={nextRef} className="btn btn-outline-light rounded-circle shadow p-3">
            <i className="bi bi-chevron-right fs-5"></i>
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="card h-100 border-0 shadow-lg overflow-hidden" style={{
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.9)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-10px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div className="card-body p-4 d-flex flex-column justify-content-between h-100">
                  <div>
                    <h6 className="fw-bold mb-1">{review.name}</h6>
                    <small className="text-muted d-flex align-items-center mb-3">
                      <i className="bi bi-geo-alt-fill me-1 text-danger"></i>
                      {review.destination}
                    </small>
                    <div className="mb-3 text-warning">
                      {[...Array(review.rating)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill me-1"></i>
                      ))}
                    </div>
                    <p className="fst-italic text-dark">“{review.comment}”</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
