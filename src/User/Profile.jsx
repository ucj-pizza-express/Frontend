import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import './profile.css';

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="profile-container">
      <FaUser className="user-icon" onClick={toggleMenu} />
      {isOpen && (
        <div className="profile-menu">
          <a href="/profile">Profile</a>
          <a href="/settings">Settings</a>
          <a href="/logout">Logout</a>
        </div>
      )}
    </div>
  );
}
