// src/components/Navbar.jsx
import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../App.css';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Pizza<span>Express</span>.com</div>
      <div className="menu">
        <a href="App.jsx">Home</a>
        <Link to="/About">About</Link>
        <a href="#">Shop</a>
        <a href="#">Contact Us</a>
       <div className="user-link">
    <FaUser className="user-icon" />
  </div>
      </div>
    </nav>
  );
}
