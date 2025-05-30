import React from "react";
import aboutImg from "../../assets/girl.png";
// import "./aboutsection.css";
import "./aboutseaction.css"; 
const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h2>
          <span className="highlight">Made with Love,</span><br />
          <span className="subheading">Delivered with Passion!</span>
        </h2>
        <ul>
          <li>
            At Pizza Express, we’re committed to bringing you not just pizza, but a joyful experience.
            From hand-tossed dough to rich, flavorful toppings, every pizza is made with the freshest
            ingredients and a whole lot of love.
          </li>
          <li>
            Whether you're craving a classic Margherita, a cheesy Pepperoni, or something bold like
            our BBQ Chicken Blast — we’ve got you covered.
          </li>
          <li>
            We promise fast delivery, real-time order tracking, and pizzas that arrive hot and
            delicious every time.
          </li>
        </ul>
      </div>

      <div className="about-image">
        <img src={aboutImg} alt="Pizza delivery" />
      </div>
    </div>
  );
};

export default AboutSection;

