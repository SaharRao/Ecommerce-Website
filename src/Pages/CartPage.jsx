import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, decreaseQuantity, removeFromCart } from '../features/cart/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity } = useSelector((state) => state.cart);

  // Grand Total calculation
  const grandTotal = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container text-center my-5 py-5">
        <h3 className="mb-3">Your Cart is Empty 🛒</h3>
        <p className="text-muted mb-4">No products added yet.</p>
        <Link to="/" className="btn btn-dark px-4 py-2">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Shopping Cart ({totalQuantity} items)</h2>

      <div className="row g-4">
        {/* Added Products List */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm p-3">
            {cartItems.map((item) => (
              <div key={item.id} className="row align-items-center border-bottom py-3 g-3">
                {/* Product Image */}
                <div className="col-3 col-sm-2">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="img-fluid rounded" 
                    style={{ maxHeight: '80px', objectFit: 'contain' }}
                  />
                </div>

                {/* Product Info */}
                <div className="col-9 col-sm-4">
                  <h6 className="mb-1 text-truncate">{item.title}</h6>
                  <p className="text-muted small mb-0">${item.price} each</p>
                </div>

                {/* Quantity Controls (+ / -) */}
                <div className="col-6 col-sm-3 d-flex align-items-center gap-2">
                  <button 
                    className="btn btn-sm btn-outline-secondary px-2"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className="fw-semibold px-2">{item.quantity}</span>
                  <button 
                    className="btn btn-sm btn-outline-secondary px-2"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>

                {/* Item Total & Remove */}
                <div className="col-6 col-sm-3 text-end">
                  <div className="fw-bold mb-1">${item.totalPrice.toFixed(2)}</div>
                  <button 
                    className="btn btn-sm text-danger p-0 border-0"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bill Summary */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4">
            <h5 className="mb-3">Order Summary</h5>
            <div className="d-flex justify-content-between mb-2 text-muted">
              <span>Subtotal</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-3 text-muted">
              <span>Shipping</span>
              <span className="text-success">FREE</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-4 fs-5 fw-bold">
              <span>Total Bill</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
            <button className="btn btn-dark w-100 py-2 fw-semibold">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;