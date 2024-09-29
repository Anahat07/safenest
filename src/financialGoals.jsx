import React, { useState } from 'react';
import './styles/financialGoals.css';

const FinancialGoals = ({ onBack }) => {
    const [goals, setGoals] = useState([
        { name: "Save for emergency fund", amount: 1000, targetDate: "June 2025" },
        { name: "Save to move out", amount: 4000, targetDate: "Dec 2025" },
        { name: "Build Portfolio", amount: "N/A", targetDate: "Dec 2024" }
    ]);
    
    const [newGoal, setNewGoal] = useState({ name: '', amount: '', targetDate: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewGoal({ ...newGoal, [name]: value });
    };

    const addGoal = (e) => {
        e.preventDefault();
        if (newGoal.name && newGoal.amount && newGoal.targetDate) {
            setGoals([...goals, newGoal]);
            setNewGoal({ name: '', amount: '', targetDate: '' });
        }
    };

    const deleteGoal = (index) => {
        const updatedGoals = goals.filter((goal, i) => i !== index);
        setGoals(updatedGoals);
    };

    const goToRoadmap = () => {
        window.location.href = '/roadmap';
    };

    return (
        <div className="financial-goals-container">
            <h1>Financial Goals</h1>
            <div className="goals-section">
                <div className="current-goals">
                    <h2>Current Goals</h2>
                    {goals.map((goal, index) => (
                        <div key={index} className={`goal-item ${index % 2 === 0 ? 'orange' : 'pink'}`}>
                            <div className="goal-name">{goal.name}</div>
                            <button className="remove-goal" onClick={() => deleteGoal(index)}>X</button>
                            <div className="goal-details">Amount: {goal.amount}</div>
                            <div className="goal-details">Target Date: {goal.targetDate}</div>
                        </div>
                    ))}
                </div>
                <div className="add-goal-section">
                    <h2>Add New Goal</h2>
                    <form onSubmit={addGoal}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Goal (e.g. Buy a car)"
                            value={newGoal.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="amount"
                            placeholder="Amount (e.g. 1,000)"
                            value={newGoal.amount}
                            onChange={handleInputChange}
                        />
                        <input
                            type="date"
                            name="targetDate"
                            value={newGoal.targetDate}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="submit-goal">Add Goal</button>
                    </form>
                </div>
            </div>
            <div className="button-container">
                <button className="back-button" onClick={onBack}>Back</button>
                <button className="complete-button" onClick={goToRoadmap}>Complete</button>
            </div>
        </div>
    );
};

export default FinancialGoals;
