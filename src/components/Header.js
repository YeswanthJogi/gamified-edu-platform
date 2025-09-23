import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo / Brand */}
        <div className="header-logo">
          <img
            src="/logo.png"
            alt="EcoLearn Logo"
            className="logo-img"
          />
          <span className="logo-text">EcoLearn</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* CTA Buttons */}
        <div className="header-buttons">
          {/* <Link to="/login" className="btn-login">Login</Link> */}
          <Link to="/signup" className="btn-signup">Login</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
