import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../features/products/productSlice';

const categories = [
  { id: 1, title: "ELECTRONICS", value: "electronics", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400" },
  { id: 2, title: "JEWELERY", value: "jewelery", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400" },
  { id: 3, title: "MEN'S CLOTHING", value: "men's clothing", image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=400" },
  { id: 4, title: "WOMEN'S CLOTHING", value: "women's clothing", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400" },
];

const CategorySection = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryValue) => {
    dispatch(setCategory(categoryValue));
  };

  return (
    <div className="container my-5">
      <h3 className="fw-normal mb-4">Shop by Category</h3>
      
      <div className="row g-4">
        {categories.map((cat) => (
          <div key={cat.id} className="col-12 col-sm-6 col-md-3">
            {/* Card click karne par category set ho jayegi */}
            <div 
              className="card border-0 rounded-4 overflow-hidden position-relative shadow-sm"
              style={{ height: '220px', cursor: 'pointer' }}
              onClick={() => handleCategoryClick(cat.value)}
            >
              {/* Fixed Image Fit */}
              <img 
                src={cat.image} 
                className="card-img h-100 w-100" 
                alt={cat.title} 
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div 
                className="card-img-overlay d-flex align-items-center justify-content-center"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              >
                <h6 className="card-title text-white fw-bold text-center m-0 px-2 tracking-wide">
                  {cat.title}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;