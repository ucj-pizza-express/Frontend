import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../App.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Pizza<span>Express</span>.com</div>
      <div className="menu">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link> {/* Assuming you'll create this later */}
        <Link to="/contact">Contact Us</Link>
        <div className="user-link">
          <FaUser className="user-icon" />
        </div>
      </div>
    </nav>
  );
}
