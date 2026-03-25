import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import './GoalsComplete.css'; // Reuse flow styles
import './FinancialFears.css';

export default function FinancialFears() {
  const navigate = useNavigate();
  const [selectedFear, setSelectedFear] = useState('');

  const fears = [
    'Drowning in debt',
    'Not having funds to deal with a sudden emergency',
    'Not qualifying for a good loan, due to a bad credit score',
    'Barely making it, living paycheck to paycheck',
    'None'
  ];

  return (
    <div className="flow-container">
      <StatusBar theme="light" />
      <BackHeader />
      
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '80%' }}></div>
      </div>

      <div className="flow-content">
        <h1 className="flow-title">What is your biggest<br/>financial fear?</h1>
        <p className="flow-subtitle">Select only one.</p>

        <div className="fears-grid">
          {fears.map((fear, idx) => (
            <button 
              key={idx}
              className={`fear-btn ${selectedFear === fear ? 'selected' : ''}`}
              onClick={() => setSelectedFear(fear)}
            >
              {fear}
            </button>
          ))}
        </div>
      </div>

      <div className="flow-bottom-cta">
        <button 
          className="btn btn-primary" 
          disabled={!selectedFear}
          onClick={() => navigate('/connect-consent')}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
