import Sidebar from './Sidebar';
import React, { useEffect, useState } from "react";

 export default function Dashboard() {

  const [stats, setStats] = useState({
    totalSales: 0,
    newCustomers: 0,
    returningCustomers: 0,
    deliveredOrders: 0,
    pendingOrders: 0,
    cancelledOrders: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='admin-container'>
    <Sidebar/>
    
    <div className="admin-content">
      <Card title="Total Sales Amount" value={`Rs. ${stats.totalSales}`} />
      <Card title="New Customers" value={stats.newCustomers} />
      <Card title="Returning Customers" value={stats.returningCustomers} />
      <Card title="Delivered Orders" value={stats.deliveredOrders} />
      <Card title="Pending Orders" value={stats.pendingOrders} />
      <Card title="Cancelled Orders" value={stats.cancelledOrders} />
    </div>
     </div>
  );
}

const Card = ({ title, value, color }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p style={{ color: color || "#333" }}>{value}</p>
    </div>
  );
};
