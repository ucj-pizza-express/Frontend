import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

const handleSendOTP = async () => {
  try {
  const res = await fetch('http://localhost:5000/api/auth/signup', {
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
    alert("Error sending OTP");
  }
};


 const handleSignup = async () => {
  const password = document.querySelector('.password').value;
  try {
    const res = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert("Error signing up");
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='email'
        />

        {!otpSent && (
          <button className="otp-button" onClick={handleSendOTP}>
            Send OTP
          </button>
        )}

        {otpSent && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className='otp'
            />
            <input type="password" placeholder="Password" className='password' />
            <button onClick={handleSignup}>Sign Up</button>
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
