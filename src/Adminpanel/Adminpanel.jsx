import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import "./Adminpanel.css";
import Orderpage from "../Pages/Order/Orderpage"; 

function Adminpanel() {
  return (
    <Router>
      <div className="admin-panel">
        <nav className="sidebar">
          <h2>Admin Panel</h2>
          <ul>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/orders">Order Details</NavLink></li>
            <li><NavLink to="/users">User Management</NavLink></li>
            <li><NavLink to="/settings">Settings</NavLink></li>
            <li><NavLink to="/reports">Reports</NavLink></li>
            <li><NavLink to="/notifications">Notifications</NavLink></li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reports" element={<Reports />} />
             <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
  <div className="card-grid">
    <Card title="Total Sales Amount" value="Rs. " color="green" />
    <Card title="Top Selling Pizza" value="" />
    <Card title="New Customers" value="0" />
    <Card title="Returning Customers" value="0" />
    <Card title="Delivered Orders" value="0" color="green" />
    <Card title="Pending Orders" value="0" color="white" />
    <Card title="Cancelled Orders" value="0" color="red" />
    <Card title="Top Time Slot" value="7 PM - 9 PM" />
    <Card title="Top Customer" value="Vithu - Rs. 3,000" />
</div>
  );
}
const Card = ({ title, value, color }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p style={{ color: color || '#333' }}>{value}</p>
    </div>
  );
};


const initialOrders = [
]

