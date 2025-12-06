import React from "react";
import restaurantFood from '../assets/restauranfood.jpg';
import './Header.css';

const Banner = () => {
return (
    <div className="banner">
        <div className="banner-content">
            <h1 className="banner-title">Little Lemon</h1>
            <h1 className="banner-location">Chicago</h1>
            <p className="banner-description">
                We are a family owned Mediterranean restaurant, focused on traditional
                recipes served with a modern twist.
            </p>
            <button className="banner-button">Reserve a Table</button>
        </div>
        <div className="banner-image">
            <img src={restaurantFood} alt="Restaurant Food" />
        </div>
    </div>
);
};

export default Banner;
