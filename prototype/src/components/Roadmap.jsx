import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Roadmap.css';

const Roadmap = ({ title, steps, backPath }) => {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState([]);

  // Load completed steps from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`completed-${title}`);
    if (saved) setCompletedSteps(JSON.parse(saved));
  }, [title]);

  // Save completed steps to localStorage
  useEffect(() => {
    localStorage.setItem(`completed-${title}`, JSON.stringify(completedSteps));
  }, [completedSteps, title]);

  const handleContextMenu = (e, stepId) => {
    e.preventDefault();
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId) 
        : [...prev, stepId]
    );
  };

  const completionPercentage = steps.length > 0 
    ? Math.round((completedSteps.length / steps.length) * 100) 
    : 0;

  return (
    <div className="roadmap-container">
      <h1>{title} Roadmap</h1>
      
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <p>
          {completedSteps.length} of {steps.length} skills completed ({completionPercentage}%)
        </p>
      </div>

      <div className="tree">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className="step"
            onContextMenu={(e) => handleContextMenu(e, step.id)}
          >
            <div className={`node ${completedSteps.includes(step.id) ? 'completed' : ''}`}>
              {index + 1}
            </div>
            <div className={`step-content ${completedSteps.includes(step.id) ? 'completed' : ''}`}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className="connector"></div>}
          </div>
        ))}
      </div>
      
      <button className="back-button" onClick={() => navigate(backPath)}>
        Back
      </button>
    </div>
  );
};

export default Roadmap;