import React from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import '../App.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Pizza<span>Express</span>.com</div>
      <ul className="menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/items">Shop</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><FaUser className="user-icon" /></li>
      </ul>
    </nav>
  );
}
