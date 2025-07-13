'use client'; // Mark this file as a client-side component

import React, { useState } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import Carousel from 'react-bootstrap/Carousel';
import TripPlanningCard from './TripPlanningCard';
import './Heroslider.css'; // Create this file for custom styles
import RecommendedTrips from './RecommendedTrips'; // Create this new component
import Link from 'next/link';
import HotelBookingCard from './HotelBookingCard';
import RecommendedHotels from './RecommendedHotels';

// Define a type for trip preferences
type TripPreferences = {
  destination: string;
  budget: number;
  activities: string[];
};

// Define a type for trips


const HeroSlider: React.FC = () => {
  const [showPlanCard, setShowPlanCard] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [tripPreferences, setTripPreferences] = useState<TripPreferences | null>(null);
  const [showHotelCard, setShowHotelCard] = useState(false);
  const [showHotelRecommendations, setShowHotelRecommendations] = useState(false);

  // ✅ Define a proper Preferences type
  type Preferences = {
    priceRange: string;
    amenities: string[];
  };

  const [hotelPreferences, setHotelPreferences] = useState<Preferences | null>(null);

  const images = [
  "https://drive.google.com/uc?export=view&id=1SjPJoSnNM-j8Cg_SP1iWuJWDjHSzvU2j",
  "https://drive.google.com/uc?export=view&id=1SHOtYaCIrqcwQuTy42C9VOjXgJVs0fLu",
  "https://drive.google.com/uc?export=view&id=1StNEcU4a8SdGroPoBv311pbk7uEwcW-8",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
];

  const togglePlanCard = () => {
    setShowPlanCard(!showPlanCard);
    setShowHotelCard(false); // Close the hotel booking card when opening trip planning card
    if (!showPlanCard) {
      setShowRecommendations(false); // Reset recommendations when opening new plan
    }
  };

  const handlePlanSubmit = (tripDetails: {
    destination: string;
    tripType: string;
    budget: string;
    startDate: Date | null;
    endDate: Date | null;
  }) => {
    const preferences: TripPreferences = {
      destination: tripDetails.destination,
      budget: parseFloat(tripDetails.budget),
      activities: [], // Add logic to populate activities if needed
    };
    setTripPreferences(preferences);
    setShowRecommendations(true);
  };

  const toggleHotelCard = () => {
    setShowHotelCard(!showHotelCard);
    setShowPlanCard(false); // Close the trip planning card when opening hotel booking card
    if (!showHotelCard) {
      setShowHotelRecommendations(false);
    }
  };

  const handleHotelSubmit = (preferences: Preferences) => {
    setHotelPreferences(preferences);
    setShowHotelRecommendations(true);
  };

  return (
    <>
      <div className="hero-container position-relative mb-5">
        <Carousel className="hero-slider">
          {images.map((src, index) => (
            <Carousel.Item key={index}>
              <div className="position-relative bg-light  overflow-hidden" style={{ height: '500px' }}>
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-100 h-100 object-fit-cover"
                />
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                  <h1 className="display-4 fw-bold mb-4">Discover the Hidden Gems of Konkan</h1>
                  <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                    <button 
                      className="btn btn-primary px-4"
                      onClick={togglePlanCard}
                    >
                      {showPlanCard ? 'Close Planner' : 'Start Planning'}
                    </button>
                    <button 
                      className="btn btn-outline-light"
                      onClick={toggleHotelCard}
                    >
                      {showHotelCard ? 'Close Booking' : 'Book Hotel'}
                    </button>
                    <button className="btn btn-light">Explore Listings</button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="planning-card-wrapper">
          {showPlanCard && (
            <TripPlanningCard 
              isOpen={showPlanCard} 
              onSubmit={handlePlanSubmit}
            />
          )}
          {showHotelCard && (
            <HotelBookingCard 
              isOpen={showHotelCard} 
              onSubmit={handleHotelSubmit}
            />
          )}
        </div>
      </div>

      {showRecommendations && (
        <section className="recommendations-section py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center mb-4">Recommended Trips for You</h2>
                <RecommendedTrips 
                  trips={tripPreferences ? [{
                    id: 1, // Provide a unique ID as a number
                    name: tripPreferences.destination,
                    duration: '3 days', // Add a default or calculated duration
                    price: tripPreferences.budget,
                    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', // Add a placeholder or actual image URL
                    rating: 4.5, // Provide a default or calculated rating
                  }] : []} 
                />
                
                <div className="d-flex justify-content-center gap-3 mt-5">
                  <Link href="/trips" className="btn btn-outline-primary px-4 py-2">
                    View All Trips
                  </Link>
                  <Link href="/customize-trip" className="btn btn-primary px-4 py-2">
                    Customize Your Trip
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {showHotelRecommendations && (
        <section className="recommendations-section py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center mb-4">Recommended Hotels for You</h2>
                {/* ✅ Fix: Ensure a valid Preferences object is passed */}
                <RecommendedHotels preferences={hotelPreferences ?? { priceRange: '', amenities: [] }} hotels={[]} />
                
                <div className="d-flex justify-content-center gap-3 mt-5">
                  <Link href="/hotels" className="btn btn-outline-primary px-4 py-2">
                    View All Hotels
                  </Link>
                  <Link href="/customize-booking" className="btn btn-primary px-4 py-2">
                    Customize Booking
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroSlider;
