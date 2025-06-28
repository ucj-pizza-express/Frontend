import React, { useState } from "react";
import "./Items.css";
import Cart from "../Cart/Cart.jsx";
import { useCart } from "../Cart/CartContext.jsx"; // optional if used
import Footer from "../../Footer/Footer.jsx";

// Image Imports
import Small from "../../assets/Small.png";
import Medium from "../../assets/Medium.png";
import Large from "../../assets/Large.png";
import Extralarge from "../../assets/Extralarge.png";
import ToppingImg from "../../assets/Small.png";

// Data Arrays
const sizePizzas = [
  { name: "Small Pizza", description: "Thin crust with spicy beef & pepperoni.", price: "Rs 1400.00", image: Small },
  { name: "Medium Pizza", description: "Loaded with mozzarella and pepperoni.", price: "Rs 1800.00", image: Medium },
  { name: "Large Pizza", description: "Cheese, chicken & vegetables.", price: "Rs 2200.00", image: Large },
  { name: "Extra Large Pizza", description: "Double toppings & extra crust.", price: "Rs 2600.00", image: Extralarge }
];

const toppings = [
  { name: "Pepperoni Pizza", description: "Spicy pepperoni slices.", price: "Rs 1400.00", image: ToppingImg },
  { name: "Extra Cheese Pizza", description: "Gooey cheese.", price: "Rs 1500.00", image: ToppingImg },
  { name: "Mushroom Pizza", description: "Fresh mushrooms.", price: "Rs 1200.00", image: ToppingImg },
  { name: "Bacon Pizza", description: "Crispy bacon.", price: "Rs 2000.00", image: ToppingImg },
  { name: "Ground Beef Pizza", description: "Spiced beef.", price: "Rs 2200.00", image: ToppingImg },
  { name: "Pineapple Pizza", description: "Sweet pineapple chunks.", price: "Rs 1400.00", image: ToppingImg },
  { name: "Dried Shrimps Pizza", description: "Savory shrimps.", price: "Rs 2500.00", image: ToppingImg },
  { name: "Anchovies Pizza", description: "Salty anchovies.", price: "Rs 2600.00", image: ToppingImg },
  { name: "Sun Dried Tomatoes Pizza", description: "Sun dried tomatoes.", price: "Rs 1800.00", image: ToppingImg },
  { name: "Spinach Pizza", description: "Fresh spinach.", price: "Rs 1200.00", image: ToppingImg },
  { name: "Roasted Garlic Pizza", description: "Roasted garlic.", price: "Rs 1500.00", image: ToppingImg },
  { name: "Shredded Chicken Pizza", description: "Shredded chicken.", price: "Rs 2300.00", image: ToppingImg }
];

const drinks = [
  { name: "Coke", description: "Classic Coke.", price: "Rs 100.00", image: ToppingImg },
  { name: "Diet Coke", description: "Low-calorie Coke.", price: "Rs 100.00", image: ToppingImg },
  { name: "Iced Tea", description: "Chilled tea.", price: "Rs 120.00", image: ToppingImg },
  { name: "Ginger Ale", description: "Zesty soda.", price: "Rs 120.00", image: ToppingImg },
  { name: "Sprite", description: "Lemon-lime soda.", price: "Rs 100.00", image: ToppingImg },
  { name: "Root Beer", description: "Sweet root beer.", price: "Rs 130.00", image: ToppingImg },
  { name: "Water", description: "Bottled water.", price: "Rs 80.00", image: ToppingImg }
];

const otherItems = [
  { name: "Chicken Wings", description: "Crispy wings.", price: "Rs 350.00", image: ToppingImg },
  { name: "Poutine", description: "Fries + cheese + gravy.", price: "Rs 300.00", image: ToppingImg },
  { name: "Onion Rings", description: "Fried rings.", price: "Rs 250.00", image: ToppingImg },
  { name: "Cheesy Garlic Bread", description: "Garlic & cheese.", price: "Rs 280.00", image: ToppingImg },
  { name: "Garlic Dip", description: "Creamy garlic.", price: "Rs 80.00", image: ToppingImg },
  { name: "BBQ Dip", description: "Tangy dip.", price: "Rs 90.00", image: ToppingImg },
  { name: "Sour Cream Dip", description: "Smooth sour cream.", price: "Rs 90.00", image: ToppingImg }
];

// Main Component
const Items = () => {
  const [message, setMessage] = useState("");
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = async (item, quantity) => {
    const cartItem = {
      pizzaId: item._id || "000000000000000000000000", // placeholder
      name: item.name,
      size: item.name.includes("Small") ? "Small" :
            item.name.includes("Medium") ? "Medium" :
            item.name.includes("Large") ? "Large" : "Regular",
      quantity,
      price: parseInt(item.price.replace("Rs ", "").replace(".00", "")) || 0
    };

    const orderPayload = {
      customer: {
        name: "Guest",
        phone: "0771234567",
        email: "guest@example.com",
        address: {
          street: "123 Main Street",
          city: "Colombo",
          postalCode: "10000"
        }
      },
      items: [cartItem],
      totalPrice: cartItem.price * quantity,
      paymentStatus: "Pending",
      deliveryStatus: "Pending"
    };

    try {
        const response = await fetch("http://localhost:5000/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload)
      });

      if (!response.ok) throw new Error("Order failed");

      setMessage(`${item.name} added to cart & order placed!`);
      setShowCart(true);
    } catch (err) {
      console.error("Order error:", err);
      setMessage("Order failed.");
    }

    setTimeout(() => setMessage(""), 2000);
  };

  const renderSection = (title, items, idPrefix) => (
    <>
      <h1 className="section-heading">{title}</h1>
      <div className="section-items">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} className="pizza-image" />
            <h2 className="title">{item.name}</h2>
            <p className="desc">{item.description}</p>
            <div className="price">{item.price}</div>
            <div className="quantity-section">
              <label htmlFor={`${idPrefix}-qty-${index}`}>Qty:</label>
              <input
                type="number"
                id={`${idPrefix}-qty-${index}`}
                min="1"
                max="10"
                defaultValue="1"
                className="qty-input"
              />
            </div>
            <button
              className="Addtocart-btn"
              onClick={() =>
                handleAddToCart(
                  item,
                  parseInt(document.getElementById(`${idPrefix}-qty-${index}`).value)
                )
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="card-container">
      {message && <div className="cart-message">{message}</div>}
      {renderSection("Size", sizePizzas, "size")}
      {renderSection("Pizzas", toppings, "topping")}
      {renderSection("Drinks", drinks, "drink")}
      {renderSection("Other Items", otherItems, "other")}

      {/* Cart Popup */}
      {showCart && <Cart onClose={() => setShowCart(false)} />}

      <Footer />
    </div>
  );
};

export default Items;
