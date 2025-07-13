'use client';

import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './discover.css';

// Define the Place type for better type safety
interface Place {
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  rating: number;
}

const topPlaces: Place[] = [
  { 
    name: 'Ganpatipule Beach', 
    description: 'A beautiful beach with a famous Ganpati temple.', 
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', 
    category: 'beach', 
    rating: 4.5 
  },
  { 
    name: 'Sindhudurg Fort', 
    description: 'A historical fort located on a rocky island.', 
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', 
    category: 'fort', 
    rating: 4.7 
  },
  { 
    name: 'Ratnagiri', 
    description: 'A port city known for its beaches and historical sites.', 
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', 
    category: 'beach', 
    rating: 4.3 
  }
];

const Discover = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [view, setView] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setPlaces(topPlaces);
  }, []);

  const filteredPlaces = places.filter(place => 
    (category === 'all' || place.category === category) &&
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isClient) {
    return null; // or a loading state
  }

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
                      <p className="mb-1">{place.description}
                        <Link 
                          href={`/PlaceInformation?place=${place.name}`}
                          className="text-primary text-decoration-none ms-1"
                        >
                          Read More →
                        </Link>
                      </p>
                      <div className="d-flex justify-content-start mt-3">
                        <Link href={`/PlanTrip?place=${place.name}`}>
                          <button className="btn btn-primary">Plan Trip</button>
                        </Link>
                      </div>
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