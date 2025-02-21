'use client'; // Mark this file as a client-side component

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const HeroSlider: React.FC = () => {


  return (

    <div className="container mt-4">
    <div className="position-relative bg-light rounded overflow-hidden" style={{ height: '400px' }}>
      <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Konkan Beach" className="w-100 h-100 object-fit-cover" />
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="display-4 fw-bold">Discover the Hidden Gems of Konkan</h1>
        <div className="mt-3">
          <button className="btn btn-primary me-2">Plan Your Trip</button>
          <button className="btn btn-light">Explore Business Listings</button>
        </div>
      </div>
    </div>
  </div>

  
  );
};

export default HeroSlider;
