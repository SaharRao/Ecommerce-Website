import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container my-5 py-3">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">About Our Store</h1>
        <p className="text-muted col-md-8 mx-auto lead">
          Welcome to ECOMMERCE-STORE! We are committed to providing you with the best products ranging from electronics to fashion apparel, all at unbeatable prices.
        </p>
      </div>

      {/* Features Grid */}
      <div className="row g-4 mb-5">
        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center p-4">
            <div className="fs-1 text-primary mb-3">🚚</div>
            <h5 className="fw-bold mb-2">Fast Delivery</h5>
            <p className="text-muted small">
              We ensure quick and reliable shipping right to your doorstep with real-time tracking.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center p-4">
            <div className="fs-1 text-primary mb-3">🛡️</div>
            <h5 className="fw-bold mb-2">Quality Guarantee</h5>
            <p className="text-muted small">
              All items in our catalog undergo strict quality checks before reaching you.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center p-4">
            <div className="fs-1 text-primary mb-3">🎧</div>
            <h5 className="fw-bold mb-2">24/7 Support</h5>
            <p className="text-muted small">
              Our support team is available around the clock to help with your orders and questions.
            </p>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-light rounded-4 p-5 text-center shadow-sm">
        <h3 className="fw-bold mb-3">Ready to explore our products?</h3>
        <p className="text-muted mb-4">Check out our latest categories and hot sales today.</p>
        <Link to="/" className="btn btn-dark px-4 py-2 fw-semibold">
          Start Shopping
        </Link>
      </div>
    </div>
  );
};

export default About;