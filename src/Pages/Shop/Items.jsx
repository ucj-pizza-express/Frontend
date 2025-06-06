import React from "react";
import "./Items.css";

import Small from "../../assets/Small.png";
import Medium from "../../assets/Medium.png";
import Large from "../../assets/Large.png";
import Extralarge from "../../assets/Extralarge.png";
import Normalcrust from "../../assets/Normalcrust.png";
import Cheesycrust from "../../assets/Cheesycrust.png";
import Sauage from "../../assets/Sauage.png";
import Pepperoni from "../../assets/Pepperoni.png";
import ToppingImg from "../../assets/Small.png"; // replace with your topping image or Normalcrust


const sizePizzas = [
  {
    name: "Small Pizza",
    description: "Frozen classic American thin crust pizza topped with spicy beef & pepperoni.",
    price: "Rs 1400.00",
    image: Small,
  },
  {
    name: "Medium Pizza",
    description: "Classic medium pizza loaded with mozzarella and pepperoni.",
    price: "Rs 1800.00",
    image: Medium,
  },
  {
    name: "Large Pizza",
    description: "Large crusty pizza with cheese, chicken, and vegetables.",
    price: "Rs 2200.00",
    image: Large,
  },
  {
    name: "Extra Large Pizza",
    description: "Extra large cheesy pizza with double toppings and extra crust.",
    price: "Rs 2600.00",
    image: Extralarge,
  },
];

const crustPizzas = [
  {
    name: "Normal Crust Pizza",
    description: "Traditional normal crust pizza with pepperoni and mushrooms.",
    price: "Rs 2000.00",
    image: Normalcrust,
  },
  {
    name: "Cheesy Crust Pizza",
    description: "Cheesy crust stuffed with molten cheese for an extra indulgent bite.",
    price: "Rs 2200.00",
    image: Cheesycrust,
  },
  {
    name: "Sausage Crust Pizza",
    description: "Crust filled with juicy sausages, perfect for meat lovers.",
    price: "Rs 2300.00",
    image: Sauage,
  }
];

const toppings = [
  { name: "Pepperoni", description: "Classic spicy pepperoni slices to top off your pizza.", price: "Rs 200.00", image: ToppingImg },
  { name: "Extra Cheese", description: "Add extra gooey cheese.", price: "Rs 150.00", image: ToppingImg },
  { name: "Mushroom", description: "Fresh mushrooms.", price: "Rs 120.00", image: ToppingImg },
  { name: "Ham", description: "Sliced ham.", price: "Rs 180.00", image: ToppingImg },
  { name: "Bacon", description: "Crispy bacon bits.", price: "Rs 200.00", image: ToppingImg },
  { name: "Ground Beef", description: "Spiced ground beef.", price: "Rs 220.00", image: ToppingImg },
  { name: "Jalapeno", description: "Spicy jalapeno slices.", price: "Rs 130.00", image: ToppingImg },
  { name: "Pineapple", description: "Sweet pineapple chunks.", price: "Rs 140.00", image: ToppingImg },
  { name: "Dried Shrimps", description: "Savory dried shrimps.", price: "Rs 250.00", image: ToppingImg },
  { name: "Anchovies", description: "Salty anchovies.", price: "Rs 260.00", image: ToppingImg },
  { name: "Sun Dried Tomatoes", description: "Rich sun dried tomatoes.", price: "Rs 180.00", image: ToppingImg },
  { name: "Spinach", description: "Fresh spinach leaves.", price: "Rs 120.00", image: ToppingImg },
  { name: "Roasted Garlic", description: "Aromatic roasted garlic.", price: "Rs 150.00", image: ToppingImg },
  { name: "Shredded Chicken", description: "Tender shredded chicken.", price: "Rs 230.00", image: ToppingImg },
];

const drinks = [
  { name: "Coke", description: "Refreshing classic Coke.", price: "Rs 100.00", image: ToppingImg },
  { name: "Diet Coke", description: "Low-calorie Diet Coke.", price: "Rs 100.00", image: ToppingImg },
  { name: "Iced Tea", description: "Chilled iced tea.", price: "Rs 120.00", image: ToppingImg },
  { name: "Ginger Ale", description: "Zesty ginger ale.", price: "Rs 120.00", image: ToppingImg },
  { name: "Sprite", description: "Lemon-lime soda.", price: "Rs 100.00", image: ToppingImg },
  { name: "Root Beer", description: "Sweet root beer.", price: "Rs 130.00", image: ToppingImg },
  { name: "Water", description: "Bottled water.", price: "Rs 80.00", image: ToppingImg },
];

