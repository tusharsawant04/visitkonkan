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
    name: "Paratik Gawade",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    comment: "Thank you all for the amazing memories. We shared so many adventures and had a lot of fun together. If I had to talk about any low points or mistakes from the management team, I honestly have nothing to say — everything was well planned from start to finish. Once again, thank you for adding another unforgettable adventure to my life.",
    destination: "Rajgad trek"
  },
  {
    id: 2,
    name: "Rahul Dhayalkar",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    comment: "Pratik, Aryan & Team well execution and well planning about all trek and well support. The memories and trek was unforgettable❤️🫂✨Keep it up guys🙌🏻",
    destination: "Rajgad trek"
  },
   {
    id: 3,
    name: "unknown traveler",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    comment: "Thanks pratik and all the team trek was very nice Something new was experienced 🌍❤️",
    destination: "Rajgad trek"
  },
    {
    id: 4,
    name: "unknown traveler",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    comment: "Thanks pratik and all the team trek was very nice Something new was experienced 🌍❤️",
    destination: "Rajgad trek"
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
              <div className="card h-100 border-0 shadow">
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