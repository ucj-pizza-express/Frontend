import React from 'react';
import './hero.css';
import heroImg from '../assets/hero.jpg'; // ✅ Your provided image path

export default function PizzaHero() {
  return (
    <div className="pizza-hero-container">
      <img src={heroImg} alt="Pizza" className="pizza-background" />

      <div className="pizza-cta-box">
        <h1>Feeling Hungry?<br /><span>Tap to Order!</span></h1>
        <p>Easy online ordering. Piping hot pizza at your doorstep.</p>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
}
