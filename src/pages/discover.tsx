'use client';

import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import placesData from '../data/places_card.json';
import './discoverplaces.css';

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

  useEffect(() => {
    setPlaces(placesData);
  }, []);

  const filteredPlaces = places.filter(
    (place) =>
      (category === 'all' ||
        place.category.toLowerCase().includes(category.toLowerCase())) &&
      place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="discover-modern">

        {/* HERO */}
        <section className="hero-modern d-flex align-items-center text-center">
          <div className="container position-relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="fw-bold display-4 text-white"
            >
              Discover Konkan Like Never Before
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lead text-light mt-3"
            >
              Beaches · Forts · Temples · Hidden Gems
            </motion.p>

            {/* SEARCH CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="search-glass mt-5 mx-auto"
            >
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All</option>
                <option value="beach">Beaches</option>
                <option value="fort">Forts</option>
                <option value="hill">Hill Stations</option>
                <option value="temple">Temples</option>
                <option value="waterfall">Waterfalls</option>
              </select>
            </motion.div>
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center fw-semibold mb-5">
              Explore Destinations
            </h2>

            <div className="row g-4">
              {filteredPlaces.map((place) => (
                <motion.div
                  key={place.id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  whileHover={{ y: -8 }}
                >
                  <Link
                    href={`/discover/${place.slug}`}
                    className="text-decoration-none"
                  >
                    <div className="place-card-modern">
                      <div className="img-wrap">
                        <Image
                          src={place.image_url}
                          alt={place.name}
                          width={400}
                          height={300}
                        />
                        <span className="pill category">
                          {place.category}
                        </span>
                        <span className="pill rating">
                          ⭐ {place.rating.toFixed(1)}
                        </span>
                      </div>

                      <div className="card-body">
                        <h5>{place.name}</h5>
                        <p>
                          {place.short_desc.length > 85
                            ? place.short_desc.slice(0, 85) + '...'
                            : place.short_desc}
                        </p>
                        <span className="read-more">
                          Explore →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredPlaces.length === 0 && (
              <div className="text-center text-muted py-5">
                No destinations found
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-gradient text-center py-5">
          <div className="container">
            <h2 className="fw-bold text-white">
              Ready for Your Konkan Adventure?
            </h2>
            <p className="text-light mb-4">
              Let us help you plan the perfect trip
            </p>
            <Link href="/experiences">
              <button className="btn btn-light btn-lg rounded-pill px-5">
                Plan Your Trip →
              </button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Discover;
