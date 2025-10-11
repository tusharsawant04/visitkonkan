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
              {['discover', 'experiences', 'events', 'business-listings'].map((path) => (
                <li className="nav-item" key={path}>
                  <Link href={`/${path}`} className="nav-link">
                    {path.replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
           <div className="d-flex gap-2">
              {/* Main CTA - Treasures of Konkan */}
              <a href='TreasuresOfKonkan'
                className="btn btn-lg text-white"
                style={{
                  background: "linear-gradient(135deg, #1CA9C9, #005f73)",
                  borderRadius: "8px",
                  fontWeight: "500",
                  padding: "8px 16px",
                  fontSize: "15px"
                }}
              >
                Treasures of Konkan
              </a>

              {/* Secondary CTA - List your business */}
              <a
               href='/list-your-business/page'
                className="btn btn-lg"
                style={{
                  border: "2px solid #1CA9C9",
                  color: "#1CA9C9",
                  borderRadius: "8px",
                  fontWeight: "500",
                  padding: "8px 16px",
                  fontSize: "15px",
                  background: "transparent"
                }}
              >
                List your business
              </a>

              {/* Utility CTA - Log in */}
              {/* <Link
                href="/login"
                className="btn btn-lg text-white"
                style={{
                  background: "#FF7F50",
                 borderRadius: "8px",
                  fontWeight: "500",
                  padding: "8px 16px",
                  fontSize: "15px"
                }}
              >
                Log in
              </Link> */}
          </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
