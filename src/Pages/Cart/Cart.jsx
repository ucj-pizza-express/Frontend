import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

export default function Cart({ onClose }) {
  // Use cartItems and removeFromCart from context only (don't receive cartItems as prop)
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div>
                  <strong>{item.pizza}</strong> x {item.quantity}
                </div>
                <div>
                  Name: {item.name} <br />
                  Address: {item.address} <br />
                  Phone: {item.phone}
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
