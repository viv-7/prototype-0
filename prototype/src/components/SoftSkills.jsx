import React from 'react';
import Roadmap from './Roadmap';

const SoftSkills = () => {
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
    <Roadmap 
      title="Soft Skills"
      steps={steps}
      backPath="/"
    />
  );
};

export default SoftSkills;