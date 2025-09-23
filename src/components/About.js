import React from "react";
import "./About.css";

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-box">
        <h1>About GreenSteps</h1>
        <p>
          GreenSteps is a gamified platform to make environmental learning hands-on and engaging.
        </p>
        <h2>Our Mission</h2>
        <p>
          Empower students with practical environmental skills through interactive lessons, local challenges,
          and school-wide competitions.
        </p>
        <h2>How it Works</h2>
        <ul>
          <li>Interactive lessons and quizzes</li>
          <li>Real-world eco-tasks like tree planting and waste segregation</li>
          <li>Track eco-points and badges</li>
          <li>Rewards & recognition for sustainable practices</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