function Orders() {
  const [orders, setOrders] = useState(initialOrders);
  const [filters, setFilters] = useState({ searchTerm: "", status: "", date: "" });

  const handleStatusChange = (id, newStatus) => {
    const updated = orders.map(o =>
      o.id === id ? { ...o, status: newStatus } : o
    );
    setOrders(updated);
  };

  const filtered = orders.filter(o => {
    return (
      (!filters.searchTerm || o.customer.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
      (!filters.status || o.status === filters.status) &&
      (!filters.date || o.date === filters.date)
    );
  });

  return (
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
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="">All</option>
        <option>Pending</option>
        <option>Delivered</option>
        <option>Cancelled</option>
      </select>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button className="filter-btn" onClick={applyFilter}>Filter</button>
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
      {orders.map(order => (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.customer}</td>
          <td>{order.date}</td>
          <td>{order.status}</td>
          <td>
            <ul>
              {order.items.map(item => (
                <li key={item.id}>
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          </td>
          <td>
            <select
              value={order.status}
              onChange={e => onStatusChange(order.id, e.target.value)}
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

const exportToCSV = orders => {
  const headers = ["Order ID", "Customer", "Date", "Status"];
  const rows = orders.map(o => [o.id, o.customer, o.date, o.status]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows].map(e => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "orders.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function Users() {
  return <div><h2>User Details</h2><p>Display all users here...</p></div>;
}

function Settings() {
  const initialPizzas = [
    
  ];

  const [pizzas, setPizzas] = useState(initialPizzas);
  const [deliveryCharge, setDeliveryCharge] = useState(30);
  const [taxPercent, setTaxPercent] = useState(5);
  const [adminInfo, setAdminInfo] = useState({
    username: '',
    email: ''
  });

  const [newPizzaName, setNewPizzaName] = useState('');
  const [newPizzaPrice, setNewPizzaPrice] = useState('');
  const [newPizzaSizes, setNewPizzaSizes] = useState('');
  const [newPizzaDescription, setNewPizzaDescription] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    basePrice: '',
    sizes: [],
    description: ''
  });

  const addPizza = () => {
    if (!newPizzaName || !newPizzaPrice) {
      alert('Enter pizza name and price');
      return;
    }
    const newPizza = {
      id: Date.now(),
      name: newPizzaName,
      basePrice: parseFloat(newPizzaPrice),
      sizes: newPizzaSizes
        ? newPizzaSizes.split(',').map(s => s.trim())
        : ['Small', 'Medium', 'Large'],
      toppings: newPizzaDescription
        ? newPizzaDescription.split(',').map(t => t.trim())
        : []
    };
    setPizzas([...pizzas, newPizza]);
    setNewPizzaName('');
    setNewPizzaPrice('');
    setNewPizzaSizes('');
    setNewPizzaDescription('');
  };

  const deletePizza = id => {
    if (window.confirm('Delete this pizza?')) {
      setPizzas(pizzas.filter(p => p.id !== id));
    }
  };
  const clearPizzaForm = () => {
  setNewPizzaName('');
  setNewPizzaPrice('');
  setNewPizzaSizes('');
  setNewPizzaDescription('');
};


  const startEdit = pizza => {
    setEditingId(pizza.id);
    setEditForm({
      name: pizza.name,
      basePrice: pizza.basePrice,
      sizes: pizza.sizes,
      description: pizza.toppings ? pizza.toppings.join(', ') : ''
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ name: '', basePrice: '', sizes: [], description: '' });
  };

  const saveEdit = () => {
    setPizzas(prev =>
      prev.map(p =>
        p.id === editingId
          ? {
              ...p,
              name: editForm.name,
              basePrice: parseFloat(editForm.basePrice),
              sizes: editForm.sizes,
              toppings: editForm.description
                ? editForm.description.split(',').map(t => t.trim())
                : []
            }
          : p
      )
    );
    setEditingId(null);
  };

  const onChange = e => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAdminChange = e => {
    setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
  };

  const saveAdminInfo = () => {
    alert('Admin info saved');
  };

  return (
    <div className="settings-container">
      <h2>Settings & Configuration</h2>

      <section>
        <h2>Pizza Menu Items</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Sizes</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map(p =>
              editingId === p.id ? (
                <tr key={p.id}>
                  <td>
                    <input
                      value={editForm.name}
                      name="name"
                      onChange={onChange}
                    />
                  </td>
                  <td>
                    <input
                      value={editForm.basePrice}
                      name="basePrice"
                      type="number"
                      onChange={onChange}
                    />
                  </td>
                  <td>
                    <input
                      value={editForm.sizes.join(', ')}
                      name="sizes"
                      onChange={e =>
                        setEditForm(prev => ({
                          ...prev,
                          sizes: e.target.value.split(',').map(s => s.trim())
                        }))
                      }
                    />
                  </td>
                  <td>
                    <input
                      value={editForm.description}
                      name="description"
                      onChange={onChange}
                    />
                  </td>
                  <td>
                    <td>
                      <div className="action-buttons">
                        <button className="save-button" onClick={saveEdit}>Save</button>
                        <button className="cancel-button" onClick={cancelEdit}>Cancel</button>
                      </div>
                    </td>
                  </td>
                </tr>
              ) : (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>Rs. {p.basePrice}</td>
                  <td>{p.sizes.join(', ')}</td>
                  <td>{p.toppings?.join(', ') || 'N/A'}</td>
                  <td>
                    <td>
                      <div className="action-buttons">
                        <button className="edit-button" onClick={() => startEdit(p)}>Edit</button>
                        <button className="delete-button" onClick={() => deletePizza(p.id)}>Delete</button>
                      </div>
                    </td>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
</section>
        <div className="settings-container">
  <div className="settings-box">
    <h3>Add New Pizza</h3>
    <div className="form-group">
      <input
        name="name"
        className="add-input"
        type="text"
        placeholder="Pizza Name"
        value={newPizzaName}
        onChange={e => setNewPizzaName(e.target.value)}
      />
    </div>
    <div className="form-group">
      <input
        name="basePrice"
        className="add-input"
        type="number"
        placeholder="Base Price"
        value={newPizzaPrice}
        onChange={e => setNewPizzaPrice(e.target.value)}
      />
    </div>
    <div className="form-group">
      <input
        name="sizes"
        className="add-input"
        type="text"
        placeholder="Sizes"
        value={newPizzaSizes}
        onChange={e => setNewPizzaSizes(e.target.value)}
      />
    </div>
    <div className="form-group">
      <input
        name="description"
        className="add-input"
        type="text"
        placeholder="Description"
        value={newPizzaDescription}
        onChange={e => setNewPizzaDescription(e.target.value)}
      />
    </div>
    <button className="btn-pizza" onClick={addPizza}>Add Pizza</button>
    <button className="btn-clear" onClick={clearPizzaForm}>Clear</button>
  </div>

  <div className="settings-box">
    <h3>Delivery & Taxes</h3>
    <div className="form-group">
      <label>Delivery Charge (Rs.):</label>
      <input
        type="number"
        name="delivery"
        value={deliveryCharge}
        onChange={e => setDeliveryCharge(parseFloat(e.target.value) || 0)}
      />
    </div>
    <div className="form-group">
      <label>Tax Percentage (%):</label>
      <input
        type="number"
        name="percentage"
        value={taxPercent}
        onChange={e => setTaxPercent(parseFloat(e.target.value) || 0)}
      />
    </div>
    <button className="btn-pizza" onClick={addPizza}>Add</button>
  </div>

  <div className="settings-box">
    <h3>Admin Profile</h3>
    <div className="form-group">
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={adminInfo.username}
        onChange={handleAdminChange}
      />
    </div>
    <div className="form-group">
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={adminInfo.email}
        onChange={handleAdminChange}
      />
    </div>
    <button className="btn-pizza" onClick={saveAdminInfo}>Save Admin Info</button>
  </div>
</div>
    </div>
  );
}

function Reports() {
  const [salesData] = useState({});

  const [popularPizzas] = useState({
    daily: [],
    weekly: [],
    monthly: [],
    yearly: [],
  });

  const [customerStats] = useState({
    daily: { newCustomers: 0, returningCustomers: 0 },
    weekly: { newCustomers: 0, returningCustomers: 0 },
    monthly: { newCustomers: 0, returningCustomers: 0 },
    yearly: { newCustomers: 0, returningCustomers: 0 },
  });

  const [orderVolumeByTime] = useState({
    daily: [],
    weekly: [],
    monthly: [],
    yearly: [],
  });

  const pairedFrames = [
    ["daily", "weekly"],
    ["monthly", "yearly"]
  ];

  return (
    <div className="reports-container">
      <h2>Reports & Analytics</h2>

      {pairedFrames.map(([frame1, frame2]) => (
        <div key={frame1 + frame2} className="report-row">
          {[frame1, frame2].map((frame) => (
            <div key={frame} className="report-block">
              <h3>{frame.charAt(0).toUpperCase() + frame.slice(1)} Summary</h3>

              <div className="summary-card">
                <h4>Sales</h4>
                <p>Rs. {salesData[frame] ?? "0"}</p>
              </div>

              <div className="summary-card">
                <h4>Popular Pizzas</h4>
                <ul>
                  {popularPizzas[frame].map((pizza) => (
                    <li key={pizza.name}>
                      {pizza.name} - {pizza.orders} orders
                    </li>
                  ))}
                </ul>
              </div>

              <div className="summary-card">
                <h4>Customer Statistics</h4>
                <p>New: {customerStats[frame].newCustomers}</p>
                <p>Returning: {customerStats[frame].returningCustomers}</p>
              </div>

              <div className="summary-card">
                <h4>Order Volume</h4>
                <ul>
                  {orderVolumeByTime[frame].map((slot) => (
                    <li key={slot.time}>
                      {slot.time}: {slot.orders} orders
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}


function Notifications() {
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([
    { id: 1, user: "Alice", feedback: "Great pizza!", date: "2025-05-10" },
    { id: 2, user: "Bob", feedback: "Delivery was late.", date: "2025-05-11" },
  ]);

  const sendNotification = () => {
    if (!message.trim()) {
      alert("Please enter a message to send.");
      return;
    }
    alert(`Notification sent: "${message}"`);
    setMessage("");
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Delete this feedback?")) {
      setFeedbackList(feedbackList.filter((f) => f.id !== id));
    }
  };

  return (
    <div className="notifications-container">
      <h2> Notifications / Messages</h2>

      <section className="send-section">
        <h3>Send Notification</h3>
        <textarea
          rows="4"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendNotification}>Send</button>
      </section>

      <section className="feedback-section">
        <h3>Customer Feedback & Complaints</h3>
        {feedbackList.length === 0 ? (
          <p>No feedback available.</p>
        ) : (
          <ul className="feedback-list">
            {feedbackList.map(({ id, user, feedback, date }) => (
              <li key={id} className="feedback-card">
                <div className="feedback-header">
                  <strong>{user}</strong>
                  <span>{date}</span>
                </div>
                <p>{feedback}</p>
                <button onClick={() => deleteFeedback(id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
export default Adminpanel;
