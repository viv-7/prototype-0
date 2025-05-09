import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Roadmap.css';

const BackendRoadmap = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 1, title: "Programming Basics", description: "Variables, loops, conditionals" },
    { id: 2, title: "Choose a Language", description: "Node.js, Python, Java, etc." },
    { id: 3, title: "Server Concepts", description: "HTTP, REST, Web Servers" },
    { id: 4, title: "API Development", description: "RESTful APIs, endpoints" },
    { id: 5, title: "Authentication", description: "JWT, OAuth, sessions" },
    { id: 6, title: "Database Integration", description: "Connecting to databases" },
    { id: 7, title: "Caching", description: "Redis, Memcached" },
    { id: 8, title: "Microservices", description: "Architecture patterns" },
    { id: 9, title: "DevOps Basics", description: "Docker, CI/CD" },
    { id: 10, title: "Security", description: "Best practices, encryption" },
  ];

  return (
    <div className="roadmap-container">
      <h1>Backend Development Roadmap</h1>
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
      <button className="back-button" onClick={() => navigate('/technical')}>Back to Technical Skills</button>
    </div>
  );
};

export default BackendRoadmap;