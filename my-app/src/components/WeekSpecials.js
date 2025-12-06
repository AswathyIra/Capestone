import React from "react";
import "./WeekSpecials.css";
import greeksalad from "../assets/greek salad.jpg";
import lemondeseert from "../assets/lemon dessert.jpg";
import bruschetta from "../assets/bruchetta.svg";

const WeekSpecials = () => {
  const foodItems = [
    {
      id: 1,
      title: "Greek Salad",
      price: "$9.99",
      description:
        "A fresh and healthy salad made with crisp lettuce, juicy tomatoes, cucumbers, red onions, and topped with creamy feta cheese, kalamata olives, and a drizzle of olive oil. Perfect for a light and refreshing meal.",
      image: greeksalad,
    },
    {
      id: 2,
      title: "Lemon Dessert",
      price: "$5.99",
      description:
        "A tangy and sweet lemon dessert featuring a smooth and creamy lemon filling on a buttery crust, topped with a dusting of powdered sugar. A delightful treat for lemon lovers.",
      image: lemondeseert,
    },
    {
      id: 3,
      title: "Bruschetta",
      price: "$7.99",
      description:
        "Grilled artisan bread slices topped with a flavorful mixture of fresh diced tomatoes, garlic, basil, and a hint of balsamic glaze. A classic Italian appetizer that is both simple and delicious.",
      image: bruschetta,
    },
  ];
  return (
    <div className="specials-container">
      <div className="specials-heading">
        <h1>This Week's Specials!</h1>
        <button className="online-menu-button">Online Menu</button>
      </div>
      <div className="specials-menu">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.title} className="food-image" />
            <div className="food-details">
              <div className="food-header">
                <h2 className="food-title">{item.title}</h2>
                <p className="food-price">{item.price}</p>
              </div>
              <p className="food-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekSpecials;
