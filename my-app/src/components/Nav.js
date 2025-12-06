import React from "react";
import { Link } from "react-router-dom";



const Nav = () => {
    
  return (
    <>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLink}>
              About
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/menu" style={styles.navLink}>
              Menu
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/reservations" style={styles.navLink}>
              Reservations
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/order-online" style={styles.navLink}>
              Order Online
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/login" style={styles.navLink}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    
    </>
  );
};

const styles = {
  nav: {
    backgroundColor: "#FFFFFF",
    padding: "10px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 10px",
  },
  navLink: {
    color: "#000000",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "14pt",
    fontFamily: "Markazi, sans-serif",
  },
  navLinkHover: {
    textDecoration: "underline",
  },
};

export default Nav;
