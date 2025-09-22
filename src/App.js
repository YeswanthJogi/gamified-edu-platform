// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import LoginForm from "./components/LoginForm";
import GamificationRewards from "./components/GamificationRewards/GamificationRewards";
import Header from "./components/Header";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard"; 
import Community from "./components/Community/Community"; 
import TeacherDashboard from "./components/TeacherDashboard/TeacherDashboard";



function App() {
  return (
    <Router>
      <Header /> 
      
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/gamification" element={<GamificationRewards />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
