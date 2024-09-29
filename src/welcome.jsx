import React, { useState } from 'react';
import './styles/welcome.css';
import PersonalInfo from './personalInfo.jsx'; 
import FinancialInfo from './financialInfo.jsx'; 
import logo from './images/logo.png';
import illustration from './images/welcomePage.png';

const WelcomePage = () => {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [showFinancialInfo, setShowFinancialInfo] = useState(false);

  const handleEmergencyExit = () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  };

  const startQuestionnaire = () => {
    setShowPersonalInfo(true);
  };

  if (showFinancialInfo) {
    return <FinancialInfo onBack={() => setShowFinancialInfo(false)} />;
  }

  if (showPersonalInfo) {
    return <PersonalInfo onBack={() => setShowPersonalInfo(false)} setShowFinancialInfo={setShowFinancialInfo} />;
  }

  return (
    <div>
      <div className="welcome-page">
      <div className="welcome-page-body">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="SafeNest Logo" />
          <h2 className="logo-text">SAFENEST</h2>
        </div>
        <div className="exit-link" onClick={handleEmergencyExit}>
          <p style={{ cursor: 'pointer', color: 'red' }}>Emergency Exit</p>
        </div>
      </header>

      <div className="container">
        <main className="main-content">
          <h1>Welcome, Sarah</h1>
          <h3>Let's get started!</h3>
          <p className="description">
            Welcome to SafeNest, your personalized financial guide designed to help women achieve independence and security. Whether you're building an emergency fund, managing debt, or exploring investment options, SafeNest provides tailored tools and actionable steps to meet your goals. Our platform offers a simple, supportive way to track your progress and make informed financial decisions. Let's get started on your journey to financial empowerment!
          </p>
          <div className="illustration">
            <img src={illustration} alt="Illustration" />
          </div>
          <button className="start-button" onClick={startQuestionnaire}>
            Start Questionnaire
          </button>
        </main>
      </div>
      </div>
      </div>
    </div>
  );
};

export default WelcomePage;