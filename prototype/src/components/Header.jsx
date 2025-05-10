import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <h1 className="app-title">SkillGarden</h1>
        </Link>
        
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          
          <a 
            href="https://github.com/viv-7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
          
          <a 
            href="https://www.linkedin.com/in/vivek-kumar-644632354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;