import React, { useEffect } from 'react';
import './FallingLeaves.css';

const FallingLeaves = () => {
  useEffect(() => {
    const container = document.body; // or a specific div

    for (let i = 0; i < 15; i++) {
      const leaf = document.createElement('img');
      leaf.src = './src/assets/leaf.png'; // Path from public/
      leaf.className = 'leaf';
      leaf.style.left = `${Math.random() * 100}vw`;
      leaf.style.animationDuration = `${5 + Math.random() * 10}s`;
      leaf.style.opacity = `${0.2 + Math.random() * 0.5}`; // Random opacity
      container.appendChild(leaf);
    }

    return () => {
      // Cleanup on unmount
      document.querySelectorAll('.leaf').forEach(el => el.remove());
    };
  }, []);

  return null; // No visible DOM elements
};

export default FallingLeaves;