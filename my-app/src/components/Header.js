import React from 'react';
import Nav from "./Nav";
import logo from '../assets/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <img src={logo} alt="Logo" className="logo" />
                <Nav />
            </div>
        </header>
    );
}

export default Header;