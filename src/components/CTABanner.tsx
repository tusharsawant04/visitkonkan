import React from 'react';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="container py-5 text-center">
        <h2 className="display-4 fw-bold">Plan Your Perfect Konkan Gateway</h2>
        <p className="lead my-4">Discover the best places to visit, eat and stay</p>
        <Link href="/discover" className="btn btn-light btn-lg px-5">
          Start Planning
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;