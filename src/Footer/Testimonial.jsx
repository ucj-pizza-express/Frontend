import React from 'react';
import './Testimonial.css';

const testimonials = [
{
name: "Aarya K",
text: "Absolutely loved the crust! My order was on time and still piping hot. Will definitely order again!",
rating: "4.5/⭐️⭐️⭐️⭐️⭐️"
},
{
name: "David R.",
text: "Fast delivery and amazing taste. The BBQ Chicken pizza is a must-try.",
rating: "4.5/⭐️⭐️⭐️⭐️⭐️"
},
{
name: "Tharun S",
text: "I love how easy the website is to use. The live tracking feature is super helpful too.",
rating: "4.5/⭐️⭐️⭐️⭐️⭐️"
}
];

const Testimonial = () => {
  return (
    <div>
        <section className="testimonials-section">
        <h2 className="testimonials-heading">What Our Customers Say</h2>
        <div className="testimonials-list">
        {testimonials.map((item, index) => (
        <div key={index} className="testimonial-card">
        <h3 className="testimonial-name">{item.name}</h3>
        <p className="testimonial-text">{item.text}</p>
        <p className="testimonial-rating">{item.rating}</p>
        </div>
        ))}
        </div>
        </section>
    </div>
  )
}

export default Testimonial;