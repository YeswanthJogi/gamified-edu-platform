import React, { useState } from "react";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("progress");

  const renderContent = () => {
    switch (selectedTab) {
      case "progress":
        return (
          <div className="section">
            <h2>📊 Student Progress Tracker</h2>
            <table className="progress-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Eco-Points</th>
                  <th>Completed Tasks</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Aryan</td><td>320</td><td>12</td></tr>
                <tr><td>Isha</td><td>280</td><td>10</td></tr>
                <tr><td>Ravi</td><td>150</td><td>6</td></tr>
              </tbody>
            </table>
          </div>
        );

      case "challenges":
        return (
          <div className="section">
            <h2>📝 Assign / Approve Challenges</h2>
            <button className="btn">+ Assign New Challenge</button>
            <ul className="challenge-list">
              <li>Plastic-Free Week <button className="approve-btn">Approve</button></li>
              <li>Tree Plantation <button className="approve-btn">Approve</button></li>
            </ul>
          </div>
        );

      case "leaderboard":
        return (
          <div className="section">
            <h2>🏆 Class Leaderboard</h2>
            <ol className="leaderboard-list">
              <li>Isha - 280 pts</li>
              <li>Aryan - 320 pts</li>
              <li>Ravi - 150 pts</li>
            </ol>
          </div>
        );

      case "reports":
        return (
          <div className="section">
            <h2>📑 Reports & Analytics</h2>
            <button className="btn">Download Weekly Report</button>
            <button className="btn">Download Monthly Report</button>
          </div>
        );

      case "announcements":
        return (
          <div className="section">
            <h2>📢 Messaging & Announcements</h2>
            <textarea placeholder="Write announcement..." className="announcement-box"></textarea>
            <button className="btn">Send to Students</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="teacher-dashboard">
      <h1>Teacher / Coordinator Dashboard</h1>

      <div className="tabs">
        <button onClick={() => setSelectedTab("progress")} className={selectedTab === "progress" ? "active" : ""}>Progress</button>
        <button onClick={() => setSelectedTab("challenges")} className={selectedTab === "challenges" ? "active" : ""}>Challenges</button>
        <button onClick={() => setSelectedTab("leaderboard")} className={selectedTab === "leaderboard" ? "active" : ""}>Leaderboard</button>
        <button onClick={() => setSelectedTab("reports")} className={selectedTab === "reports" ? "active" : ""}>Reports</button>
        <button onClick={() => setSelectedTab("announcements")} className={selectedTab === "announcements" ? "active" : ""}>Announcements</button>
      </div>

      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default TeacherDashboard;
