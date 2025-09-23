import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Teacher.css";

function TeacherDashboard() {
  const students = [
    { id: 1, name: "Anita", points: 250, tasks: 12, badge: "Gold 🌟" },
    { id: 2, name: "Rahul", points: 220, tasks: 10, badge: "Silver 🥈" },
    { id: 3, name: "Meera", points: 200, tasks: 9, badge: "Bronze 🥉" },
    { id: 4, name: "Suresh", points: 180, tasks: 7, badge: "Eco Hero" },
    { id: 5, name: "Kavya", points: 160, tasks: 6, badge: "Green Star" },
  ];

  const activities = [
    "🌱 Rohan planted 2 trees",
    "♻️ Meera recycled 5 bottles",
    "💧 Suresh saved 20 liters of water",
    "📚 Anita completed 'Recycling Basics' quiz",
  ];

  return (
    <div>
      <Header />

      <main className="teacher-container">
        {/* Welcome Banner */}
        <section className="teacher-hero">
          <h1>Welcome, Teacher 👩‍🏫</h1>
          <p>
            Manage your eco-club, track student progress, and assign new
            sustainability challenges.
          </p>
        </section>

        {/* Quick Stats */}
        <section className="teacher-stats">
          <div className="stat-card">
            <h3>👨‍🎓 Students</h3>
            <p>50 Active</p>
          </div>
          <div className="stat-card">
            <h3>🌱 Eco Points</h3>
            <p>12,450 Total</p>
          </div>
          <div className="stat-card">
            <h3>🔥 Active Challenges</h3>
            <p>4 Ongoing</p>
          </div>
          <div className="stat-card">
            <h3>🏅 Badges Earned</h3>
            <p>320+ Awarded</p>
          </div>
        </section>

        {/* Student Progress Table */}
        <section className="teacher-table">
          <h2>Student Progress</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Eco Points</th>
                <th>Tasks Completed</th>
                <th>Badge</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.points}</td>
                  <td>{s.tasks}</td>
                  <td>{s.badge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Recent Activity Feed */}
        <section className="teacher-activity">
          <h2>Recent Activity</h2>
          <ul>
            {activities.map((a, index) => (
              <li key={index}>{a}</li>
            ))}
          </ul>
        </section>

        {/* Assign Challenge Form */}
        <section className="teacher-form">
          <h2>Assign New Challenge</h2>
          <form>
            <input type="text" placeholder="Challenge Title" required />
            <textarea placeholder="Challenge Description" required></textarea>
            <input type="number" placeholder="Eco Points" required />
            <input type="date" required />
            <button type="submit" className="btn-primary">
              Assign Challenge
            </button>
          </form>
        </section>

        {/* Eco Impact Summary */}
        <section className="teacher-impact">
          <h2>Eco Impact Summary 🌍</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <h3>🌳 Trees Planted</h3>
              <p>180</p>
            </div>
            <div className="impact-card">
              <h3>♻️ Waste Recycled</h3>
              <p>950 kg</p>
            </div>
            <div className="impact-card">
              <h3>💧 Water Saved</h3>
              <p>2,400 L</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="teacher-actions">
          <button className="btn-primary">View Leaderboard</button>
          <button className="btn-secondary">Download Report</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default TeacherDashboard;
