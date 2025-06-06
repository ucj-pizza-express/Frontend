import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    // Backend logic here to send OTP
    setOtpSent(true);
    alert("OTP sent to your email!");
  };

  const handleSignup = () => {
    // Handle sign up logic here
    alert("Account created successfully!");
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
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
