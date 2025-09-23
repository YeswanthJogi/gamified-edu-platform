// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";
import DemoLesson from "./pages/DemoLesson";
import Leaderboard from "./pages/Leaderboard";
import Rewards from "./pages/Rewards";
import Challenge from "./pages/Challenge";
import Quiz from "./pages/Quiz";
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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/demo-lesson" element={<DemoLesson/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/rewards" element={<Rewards/>}/>
        <Route path="/challenges" element={<Challenge/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/teacher" element={<TeacherDashboard/>}/>
      
      
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
