import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import './GoalsComplete.css'; // Reuse flow styles
import './RetirementAge.css';

export default function RetirementAge() {
  const navigate = useNavigate();
  const [showAccordion, setShowAccordion] = useState(false);
  const [age, setAge] = useState('62');

  return (
    <div className="flow-container">
      <StatusBar theme="light" />
      <BackHeader />
      
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '40%' }}></div>
      </div>

      <div className="flow-content">
        <h1 className="flow-title">What age do you plan<br/>on retiring?</h1>
        <p className="flow-subtitle">This helps us set your monthly contribution.</p>

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
              Knowing your time horizon allows us to recommend the right amount to save each month.
            </div>
          )}
        </div>

        <div className="input-box">
          <div className="input-box-header">Retirement</div>
          <div className="input-row">
            <span className="input-label">Target Age</span>
            <select 
              className="age-select" 
              value={age} 
              onChange={e => setAge(e.target.value)}
            >
              <option value="55">55</option>
              <option value="60">60</option>
              <option value="62">62</option>
              <option value="65">65</option>
              <option value="70">70</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flow-bottom-cta">
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/savings-check')}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
