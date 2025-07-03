// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PizzaHero from '../components/herosection';
import About from '../Pages/Aboutpage/About';
import Items from '../Pages/Shop/Items';
import Contact from '../Pages/ContactUS/Contact';
import Login from '../Login/Login';
import Signup from '../SignUp/SignUp';
import Profile from '../User/Profile';
import { CartProvider } from '../Pages/Cart/CartContext.jsx';  // Make sure path is correct
import Checkout from '../Pages/Cart/Checkout.jsx';
export default function AppRoutes() {
  return (
    <CartProvider>
      <Routes>
        {/* Redirect root "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Items />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
      
        {/* Optional route for home page */}
        <Route path="/home" element={<PizzaHero />} />
      </Routes>
    </CartProvider>
  );
}
