import React from 'react';

const HeroBanner = () => {
  return (
    <div 
      id="heroCarousel" 
      className="carousel slide carousel-fade" 
      data-bs-ride="carousel" 
      data-bs-interval="3000"
    >
      {/* Dynamic Indicators */}
      <div className="carousel-indicators mb-4">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
      </div>

      {/* Carousel Slides */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div
            className="d-flex align-items-center justify-content-center text-center text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '420px',
            }}
          >
            <div className="container py-5">
              <h1 className="display-4 fw-normal mb-3">Find All Your Needs In One Place</h1>
              <p className="fs-6 mb-4">A single place for all your products. Discover more products on our products section</p>
              <button className="btn btn-light px-4 py-2 text-dark rounded-1">Discover More</button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div
            className="d-flex align-items-center justify-content-center text-center text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '420px',
            }}
          >
            <div className="container py-5">
              <h1 className="display-4 fw-normal mb-3">Exclusive Apparel Collections</h1>
              <p className="fs-6 mb-4">Upgrade your style with top designers inspired by nature</p>
              <button className="btn btn-light px-4 py-2 text-dark rounded-1">Shop Now</button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div
            className="d-flex align-items-center justify-content-center text-center text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '420px',
            }}
          >
            <div className="container py-5">
              <h1 className="display-4 fw-normal mb-3">Latest Tech & Electronics</h1>
              <p className="fs-6 mb-4">Get high performance storage, monitors and gadgets</p>
              <button className="btn btn-light px-4 py-2 text-dark rounded-1">Explore Products</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;