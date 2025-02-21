import React from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const Discover = () => {
  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="hero-section text-center text-white bg-dark" style={{ backgroundImage: 'url(/images/kokan-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 0' }}>
          <div className="container">
            <h1 className="display-4">Discover Kokan</h1>
            <p className="lead">Explore the scenic beauty and rich heritage of Kokan.</p>
          </div>
        </section>

        {/* Top Attractions Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Top Attractions</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Attraction 1" />
                <div className="card-body">
                  <h5 className="card-title">Attraction 1</h5>
                  <p className="card-text">Description of Attraction 1.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Attraction 2" />
                <div className="card-body">
                  <h5 className="card-title">Attraction 2</h5>
                  <p className="card-text">Description of Attraction 2.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Attraction 3" />
                <div className="card-body">
                  <h5 className="card-title">Attraction 3</h5>
                  <p className="card-text">Description of Attraction 3.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden Gems Section */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Hidden Gems</h2>
          <div id="hiddenGemsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="Gem 1" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Hidden Gem 1</h5>
                  <p>Description of Hidden Gem 1.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="Gem 2" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Hidden Gem 2</h5>
                  <p>Description of Hidden Gem 2.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="Gem 3" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Hidden Gem 3</h5>
                  <p>Description of Hidden Gem 3.</p>
                </div>
              </div>
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
            <button className="btn btn-primary btn-lg">Book Now</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Discover;