import React, { useState } from 'react';
import './styles/financialInfo.css';
import FinancialGoals from './financialGoals.jsx'; 

const FinancialInfo = ({ onBack }) => {
  const [bank, setBank] = useState('');  
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [savings, setSavings] = useState('');
  const [debt, setDebt] = useState('');
  const [showFinancialGoals, setShowFinancialGoals] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ bank, monthlyIncome, monthlyExpenses, savings, debt });
    setShowFinancialGoals(true); 
  };

  return (
    <div className="financial-page">
    <div className="financial-page-body">
    <div>
      {!showFinancialGoals ? (
        <div className="financial-info-container">
          <h1>Financial Information</h1>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="bank">Your Bank:</label>
              <input
                id="bank"
                type="text"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                placeholder="e.g. Scotiabank"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="monthlyIncome">Monthly Income After Tax:</label>
              <input
                id="monthlyIncome"
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                placeholder="e.g. $3000"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="monthlyExpenses">Fixed Monthly Expenses:</label>
              <input
                id="monthlyExpenses"
                type="number"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(e.target.value)}
                placeholder="e.g. $1000"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="savings">Savings:</label>
              <input
                id="savings"
                type="number"
                value={savings}
                onChange={(e) => setSavings(e.target.value)}
                placeholder="e.g. $5000"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="debt">Debt:</label>
              <input
                id="debt"
                type="number"
                value={debt}
                onChange={(e) => setDebt(e.target.value)}
                placeholder="e.g. $2000"
                required
              />
            </div>

            <div className="button-container">
              <button type="button" className="back-button" onClick={onBack}>
                Back
              </button>
              <button type="submit" className="submit-button">
                Next
              </button>
            </div>
          </form>
        </div>
      ) : (
        <FinancialGoals />
      )}
    </div>
    </div>
    </div>
  );
};

export default FinancialInfo;