const otherItems = [
  { name: "Chicken Wings", description: "Crispy chicken wings.", price: "Rs 350.00", image: ToppingImg },
  { name: "Poutine", description: "Fries with cheese curds and gravy.", price: "Rs 300.00", image: ToppingImg },
  { name: "Onion Rings", description: "Fried onion rings.", price: "Rs 250.00", image: ToppingImg },
  { name: "Cheesy Garlic Bread", description: "Garlic bread topped with cheese.", price: "Rs 280.00", image: ToppingImg },
  { name: "Garlic Dip", description: "Creamy garlic dip.", price: "Rs 80.00", image: ToppingImg },
  { name: "BBQ Dip", description: "Tangy BBQ dip.", price: "Rs 90.00", image: ToppingImg },
  { name: "Sour Cream Dip", description: "Smooth sour cream dip.", price: "Rs 90.00", image: ToppingImg },
];



const Items = () => {
  return (
    <div className="card-container">
      {/* Size Section */}
      <h1 className="section-heading">Size</h1>
      <div className="section-items">
        {sizePizzas.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} className="pizza-image" />
            <h2 className="title">{item.name}</h2>
            <p className="desc">{item.description}</p>
            <div className="price">{item.price}</div>
            <div className="quantity-section">
              <label htmlFor={`qty-${index}`}>Quantity:</label>
              <input
                type="number"
                id={`qty-${index}`}
                name={`qty-${index}`}
                min="1"
                max="10"
                defaultValue="1"
                className="qty-input"
              />
            </div>
            <button className="order-btn">Order Now</button>
          </div>
        ))}
      </div>

      {/* Crust Section */}
      <h1 className="section-heading">Crust</h1>
      <div className="section-items">
        {crustPizzas.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} className="pizza-image" />
            <h2 className="title">{item.name}</h2>
            <p className="desc">{item.description}</p>
            <div className="price">{item.price}</div>
            <div className="quantity-section">
              <label htmlFor={`crust-qty-${index}`}>Quantity:</label>
              <input
                type="number"
                id={`crust-qty-${index}`}
                name={`crust-qty-${index}`}
                min="1"
                max="10"
                defaultValue="1"
                className="qty-input"
              />
            </div>
            <button className="order-btn">Order Now</button>
          </div>
        ))}
      </div>
      {/* Toppings Section */}
      <h1 className="section-heading">Toppings</h1>
      <div className="section-items">
        {toppings.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} className="pizza-image" />
            <h2 className="title">{item.name}</h2>
            <p className="desc">{item.description}</p>
            <div className="price">{item.price}</div>
            <div className="quantity-section">
              <label htmlFor={`topping-qty-${index}`}>Quantity:</label>
              <input
                type="number"
                id={`topping-qty-${index}`}
                name={`topping-qty-${index}`}
                min="1"
                max="10"
                defaultValue="1"
                className="qty-input"
              />
            </div>
            <button className="order-btn">Add Topping</button>
          </div>
        ))}
      </div>
      {/* Drinks Section */}
<h1 className="section-heading">Drinks</h1>
<div className="section-items">
  {drinks.map((item, index) => (
    <div className="card" key={index}>
      <img src={item.image} alt={item.name} className="pizza-image" />
      <h2 className="title">{item.name}</h2>
      <p className="desc">{item.description}</p>
      <div className="price">{item.price}</div>
      <div className="quantity-section">
        <label htmlFor={`drink-qty-${index}`}>Quantity:</label>
        <input
          type="number"
          id={`drink-qty-${index}`}
          name={`drink-qty-${index}`}
          min="1"
          max="10"
          defaultValue="1"
          className="qty-input"
        />
      </div>
      <button className="order-btn">Order Now</button>
    </div>
  ))}
</div>

{/* Other Items Section */}
<h1 className="section-heading">Other Items</h1>
<div className="section-items">
  {otherItems.map((item, index) => (
    <div className="card" key={index}>
      <img src={item.image} alt={item.name} className="pizza-image" />
      <h2 className="title">{item.name}</h2>
      <p className="desc">{item.description}</p>
      <div className="price">{item.price}</div>
      <div className="quantity-section">
        <label htmlFor={`other-qty-${index}`}>Quantity:</label>
        <input
          type="number"
          id={`other-qty-${index}`}
          name={`other-qty-${index}`}
          min="1"
          max="10"
          defaultValue="1"
          className="qty-input"
        />
      </div>
      <button className="order-btn">Order Now</button>
    </div>
  ))}
</div>

    </div>
  );
};

export default Items;
