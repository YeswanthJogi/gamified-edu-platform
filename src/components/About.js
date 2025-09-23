import React from "react";
import "./About.css";
import planting from "../Images/planting.jpg"; // Add an image for about section

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image">
          <img src={planting} alt="Students learning sustainability" />
        </div>

        {/* Right Side - Text */}
        <div className="about-content">
          <h2>About EcoLearn</h2>
          <p>
            EcoLearn is a gamified education platform designed to empower
            students with the knowledge and habits needed to tackle
            environmental challenges. By combining interactive lessons, real-world
            eco-activities, and rewards, we make sustainability fun and practical.
          </p>
          <p>
            Our mission is to turn climate education from theory into action—
            inspiring the next generation to lead local initiatives and build a
            greener future.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
