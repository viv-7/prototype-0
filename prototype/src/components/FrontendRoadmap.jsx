import React from 'react';
import Roadmap from './Roadmap';

const FrontendRoadmap = () => {
  const steps = [
    { id: 1, title: "HTML Basics", description: "Learn HTML structure, tags, and semantics",
      workshop: {
        title: "KRITRIM 2025",
        date: "May 10, 202",
        time: "2:00 PM EST",
        duration: "2 hours",
        instructor: "AIML Club HIT",
        price: "$1",
         registrationLink: "https://www.instagram.com/aimlclub.hit?igsh=anBycDJxdXJvdjk4"
      }
     },
    { id: 2, title: "CSS Fundamentals", description: "Master CSS selectors, box model, and layouts", 
      workshop: {
        title: "KRITRIM 2025",
        date: "May 10, 202",
        time: "2:00 PM EST",
        duration: "2 hours",
        instructor: "AIML Club HIT",
        price: "$1",
         registrationLink: "https://www.instagram.com/aimlclub.hit?igsh=anBycDJxdXJvdjk4"
      }
     },
    { id: 3, title: "JavaScript Basics", description: "Learn variables, functions, and DOM manipulation",
      workshop: {
        title: "KRITRIM 2025",
        date: "May 10, 202",
        time: "2:00 PM EST",
        duration: "2 hours",
        instructor: "AIML Club HIT",
        price: "$1",
         registrationLink: "https://www.instagram.com/aimlclub.hit?igsh=anBycDJxdXJvdjk4"
      }
     },
    { id: 4, title: "Responsive Design", description: "Media queries and mobile-first approach",
      workshop: {
        title: "KRITRIM 2025",
        date: "May 10, 202",
        time: "2:00 PM EST",
        duration: "2 hours",
        instructor: "AIML Club HIT",
        price: "$1",
         registrationLink: "https://www.instagram.com/aimlclub.hit?igsh=anBycDJxdXJvdjk4"
      }
     },
    { id: 5, title: "CSS Frameworks", description: "Bootstrap, Tailwind CSS",
      workshop: {
        title: "KRITRIM 2025",
        date: "May 10, 202",
        time: "2:00 PM EST",
        duration: "2 hours",
        instructor: "AIML Club HIT",
        price: "$1",
         registrationLink: "https://www.instagram.com/aimlclub.hit?igsh=anBycDJxdXJvdjk4"
      }
     },
    { id: 6, title: "JavaScript Advanced", description: "ES6+, Async JS, APIs",
      workshop: {
        title: "KRITRIM 2025",
        date: "May 10, 202",
        time: "2:00 PM EST",
        duration: "2 hours",
        instructor: "AIML Club HIT",
        price: "$1",
         registrationLink: "https://www.instagram.com/aimlclub.hit?igsh=anBycDJxdXJvdjk4"
      }
     },
    { id: 7, title: "React Fundamentals", description: "Components, state, props",
      workshop: {
        title: "KRITRIM 2025",
        date: "May 10, 202",
        time: "2:00 PM EST",
        duration: "2 hours",
        instructor: "AIML Club HIT",
        price: "$1",
         registrationLink: "https://www.instagram.com/aimlclub.hit?igsh=anBycDJxdXJvdjk4"
      }
     },
    { id: 8, title: "State Management", description: "Redux, Context API",
      workshop: {
        title: "KRITRIM 2025",
        date: "May 10, 202",
        time: "2:00 PM EST",
        duration: "2 hours",
        instructor: "AIML Club HIT",
        price: "$1",
         registrationLink: "https://www.instagram.com/aimlclub.hit?igsh=anBycDJxdXJvdjk4"
      }
     },
    { id: 9, title: "Build Tools", description: "Webpack, Babel, npm/yarn",
      workshop: {
        title: "KRITRIM 2025",
        date: "May 10, 202",
        time: "2:00 PM EST",
        duration: "2 hours",
        instructor: "AIML Club HIT",
        price: "$1",
         registrationLink: "https://www.instagram.com/aimlclub.hit?igsh=anBycDJxdXJvdjk4"
      }
     },
    { id: 10, title: "Testing", description: "Jest, React Testing Library",
      workshop: {
        title: "KRITRIM 2025",
        date: "May 10, 202",
        time: "2:00 PM EST",
        duration: "2 hours",
        instructor: "AIML Club HIT",
        price: "$1",
         registrationLink: "https://www.instagram.com/aimlclub.hit?igsh=anBycDJxdXJvdjk4"
      }
     },
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