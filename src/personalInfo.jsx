import React, { useState } from 'react';
import './styles/personalInfo.css';
import FinancialInfo from './financialInfo.jsx'; 

const PersonalInfo = ({ onBack, setShowFinancialInfo }) => {
  const [dob, setDob] = useState('');
  const [occupation, setOccupation] = useState('');
  const [education, setEducation] = useState('');
  const [dependents, setDependents] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ dob, occupation, education, dependents });
    setShowFinancialInfo(true); 
  };

  return (
    <div className="personal-page">
      <div className="personal-page-body">
    <div className="personal-info-container">
      <h1>Personal Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <input
            id="occupation"
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            placeholder="e.g. Sales Associate"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="education">Education:</label>
          <select
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          >
            <option value="">Select your education level</option>
            <option value="high school">High School</option>
            <option value="associate degree">Associate Degree</option>
            <option value="bachelor's degree">Bachelor's Degree</option>
            <option value="master's degree">Master's Degree</option>
            <option value="doctorate">Doctorate</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dependents">Dependents:</label>
          <input
            id="dependents"
            type="text"
            value={dependents}
            onChange={(e) => setDependents(e.target.value)}
            placeholder="e.g. 2 children"
            required
          />
        </div>
        <div className="button-container">
          <button type="button" className="back-button" onClick={onBack}>
            Back
          </button>
          <button type="submit" className="submit-button">Next</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default PersonalInfo;