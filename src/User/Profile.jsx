import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import './profile.css';
import { useNavigate } from 'react-router-dom'; // ✅ add this

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ use navigate

  const toggleMenu = () => setIsOpen(!isOpen);

  

  return (
    <div className="profile-container">
      <FaUser className="user-icon" onClick={toggleMenu} />
      {isOpen && (
        <div className="profile-menu">
          <a href="/profile">Profile</a>
          <a href='/login'>Logout</a>
        </div>
      )}
    </div>
  );
}
