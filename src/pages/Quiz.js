import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Quiz.css";

function Quiz() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const quizzes = [
    { id: 1, title: "Recycling Basics", desc: "Learn how to recycle properly and test your knowledge.", points: 10 },
    { id: 2, title: "Energy Conservation", desc: "Simple actions to save electricity and reduce carbon footprint.", points: 15 },
    { id: 3, title: "Water Saving", desc: "How small habits can save liters of water every day.", points: 20 },
  ];

  const handleAnswer = (isCorrect) => {
    if (!answered) {
      if (isCorrect) setScore(score + 1);
      setAnswered(true);
    }
  };

  return (
    <div>
      <Header />

      <main className="quizzes-container">
        {/* Title */}
        <section className="quizzes-hero">
          <h1>Eco Quizzes 🎯</h1>
          <p>
            Test your eco-knowledge and earn points while learning fun facts
            about the environment!
          </p>
        </section>

        {/* Quiz List */}
        <section className="quiz-list">
          {quizzes.map((q) => (
            <div key={q.id} className="quiz-card">
              <h3>{q.title}</h3>
              <p>{q.desc}</p>
              <span className="quiz-points">🌱 {q.points} Points</span>
              <button className="btn-primary" onClick={() => setSelectedQuiz(q.id)}>
                Start Quiz
              </button>
            </div>
          ))}
        </section>

        {/* Example Quiz */}
        {selectedQuiz === 1 && (
          <section className="quiz-example">
            <h2>Quick Quiz: Recycling Basics</h2>
            <p>Which of these items should NOT go into the recycling bin?</p>

            <div className="quiz-options">
              <button onClick={() => handleAnswer(false)}>Plastic Bottle</button>
              <button onClick={() => handleAnswer(false)}>Paper</button>
              <button onClick={() => handleAnswer(true)}>Food Waste</button>
            </div>

            {answered && (
              <div className="quiz-result">
                {score > 0 ? (
                  <p>✅ Correct! You earned {quizzes[0].points} Eco-Points!</p>
                ) : (
                  <p>❌ Not quite. Food waste should go in compost bins, not recycling.</p>
                )}
              </div>
            )}
          </section>
        )}

        {/* CTA */}
        <section className="quizzes-cta">
          <button className="btn-secondary">Attempt More Quizzes</button>
          <button className="btn-primary">Back to Dashboard</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Quiz;
