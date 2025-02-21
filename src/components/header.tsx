// src/components/Header.tsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" href="/">Konkan</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" href="/discover">Discover</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/experiences">Experiences</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/events">Events</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/travel-guides">Travel Guides</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/business-listings">Business Listings</Link></li>
            </ul>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary">List your business</button>
              <Link href="/login">
                <button className="btn btn-primary">Log in</button>
              </Link>            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
