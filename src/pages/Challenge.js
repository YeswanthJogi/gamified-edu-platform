import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Challenge.css";

function Challenge() {
  const challenges = [
    {
      id: 1,
      title: "Campus Clean-Up",
      desc: "Join your schoolmates to clean the playground and collect waste for recycling.",
      points: 20,
      deadline: "Sept 30, 2025",
    },
    {
      id: 2,
      title: "Water Audit",
      desc: "Check for water leaks in your school and suggest water-saving measures.",
      points: 15,
      deadline: "Oct 5, 2025",
    },
    {
      id: 3,
      title: "Tree Planting Drive",
      desc: "Plant 3 trees in your neighborhood and upload a photo as proof.",
      points: 30,
      deadline: "Oct 10, 2025",
    },
    {
      id: 4,
      title: "Plastic-Free Week",
      desc: "Avoid using single-use plastics for 7 days and encourage your classmates to join.",
      points: 25,
      deadline: "Oct 15, 2025",
    },
  ];

  return (
    <div>
      <Header />

      <main className="challenges-container">
        {/* Title */}
        <section className="challenges-hero">
          <h1>Weekly Local Challenges 🌍</h1>
          <p>
            Take part in exciting eco-missions, earn points, and make your
            community greener!
          </p>
        </section>

        {/* Challenge Cards */}
        <section className="challenges-grid">
          {challenges.map((c) => (
            <div key={c.id} className="challenge-card">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="challenge-info">
                <span>🌱 {c.points} Points</span>
                <span>⏰ {c.deadline}</span>
              </div>
              <button className="btn-primary">Join Challenge</button>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="challenges-cta">
          <button className="btn-secondary">Suggest a Challenge</button>
          <button className="btn-primary">View Leaderboard</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Challenge;
