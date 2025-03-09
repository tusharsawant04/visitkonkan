'use client'; // Mark this file as a client-side component

import React from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const TravelGuides = () => {
  return (
    <Layout>
      <div className="container my-5">
        {/* Featured Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Featured Travel Guides</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" width={400} height={250} className="card-img-top" alt="Guide 1" />
                <div className="card-body">
                  <h5 className="card-title">Guide to Beaches</h5>
                  <p className="card-text">Explore the best beaches in Kokan.</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" width={400} height={250} className="card-img-top" alt="Guide 2" />
                <div className="card-body">
                  <h5 className="card-title">Adventure Guide</h5>
                  <p className="card-text">Discover adventure activities in Kokan.</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" width={400} height={250} className="card-img-top" alt="Guide 3" />
                <div className="card-body">
                  <h5 className="card-title">Cultural Guide</h5>
                  <p className="card-text">Experience the rich culture of Kokan.</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar or Dropdown for Travel Interests */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Select Your Travel Interest</h2>
          <div className="d-flex justify-content-center">
            <select className="form-select w-50">
              <option value="family">Family Trips</option>
              <option value="adventure">Adventure</option>
              <option value="relaxation">Relaxation</option>
            </select>
          </div>
        </section>

        {/* Guide Summaries Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Travel Guide Summaries</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" width={400} height={250} className="card-img-top" alt="Summary 1" />
                <div className="card-body">
                  <h5 className="card-title">Beach Guide Summary</h5>
                  <p className="card-text">A brief overview of the best beaches in Kokan.</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" width={400} height={250} className="card-img-top" alt="Summary 2" />
                <div className="card-body">
                  <h5 className="card-title">Adventure Guide Summary</h5>
                  <p className="card-text">A brief overview of adventure activities in Kokan.</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" width={400} height={250} className="card-img-top" alt="Summary 3" />
                <div className="card-body">
                  <h5 className="card-title">Cultural Guide Summary</h5>
                  <p className="card-text">A brief overview of the cultural experiences in Kokan.</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Integration Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Recommended Travel Routes</h2>
          <div className="map-container" style={{ height: '400px', backgroundColor: '#e9ecef' }}>
            {/* Placeholder for map integration */}
            <p className="text-center">Map integration goes here</p>
          </div>
        </section>

        {/* Downloadable PDF Guide Section */}
        <section className="text-center mb-5">
          <h2 className="mb-4">Downloadable PDF Guide</h2>
          <p>Get a comprehensive travel guide for Kokan in PDF format for offline use.</p>
          <button className="btn btn-primary btn-lg">Download PDF</button>
        </section>
      </div>
    </Layout>
  );
};

export default TravelGuides;