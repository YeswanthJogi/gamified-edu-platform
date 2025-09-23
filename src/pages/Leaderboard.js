import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Leaderboard.css";

function Leaderboard() {
  // Example static data – later you can fetch from backend
  const students = [
    { id: 1, name: "Anita", points: 250, badge: "Gold 🌟" },
    { id: 2, name: "Rahul", points: 220, badge: "Silver 🥈" },
    { id: 3, name: "Meera", points: 200, badge: "Bronze 🥉" },
    { id: 4, name: "Suresh", points: 180, badge: "Eco Hero" },
    { id: 5, name: "Kavya", points: 160, badge: "Green Star" },
  ];

  return (
    <div>
      <Header />

      <main className="leaderboard-container">
        {/* Title */}
        <section className="leaderboard-hero">
          <h1>Eco-Points Leaderboard 🏆</h1>
          <p>
            Track your eco-points and see how you rank among other students in
            building a sustainable future!
          </p>
        </section>

        {/* Table */}
        <section className="leaderboard-table">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Points</th>
                <th>Badge</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, index) => (
                <tr key={s.id} className={index < 3 ? "top-rank" : ""}>
                  <td>{index + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.points}</td>
                  <td>{s.badge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* CTA */}
        <section className="leaderboard-cta">
          <button className="btn-primary">Join a Challenge</button>
          <button className="btn-secondary">Earn More Points</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Leaderboard;
