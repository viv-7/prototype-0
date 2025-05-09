import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Roadmap.css';

const SoftSkills = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 1, title: "Communication", description: "Verbal and written communication skills" },
    { id: 2, title: "Teamwork", description: "Collaborating effectively with others" },
    { id: 3, title: "Problem Solving", description: "Analytical and critical thinking" },
    { id: 4, title: "Time Management", description: "Prioritization and organization" },
    { id: 5, title: "Adaptability", description: "Handling change and uncertainty" },
    { id: 6, title: "Leadership", description: "Inspiring and guiding others" },
    { id: 7, title: "Emotional Intelligence", description: "Self-awareness and empathy" },
    { id: 8, title: "Conflict Resolution", description: "Managing and resolving disagreements" },
    { id: 9, title: "Networking", description: "Building professional relationships" },
    { id: 10, title: "Public Speaking", description: "Presenting ideas effectively" },
  ];

  return (
    <div className="roadmap-container">
      <h1>Soft Skills Roadmap</h1>
      <div className="tree">
        {steps.map((step, index) => (
          <div key={step.id} className="step">
            <div className="node">{index + 1}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className="connector"></div>}
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default SoftSkills;