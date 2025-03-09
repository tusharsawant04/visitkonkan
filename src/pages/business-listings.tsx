'use client'; // Mark this file as a client-side component

import React from 'react';
import Image from 'next/image';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const BusinessListings = () => {
  return (
    <Layout>
      <div className="container my-5">
        {/* Search Bar */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Find Businesses in Kokan</h2>
          <div className="d-flex justify-content-center">
            <input type="text" className="form-control w-50" placeholder="Search by name or category" />
          </div>
        </section>

        {/* Filter and Sort Options */}
        <section className="mb-5">
          <div className="d-flex justify-content-between">
            <div>
              <select className="form-select">
                <option value="all">All Categories</option>
                <option value="hotels">Hotels</option>
                <option value="restaurants">Restaurants</option>
                <option value="travel-agencies">Travel Agencies</option>
                <option value="local-markets">Local Markets</option>
              </select>
            </div>
            <div>
              <select className="form-select">
                <option value="rating">Sort by Rating</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </section>

        {/* Business Listings */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Business Listings</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <Image
                  src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width={400}
                  height={250}
                  className="card-img-top"
                  alt="Business 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Hotel Kokan</h5>
                  <p className="card-text">A luxurious hotel offering the best amenities.</p>
                  <p className="card-text"><small className="text-muted">Contact: 123-456-7890</small></p>
                  <p className="card-text"><small className="text-muted">Rating: 4.5/5</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Image
                  src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width={400}
                  height={250}
                  className="card-img-top"
                  alt="Business 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Kokan Restaurant</h5>
                  <p className="card-text">Serving delicious local cuisine.</p>
                  <p className="card-text"><small className="text-muted">Contact: 987-654-3210</small></p>
                  <p className="card-text"><small className="text-muted">Rating: 4.7/5</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Image
                  src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width={400}
                  height={250}
                  className="card-img-top"
                  alt="Business 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Kokan Travel Agency</h5>
                  <p className="card-text">Your trusted partner for travel arrangements.</p>
                  <p className="card-text"><small className="text-muted">Contact: 555-123-4567</small></p>
                  <p className="card-text"><small className="text-muted">Rating: 4.8/5</small></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mb-5">
          <h2 className="mb-4">List Your Business</h2>
          <p>Join our directory and reach more customers.</p>
          <button className="btn btn-primary btn-lg">List Your Business</button>
        </section>
      </div>
    </Layout>
  );
};

export default BusinessListings;