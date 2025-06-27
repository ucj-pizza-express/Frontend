import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        navigate('/home');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Login failed. Server error.');
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <img src="/pizzalogo.png" alt="PizzaExpress Logo" className="logo" />
        <h2>Login to <span className="brand">PizzaExpress</span></h2>

        <input
          type="email"
          placeholder="Email"
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

       <div className="password-wrapper">
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="Password"
    className="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <span
    className="toggle-eye"
    onClick={() => setShowPassword(!showPassword)}
    role="button"
  >
    {showPassword ? '🙈' : '👁️'}
  </span>
</div>

        <button onClick={handleLogin}>Login</button>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
