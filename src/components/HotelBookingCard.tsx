'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './HotelBookingCard.css';

interface BookingPreferences {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: {
    adults: number;
    children: number;
  };
  priceRange: string;
  amenities: string[];
}

interface HotelBookingCardProps {
  isOpen: boolean;
  onSubmit: (preferences: BookingPreferences) => void;
}

const HotelBookingCard: React.FC<HotelBookingCardProps> = ({ isOpen, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<BookingPreferences>({
    location: '',
    checkIn: null,
    checkOut: null,
    guests: {
      adults: 1,
      children: 0
    },
    priceRange: '0-5000',
    amenities: []
  });

  const locations = [
    'Ganpatipule',
    'Ratnagiri',
    'Tarkarli',
    'Malvan',
    'Vengurla'
  ];

  const amenitiesList = [
    'Wi-Fi',
    'Swimming Pool',
    'Restaurant',
    'Beach Access',
    'AC',
    'Sea View'
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  if (!isOpen) return null;

  return (
    <div className="hotel-booking-card">
      <div className="booking-steps">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>Location</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>Dates</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>Details</div>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        {step === 1 && (
          <div className="step-content location-step">
            <h3>Where would you like to stay?</h3>
            <div className="location-grid">
              {locations.map(location => (
                <button
                  key={location}
                  type="button"
                  className={`location-btn ${preferences.location === location ? 'selected' : ''}`}
                  onClick={() => {
                    setPreferences({...preferences, location});
                    handleNext();
                  }}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step-content dates-step">
            <h3>When are you planning to visit?</h3>
            <div className="dates-container">
              <div className="date-picker-wrapper">
                <label>Check In</label>
                <DatePicker
                  selected={preferences.checkIn}
                  onChange={(date) => setPreferences({...preferences, checkIn: date})}
                  minDate={new Date()}
                  placeholderText="Select check-in date"
                />
              </div>
              <div className="date-picker-wrapper">
                <label>Check Out</label>
                <DatePicker
                  selected={preferences.checkOut}
                  onChange={(date) => setPreferences({...preferences, checkOut: date})}
                  minDate={preferences.checkIn || new Date()}
                  placeholderText="Select check-out date"
                />
              </div>
            </div>
            <div className="guests-container">
              <div className="guests-input">
                <label>Adults</label>
                <input
                  type="number"
                  min="1"
                  value={preferences.guests.adults}
                  onChange={(e) => setPreferences({
                    ...preferences,
                    guests: {...preferences.guests, adults: parseInt(e.target.value)}
                  })}
                />
              </div>
              <div className="guests-input">
                <label>Children</label>
                <input
                  type="number"
                  min="0"
                  value={preferences.guests.children}
                  onChange={(e) => setPreferences({
                    ...preferences,
                    guests: {...preferences.guests, children: parseInt(e.target.value)}
                  })}
                />
              </div>
            </div>
            <button type="button" className="next-btn" onClick={handleNext}>
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="step-content details-step">
            <h3>Additional Preferences</h3>
            <div className="preferences-container">
              <div className="price-range">
                <label>Price Range per Night</label>
                <select
                  value={preferences.priceRange}
                  onChange={(e) => setPreferences({...preferences, priceRange: e.target.value})}
                >
                  <option value="0-5000">Under ₹5,000</option>
                  <option value="5000-10000">₹5,000 - ₹10,000</option>
                  <option value="10000-15000">₹10,000 - ₹15,000</option>
                  <option value="15000+">Above ₹15,000</option>
                </select>
              </div>
              
              <div className="amenities">
                <label>Required Amenities</label>
                <div className="amenities-grid">
                  {amenitiesList.map(amenity => (
                    <label key={amenity} className="amenity-checkbox">
                      <input
                        type="checkbox"
                        checked={preferences.amenities.includes(amenity)}
                        onChange={(e) => {
                          const newAmenities = e.target.checked
                            ? [...preferences.amenities, amenity]
                            : preferences.amenities.filter(a => a !== amenity);
                          setPreferences({...preferences, amenities: newAmenities});
                        }}
                      />
                      {amenity}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="form-actions">
              <button type="button" className="back-btn" onClick={handleBack}>
                Back
              </button>
              <button type="submit" className="submit-btn">
                Find Hotels
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default HotelBookingCard;