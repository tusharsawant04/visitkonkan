'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import placesDetail from '@/data/places_detail.json';
import './discover-more.css';

interface PlaceDetail {
  id: number;
  name: string;
  slug: string;
  description: string;
  history: string;
  things_to_do: string[];
  how_to_reach: {
    by_road: string;
    by_train: string;
    by_bus?: string;
  };
  stay_options: string[];
  travel_tips: string[];
  best_time_to_visit: string;
  entry_fee: string;
  timings: string;
  image_gallery: string[];
  nearby_places: string[];
  google_map_link: string;
  popular_for: string[];
  ideal_for: string[];
  latitude?: number | null;
  longitude?: number | null;
}

const DiscoverMorePage = () => {
  const router = useRouter();
  const { discovermore } = router.query;
  const [place, setPlace] = useState<PlaceDetail | null>(null);

  useEffect(() => {
    if (discovermore) {
      const found = (placesDetail as PlaceDetail[]).find(
        (p) => p.slug === discovermore
      );
      setPlace(found || null);
    }
  }, [discovermore]);

  if (!place) {
    return (
      <Layout>
        <div className="container py-5 text-center">
          <h2>Destination not found 😔</h2>
          <p>Try visiting from the discover page.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="discover-more-page">
        {/* Hero Section */}
        <motion.div
          className="hero-image position-relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={place.image_gallery[0] || '/placeholder.jpg'}
            alt={place.name}
            fill
            className="object-cover hero-img"
          />
          <div className="hero-overlay d-flex flex-column justify-content-end text-white">
            <div className="container mb-5">
              <h1 className="fw-bold display-5">{place.name}</h1>
              <p className="lead">{place.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Details */}
        <motion.section
          className="container py-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="row gy-4">
            {/* Left Column */}
            <div className="col-lg-8">
              <div className="detail-card shadow-sm rounded-4 p-4">
                <h2 className="fw-semibold mb-3">{place.name}</h2>

                <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                  <span className="badge bg-info text-dark px-3 py-2">
                    {place.popular_for.slice(0, 2).join(', ')}
                  </span>
                  <span className="text-warning fw-semibold">
                    ⭐ Ideal For: {place.ideal_for.join(', ')}
                  </span>
                </div>

                <p className="mb-4">{place.description}</p>

                <h4 className="fw-bold mt-4">History</h4>
                <p>{place.history}</p>

                <h4 className="fw-bold mt-4">Things To Do</h4>
                <ul>
                  {place.things_to_do.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h4 className="fw-bold mt-4">How To Reach</h4>
                <ul>
                  <li><strong>By Road:</strong> {place.how_to_reach.by_road}</li>
                  <li><strong>By Train:</strong> {place.how_to_reach.by_train}</li>
                  {place.how_to_reach.by_bus && (
                    <li><strong>By Bus:</strong> {place.how_to_reach.by_bus}</li>
                  )}
                </ul>

                <h4 className="fw-bold mt-4">Travel Tips</h4>
                <ul>
                  {place.travel_tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>

                <h4 className="fw-bold mt-4">Stay Options</h4>
                <ul>
                  {place.stay_options.map((stay, i) => (
                    <li key={i}>{stay}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4">
              <div className="side-card shadow-sm rounded-4 p-4 sticky-top">
                <h4 className="fw-bold mb-3">Plan Your Visit</h4>
                <ul className="list-unstyled text-muted small mb-4">
                  <li>📍 Best Time: {place.best_time_to_visit}</li>
                  <li>🕒 Timings: {place.timings}</li>
                  <li>💰 Entry Fee: {place.entry_fee}</li>
                </ul>

                {/* Embedded Google Map */}
                {place.latitude && place.longitude ? (
                  <iframe
                    src={`https://www.google.com/maps?q=${place.latitude},${place.longitude}&hl=en&z=14&output=embed`}
                    width="100%"
                    height="220"
                    className="rounded mb-3 border-0 shadow-sm"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                ) : (
                  <iframe
                    src={`${place.google_map_link.replace(
                      '/maps',
                      '/maps/embed'
                    )}`}
                    width="100%"
                    height="220"
                    className="rounded mb-3 border-0 shadow-sm"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                )}

                <a
                  href={place.google_map_link}
                  target="_blank"
                  className="btn btn-outline-primary w-100 mb-2"
                >
                  🌍 View on Google Maps
                </a>
                <button className="btn btn-primary w-100 mb-2">🧭 Plan Trip</button>
                <button className="btn btn-outline-secondary w-100">
                  ❤️ Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Gallery */}
        <section className="container py-5">
          <h3 className="fw-semibold mb-4">Gallery</h3>
          <div className="row g-3">
            {place.image_gallery.map((img, i) => (
              <div key={i} className="col-md-4 col-6">
                <Image
                  src={img}
                  alt={place.name}
                  width={400}
                  height={250}
                  className="rounded-4 shadow-sm w-100"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DiscoverMorePage;
