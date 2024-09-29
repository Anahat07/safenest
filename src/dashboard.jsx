import React, { useState } from 'react';
import './styles/dashboard.css';
import Invest from './invest'; // Import your Invest component
import FinancialGoals from './financialGoals'; // Import your FinancialGoals component
import { withAuthInfo, useRedirectFunctions } from '@propelauth/react';

const Dashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Track sidebar state

  const { redirectToAccountPage } = useRedirectFunctions();

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goals = [
    { title: "Emergency Fund", description: "Save $1,000", deadline: "January 2025", progress: 20, color: '#eb9fa0' },
    { title: "Car Savings", description: "Save $5,000", deadline: "June 2025", progress: 10, color: '#ed8587' },
    { title: "Build Career Portfolio", description: "Complete by December 2024", progress: 30, color: '#eb6466' },
  ];

  return (
    <div className="dashboard">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="toggle-sidebar" onClick={toggleSidebar}>
          {isSidebarOpen ? 'Hide' : 'Show'} Sidebar
        </button>
        <ul>
          <li><a href="#" className="sidebar-link" onClick={() => handleViewChange('dashboard')}>My Roadmap</a></li>
          <li><a href="#" className="sidebar-link" onClick={() => handleViewChange('invest')}>My Investment Portfolio</a></li>
          <li><a href="#" className="sidebar-link" onClick={() => handleViewChange('goals')}>Edit My Goals</a></li>
          <li><a href="#" className="sidebar-link" onClick={redirectToAccountPage}>My Account</a></li>
          <li><a href="http://localhost:3000" className="sidebar-link" target="_blank" rel="noopener noreferrer">Chatbot</a></li>
        </ul>
      </div>
      <div className="content">
        {currentView === 'dashboard' && (
          <>
            <h1 className="welcome">Welcome back, Sarah</h1>
            <div className="hero-section">
              <h2 className="slogan">Empowering Your Financial Future</h2>
              <div className="goals-container">
                <div className="current-goals">
                  <h3>Current Goals</h3>
                  <div className="progress-bars">
                    {goals.map((goal) => (
                      <div className="progress-bar" key={goal.title} style={{ background: goal.color }}>
                        <div className="goal-info">
                          <h2>{goal.title}</h2>
                          <p>{goal.description}</p>
                          <p>by {goal.deadline}</p>
                        </div>
                        <div className="outer-progress">
                          <div className="inner-progress" style={{ width: `${goal.progress}%` }}>
                            <span className="progress-percentage">{goal.progress}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="october-tasks-container">
                  <h3>October Tasks</h3>
                  <div className="october-tasks">
                    <div className="task-card">
                      <p>Transfer $100 to the emergency fund account.</p>
                    </div>
                    <div className="task-card">
                      <p>Set up an automated round-up tool for daily purchases.</p>
                    </div>
                    <div className="task-card">
                      <p>Invest $450 in selected stocks.</p>
                    </div>
                    <div className="task-card">
                      <p>Update LinkedIn profile.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {currentView === 'invest' && <Invest />}
        {currentView === 'goals' && <FinancialGoals />}
        {currentView === 'account' && <div>Account Section</div>}
      </div>
    </div>
  );
};

export default Dashboard;
