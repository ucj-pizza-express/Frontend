import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <img src="/pizzalogo.png" alt="PizzaExpress Logo" className="logo" />
        <h2>Login to <span className="brand">PizzaExpress</span></h2>
        <input type="email" placeholder="Email"  className='email'/>
        <input type="password" placeholder="Password" className='password' />
        <button>Login</button>
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
