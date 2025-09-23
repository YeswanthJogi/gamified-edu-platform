// src/pages/DemoLesson.js
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./DemoLesson.css";

function DemoLesson() {
  // quiz state
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  // example quiz question
  const handleAnswer = (isCorrect) => {
    if (!answered) {
      if (isCorrect) setScore(score + 1);
      setAnswered(true);
    }
  };

  return (
    <div>

      <main className="lesson-container">
        {/* Lesson Banner */}
        <section className="lesson-hero">
          <h1>Gamified Lesson: Recycling Basics</h1>
          <p>Learn how to reduce, reuse, and recycle in fun, interactive ways!</p>
        </section>

        {/* Lesson Content */}
        <section className="lesson-content">
          <div className="lesson-card">
            <h3>♻️ Reduce</h3>
            <p>
              Use only what you need! Carry reusable bottles and bags instead of
              single-use plastics.
            </p>
          </div>
          <div className="lesson-card">
            <h3>🔄 Reuse</h3>
            <p>
              Before throwing things away, think if they can be reused—like jars
              for storage or old t-shirts as cleaning cloths.
            </p>
          </div>
          <div className="lesson-card">
            <h3>🗑️ Recycle</h3>
            <p>
              Separate your waste into biodegradable, recyclable, and hazardous
              bins to keep the environment clean.
            </p>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="lesson-quiz">
          <h2>Quick Quiz 🎯</h2>
          <p>Which of these items should go in the recycling bin?</p>

          <div className="quiz-options">
            <button onClick={() => handleAnswer(true)}>Plastic Bottle</button>
            <button onClick={() => handleAnswer(false)}>Banana Peel</button>
            <button onClick={() => handleAnswer(false)}>Leftover Food</button>
          </div>

          {answered && (
            <div className="quiz-result">
              <p>
                {score > 0
                  ? "✅ Correct! You earned 10 Eco-Points!"
                  : "❌ Oops! Try again next time."}
              </p>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="lesson-cta">
          <button className="btn-next">Try Next Lesson</button>
          <button className="btn-dashboard">Back to Dashboard</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default DemoLesson;
