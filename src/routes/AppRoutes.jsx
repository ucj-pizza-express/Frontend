// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PizzaHero from '../components/herosection';
import About from '../Pages/Aboutpage/About';
import Items from '../Pages/Shop/Items';
import Contact from '../Pages/ContactUS/Contact';
import Login from '../Login/Login';
import Signup from '../SignUp/SignUp';
import Profile from '../User/Profile';
import { CartProvider } from '../Pages/Cart/CartContext.jsx';  // Make sure path is correct
import Checkout from '../Pages/Cart/Checkout.jsx';
import ForgotPassword from '../Login/Forgetpassword.jsx';
import UpdatePasswordForm from '../Login/updatepass.jsx';
import Dashboard from '../admin/Dashboard.jsx';
import Orders from '../admin/Orders';
import Userhandle from '../admin/Usermanagement.jsx';

export default function AppRoutes() {
  return (
    <CartProvider>
      <Routes>
        {/* Redirect root "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Items />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgotpassword" element={< ForgotPassword/>} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/updatepassword/:token" element={<UpdatePasswordForm />} />


          {/* admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/orders" element={<Orders/>}/>
<Route path="/admin/users" element={<Userhandle />} />       {/* { // <Route path="/admin/items" element={<Items />} /> */} 

        {/* Optional route for home page */}
        <Route path="/home" element={<PizzaHero />} />
      </Routes>
    </CartProvider>
  );
}
