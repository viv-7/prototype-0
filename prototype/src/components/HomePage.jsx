import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Learning Roadmap</h1>
      <div className="options">
        <div className="option-card" onClick={() => navigate('/technical')}>
          <h2>Technical Skills</h2>
          <p>Learn programming and development skills</p>
        </div>
        <div className="option-card" onClick={() => navigate('/soft-skills')}>
          <h2>Soft Skills</h2>
          <p>Develop interpersonal and professional skills</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;