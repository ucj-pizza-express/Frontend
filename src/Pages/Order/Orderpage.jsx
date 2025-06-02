import React, { useState } from 'react';
import '../Order/Orderpage.css';

export default function OrderNow() {
  const [form, setForm] = useState({
    name: '',
    pizza: '',
    quantity: 1,
    address: '',
    phone: ''
  });

  const [cart, setCart] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddToCart = () => {
    if (!form.name || !form.pizza || !form.address || !form.phone) {
      alert('Please fill all fields before adding to cart.');
      return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(form.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    const newItem = {
      pizza: form.pizza,
      quantity: form.quantity
    };

    setCart([...cart, newItem]);
    alert(`Added ${form.quantity} x ${form.pizza} to cart`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert('Cart is empty. Add items before placing the order.');
      return;
    }

    let orderSummary = cart.map(
      (item, index) => `${index + 1}. ${item.pizza} x ${item.quantity}`
    ).join('\n');

    alert(`Order placed!\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\n\nItems:\n${orderSummary}`);

    // Reset cart and form
    setCart([]);
    setForm({
      name: '',
      pizza: '',
      quantity: 1,
      address: '',
      phone: ''
    });
  };

  return (
    <div className="order-container">
       <button className="close-button" onClick={(onClose) => console.log('Close clicked')}>
    &times;
  </button>
      <h2>Order Now</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <select name="pizza" value={form.pizza} onChange={handleChange} required>
          <option value="">Select Pizza</option>
          <option value="Margherita">Margherita</option>
          <option value="Pepperoni">Pepperoni</option>
          <option value="Veggie">Veggie</option>
        </select>

        <input
          type="number"
          name="quantity"
          min="1"
          value={form.quantity}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="tel"
          name="phone"
          pattern="[0-9]{10}"
          placeholder="Phone number (10 digits)"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <div className="button-group">
          <button type="button" onClick={handleAddToCart}>Add to Cart</button>
          <button type="submit">Place Order</button>
        </div>
      </form>

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Cart Items</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.pizza} x {item.quantity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
