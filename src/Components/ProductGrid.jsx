import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductGrid = () => {
  const dispatch = useDispatch();
  const { items, selectedCategory } = useSelector((state) => state.products);

  const filteredProducts = selectedCategory === 'All'
    ? items
    : items.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="container mb-5">
      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 text-center p-3 border shadow-sm">
              
              {/* Image Container (Fixed Height + Equal Sizing) */}
              <div 
                className="d-flex align-items-center justify-content-center p-2 bg-light rounded" 
                style={{ height: '220px', overflow: 'hidden' }}
              >
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.title} 
                  style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                />
              </div>

              <div className="card-body d-flex flex-column justify-content-between">
                <h6 className="card-title text-truncate mb-2">{product.title}</h6>
                <p className="fw-bold text-secondary mb-3">${product.price}</p>
                <button 
                  className="btn btn-info text-white w-100 fw-semibold"
                  onClick={() => dispatch(addToCart(product))}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;