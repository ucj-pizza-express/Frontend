// ProfileMenu.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './profile.css';

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      navigate('/login');
    }
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
  <div className="profile-container" ref={menuRef}>
    <FaUserCircle className="profile-icon" onClick={toggleMenu} />
    {isOpen && (
      <div 
        className="profile-dropdown" 
        onMouseLeave={() => setIsOpen(false)}  // Added here
      >
        {/* <button onClick={() => navigate('/profilesetting')}> Profile</button> */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    )}
  </div>
);

}
