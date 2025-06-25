import React from 'react';
import './About.css';
import Aboutimage from "../../assets/Aboutimage.png";
import Footer from '../../Footer/Footer';
import Testimonial from '../../Footer/Testimonial';

const About = () => {
  return (
    <div className="about-us-container">
     <section className="hero-section">
      <img src={Aboutimage} alt="About" className="about-img" />
      <div className="overlay">
        <h1 className="hero-title">About Us</h1>
        <p className="breadcrumb">Home / About Us</p>
      </div>
     </section>

      <section className="story-section">
        <h2 className="section-title orange-yellow">Our Story</h2>
        <div className="section-box">
          <p>
            Pizza Express began with one simple idea: to serve delicious, quality pizzas made with love. 
            What started as a small passion project has grown into a trusted name for pizza lovers who crave 
            freshness, flavor, and fast service.
          </p>
        </div>
      </section>

      <section className="difference-section">
        <h2 className="section-title orange-yellow">What Makes Us Different</h2>
        <div className="section-box">
          <p>We believe every slice should be memorable. That's why we use:</p>
          <ul>
            <li>Fresh, hand-tossed dough</li>
            <li>Locally sourced and premium ingredients</li>
            <li>Secret-recipe sauces and rich, melty cheese</li>
          </ul>
          <p>
            Whether you're dining in, taking out, or ordering online, we ensure every pizza is made to perfection.
          </p>
        </div>
      </section>

      <section className="delivery-section">
        <h2 className="section-title orange-yellow">Fast. Fresh. Delivered</h2>
        <div className="section-box">
          <p>
            We know time matters. Our streamlined ordering system and dedicated delivery team make sure your pizza arrives 
            hot, fresh, and on time, every time.
          </p>
        </div>
      </section>

      <section className="family-section">
        <h2 className="section-title orange-yellow">Join the our Family</h2>
        <div className="section-box">
          <p>
             Whether you're a first-time customer or a loyal regular, we welcome you to the Pizza Express experience, 
             where great taste meets great service.
        </p>
        </div>
      </section>  
      <Testimonial/>
      <Footer/>
    </div>
    )
};

export default About;
