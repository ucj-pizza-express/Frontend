import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!email) {
      alert('Please enter your email.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/forget-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Password reset link sent! Please check your email.');
      } else {
        setMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Server error. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <img src="/pizzalogo.png" alt="PizzaExpress Logo" className="logo" />
        <h2>
          Forgot <span className="brand">Password?</span>
        </h2>

        <input
          type="email"
          placeholder="Enter your registered email"
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />

        <button onClick={handleReset} disabled={loading}>
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>

        {message && <p style={{ color: '#ff6600', fontSize: '14px' }}>{message}</p>}

        <p className="signup-text">
          <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
