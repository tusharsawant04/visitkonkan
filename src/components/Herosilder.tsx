'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import TripPlanningCard from './TripPlanningCard';
import './Heroslider.css';
import RecommendedTrips from './RecommendedTrips';
import Link from 'next/link';
import HotelBookingCard from './HotelBookingCard';
import RecommendedHotels from './RecommendedHotels';

type TripPreferences = {
  destination: string;
  budget: number;
  activities: string[];
};

type Preferences = {
  priceRange: string;
  amenities: string[];
};

const HeroSlider: React.FC = () => {
  const [showPlanCard, setShowPlanCard] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [tripPreferences, setTripPreferences] = useState<TripPreferences | null>(null);
  const [showHotelCard, setShowHotelCard] = useState(false);
  const [showHotelRecommendations, setShowHotelRecommendations] = useState(false);
  const [hotelPreferences, setHotelPreferences] = useState<Preferences | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const slides = [
    {
      image: "https://drive.google.com/uc?export=view&id=1kmd4iTl65vd5xtMkKt0KRhpU1TzTpx33",
      title: "Discover Pristine Beaches",
      subtitle: "Experience the untouched beauty of Konkan's coastline",
      accent: "150+ Beaches"
    },
    {
      image: "https://drive.google.com/uc?export=view&id=1SHOtYaCIrqcwQuTy42C9VOjXgJVs0fLu",
      title: "Ancient Forts & Heritage",
      subtitle: "Journey through centuries of history",
      accent: "50+ Historical Sites"
    },
    {
      image: "https://drive.google.com/uc?export=view&id=1-PK_gvDLgte6vS9Sy0xjMESn2ZaOcx9G",
      title: "Authentic Local Cuisine",
      subtitle: "Savor the flavors of coastal Maharashtra",
      accent: "100+ Delicacies"
    },
    {
      image: "https://drive.google.com/uc?export=view&id=1Gq3k3hZD10Ij8UF7j2Kx1Uz5P3fWIJ1w",
      title: "Adventure Awaits",
      subtitle: "From water sports to mountain treks",
      accent: "50+ Activities"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlanCard = () => {
    setShowPlanCard(!showPlanCard);
    setShowHotelCard(false);
    if (!showPlanCard) {
      setShowRecommendations(false);
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
      activities: [],
    };
    setTripPreferences(preferences);
    setShowRecommendations(true);
  };

  const toggleHotelCard = () => {
    setShowHotelCard(!showHotelCard);
    setShowPlanCard(false);
    if (!showHotelCard) {
      setShowHotelRecommendations(false);
    }
  };

  const handleHotelSubmit = (preferences: Preferences) => {
    setHotelPreferences(preferences);
    setShowHotelRecommendations(true);
  };

  const handleSlideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('.hero-cta-group') || target.closest('.hero-accent-badge')) {
      return;
    }

    const clickX = e.clientX;
    const windowWidth = window.innerWidth;
    
    if (clickX < windowWidth / 2) {
      const prevIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
      setActiveIndex(prevIndex);
    } else {
      const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  };

  const quickLinks = [
    { icon: "🏖️", label: "Beaches", href: "/beaches" },
    { icon: "🏰", label: "Forts", href: "/forts" },
    { icon: "🍽️", label: "Cuisine", href: "/cuisine" },
    { icon: "🎒", label: "Adventures", href: "/adventures" }
  ];

  return (
    <>
      <div className="hero-wrapper">
        {/* Enhanced Navigation Overlay */}
        <div className={`hero-nav-overlay ${isScrolled ? 'scrolled' : ''}`}>
          <div className="container">
            <div className="hero-nav-content">
              <div className="d-flex align-items-center justify-content-center">
                {quickLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} className="quick-link-item">
                    <span className="quick-link-icon">{link.icon}</span>
                    <span className="quick-link-label">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Hero Carousel */}
        <Carousel 
          className="hero-carousel-enhanced"
          activeIndex={activeIndex}
          onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
          controls={false}
          indicators={false}
          interval={4000}
          fade={false}
          touch={true}
        >
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="hero-slide-wrapper" onClick={handleSlideClick}>
                {/* Background Image with Parallax Effect */}
                <div className="hero-image-container">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                    className="hero-image"
                  />
                  <div className="hero-overlay"></div>
                  <div className="hero-gradient"></div>
                </div>

                {/* Content Overlay */}
                <div className="hero-content">
                  <div className="container">
                    <div className="hero-content-inner">
                      <div className="hero-accent-badge">
                        <span className="accent-pulse"></span>
                        {slide.accent}
                      </div>
                      <h1 className="hero-title">
                        <span className="title-line">{slide.title}</span>
                      </h1>
                      <p className="hero-subtitle">{slide.subtitle}</p>
                      
                      {/* CTA Buttons */}
                      <div className="hero-cta-group">
                        <Link href="experiences">
                      <button className="btn-hero btn-hero-primary">
                        <span className="btn-text">Plan Your Trip</span>
                        <span className="btn-icon">→</span>
                      </button>
                    </Link>

                      <Link  href='discover'>
                        <button 
                          className="btn-hero btn-hero-secondary" 
                        >
                         
                          <span className="btn-text">Explore Destination</span>
                          <span className="btn-icon">🏨</span>
                        </button>
                          </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Custom Dot Indicators */}
        {/* <div className="custom-carousel-indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`custom-indicator ${activeIndex === idx ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div> */}

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </div>

        {/* Floating Action Cards */}
        <div className={`planning-cards-container ${showPlanCard || showHotelCard ? 'active' : ''}`}>
          {showPlanCard && (
            <div className="planning-card-backdrop" onClick={togglePlanCard}>
              <div className="planning-card-content" onClick={(e) => e.stopPropagation()}>
                <button className="card-close-btn" onClick={togglePlanCard}>×</button>
                <TripPlanningCard 
                  isOpen={showPlanCard} 
                  onSubmit={handlePlanSubmit}
                />
              </div>
            </div>
          )}
          {showHotelCard && (
            <div className="planning-card-backdrop" onClick={toggleHotelCard}>
              <div className="planning-card-content" onClick={(e) => e.stopPropagation()}>
                <button className="card-close-btn" onClick={toggleHotelCard}>×</button>
                <HotelBookingCard 
                  isOpen={showHotelCard} 
                  onSubmit={handleHotelSubmit}
                />
              </div>
            </div>
          )}
        </div>
      </div>

    

      {/* Recommendations Sections */}
      {showRecommendations && (
        <section className="recommendations-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Your Perfect Konkan Journey</h2>
              <p className="section-subtitle">Handpicked experiences just for you</p>
            </div>
            <RecommendedTrips 
              trips={tripPreferences ? [{
                id: 1,
                name: tripPreferences.destination,
                duration: '3 days',
                price: tripPreferences.budget,
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
                rating: 4.5,
              }] : []} 
            />
            
            <div className="section-cta">
              <Link href="/trips" className="btn-section btn-section-outline">
                Browse All Trips
              </Link>
              <Link href="/customize-trip" className="btn-section btn-section-filled">
                Create Custom Trip
              </Link>
            </div>
          </div>
        </section>
      )}

      {showHotelRecommendations && (
        <section className="recommendations-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Handpicked Accommodations</h2>
              <p className="section-subtitle">From luxury resorts to cozy homestays</p>
            </div>
            <RecommendedHotels 
              preferences={hotelPreferences ?? { priceRange: '', amenities: [] }} 
              hotels={[]} 
            />
            
            <div className="section-cta">
              <Link href="/hotels" className="btn-section btn-section-outline">
                View All Hotels
              </Link>
              <Link href="/customize-booking" className="btn-section btn-section-filled">
                Find Your Stay
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroSlider;