import React from 'react';
import './CustomerFavourites.css';
import pepperoniPizza from '../../assets/pepperonipizza.png'; // Adjust this path as needed

const pizzaData = [
  {
    name: 'Spicy Pepperoni',
    description: 'From classic favorites to signature specials, we’ve got a slice for every craving.',
    rating: 4.5,
    image: pepperoniPizza,
  },
  {
    name: 'Spicy Pepperoni',
    description: 'From classic favorites to signature specials, we’ve got a slice for every craving.',
    rating: 4.5,
    image: pepperoniPizza,
  },
  {
    name: 'Spicy Pepperoni',
    description: 'From classic favorites to signature specials, we’ve got a slice for every craving.',
    rating: 4.5,
    image: pepperoniPizza,
  },
];

const CustomerFavourites = () => {
  return (
    <section className="favourites-section">
      <h2 className="favourites-title">Customer Favourites</h2>
      <div className="favourites-container">
        {pizzaData.map((pizza, index) => (
          <div key={index} className="pizza-card">
            <img src={pizza.image} alt={pizza.name} className="pizza-image" />
            <h3 className="pizza-name">{pizza.name}</h3>
            <p className="pizza-description">{pizza.description}</p>
            <p className="pizza-rating">{pizza.rating}/5 ⭐⭐⭐⭐⭐</p>
          </div>
        ))}
      </div>
      <button className="explore-button">Explore More &gt;</button>
    </section>
  );
};

export default CustomerFavourites;
