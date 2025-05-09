import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TechnicalSkills.css';

const TechnicalSkills = () => {
  const navigate = useNavigate();

  return (
    <div className="technical-container">
      <h1>Technical Skills Roadmap</h1>
      <div className="subgroups">
        <div className="subgroup-card" onClick={() => navigate('/technical/frontend')}>
          <h2>Frontend Development</h2>
          <p>HTML, CSS, JavaScript, React, etc.</p>
        </div>
        <div className="subgroup-card" onClick={() => navigate('/technical/backend')}>
          <h2>Backend Development</h2>
          <p>Node.js, Python, Java, APIs, etc.</p>
        </div>
        <div className="subgroup-card" onClick={() => navigate('/technical/database')}>
          <h2>Database</h2>
          <p>SQL, NoSQL, Database Design, etc.</p>
        </div>
      </div>
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default TechnicalSkills;