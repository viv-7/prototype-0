import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import TechnicalSkills from './components/TechnicalSkills';
import FrontendRoadmap from './components/FrontendRoadmap';
import BackendRoadmap from './components/BackendRoadmap';
import DatabaseRoadmap from './components/DatabaseRoadmap';
import SoftSkills from './components/SoftSkills';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/technical" element={<TechnicalSkills />} />
            <Route path="/technical/frontend" element={<FrontendRoadmap />} />
            <Route path="/technical/backend" element={<BackendRoadmap />} />
            <Route path="/technical/database" element={<DatabaseRoadmap />} />
            <Route path="/soft-skills" element={<SoftSkills />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;