import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import AdminDashboard from "./components/AdminDashboard"; // 🔹 Import Admin Dashboard

function App() {
  const linkStyle = {
    marginRight: "15px",
    textDecoration: "none",
    padding: "5px 10px",
    borderRadius: "5px",
  };

  const activeStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
  };

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Gamified Edu Platform</h1>

        {/* Navbar */}
        <nav style={{ marginBottom: "20px" }}>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            Contact
          </NavLink>

          {/* 🔹 Dashboard Link */}
          <NavLink
            to="/admin"
            style={({ isActive }) =>
              isActive ? { ...linkStyle, ...activeStyle } : linkStyle
            }
          >
            Admin Dashboard
          </NavLink>
        </nav>

        <hr />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminDashboard />} /> {/* 🔹 Dashboard route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
