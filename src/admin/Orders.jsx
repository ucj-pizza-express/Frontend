import Sidebar from './Sidebar';
import React, { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({ searchTerm: "", status: "", date: "" });

  useEffect(() => {
    fetch("http://localhost:5000/api/order")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, []);

  const handleStatusChange = (id, newStatus) => {
    fetch(`http://localhost:5000/api/order/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((updatedOrder) => {
        setOrders((prev) =>
          prev.map((o) => (o._id === updatedOrder._id ? updatedOrder : o))
        );
      })
      .catch((err) => console.error(err));
  };

  const filtered = orders.filter((o) => {
    return (
      (!filters.searchTerm || o.customer.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
      (!filters.status || o.status === filters.status) &&
      (!filters.date || o.date === filters.date)
    );
  });

  return (
    <div className='admin-container'>
      <Sidebar />
      <div className="orders-container">
        <h2>Order Details</h2>

        <div className="filter-bar">
          <OrderFilter onFilter={setFilters} />
          <button className="export-btn" onClick={() => exportToCSV(filtered)}>
            Export
          </button>
        </div>

        <OrderList orders={filtered} onStatusChange={handleStatusChange} />
      </div>
    </div>
  );
}

const OrderFilter = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  const applyFilter = () => {
    onFilter({ searchTerm, status, date });
  };

  return (
    <div className="filter-controls">
      <input
        type="text"
        placeholder="Customer name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All</option>
        <option>Pending</option>
        <option>Delivered</option>
        <option>Cancelled</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button className="filter-btn" onClick={applyFilter}>
        Filter
      </button>
    </div>
  );
};

const OrderList = ({ orders, onStatusChange }) => (
  <table className="orders-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Customer</th>
        <th>Date</th>
        <th>Status</th>
        <th>Items</th>
        <th>Change Status</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => (
        <tr key={order._id}>
          <td>{order._id}</td>
          <td>
            <div><strong>{order.customer.name}</strong></div>
            <div>{order.customer.email}</div>
            <div>{order.customer.phone}</div>
          </td>
          <td>{order.date}</td>
          <td>{order.status}</td>
          <td>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          </td>
          <td>
            <select
              value={order.status}
              onChange={(e) => onStatusChange(order._id, e.target.value)}
            >
              <option>Pending</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const exportToCSV = (orders) => {
  const headers = ["Order ID", "Customer", "Date", "Status"];
  const rows = orders.map((o) => [
    o._id,
    o.customer.name,
    o.date,
    o.status
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows].map((e) => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "orders.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
