'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

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
    name: "Rahul Sharma",
    avatar: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    rating: 5,
    comment: "Amazing experience! The beaches were pristine and the local food was incredible.",
    destination: "Ganpatipule"
  },
  {
    id: 2,
    name: "Priya Patel",
    avatar: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    rating: 4,
    comment: "Loved exploring the historical forts. Great guide service!",
    destination: "Sindhudurg"
  },
  // Add more reviews...
];

export default function ReviewSection() {
  return (
    <section className="review-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Travelers Say</h2>
          <p className="text-muted">Real experiences from real people</p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            968: { slidesPerView: 3 }
          }}
          className="pb-5"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0">{review.name}</h6>
                      <small className="text-muted">{review.destination}</small>
                    </div>
                  </div>
                  <div className="text-warning mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p className="card-text">{review.comment}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}