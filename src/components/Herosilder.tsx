'use client'; // Mark this file as a client-side component

import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import Carousel from 'react-bootstrap/Carousel';

const HeroSlider: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
  ];

  return (
    <div className="container mt-4">
      <Carousel>
        {images.map((src, index) => (
          <Carousel.Item key={index}>
            <div className="position-relative bg-light rounded overflow-hidden" style={{ height: '400px' }}>
              <Image
                src={src}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="cover"
                className="w-100 h-100 object-fit-cover"
              />
              <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <h1 className="display-4 fw-bold">Discover the Hidden Gems of Konkan</h1>
                <div className="mt-3">
                  <button className="btn btn-primary me-2">Plan Your Trip</button>
                  <button className="btn btn-light">Explore Business Listings</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;