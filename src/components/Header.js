// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="logo">🎓 EduGamify</div>

      <nav className="nav-links">
        <Link to="/">Login</Link>
        <Link to="/gamification">Gamification & Rewards</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/community">Community</Link>
      </nav>
    </header>
  );
}

export default Header;
