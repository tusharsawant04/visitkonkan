import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="mb-3">About Visit Kokan</h5>
            <p className="text-light-emphasis">
              Discover the beauty of Konkan region. Plan your perfect getaway with our curated experiences,
              local insights, and travel guides.
            </p>
          </div>
          
          <div className="col-lg-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/discover" className="text-decoration-none text-light-emphasis hover-white">
                  Explore Destinations
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none text-light-emphasis hover-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-decoration-none text-light-emphasis hover-white">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy" className="text-decoration-none text-light-emphasis hover-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h5 className="mb-3">Connect With Us</h5>
            <ul className="list-unstyled d-flex gap-3">
              <li>
                <a href="https://facebook.com" className="text-light fs-4">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-light fs-4">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-light fs-4">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" className="text-light fs-4">
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
            <div className="mt-3">
              <p className="mb-1">Contact Us:</p>
              <a href="mailto:info@visitkokan.com" className="text-light text-decoration-none">
                info@visitkokan.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-light opacity-25" />
        
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-light-emphasis mb-0">
              &copy; {new Date().getFullYear()} Visit Kokan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

// Add this small CSS for hover effect
const styles: string = `
  .hover-white:hover {
    color: white !important;
    transition: color 0.2s ease;
  }
`;

const FooterWithStyles: React.FC = () => (
  <>
    <style>{styles}</style>
    <Footer />
  </>
);

FooterWithStyles.displayName = 'FooterWithStyles';

export default FooterWithStyles;
