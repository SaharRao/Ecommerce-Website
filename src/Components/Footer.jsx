import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-auto sticky-bottom border-top border-secondary">
      <div className="container">
        <div className="row g-4">
          
          {/* Brand Info */}
          <div className="col-12 col-md-4">
            <h5 className="text-uppercase fw-bold text-white mb-2 fs-6">ECOMMERCE-STORE</h5>
            <p className="text-secondary small m-0">
              Discover high-quality apparel, electronics, and jewelry.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="col-6 col-md-3">
            <h6 className="text-white mb-2 fs-6">Quick Links</h6>
            <ul className="list-unstyled text-small m-0">
              <li><Link to="/" className="text-secondary text-decoration-none small">Home</Link></li>
              <li><Link to="/about" className="text-secondary text-decoration-none small">About Us</Link></li>
              <li><Link to="/cart" className="text-secondary text-decoration-none small">View Cart</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-6 col-md-3">
            <h6 className="text-white mb-2 fs-6">Categories</h6>
            <ul className="list-unstyled text-small m-0">
              <li><Link to="/" className="text-secondary text-decoration-none small">Electronics</Link></li>
              <li><Link to="/" className="text-secondary text-decoration-none small">Jewelery</Link></li>
              <li><Link to="/" className="text-secondary text-decoration-none small">Men's Clothing</Link></li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="col-12 col-md-2 text-md-end">
            <p className="text-secondary small m-0">© 2026 E-Commerce Store.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;