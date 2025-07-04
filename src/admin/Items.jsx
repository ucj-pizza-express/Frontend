import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.error("Error fetching items:", err));
  }, []);

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h2>Item Management</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name} - Rs.{item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
