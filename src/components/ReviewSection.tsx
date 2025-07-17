'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  destination: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Paratik Gawade",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    rating: 5,
    comment: "Thank you all for the amazing memories...",
    destination: "Rajgad Trek"
  },
  {
    id: 2,
    name: "Rahul Dhayalkar",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    rating: 4,
    comment: "Well execution and planning. Unforgettable memories ❤️",
    destination: "Rajgad Trek"
  },
  {
    id: 3,
    name: "Unknown Traveler",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    rating: 4,
    comment: "Thanks Pratik and team — something new was experienced 🌍",
    destination: "Rajgad Trek"
  },
];

export default function ReviewSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="position-relative text-white py-5"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(5px)'
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      <div className="container position-relative z-1">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Traveler Stories</h2>
          <p className="lead text-light">Real journeys. Real emotions. Shared with love.</p>
        </div>

        {/* Swiper Navigation Buttons */}
        <div className="d-flex justify-content-end mb-3 gap-2">
          <button ref={prevRef} className="btn btn-light rounded-circle shadow">
            <i className="bi bi-arrow-left fs-5"></i>
          </button>
          <button ref={nextRef} className="btn btn-light rounded-circle shadow">
            <i className="bi bi-arrow-right fs-5"></i>
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
            992: { slidesPerView: 3 }
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div
                className="card text-dark h-100 border-0 shadow-lg"
                style={{
                  backdropFilter: 'blur(5px)',
                  background: 'rgba(255, 255, 255, 0.85)',
                  borderRadius: '20px'
                }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="rounded-circle border border-white shadow"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0">{review.name}</h6>
                      <small className="text-muted">
                        <i className="bi bi-geo-alt-fill me-1 text-danger"></i>
                        {review.destination}
                      </small>
                    </div>
                  </div>
                  <div className="text-warning mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill me-1"></i>
                    ))}
                  </div>
                  <blockquote className="blockquote mb-0">
                    <p className="fst-italic">“{review.comment}”</p>
                  </blockquote>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
