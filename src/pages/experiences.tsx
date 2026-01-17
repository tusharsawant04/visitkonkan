'use client';

import React, { useState } from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import './experiences.css';

const Experiences = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const experienceCategories = [
    { id: 'all', label: 'All Experiences', icon: '🌟' },
    { id: 'trekking', label: 'Trekking', icon: '🏔️' },
    { id: 'beach', label: 'Beach', icon: '🏖️' },
    { id: 'cultural', label: 'Cultural', icon: '🎭' },
    { id: 'adventure', label: 'Adventure', icon: '🎒' },
    { id: 'water', label: 'Water Sports', icon: '🌊' }
  ];

  const allExperiences = [
    // Trekking Experiences
    {
      id: 1,
      category: 'trekking',
      title: 'Ekvira Devi & Lohagad Trek',
      slug: 'ekvira-lohagad-trek',
      description: 'Seek blessings at the sacred Ekvira Devi Temple and trek through the lush trails of Lohagad Fort, where history meets breathtaking valley views.',
      image: 'https://drive.google.com/uc?export=view&id=16qBbYmiWXB-QIjkVPHcd3fyfASs2McHs',
      duration: '6-7 hours',
      difficulty: 'Moderate',
      rating: '4.7',
      price: '₹1,200'
    },
    {
      id: 2,
      category: 'trekking',
      title: 'Rajgad Trek',
      slug: 'rajgad-trek',
      description: 'Walk the ancient paths of Shivaji Maharaj capital — where clouds kiss the fort and sunrise paints history in gold.',
      image: 'https://drive.google.com/uc?export=view&id=1SnkUiDSySSG-vn8wX5VwIDYvOVMHlc1D',
      duration: '5-6 hours',
      difficulty: 'Moderate',
      rating: '5.0',
      price: '₹1,500'
    },
    {
      id: 3,
      category: 'trekking',
      title: 'Raigad Trek',
      slug: 'raigad-trek',
      description: 'Climb the steps of history at Raigad Fort — the coronation site of Chhatrapati Shivaji Maharaj.',
      image: 'https://images.unsplash.com/photo-1589644873574-345111273e9b?q=80&w=648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '4-5 hours',
      difficulty: 'Easy to Moderate',
      rating: '4.9',
      price: '₹1,000'
    },
    {
      id: 4,
      category: 'trekking',
      title: 'Naneghat Trek',
      slug: 'naneghat-trek',
      description: 'Trek through ancient trade routes with breathtaking valley views and rock-carved inscriptions.',
      image: 'https://drive.google.com/uc?export=view&id=1crq4Aou-bP6PljkOl1l6Bg6EfGWu8yh1',
      duration: '5-6 hours',
      difficulty: 'Moderate',
      rating: '4.8',
      price: '₹1,300'
    },
    {
      id: 5,
      category: 'trekking',
      title: 'Harishchandragad Trek',
      slug: 'harishchandragad-trek',
      description: 'Embark on a thrilling journey to Harishchandragad, where towering cliffs, ancient caves, and the majestic Konkan Kada await your discovery.',
      image: 'https://drive.google.com/uc?export=view&id=1csHSPKheA-tkjdyfbYhjrc_n1qEMT-of',
      duration: '7-8 hours',
      difficulty: 'Challenging',
      rating: '4.8',
      price: '₹1,800'
    },
    // Beach Experience
    {
      id: 6,
      category: 'beach',
      title: 'Malvan Beach Getaway',
      slug: 'malvan-beach-getaway',
      description: 'Relax on the sun-kissed beaches of Malvan, explore the historic Sindhudurg Fort, and dive into crystal-clear waters with snorkeling and scuba adventures.',
      image: 'https://drive.google.com/uc?export=view&id=1dOdMOwxsGVadDuOC4HdayuaFIZMmzDPe',
      duration: 'Full Day',
      difficulty: 'Easy',
      rating: '4.6',
      price: '₹2,500'
    },
    // Adventure Activities
    {
      id: 7,
      category: 'adventure',
      title: 'Trekking Adventures',
      description: 'Explore scenic trails through lush forests and coastal hills',
      image: 'https://drive.google.com/uc?export=view&id=1rvWDWdkZ7gf5e3NrTaQC5vuQKodQGvdE',
      duration: '4-6 hours',
      difficulty: 'Moderate',
      rating: '4.5',
      price: '₹1,500'
    },
    {
      id: 8,
      category: 'water',
      title: 'Scuba Diving',
      description: 'Dive into the crystal-clear underwater world of Konkan',
      image: 'https://drive.google.com/uc?export=download&id=1VF7j6xnZ2SJC6kWLj6XsBa4uXMCsM8cw',
      duration: '3-4 hours',
      difficulty: 'Beginner Friendly',
      rating: '4.7',
      price: '₹3,500'
    },
    {
      id: 9,
      category: 'adventure',
      title: 'Paragliding',
      description: 'Experience breathtaking aerial views of the coastline',
      image: 'https://drive.google.com/uc?export=view&id=1qKumBBfqRYIWEsHrL0c5mwTqZ9d3q_H_',
      duration: '30-45 min',
      difficulty: 'Easy',
      rating: '4.8',
      price: '₹2,500'
    },
    // Cultural Experiences
    {
      id: 10,
      category: 'cultural',
      title: 'Jatra',
      description: 'Experience the lively and colorful local festivals',
      image: 'https://drive.google.com/uc?export=view&id=1GLuqHs21-HignO5hmNyGaTJfSC-cIj_o',
      duration: 'Full Day',
      difficulty: 'Easy',
      rating: '4.6',
      price: 'Free'
    },
    {
      id: 11,
      category: 'cultural',
      title: 'Ancient Temples',
      description: 'Visit centuries-old temples with stunning architecture',
      image: 'https://drive.google.com/uc?export=view&id=1sEX0IxXG2xKsGls_miemBwWE-XgedoAs',
      duration: '2-3 hours',
      difficulty: 'Easy',
      rating: '4.7',
      price: '₹500'
    },
    {
      id: 12,
      category: 'cultural',
      title: 'Local Festivals',
      description: 'Immerse yourself in vibrant traditional celebrations',
      image: 'https://drive.google.com/uc?export=view&id=1iw-WlvIErKoFRCLCqSDedAbczsPS2AdT',
      duration: 'Half Day',
      difficulty: 'Easy',
      rating: '4.5',
      price: 'Varies'
    }
  ];

  const filteredExperiences = activeCategory === 'all' 
    ? allExperiences 
    : allExperiences.filter(exp => exp.category === activeCategory);

  return (
    <Layout>
      <div className="experiences-page">
        {/* Hero Section */}
        <section className="experiences-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content-wrapper">
            <div className="container">
              <div className="hero-text-content">
                <h1 className="hero-main-title">Unforgettable Experiences</h1>
                <p className="hero-subtitle">Discover adventure, culture, and the authentic flavors of Konkan</p>
                <div className="hero-stats">
                  <div className="stat-box">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Activities</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">100+</span>
                    <span className="stat-label">Happy Travelers</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">4.8★</span>
                    <span className="stat-label">Average Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="category-filter-section">
          <div className="container">
            <div className="category-filter-wrapper">
              {experienceCategories.map(category => (
                <button
                  key={category.id}
                  className={`category-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-label">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Experiences Grid */}
        <section className="experiences-grid-section">
          <div className="container">
            <div className="section-header-modern">
              <h2 className="section-title-modern">
                {activeCategory === 'all' ? 'All Experiences' : experienceCategories.find(c => c.id === activeCategory)?.label}
              </h2>
              <p className="section-subtitle-modern">
                Curated experiences to make your Konkan journey memorable
              </p>
            </div>

            <div className="experiences-grid">
              {filteredExperiences.map(experience => (
                <div key={experience.id} className="experience-card">
                  <div className="experience-image-wrapper">
                    <Image 
                      src={experience.image} 
                      width={400} 
                      height={300} 
                      className="experience-image" 
                      alt={experience.title}
                    />
                    <div className="experience-overlay">
                      {experience.slug ? (
                        <Link href={`/${experience.slug}`}>
                          <button className="quick-view-btn">View Details</button>
                        </Link>
                      ) : (
                        <button className="quick-view-btn">View Details</button>
                      )}
                    </div>
                    <div className="experience-badge">{experience.difficulty}</div>
                    <div className="experience-rating">⭐ {experience.rating}</div>
                  </div>
                  <div className="experience-content">
                    <h3 className="experience-title">{experience.title}</h3>
                    <p className="experience-description">{experience.description}</p>
                    
                    <div className="experience-meta">
                      <div className="meta-item">
                        <span className="meta-icon">⏱️</span>
                        <span className="meta-text">{experience.duration}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">💰</span>
                        <span className="meta-text">{experience.price}</span>
                      </div>
                    </div>

                    {experience.slug ? (
                      <Link href={`/${experience.slug}`}>
                        <button className="book-experience-btn">
                          Explore Experience
                          <span className="btn-arrow">→</span>
                        </button>
                      </Link>
                    ) : (
                      <button className="book-experience-btn">
                        Book Now
                        <span className="btn-arrow">→</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section-experiences">
          <div className="container">
            <div className="cta-content-box">
              <h2 className="cta-title">Ready to Start Your Adventure?</h2>
              <p className="cta-subtitle">Plan your perfect Konkan experience with our expert guidance</p>
              <div className="cta-buttons">
                <Link href="/">
                  <button className="cta-btn cta-btn-primary">
                    Explore More
                    <span className="btn-icon">✈️</span>
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="cta-btn cta-btn-secondary">
                    Contact Us
                    <span className="btn-icon">💬</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Experiences;