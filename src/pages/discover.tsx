'use client'; // Mark this file as a client-side component

import React, { useState, useRef } from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';
import './discover.css'; // Create a CSS file for custom styles and animations

const Discover = () => {
  const [darkMode, setDarkMode] = useState(false);
  const nodeRef = useRef(null);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Layout>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        {/* Theme Toggle Button */}
        <div className="theme-toggle">
          <button onClick={toggleTheme} className="btn btn-secondary">
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>

        {/* Hero Section */}
        <section className="hero-section text-center text-white bg-dark" style={{ backgroundImage: 'url(https://static.toiimg.com/thumb/86547703/Maharashtra-Konkan-region.jpg?width=1200&height=900)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 0' }}>
          <div className="container">
            <h1 className="display-4">Explore the Unseen Beauty of Kokan</h1>
            <p className="lead">Discover the scenic beauty and rich heritage of Kokan.</p>
          </div>
        </section>

        {/* Top Attractions Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Top Attractions</h2>
          <div className="row">
            {['Beaches', 'Forts', 'Waterfalls'].map((attraction, index) => (
              <CSSTransition
                key={index}
                in={true}
                appear={true}
                timeout={500}
                classNames="fade"
                nodeRef={nodeRef}
              >
                <div className="col-md-4" ref={nodeRef}>
                  <div className="card">
                    <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" width={400} height={250} className="card-img-top" alt={attraction} />
                    <div className="card-body">
                      <h5 className="card-title">{attraction}</h5>
                      <p className="card-text">Description of {attraction}.</p>
                    </div>
                  </div>
                </div>
              </CSSTransition>
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