import React from 'react';
import Roadmap from './Roadmap';

const DatabaseRoadmap = () => {
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
    <Roadmap 
      title="Database"
      steps={steps}
      backPath="/technical"
    />
  );
};

export default DatabaseRoadmap;