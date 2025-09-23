// src/components/GamificationRewards.js
import React from "react";
import "./GamificationRewards.css";

function GamificationRewards() {
  return (
    <div className="rewards-container">
      <h1 className="page-title">🌟 Gamification & Rewards</h1>

      {/* Eco-Points Wallet */}
      <section className="section">
        <h2>💰 Eco-Points Wallet</h2>
        <p className="points-display">Total Points: <span>450</span></p>
      </section>

      {/* Badges Showcase */}
      <section className="section">
        <h2>🏅 Badges & Achievements</h2>
        <div className="badges-grid">
          <div className="badge">♻️ Recycler Pro</div>
          <div className="badge">🌱 Green Warrior</div>
          <div className="badge">💡 Energy Saver</div>
          <div className="badge">🚶 Walk-to-School Champ</div>
        </div>
      </section>

      {/* Rewards Catalog */}
      <section className="section">
        <h2>🎁 Rewards Catalog</h2>
        <ul className="rewards-list">
          <li>🏆 Certificate of Excellence</li>
          <li>📜 Digital Badge for Profile</li>
          <li>🎟️ Free Eco-Event Pass</li>
          <li>🌍 Recognition from NGO/Government</li>
        </ul>
      </section>

      {/* School Recognition */}
      <section className="section">
        <h2>🏫 School Recognition</h2>
        <p>Your school is ranked <b>#3</b> in the Eco-Challenge leaderboard! 🎉</p>
      </section>

      {/* Certificates Download */}
      <section className="section">
        <h2>📄 Download Certificates</h2>
        <button className="download-btn">⬇️ Download</button>
      </section>
    </div>
  );
}

export default GamificationRewards;
