'use client';

import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import placesData from '../data/places_card.json';
import './discover.css';

interface Place {
  id: number;
  name: string;
  short_desc: string;
  image_url: string;
  category: string;
  rating: number;
  slug: string;
}

const Discover = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setPlaces(placesData);
  }, []);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src =
      'https://via.placeholder.com/400x300.png?text=Konkan+Destination';
  };

  const filteredPlaces = places.filter(
    (place) =>
      (category === 'all' ||
        place.category.toLowerCase().includes(category.toLowerCase())) &&
      place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isClient) return null;

  return (
    <Layout>
      <div className="discover-page">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-section-modern text-center"
        >
          <div className="hero-content">
            <h1 className="hero-title display-4 fw-bold">
              Discover the Beauty of Konkan
            </h1>
            <p className="hero-subtitle lead">
              Explore 100+ scenic beaches, forts, temples, and hidden gems
            </p>

            <div className="search-filter-bar mt-4">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input-modern"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="category-select-modern"
              >
                <option value="all">All Categories</option>
                <option value="beach">Beaches</option>
                <option value="fort">Forts</option>
                <option value="hill">Hill Stations</option>
                <option value="temple">Temples</option>
                <option value="waterfall">Waterfalls</option>
              </select>
            </div>
          </div>
        </motion.section>

        {/* Destination Cards Grid */}
        <section className="destinations-section-modern py-5">
          <div className="container">
            <h2 className="section-title text-center fw-semibold mb-5">
              Explore All Destinations
            </h2>

            <div className="row g-4">
              {filteredPlaces.map((place) => (
                <motion.div
                  key={place.id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="destination-card-modern shadow-sm border-0 rounded-4 overflow-hidden h-100">
                    <Link
                      href={`/discover/${place.slug}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="position-relative">
                        <Image
                          src={place.image_url || ''}
                          alt={place.name}
                          width={400}
                          height={300}
                          className="img-fluid destination-img"
                          onError={handleImageError}
                        />
                        <div className="category-badge">
                          {place.category}
                        </div>
                        <div className="rating-badge">
                          ⭐ {place.rating.toFixed(1)}
                        </div>
                      </div>

                      <div className="p-3">
                        <h5 className="fw-bold mb-1">{place.name}</h5>
                        <p className="text-muted small mb-2">
                          {place.short_desc.length > 80
                            ? place.short_desc.slice(0, 80) + '...'
                            : place.short_desc}
                        </p>
                        <span className="text-primary fw-semibold small">
                          Read More →
                        </span>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredPlaces.length === 0 && (
              <div className="text-center py-5 text-muted">
                <h5>No destinations found.</h5>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-modern text-center py-5">
          <div className="container">
            <h2 className="fw-bold">Plan Your Perfect Konkan Getaway</h2>
            <p className="lead text-muted mb-3">
              Find your next adventure across beaches, forts, and more.
            </p>
            <button className="btn btn-primary btn-lg rounded-pill">
              Start Planning
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Discover;
