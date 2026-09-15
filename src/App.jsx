import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import About from './Pages/About'; 
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;