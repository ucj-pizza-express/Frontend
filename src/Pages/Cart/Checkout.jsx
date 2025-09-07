import React, { useState } from 'react';
import { useCart } from '../Cart/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    postalCode: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const total = cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;
    if (!cartItems || cartItems.length === 0) {
      setMessage('🛒 Your cart is empty.');
      return;
    }

    if (total <= 0) {
      setMessage('⚠️ Invalid order: total amount is Rs 0.');
      return;
    }

    setSubmitting(true);
    setMessage('📤 Placing your order...');

    const payload = {
      customer: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: {
          street: form.street,
          city: form.city,
          postalCode: form.postalCode,
        },
      },
      items: cartItems.map(item => ({
        pizzaId: item._id || null,
        name: item.name,
        size: item.size,
        quantity: item.quantity,
        price: item.price
      })),
      totalPrice: total,
      paymentStatus: 'Pending',
      deliveryStatus: 'Pending',
    };

    try {
      const res = await fetch('http://localhost:5000/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage('✅ Order placed! A bill has been sent to your email.');
        clearCart();
        setForm({
          name: '',
          email: '',
          phone: '',
          street: '',
          city: '',
          postalCode: '',
        });

        setTimeout(() => {
          navigate('/shop');
        }, 2000);
      } else {
        const err = await res.json();
        setMessage(`❌ Order failed: ${err.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error(error);
      setMessage(`❌ Network error: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('checkout-overlay')) {
      navigate('/items');
    }
  };

  return (
    <div className="checkout-overlay" onClick={handleOverlayClick}>
      <div className="checkout-container" onClick={(e) => e.stopPropagation()}>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit} className="checkout-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={form.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            value={form.phone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            required
            value={form.street}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            value={form.city}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            required
            value={form.postalCode}
            onChange={handleInputChange}
          />

          <div className="checkout-total">Total: Rs {total}</div>

          <div className="checkout-buttons">
            <button
              type="submit"
              className="place-order-btn"
              disabled={submitting || cartItems.length === 0 || total === 0}
            >
              {submitting ? 'Placing Order...' : 'Place Order'}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate('/shop')}
              disabled={submitting}
            >
              Cancel
            </button>
          </div>
        </form>

        {message && <p className="checkout-message">{message}</p>}
      </div>
    </div>
  );
}
