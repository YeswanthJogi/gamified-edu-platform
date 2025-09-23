// src/App.js
import React from "react";

import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DemoLesson from "./pages/DemoLesson";
import Leaderboard from "./pages/Leaderboard";
import Rewards from "./pages/Rewards";
import Challenge from "./pages/Challenge";
import Quiz from "./pages/Quiz";
import TeacherDashboard from "./pages/Teacherdashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/demo-lesson" element={<DemoLesson/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/rewards" element={<Rewards/>}/>
        <Route path="/challenges" element={<Challenge/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/teacher" element={<TeacherDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
