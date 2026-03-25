import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import './GoalsComplete.css'; // Reuse flow styles
import './RetirementAge.css'; // Reuse input box styles

export default function SavingsCheck() {
  const navigate = useNavigate();
  const [showAccordion, setShowAccordion] = useState(false);
  const [balance, setBalance] = useState('');

  return (
    <div className="flow-container">
      <StatusBar theme="light" />
      <BackHeader />
      
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '60%' }}></div>
      </div>

      <div className="flow-content">
        <h1 className="flow-title">Do you currently have<br/>an emergency fund?</h1>
        <p className="flow-subtitle">Enter an estimated amount.</p>

        <div className="accordion-wrapper">
          <button 
            className="accordion-header" 
            onClick={() => setShowAccordion(!showAccordion)}
          >
            <span className="accordion-title">💡 WHY THIS MATTERS</span>
            <span className="accordion-icon">{showAccordion ? '▼' : '▶'}</span>
          </button>
          {showAccordion && (
            <div className="accordion-content">
              An emergency fund protects you from unexpected expenses and keeps your goals on track.
            </div>
          )}
        </div>

        <div className="input-box">
          <div className="input-box-header">Emergency Fund</div>
          <div className="input-row">
            <span className="input-label">Savings Balance</span>
            <div style={{ position: 'relative', width: '100px' }}>
              <span style={{ position: 'absolute', left: '12px', top: '10px', color: '#6B7280' }}>$</span>
              <input 
                type="number"
                value={balance}
                onChange={e => setBalance(e.target.value)}
                placeholder="0"
                style={{
                  width: '100%',
                  padding: '8px 12px 8px 24px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  fontSize: '0.95rem',
                  color: '#111827',
                  textAlign: 'right'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flow-bottom-cta">
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/financial-fears')}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
