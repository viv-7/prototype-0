import React, { useState, useEffect } from 'react';
import './SkillDetailPanel.css';

const SkillDetailPanel = ({ skill, onClose }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});

  // Calculate time until workshop
  useEffect(() => {
    if (skill.workshop?.date) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(skill.workshop.date));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [skill.workshop]);

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
        {/* Tutorial Resources Accordion */}
        <div 
          className={`accordion ${activeAccordion === 0 ? 'active' : ''}`}
          onClick={() => toggleAccordion(0)}
        >
          <div className="accordion-title">
            Tutorial Resources
            <span className="accordion-icon">
              {activeAccordion === 0 ? '−' : '+'}
            </span>
          </div>
          <div className="accordion-content">
            {skill.resources?.documentation && (
              <a 
                href={skill.resources.documentation} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resource-link"
              >
                📚 Documentation
              </a>
            )}
            
            {skill.resources?.video && (
              <a 
                href={skill.resources.video} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resource-link"
              >
                ▶️ Video Lectures
              </a>
            )}

            {(!skill.resources?.documentation && !skill.resources?.video) && (
              <p className="no-resources">No resources available yet</p>
            )}
          </div>
        </div>

        {/* Workshop Accordion */}
        {skill.workshop && (
          <div 
            className={`accordion workshop-accordion ${activeAccordion === 1 ? 'active' : ''}`}
            onClick={() => toggleAccordion(1)}
          >
            <div className="accordion-title">
              Live Workshops
              {skill.workshop.status && (
                <span className={`workshop-status status-${skill.workshop.status}`}>
                  {skill.workshop.status}
                </span>
              )}
              <span className="accordion-icon">
                {activeAccordion === 1 ? '−' : '+'}
              </span>
            </div>
            <div className="accordion-content">
              <WorkshopDetails 
                workshop={skill.workshop} 
                timeLeft={timeLeft} 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Workshop Details Subcomponent
const WorkshopDetails = ({ workshop, timeLeft }) => (
  <div className="workshop-details">
    <h3>{workshop.title}</h3>
    
    <div className="workshop-meta">
      {workshop.date && <span>📅 {workshop.date}</span>}
      {workshop.time && <span>⏰ {workshop.time}</span>}
      {workshop.duration && <span>⏳ {workshop.duration}</span>}
      {workshop.instructor && <span>👩‍🏫 {workshop.instructor}</span>}
      {workshop.price && <span>💰 {workshop.price}</span>}
    </div>

    {timeLeft.days !== undefined && (
      <div className="countdown-timer">
        ⏳ Starts in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
      </div>
    )}

    {workshop.agenda && (
      <>
        <h5>Agenda:</h5>
        <ul className="workshop-agenda">
          {workshop.agenda.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    )}

    {workshop.registrationLink && (
      <a
        href={workshop.registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="workshop-button"
      >
        {workshop.buttonText || 'Register Now'}
      </a>
    )}

    {workshop.specialNote && (
      <p className="workshop-note">✨ {workshop.specialNote}</p>
    )}
  </div>
);

// Helper function for countdown timer
function calculateTimeLeft(endDate) {
  const difference = new Date(endDate) - new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

export default SkillDetailPanel;