import React from "react";
import "./Hero.css";
import Header from "../components/Header";
import student from "../Images/student.jpg";
import Features from "../components/Features";
import About from "../components/About";
import Footer from "../components/Footer";


function Hero() {
  return (
  <div>
    <section className="hero-section">
    <Header/>
      {/* Background Image */}
      <img
        src={student}
        alt="Eco background"
        className="hero-bg"
      />
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Text Content */}
      <div className="hero-content">
        <h1 className="hero-title">Learn. Play. Save the Planet.</h1>
        <p className="hero-subtext">
          A gamified platform empowering students to adopt sustainable habits
          through interactive lessons, challenges, and rewards.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Explore</button>
        </div>
      </div>
      {/* <Features/> */}
      
    </section>
    <Features/>
    <About/>
    <Footer/>
    </div>
    
  );
}

export default Hero;
