import React from 'react';
import Roadmap from './Roadmap';

const BackendRoadmap = () => {
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
    <Roadmap 
      title="Backend Development"
      steps={steps}
      backPath="/technical"
    />
  );
};

export default BackendRoadmap;