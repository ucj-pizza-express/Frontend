// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PizzaHero from '../components/herosection';
import About from '../Pages/Aboutpage/About';
import Items from '../Pages/Shop/Items';
import Contact from '../Pages/ContactUS/Contact';
import Login from '../Login/Login';
import Signup from '../SignUp/SignUp';
import Profile from '../User/Profile';
import Navbar from "../components/navbar"; 

export default function AppRoutes() {
  return (
    <>
        <Routes>
          <Route path="/" element={<PizzaHero />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Items />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </>
  );
}
