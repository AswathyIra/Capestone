import React from 'react';
import Nav from "./Nav"; // Import the Nav component
import logo from  '../assets/Logo.svg'; // Import logo image

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <img src={logo} alt="Logo" style={{ height: '50px' }} />
                <Nav />
            </div>
        </header>
    );
};

export default Header;