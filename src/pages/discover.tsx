'use client'; // Mark this file as a client-side component

import React from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import './discover.css'; // Create a CSS file for custom styles and animations

const Discover = () => {
  const topPlaces = [
    { name: 'Ganpatipule Beach', description: 'A beautiful beach with a famous Ganpati temple.', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
    { name: 'Sindhudurg Fort', description: 'A historical fort located on a rocky island.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    { name: 'Ratnagiri', description: 'A port city known for its beaches and historical sites.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    { name: 'Murud Beach', description: 'A serene beach with clear waters and soft sand.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    { name: 'Dapoli', description: 'A hill station with beautiful beaches and temples.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    { name: 'Alibaug', description: 'A coastal town known for its beaches and forts.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    { name: 'Harihareshwar', description: 'A town known for its ancient temples and beaches.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    { name: 'Tarkarli', description: 'A beach destination known for its clear waters and water sports.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    { name: 'Diveagar', description: 'A beach village known for its serene environment.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    { name: 'Velas Beach', description: 'A beach known for its turtle festival.', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
  ];

  return (
    <Layout>
      <div className={'light-mode'}>
        {/* Theme Toggle Button */}

        {/* Hero Section */}
        <section className="hero-section text-center text-white bg-dark" style={{ backgroundImage: 'url(https://static.toiimg.com/thumb/86547703/Maharashtra-Konkan-region.jpg?width=1200&height=900)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 0' }}>
          <div className="container">
            <h1 className="display-4">Explore the Unseen Beauty of Kokan</h1>
            <p className="lead">Discover the scenic beauty and rich heritage of Kokan.</p>
          </div>
        </section>

        {/* Top Places Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Top 10 Places in Kokan</h2>
          <div className="row">
            {topPlaces.map((place, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Link href={`/PlaceInformation?place=${place.name}`}>
                  <div className="card h-100 shadow-sm border-0">
                    <Image src={place.imageUrl} width={400} height={250} className="card-img-top" alt={place.name} />
                    <div className="card-body">
                      <h5 className="card-title">{place.name}</h5>
                      <p className="card-text">{place.description}</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-primary btn-sm">Learn More</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Hidden Gems Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Hidden Gems</h2>
          <div id="hiddenGemsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {['Gem 1', 'Gem 2', 'Gem 3'].map((gem, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" width={1200} height={900} className="d-block w-100" alt={gem} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{gem}</h5>
                    <p>Description of {gem}.</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#hiddenGemsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#hiddenGemsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center my-5">
          <div className="container">
            <h2>Ready to Explore Kokan?</h2>
            <p className="lead">Book your trip now and experience the beauty of Kokan.</p>
            <button className="btn btn-primary btn-lg">Start Your Journey</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Discover;