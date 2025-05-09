import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import TechnicalSkills from './components/TechnicalSkills.jsx';
import FrontendRoadmap from './components/FrontendRoadmap.jsx';
import BackendRoadmap from './components/BackendRoadmap.jsx';
import DatabaseRoadmap from './components/DatabaseRoadmap.jsx';
import SoftSkills from './components/SoftSkills.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technical" element={<TechnicalSkills />} />
          <Route path="/technical/frontend" element={<FrontendRoadmap />} />
          <Route path="/technical/backend" element={<BackendRoadmap />} />
          <Route path="/technical/database" element={<DatabaseRoadmap />} />
          <Route path="/soft-skills" element={<SoftSkills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;