import React from 'react';
import Sidebar from './Sidebar';

export default function Dashboard() {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h2>Admin Dashboard</h2>
        <p>Welcome, Admin! Here’s a quick overview of your system.</p>
      </div>
    </div>
  );
}
