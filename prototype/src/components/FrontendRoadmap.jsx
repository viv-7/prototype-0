import React from 'react';
import Roadmap from './Roadmap';

const FrontendRoadmap = () => {
  const steps = [
    { id: 1, title: "HTML Basics", description: "Learn HTML structure, tags, and semantics" },
    { id: 2, title: "CSS Fundamentals", description: "Master CSS selectors, box model, and layouts" },
    { id: 3, title: "JavaScript Basics", description: "Learn variables, functions, and DOM manipulation" },
    { id: 4, title: "Responsive Design", description: "Media queries and mobile-first approach" },
    { id: 5, title: "CSS Frameworks", description: "Bootstrap, Tailwind CSS" },
    { id: 6, title: "JavaScript Advanced", description: "ES6+, Async JS, APIs" },
    { id: 7, title: "React Fundamentals", description: "Components, state, props" },
    { id: 8, title: "State Management", description: "Redux, Context API" },
    { id: 9, title: "Build Tools", description: "Webpack, Babel, npm/yarn" },
    { id: 10, title: "Testing", description: "Jest, React Testing Library" },
  ];

  return (
    <Roadmap 
      title="Frontend Development"
      steps={steps}
      backPath="/technical"
    />
  );
};

export default FrontendRoadmap;