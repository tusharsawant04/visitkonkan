'use client';

import React, { useState } from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './discover.css';

const Discover = () => {
  const [view, setView] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const topPlaces = [
    { name: 'Ganpatipule Beach', description: 'A beautiful beach with a famous Ganpati temple.', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', category: 'beach', rating: 4.5 },
    { name: 'Sindhudurg Fort', description: 'A historical fort located on a rocky island.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', category: 'fort', rating: 4.7 },
    { name: 'Ratnagiri', description: 'A port city known for its beaches and historical sites.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', category: 'beach', rating: 4.3 },
    { name: 'Murud Beach', description: 'A serene beach with clear waters and soft sand.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', category: 'beach', rating: 4.4 },
    { name: 'Dapoli', description: 'A hill station with beautiful beaches and temples.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', category: 'hill station', rating: 4.6 },
    { name: 'Alibaug', description: 'A coastal town known for its beaches and forts.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', category: 'beach', rating: 4.2 },
    { name: 'Harihareshwar', description: 'A town known for its ancient temples and beaches.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', category: 'temple', rating: 4.5 },
    { name: 'Tarkarli', description: 'A beach destination known for its clear waters and water sports.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', category: 'beach', rating: 4.8 },
    { name: 'Diveagar', description: 'A beach village known for its serene environment.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', category: 'beach', rating: 4.1 },
    { name: 'Velas Beach', description: 'A beach known for its turtle festival.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', category: 'beach', rating: 4.3 },
  ];

  const filteredPlaces = topPlaces.filter(place => 
    (category === 'all' || place.category === category) &&
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="discover-page">
        {/* Hero Section with Parallax */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-section"
        >
          <div className="hero-content">
            <h1 className="hero-title">Discover Kokan&apos;s Magic</h1>
            <p className="hero-subtitle">Where Nature Meets Heritage</p>
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search your dream destination..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                className="category-select"
              >
                <option value="all">All Categories</option>
                <option value="beach">Beaches</option>
                <option value="fort">Forts</option>
                <option value="waterfall">Waterfalls</option>
                <option value="trekking">Trekking Spots</option>
              </select>
            </div>
          </div>
        </motion.section>

        {/* Destinations Grid */}
        <section className="destinations-section">
          <div className="container">
            <div className="section-header">
              <h2>Popular Destinations</h2>
              <button 
                className="view-toggle-btn"
                onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
              >
                <i className={`fas fa-${view === 'grid' ? 'list' : 'grid'}`}></i>
              </button>
            </div>
            <motion.div 
              className={`destinations-grid ${view}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {filteredPlaces.map((place, index) => (
                <motion.div
                  key={index}
                  className="destination-card"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={`/PlaceInformation?place=${place.name}`}>
                    <div className="card-image">
                      <Image 
                        src={place.imageUrl} 
                        alt={place.name}
                        width={400}
                        height={300}
                        layout="responsive"
                      />
                      <div className="card-category">{place.category}</div>
                      <div className="card-rating">
                        <span>★</span> {place.rating}
                      </div>
                    </div>
                    <div className="card-content">
                      <h3>{place.name}</h3>
                      <p>{place.description}</p>
                      <button className="explore-btn">Explore More</button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <div className="container">
            <h2>Unique Experiences</h2>
            <div className="experience-grid">
              {['Cultural Tours', 'Adventure Sports', 'Local Cuisine', 'Heritage Walks'].map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3>{exp}</h3>
                  <p>Discover the authentic essence of Kokan</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready for Your Kokan Adventure?</h2>
            <p>Plan your perfect getaway today</p>
            <button className="cta-button">Start Planning</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Discover;