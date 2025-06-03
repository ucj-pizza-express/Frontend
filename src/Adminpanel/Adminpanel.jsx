import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './Adminpanel.css';

function App() {
  return (
    <Router>
      <div className="admin-panel">
        <nav className="sidebar">
          <h2>Admin Panel</h2>
          <ul>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/orders">Orders</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/settings">Settings</NavLink></li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}




function Dashboard() {
  return (
    <div className="card-grid">
      <Card title="Total Orders Today" value="25" />
      <Card title="Total Sales" value="$320.50" />
      <Card title="Top Pizza" value="Pepperoni" />
      <Card title="New Users" value="5" />
    </div>
  );
}

function Orders() {
  return <div><h2>Order Details</h2><p>Display all orders here...</p></div>;
}

function Users() {
  return <div><h2>User Details</h2><p>Display all users here...</p></div>;
}

function Settings() {
  return <div><h2>Settings</h2><p>Manage settings like pizza items, charges, and admin info here...</p></div>;
}

function Card({ title, value }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default App;
