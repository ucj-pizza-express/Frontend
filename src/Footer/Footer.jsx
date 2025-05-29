import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { FaBeer } from "react-icons/fa";


import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Brand Section */}
        <div className="footer-section brand">
          <h2>
            <span className="brand-yellow">PizzaExpress</span>
            <span className="brand-white">.com</span>
          </h2>
          <p>
            Freshly made, fast delivered! At Pizza Express, we serve delicious
            pizzas crafted with love and quality ingredients — ready to enjoy
            anytime, anywhere.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Website" className="icon-circle">
              <FaGlobe />
            </a>
            <a href="#" aria-label="Instagram" className="icon-circle">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="icon-circle">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="icon-circle">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">History</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <span className="icon-circle contact-icon">
                <FaPhoneAlt />
              </span>
              <span>+94 777 565 656</span>
            </li>
            <li>
              <span className="icon-circle contact-icon">
                <FaMapMarkerAlt />
              </span>
              <span>Manipay Road, Jaffna</span>
            </li>
            <li>
              <span className="icon-circle contact-icon">
                <FaEnvelope />
              </span>
              <span>pizzaexpress@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Email Form */}
        <div className="footer-section">
          <h3>Get more info</h3>
          <div className="email-input-wrapper">
            <input
              type="email"
              className="email-input"
              aria-label="Email address"
            />
            <button className="email-btn" aria-label="Send email">
              <FaPaperPlane className="mail-icon" />
            </button>
          </div>
        {/* Contact Us button */}
         <button className="contact-us-btn">Contact Us</button>
         </div>
        </div>
 

      {/* Footer Bottom */}
      <div className="footer-bottom">
  <p>
    <span className="brand-white">
      © 2024, <span className="brand-black">Pizza Express.</span> All rights reserved.
    </span>
  </p>
  <p>
    <a href="#">User Terms & Conditions</a> |{" "}
    <a href="#">Privacy Policy</a>
  </p>
</div>
</footer>
  )
}