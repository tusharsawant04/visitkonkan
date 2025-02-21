import React from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const Experiences = () => {
  return (
    <Layout>
      <div>
        {/* Header Section */}
        <section className="hero-section text-center text-white bg-dark" style={{ backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 0' }}>
          <div className="container">
            <h1 className="display-4">Experiences in Kokan</h1>
            <p className="lead">Discover the adventure, culture, and flavors of Kokan.</p>
          </div>
        </section>

        {/* Adventure Activities Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Adventure Activities</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Trekking" />
                <div className="card-body">
                  <h5 className="card-title">Trekking</h5>
                  <p className="card-text">Explore the scenic trails of Kokan.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Scuba Diving" />
                <div className="card-body">
                  <h5 className="card-title">Scuba Diving</h5>
                  <p className="card-text">Dive into the underwater world of Kokan.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Paragliding" />
                <div className="card-body">
                  <h5 className="card-title">Paragliding</h5>
                  <p className="card-text">Experience the thrill of flying over Kokan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Experiences Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Cultural Experiences</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Folk Dance" />
                <div className="card-body">
                  <h5 className="card-title">Folk Dance</h5>
                  <p className="card-text">Witness the vibrant folk dances of Kokan.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className="card-img-top" alt="Temple" />
                <div className="card-body">
                  <h5 className="card-title">Temples</h5>
                  <p className="card-text">Visit the ancient temples of Kokan.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Festival" />
                <div className="card-body">
                  <h5 className="card-title">Festivals</h5>
                  <p className="card-text">Experience the colorful festivals of Kokan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Food Experiences Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Local Food Experiences</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Food 1" />
                <div className="card-body">
                  <h5 className="card-title">Seafood</h5>
                  <p className="card-text">Taste the fresh seafood of Kokan.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Food 2" />
                <div className="card-body">
                  <h5 className="card-title">Konkani Cuisine</h5>
                  <p className="card-text">Enjoy the traditional Konkani dishes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Food 3" />
                <div className="card-body">
                  <h5 className="card-title">Street Food</h5>
                  <p className="card-text">Savor the delicious street food of Kokan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Traveler Reviews</h2>
          <div id="testimonialsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-center">
                  <div className="card" style={{ maxWidth: '600px' }}>
                    <div className="card-body">
                      <h5 className="card-title">John Doe</h5>
                      <p className="card-text">"Kokan is a paradise! The experiences were unforgettable."</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <div className="card" style={{ maxWidth: '600px' }}>
                    <div className="card-body">
                      <h5 className="card-title">Jane Smith</h5>
                      <p className="card-text">"I loved the cultural experiences and the local food. Highly recommend!"</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <div className="card" style={{ maxWidth: '600px' }}>
                    <div className="card-body">
                      <h5 className="card-title">Michael Brown</h5>
                      <p className="card-text">"The adventure activities were thrilling. Can't wait to visit again!"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center my-5">
          <div className="container">
            <h2>Plan Your Experience</h2>
            <p className="lead">Book your trip now and experience the beauty of Kokan.</p>
            <button className="btn btn-primary btn-lg">Book Now</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Experiences;