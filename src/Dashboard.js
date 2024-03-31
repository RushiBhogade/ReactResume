import React from "react";
import "./Dashboard.css"; // Import CSS file for styles
import ProfileImage from "./profile.jpg"; // Import your profile image

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="profile-info">
        <div className="profile-image">
          <img src={ProfileImage} alt="Profile" />
        </div>
        <div className="profile-details">
          <h1>RUSHIKESH SHAMBHULING BHOGADE</h1>
          <p>B.E. - Computer Science & Engineering</p>
          <p>Ph: +91-9022076835</p>
          <p>Email: rushikeshbhogade.nbnscoe.comp@gmail.com</p>
          <p>Solapur, Maharashtra, India - 413003</p>
          <p >
            <a
              style={{ padding: 10 }}
              href="https://www.linkedin.com/in/rushikesh-bhogade"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://www.linkedin.com/in/rushikesh-bhogade"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Profile
            </a>
          </p>
        </div>
      </div>
      <div className="key-skills">
        <h2>Key Skills:</h2>
        <p>
          Java, SQL, Data Structures, React Native, C, Python, Linux, Core Java,
          ReactJS, HTML5, CSS
        </p>
      </div>
      <div className="brief-summary">
        <h2>Brief Summary:</h2>
        <p>
          Driven to apply technical expertise and knowledge in fostering
          innovation within IT projects and facilitating organizational growth.
          Committed to ongoing learning and professional development to stay
          abreast of the ever-evolving Information Technology landscape.
        </p>
      </div>
      <div className="key-expertise">
        <h2>Key Expertise:</h2>
        <ul>
          <li>IT Project Management</li>
          <li>Technical Innovation</li>
          <li>Professional Development</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

