// src/Pages/Cart/Cart.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './Cart.css';

export default function Cart({ onClose }) {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-border">
          <div className="close-button" onClick={onClose}>&times;</div>
        </div>

        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <div><strong>{item.name}</strong> x {item.quantity}</div>
                  <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="cart-total">Total: Rs {total.toFixed(2)}</div>
            <button className="checkout-button" onClick={() => navigate('/checkout')}>Order Now</button>
          </>
        )}
      </div>
    </div>
  );
}
