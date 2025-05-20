// src/components/Navbar.jsx
import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../App.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Pizza<span>Express</span>.com</div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Shop</a>
        <a href="#">Contact Us</a>
       <div className="user-link">
    <FaUser className="user-icon" />
  </div>
      </div>
    </nav>
  );
}
