'use client'; // Mark this file as a client-side component

import React from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Events = () => {
  return (
    <Layout>
      <div>
        {/* Header Section */}
        <section className="hero-section text-center text-white bg-dark" style={{ backgroundImage: 'url(https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 0' }}>
          <div className="container">
            <h1 className="display-4">Events in Kokan</h1>
            <p className="lead">Discover the vibrant festivals and events in Kokan.</p>
          </div>
        </section>

        {/* Dynamic Calendar Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Upcoming Events</h2>
          <div className="row">
            <div className="col-md-12">
              <div className="calendar">
                {/* Placeholder for dynamic calendar */}
                <Image src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={1260} height={750} alt="Calendar" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Event Details</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <Image src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={400} height={250} className="card-img-top" alt="Event 1" />
                <div className="card-body">
                  <h5 className="card-title">Music Festival</h5>
                  <p className="card-text">Join us for a night of music and fun.</p>
                  <p className="card-text"><small className="text-muted">Location: Kokan Beach</small></p>
                  <p className="card-text"><small className="text-muted">Date: March 15, 2025</small></p>
                  <button className="btn btn-primary">Register Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Image src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={400} height={250} className="card-img-top" alt="Event 2" />
                <div className="card-body">
                  <h5 className="card-title">Cultural Parade</h5>
                  <p className="card-text">Experience the rich culture of Kokan.</p>
                  <p className="card-text"><small className="text-muted">Location: Main Street</small></p>
                  <p className="card-text"><small className="text-muted">Date: April 10, 2025</small></p>
                  <button className="btn btn-primary">Register Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Image src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={400} height={250} className="card-img-top" alt="Event 3" />
                <div className="card-body">
                  <h5 className="card-title">Adventure Marathon</h5>
                  <p className="card-text">Join the adventure marathon through scenic trails.</p>
                  <p className="card-text"><small className="text-muted">Location: Kokan Hills</small></p>
                  <p className="card-text"><small className="text-muted">Date: May 5, 2025</small></p>
                  <button className="btn btn-primary">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Past Events</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <Image src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={400} height={250} className="card-img-top" alt="Past Event 1" />
                <div className="card-body">
                  <h5 className="card-title">Past Event 1</h5>
                  <p className="card-text">Highlights from the past event.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Image src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={400} height={250} className="card-img-top" alt="Past Event 2" />
                <div className="card-body">
                  <h5 className="card-title">Past Event 2</h5>
                  <p className="card-text">Highlights from the past event.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Image src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={400} height={250} className="card-img-top" alt="Past Event 3" />
                <div className="card-body">
                  <h5 className="card-title">Past Event 3</h5>
                  <p className="card-text">Highlights from the past event.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center my-5">
          <div className="container">
            <h2>Plan Your Visit</h2>
            <p className="lead">Register for upcoming events and experience the vibrant culture of Kokan.</p>
            <button className="btn btn-primary btn-lg">Register Now</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Events;