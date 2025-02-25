import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/home/Home.jsx';
import ProductDetails from './pages/ProductDetails';
import ProductsPage from './pages/productspage/ProductsPage.jsx';
import CartPage from './pages/CartPage';
import Checkout from "./pages/checkout/Checkout.jsx";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} /> {/* New Route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;