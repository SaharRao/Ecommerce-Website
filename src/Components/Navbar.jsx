import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-uppercase fs-4" to="/">
          ECOMMERCE-STORE
        </Link>

        <div className="d-flex align-items-center gap-4 ms-auto">
          <Link className="nav-link text-white fs-6" to="/">
            Home
          </Link>
          <Link className="nav-link text-white fs-6" to="/about">
            About Us
          </Link>

          {/* Cart Icon -> Click karne par /cart page par le jayega */}
          <Link to="/cart" className="position-relative text-decoration-none cursor-pointer">
            <span className="fs-5 text-white">🛒</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-black border border-light fs-6">
              {totalQuantity}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;