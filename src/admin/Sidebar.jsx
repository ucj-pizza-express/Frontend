import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Pizza Express Admin</h2>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/orders">Orders</Link></li>
        <li><Link to="/admin/products">Product</Link></li>
        <li><Link to="/admin/users">User Management</Link></li>
         <li><Link to="/admin/notifications">Notification</Link></li>

      </ul>
    </div>
  );
}
