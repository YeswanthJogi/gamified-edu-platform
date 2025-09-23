import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Rewards.css";

function Rewards() {
  const badges = [
    { id: 1, name: "Eco Starter", desc: "Complete your first eco-task.", icon: "🌱" },
    { id: 2, name: "Recycler", desc: "Recycle 10 items correctly.", icon: "♻️" },
    { id: 3, name: "Green Hero", desc: "Plant 5 trees.", icon: "🌳" },
    { id: 4, name: "Water Saver", desc: "Save 100 liters of water.", icon: "💧" },
    { id: 5, name: "Eco Leader", desc: "Lead an eco-club activity.", icon: "⭐" },
  ];

  const rewards = [
    { id: 1, title: "Certificate of Achievement", detail: "Awarded for completing 50+ eco-points." },
    { id: 2, title: "Leaderboard Recognition", detail: "Top 3 students get highlighted on the leaderboard." },
    { id: 3, title: "School Shoutout", detail: "Schools with most eco-points get featured." },
  ];

  return (
    <div>

      <main className="rewards-container">
        {/* Title */}
        <section className="rewards-hero">
          <h1>Rewards & Badges 🥇</h1>
          <p>
            Unlock digital badges and exciting rewards as you take action for the
            environment.
          </p>
        </section>

        {/* Badges Grid */}
        <section className="badges-grid">
          {badges.map((b) => (
            <div key={b.id} className="badge-card">
              <span className="badge-icon">{b.icon}</span>
              <h3>{b.name}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </section>

        {/* Rewards List */}
        <section className="rewards-list">
          <h2>Available Rewards 🎁</h2>
          <ul>
            {rewards.map((r) => (
              <li key={r.id}>
                <strong>{r.title}</strong> – {r.detail}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="rewards-cta">
          <button className="btn-primary">Start Earning Points</button>
          <button className="btn-secondary">Check Leaderboard</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Rewards;
