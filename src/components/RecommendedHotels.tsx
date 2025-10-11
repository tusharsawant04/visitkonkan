'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './RecommendedHotels.css';

interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  price: string;
  rating: number;
  amenities: string[];
  type: string;
}

interface Preferences {
  priceRange: string;
  location?: string;
  amenities: string[];
}

const RecommendedHotels: React.FC<{ hotels: Hotel[], preferences: Preferences }> = ({ hotels, preferences }) => {
  // Filter hotels based on preferences
  const filteredHotels = hotels.filter(hotel => {
    if (!preferences) return true;
    
    const priceMatch = hotel.price.includes(preferences.priceRange);
    const locationMatch = !preferences.location || hotel.location === preferences.location;
    const amenitiesMatch = preferences.amenities.every((amenity: string) => 
      hotel.amenities.includes(amenity)
    );
    
    return priceMatch && locationMatch && amenitiesMatch;
  });

  return (
    <div className="recommended-hotels">
      <div className="hotels-grid">
        {filteredHotels.map((hotel, index) => (
          <motion.div
            key={hotel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="hotel-card"
          >
            <div className="hotel-image-wrapper">
              <Image
                src={hotel.image}
                alt={hotel.name}
                width={400}
                height={300}
                className="hotel-image"
              />
              <span className="hotel-type">{hotel.type}</span>
              <div className="hotel-price">{hotel.price}<span>/night</span></div>
            </div>
            
            <div className="hotel-content">
              <div className="hotel-header">
                <h3 className="hotel-name">{hotel.name}</h3>
                <div className="hotel-rating">
                  <span className="star">⭐</span>
                  {hotel.rating.toFixed(1)}
                </div>
              </div>
              
              <p className="hotel-location">
                <i className="bi bi-geo-alt"></i> {hotel.location}
              </p>
              
              <div className="hotel-amenities">
                {hotel.amenities.map(amenity => (
                  <span key={amenity} className="amenity-tag">
                    {amenity}
                  </span>
                ))}
              </div>
              
              <div className="hotel-actions">
                <Link href={`/hotels/${hotel.id}`} className="view-details-btn">
                  View Details
                </Link>
                <button className="btn btn-lg text-white"
                style={{
                  background: "linear-gradient(135deg, #1CA9C9, #005f73)",
                  borderRadius: "8px",
                  fontWeight: "500",
                  padding: "8px 16px",
                  fontSize: "15px"
                }}>
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {filteredHotels.length === 0 && (
        <div className="no-results">
          <h3>No hotels match your preferences</h3>
          <p>Try adjusting your filters or browse all hotels</p>
        </div>
      )}
    </div>
  );
};

export default RecommendedHotels;