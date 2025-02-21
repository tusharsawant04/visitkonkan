// src/components/Footer.tsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} Visit Kokan. All rights reserved.</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://facebook.com" className="text-dark">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com" className="text-dark">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com" className="text-dark">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
