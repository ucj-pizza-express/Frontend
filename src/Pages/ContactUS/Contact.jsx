import React, { useState } from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import Footer from '../../Footer/Footer';
import Testimonial from '../../Footer/Testimonial';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg('');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMsg('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setResponseMsg(`Error: ${data.message}`);
      }
    } catch (error) {
      setResponseMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <div className="contact-container">
        <h2 className="contact-title">Contact <span>Us</span></h2>
        <p className="breadcrumb">Home / Contact Us</p>
        <p className="contact-heading">Talk to Us Anytime,<br />We’re Listening!!</p>

        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="firstName" placeholder="Full Name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            </div>
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
            {responseMsg && <p className="response-message">{responseMsg}</p>}
          </form>

          <div className="contact-info">
            <h3>Address</h3>
            <p>Manipay Road, Jaffna</p>
            <h4>Contact</h4>
            <p><em>Phone:</em> 077 756 5656</p>
            <p><em>Email:</em> pizzaexpress@gmail.com</p>
            <h4>Stay Connected</h4>
            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTiktok />
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
      <Footer />
    </>
  );
}
