import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import { Tag, Heart, Home, Monitor } from 'lucide-react';
import './GoalsComplete.css';

export default function GoalsComplete() {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState('');
  const [showAccordion, setShowAccordion] = useState(false);

  const goals = [
    { id: 'couch', name: 'New Couch', icon: <Tag size={24} color="#F59E0B" /> },
    { id: 'tv', name: 'New TV', icon: <Monitor size={24} color="#10B981" /> },
    { id: 'wedding', name: 'Wedding', icon: <Heart size={24} color="#F59E0B" /> },
    { id: 'downpayment', name: 'Downpayment', icon: <Home size={24} color="#F59E0B" /> }
  ];

  return (
    <div className="flow-container">
      <StatusBar theme="light" />
      <BackHeader />
      
      {/* Progress Bar placeholder */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '20%' }}></div>
      </div>

      <div className="flow-content">
        <h1 className="flow-title">Which goal is non-negotiable?</h1>
        <p className="flow-subtitle">Choose [one]</p>

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
              Prioritizing your goals helps us construct the best plan to secure what matters most.
            </div>
          )}
        </div>

        <div className="goals-grid">
          {goals.map(goal => (
            <div 
              key={goal.id} 
              className={`select-card ${selectedGoal === goal.id ? 'selected' : ''}`}
              onClick={() => setSelectedGoal(goal.id)}
            >
              <div className="select-card-icon">{goal.icon}</div>
              <div className="select-card-name">{goal.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flow-bottom-cta">
        <button 
          className="btn btn-primary" 
          disabled={!selectedGoal}
          onClick={() => navigate('/retirement-age')}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
