// src/components/Leaderboard/Leaderboard.js
import React, { useState } from "react";
import "./LeaderBoard.css";

function LeaderBoard() {
  const [filter, setFilter] = useState("weekly");

  // Dummy data for students and schools
  const students = [
    { name: "Aarav Sharma", points: 120 },
    { name: "Priya Mehta", points: 110 },
    { name: "Rohan Verma", points: 95 },
    { name: "Simran Kaur", points: 90 },
    { name: "Ananya Gupta", points: 85 },
  ];

  const schools = [
    { name: "Green Valley School", points: 450 },
    { name: "Eco Minds Academy", points: 420 },
    { name: "Bright Future High", points: 390 },
  ];

  return (
    <div className="leaderboard-page">
      <h2 className="leaderboard-title">🏆 Leaderboards</h2>
      <p className="leaderboard-subtitle">Fostering Healthy Competition</p>

      {/* Filter buttons */}
      <div className="filter-buttons">
        {["weekly", "monthly", "all-time"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Individual Leaderboard */}
      <section className="leaderboard-section">
        <h3>👩‍🎓 Individual Leaderboard</h3>
        <ul>
          {students.map((s, idx) => (
            <li key={idx} className={idx === 0 ? "top-achiever" : ""}>
              <span>{idx + 1}. {s.name}</span>
              <span>{s.points} pts</span>
            </li>
          ))}
        </ul>
      </section>

      {/* School Leaderboard */}
      <section className="leaderboard-section">
        <h3>🏫 School Leaderboard</h3>
        <ul>
          {schools.map((s, idx) => (
            <li key={idx}>
              <span>{idx + 1}. {s.name}</span>
              <span>{s.points} pts</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default LeaderBoard;
