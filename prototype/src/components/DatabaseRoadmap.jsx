import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Roadmap.css';

const DatabaseRoadmap = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 1, title: "Database Fundamentals", description: "What is a database, types of databases" },
    { id: 2, title: "Relational Databases", description: "Tables, rows, columns, relationships" },
    { id: 3, title: "SQL Basics", description: "SELECT, INSERT, UPDATE, DELETE" },
    { id: 4, title: "Advanced SQL", description: "JOINs, subqueries, indexes" },
    { id: 5, title: "Database Design", description: "Normalization, ER diagrams" },
    { id: 6, title: "NoSQL Databases", description: "MongoDB, document stores" },
    { id: 7, title: "Database Performance", description: "Query optimization" },
    { id: 8, title: "Transactions", description: "ACID properties" },
    { id: 9, title: "ORMs", description: "Sequelize, TypeORM, etc." },
    { id: 10, title: "Big Data", description: "Hadoop, Spark basics" },
  ];

  return (
    <div className="roadmap-container">
      <h1>Database Roadmap</h1>
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

export default DatabaseRoadmap;