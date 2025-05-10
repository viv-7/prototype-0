import React, { useState } from 'react';
import './SkillDetailPanel.css';

const SkillDetailPanel = ({ skill, onClose }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="skill-panel">
      <button className="close-btn" onClick={onClose}>×</button>
      
      <div className="panel-header">
        <h2>{skill.title}</h2>
        <p className="skill-overview">{skill.description}</p>
      </div>

      <div className="accordion-section">
        <div 
          className={`accordion ${activeAccordion === 0 ? 'active' : ''}`}
          onClick={() => toggleAccordion(0)}
        >
          <div className="accordion-title">Tutorial Resources</div>
          <div className="accordion-content">
            <a href={skill.docsUrl} target="_blank" rel="noopener noreferrer" className="resource-link">
              📚 Documentation
            </a>
            <a href={skill.videoUrl} target="_blank" rel="noopener noreferrer" className="resource-link">
              ▶️ Video Lectures
            </a>
          </div>
        </div>

        <div 
          className={`accordion ${activeAccordion === 1 ? 'active' : ''}`}
          onClick={() => toggleAccordion(1)}
        >
          <div className="accordion-title">Upcoming Events</div>
          <div className="accordion-content">
            <div className="event-card">
              <h4>Workshop: Mastering {skill.title}</h4>
              <p>Date: June 15, 2023</p>
              <p>Duration: 2 hours</p>
              <p>Instructor: John Doe</p>
              <button className="apply-btn" onclick="https://www.instagram.com/aimlclub.hit?igsh=anBycDJxdXJvdjk4">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetailPanel;