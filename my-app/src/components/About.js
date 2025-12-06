import React from "react";
import "./About.css";
import restaurant from "../assets/restaurant.jpg";
import chef from "../assets/restaurant chef B.jpg";
import chefs from "../assets/Mario and Adrian A.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="about-title">Little Lemon</h1>
        <h1 className="about-location">Chicago</h1>
        <p className="about-description">
          Little Lemon Chicago is a family owned Mediterranean restaurant
          located in the heart of the city. The restaurant is run by brothers
          Mario and Adrian, who have always had a passion for cooking and
          serving delicious food. Growing up in a Mediterranean household, the
          brothers were exposed to traditional recipes from an early age, and
          they decided to bring those recipes to the masses with a modern twist.
          At Little Lemon, you can expect to find a menu full of classic dishes
          with a creative twist that makes them stand out from the rest. Whether
          you're looking for a quick lunch or a leisurely dinner, Little Lemon
          Chicago is the perfect place to indulge in a delicious meal in a cozy
          and welcoming atmosphere.
        </p>
      </div>
      <div className="about-images-triangle">
        <img src={restaurant} alt="Restaurant" className="about-rest-image" />
        <img src={chef} alt="Restaurant Chef" className="about-chef-image" />
        <img src={chefs} alt="Chefs" className="about-chefs-image" />
      </div>
    </div>
  );
};

export default About;
