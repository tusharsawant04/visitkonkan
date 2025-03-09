import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold">Konkan</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {['discover', 'experiences', 'events', 'travel-guides', 'business-listings'].map((path) => (
                <li className="nav-item" key={path}>
                  <Link href={`/${path}`} className="nav-link">
                    {path.replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary">List your business</button>
              <Link href="/login" className="btn btn-primary">Log in</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
