import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import SkillDetailPanel from './SkillDetailPanel';
import { RESOURCE_URLS } from './resources/Resources';
import './Roadmap.css';

const Roadmap = ({ title, steps, backPath }) => {
  const navigate = useNavigate();
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Load completed steps from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`completed-${title}`);
    if (saved) setCompletedSteps(JSON.parse(saved));
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [title]);

  // Save completed steps to localStorage
  useEffect(() => {
    localStorage.setItem(`completed-${title}`, JSON.stringify(completedSteps));
  }, [completedSteps, title]);

  const handleContextMenu = (e, stepId) => {
    e.preventDefault();
    const isCompleting = !completedSteps.includes(stepId);
    
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId) 
        : [...prev, stepId]
    );
    
    if (isCompleting) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const handleSkillClick = (skill) => {
    const resources = RESOURCE_URLS[skill.title] || {};
    setSelectedSkill({
      ...skill,
      docsUrl: resources.documentation || '#',
      videoUrl: resources.video || '#'
    });
  };

  const closePanel = () => {
    setSelectedSkill(null);
  };

  const completionPercentage = steps.length > 0 
    ? Math.round((completedSteps.length / steps.length) * 100) 
    : 0;

    
  return (
    <div className={`roadmap-container ${selectedSkill ? 'skill-panel-open' : ''}`}>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
        />
      )}
      
      <h1>{title} Roadmap</h1>
      
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <p>{completedSteps.length} of {steps.length} skills completed ({completionPercentage}%)</p>
      </div>

      <div className="tree">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className="step"
            onContextMenu={(e) => handleContextMenu(e, step.id)}
            onClick={() => handleSkillClick(step)}
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

      {selectedSkill && (
        <SkillDetailPanel 
          skill={selectedSkill} 
          onClose={closePanel}
        />
      )}
    </div>
  );
};

export default Roadmap;