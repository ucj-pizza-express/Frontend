import React from "react";
import bgImage from "../../assets/Home2.png";
import "./Hero2.css"; 
const Hero2 = () => {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Build Your Dream Pizza</h1>
        <p className="hero-subtitle">
          Choose your crust, topping, and sauces to make just the way you love.
        </p>
        <button className="customize-btn">Start Customizing</button>
      </div>
    </div>
  );
};

export default Hero2;
