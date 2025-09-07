import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSendOTP = async () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setOtpSent(true);
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Server error. Couldn't send OTP.");
    }
  };

  const handleSignup = async () => {
    if (!otp || !password) {
      alert("OTP and password are required.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        navigate('/login');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Signup failed. Server error.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <img src="/pizzalogo.png" alt="PizzaExpress Logo" className="logo" />
        <h2>Sign Up for <span className="brand">PizzaExpress</span></h2>

        <input
          type="email"
          placeholder="Email"
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {!otpSent ? (
          <button className="otp-button" onClick={handleSendOTP}>Send OTP</button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>

            <button className="signup-btn" onClick={handleSignup}>Sign Up</button>
          </>
        )}

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
