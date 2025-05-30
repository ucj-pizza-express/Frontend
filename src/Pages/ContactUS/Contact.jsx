import React from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import Footer from '../../Footer/Footer';
import Testimonial from '../../Footer/Testimonial';

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <h2 className="contact-title">Contact <span>Us</span></h2>
        <p className="breadcrumb">Home / Contact Us</p>
        <p className="contact-heading">Talk to Us Anytime,<br />We’re Listening!!</p>

        <div className="contact-wrapper">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone Number" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
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

      {/* Testimonial and Footer at the bottom */}
      <Testimonial />
      <Footer />
    </>
  );
}
