import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Project from "./Project";

import "./App.css"; // Import CSS file for global styles

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project" element={<Project />} />

          {/* Add more routes for other screens */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
