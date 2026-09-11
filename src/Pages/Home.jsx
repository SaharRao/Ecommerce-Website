import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import CategorySection from '../Components/CategorySection';
import CategoryFilter from '../Components/CategoryFilter';
import ProductGrid from '../Components/ProductGrid';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <CategorySection />
      <CategoryFilter />
      <ProductGrid />
    </div>
  );
};

export default Home;