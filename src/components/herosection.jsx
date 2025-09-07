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
import { useNavigate } from 'react-router-dom';

export default function PizzaHero() {
   const navigate = useNavigate(); // ✅ Hook to navigate programmatically
  const handleOrderClick = () => {
      navigate('/shop'); // Change to "/order" if you use that path
  };
  return (
   
    <div>
      
      
    <div className="pizza-hero-container">
      <img src={heroImg} alt="Pizza" className="pizza-background" />

      <div className="pizza-cta-box">
        <h1>Feeling Hungry?<br /><span>Tap to Order!</span></h1>
        <p>Easy online ordering. Piping hot pizza at your doorstep.</p>
        <button className="order-button" onClick={handleOrderClick}>Order Now</button>
      </div>
    </div>
     <CustomerFavourites/>
     <Hero2/>
    <AboutSection/>
     <Testimonial/>
     <Footer/>
</div>
  );
}
