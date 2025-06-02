import React from 'react';
import './hero.css';
import heroImg from '../assets/hero.jpg'; // ✅ Your provided image path
import AboutSection from '../Pages/Homepage/AboutSection';
import CustomerFavourites from '../Pages/Homepage/CustomerFavourites';
import Hero2 from '../Pages/Homepage/hero2';
import Testimonial from '../Footer/Testimonial';
import Footer from '../Footer/Footer';
import Navbar from './navbar';
import { BrowserRouter, Router } from 'react-router-dom';

export default function PizzaHero() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
      
      
    <div className="pizza-hero-container">
      <img src={heroImg} alt="Pizza" className="pizza-background" />

      <div className="pizza-cta-box">
        <h1>Feeling Hungry?<br /><span>Tap to Order!</span></h1>
        <p>Easy online ordering. Piping hot pizza at your doorstep.</p>
        <button className="order-button">Order Now</button>
      </div>
    </div>
    
</div>
  );
}
