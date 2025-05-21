import React from 'react';
import '../App.css';
import heroImg from '../assets/hero.jpg';

export default function HeroSection() {
  return (
    <section className="hero-banner">
      <img src={heroImg} alt="Pizza" className="hero-background" />
      <div className="hero-content">
        <h1>Feeling Hungry?</h1>
        <h2><span>Tap to Order!</span></h2>
        <button className="order-btn">Order Now</button>
      </div>
    </section>
  );
}
