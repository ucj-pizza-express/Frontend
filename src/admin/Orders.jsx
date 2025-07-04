import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/order')
      .then(res => setOrders(res.data))
      .catch(err => console.error("Error fetching orders:", err));
  }, []);

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h2>Manage Orders</h2>
        <table>
          <thead>
            <tr><th>Name</th><th>Phone</th><th>Items</th><th>Status</th></tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.customer.name}</td>
                <td>{order.customer.phone}</td>
                <td>{order.items.map(i => i.name).join(", ")}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
