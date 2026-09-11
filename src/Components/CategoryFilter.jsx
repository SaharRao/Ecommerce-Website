import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../features/products/productSlice';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.products.selectedCategory);

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div>
          <h3 className="fw-normal m-0">Shop by Collection</h3>
          <p className="text-muted small m-0">
            Each season, we collaborate with world class designers to create a collection inspired by natural world.
          </p>
        </div>

        {/* Dropdown Filter */}
        <div style={{ minWidth: '220px' }}>
          <select 
            className="form-select border-secondary-subtle" 
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">Find Product By Category</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;