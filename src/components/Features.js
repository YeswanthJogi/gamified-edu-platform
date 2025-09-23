import React from "react";
import { Link } from "react-router-dom";
import "./Features.css";

// Import your images (place them in src/Images/)
import student from "../Images/student.jpg";
import gamified from '../Images/gamified.jpg'
import eco from "../Images/eco.jpg"
import challenge from "../Images/challenge.jpg"
import teacher from "../Images/teacher.jpg"
import quiz from "../Images/quiz.jpg"

const FEATURES = [
  {
    title: "Gamified Lessons",
    text:
      "Bite-sized interactive modules, quizzes, streaks, and level-ups that make climate learning fun.",
    img: gamified,
    ctaLabel: "Try a Lesson",
    to: "/demo-lesson",
  },
  {
    title: "Eco-Points",
    text:
      "Earn points for real-world actions like waste segregation and tree planting. Compete with peers.",
    img: eco,
    ctaLabel: "View Leaderboard",
    to: "/leaderboard",
  },
  {
    title: "Rewards & Badges",
    text:
      "Unlock digital badges and redeem rewards. Celebrate progress at school and city levels.",
    img: student,
    ctaLabel: "See Rewards",
    to: "/rewards",
  },
  {
    title: "Local Challenges",
    text:
      "Weekly missions tied to your locality—clean-ups, water audits, biodiversity logs—to build habits.",
    img: challenge,
    ctaLabel: "Browse Challenges",
    to: "/challenges",
  },
  {
    title: "Teacher Tools",
    text:
      "Ready-to-use lesson plans, analytics dashboards, and eco-club coordination for teachers.",
    img: teacher,
    ctaLabel: "Teacher Dashboard",
    to: "/teacher",
  },
  {
    title: "Quizzes & Challenges",
    text:
      "Fun eco-quizzes, daily challenges, and competitions keep students motivated and learning consistently.",
    img: quiz, // <-- use your quiz.jpg or any quiz image
    ctaLabel: "Take a Quiz",
    to: "/quiz",
  },
];

function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2>Features that drive real impact</h2>
          <p>
            Everything students and teachers need to build sustainable habits—engaging,
            practical, and measurable.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, idx) => (
            <article className="feature-card" key={idx}>
              <div className="card-image-wrap">
                <img src={f.img} alt={f.title} className="card-image" />
              </div>
              <div className="card-body">
                <h3 className="card-title">{f.title}</h3>
                <p className="card-text">{f.text}</p>
              </div>
              <div className="card-footer">
                <Link to={f.to} className="card-btn" aria-label={f.ctaLabel}>
                  {f.ctaLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
