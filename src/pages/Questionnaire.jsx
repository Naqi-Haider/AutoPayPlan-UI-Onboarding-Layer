import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import { Tag } from 'lucide-react';
import './Questionnaire.css';
import iconRemaining from '../assets/money-plant.png';

export default function Questionnaire() {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(true);
  const [activeModal, setActiveModal] = useState(null); // 'short' or 'long' or null
  
  // Form State
  const [selectedGoalType, setSelectedGoalType] = useState('');
  const [goalName, setGoalName] = useState('');
  const [amount, setAmount] = useState('');
  const [dateStr, setDateStr] = useState('');
  const [showGoalDropdown, setShowGoalDropdown] = useState(false);

  // Saved Goals
  const [savedGoals, setSavedGoals] = useState([]);

  const goalOptions = [
    'Large purchase',
    'Vacation',
    'Wedding',
    'Education',
    'Downpayment',
    'Other'
  ];

  const handleOpenModal = (type) => {
    setActiveModal(type);
    setSelectedGoalType('');
    setGoalName('');
    setAmount('');
    setDateStr('');
  };

  const handleSaveGoal = () => {
    // Determine the name to show (prioritize user input, fallback to selected type or generic)
    const finalName = goalName.trim() || selectedGoalType || 'New Goal';
    setSavedGoals([...savedGoals, { name: finalName, type: activeModal }]);
    setActiveModal(null);
  };

  const getModalTitle = () => {
    return activeModal === 'short' ? '{Short-term} goal' : '{Long-term} goal';
  };

  return (
    <div className="q-container">
      <StatusBar theme="light" />
      <BackHeader />

      {/* Questionnaire Introduction Modal */}
      {showTooltip && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '20px 20px 16px', fontSize: '1rem', color: '#4B5563', lineHeight: '1.5' }}>
              The following questionnaire allows us to accurately measure your financial wellness.
            </div>
            <div style={{ borderTop: '1px solid #E5E7EB' }} />
            <div style={{ padding: '12px 20px', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                className="btn"
                style={{ backgroundColor: '#1A73E8', color: 'white', padding: '10px 28px', borderRadius: '6px', fontSize: '0.95rem', fontWeight: '700', width: 'auto' }}
                onClick={() => setShowTooltip(false)}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="q-content">
        <h1 className="q-title">What goals are you<br/>saving for?</h1>
        <p className="q-subtitle">
          Enter as many short-term or long-term goals. Customize the details anytime.
        </p>

        <div className="goal-type-grid">
          <div className="goal-type-btn" onClick={() => handleOpenModal('short')}>
            <div className="goal-type-title">Short-term goal</div>
            <div className="goal-type-desc">Within the next<br/>0-12 months</div>
          </div>
          <div className="goal-type-btn" onClick={() => handleOpenModal('long')}>
            <div className="goal-type-title">Long-term goal</div>
            <div className="goal-type-desc">Over 12 months</div>
          </div>
        </div>

        {savedGoals.length > 0 && (
          <div className="saved-goals-section">
            <div className="saved-goals-title">GOALS:</div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {savedGoals.map((g, idx) => (
                <div key={idx} className="goal-card">
                  <div className="goal-card-icon">
                    <Tag size={20} />
                  </div>
                  <div className="goal-card-name">{g.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="q-bottom-cta">
        <button 
          className="btn btn-primary primary-cta" 
          style={{width: '100%', padding: '16px'}}
          disabled={savedGoals.length === 0}
          onClick={() => navigate('/goals-complete')}
        >
          Continue
        </button>
      </div>

      {activeModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="bs-header">
              <div className="bs-icon-wrapper">
                <img src={iconRemaining} alt="Plant" />
              </div>
              <div className="bs-title">{getModalTitle()}</div>
            </div>

            <div className="form-group" style={{ position: 'relative' }}>
              <label className="form-label">Select a goal</label>
              {/* Custom inline dropdown */}
              <div
                className="form-select"
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none', borderColor: showGoalDropdown ? '#1A73E8' : '#D1D5DB', borderWidth: '2px' }}
                onClick={() => setShowGoalDropdown(p => !p)}
              >
                <span style={{ color: selectedGoalType ? '#111827' : '#9CA3AF' }}>
                  {selectedGoalType || 'Select a goal'}
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
              {showGoalDropdown && (
                <div style={{ position: 'relative', backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '6px', marginTop: '2px', zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  {goalOptions.map(opt => (
                    <div
                      key={opt}
                      style={{
                        padding: '10px 14px',
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                        color: '#111827',
                        backgroundColor: selectedGoalType === opt ? '#DBEAFE' : 'white',
                        fontWeight: selectedGoalType === opt ? '600' : '400',
                      }}
                      onClick={() => { setSelectedGoalType(opt); setShowGoalDropdown(false); }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {selectedGoalType && (
              <>
                <div className="form-group">
                  <label className="form-label">Goal Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Enter name of goal"
                    value={goalName}
                    onChange={e => setGoalName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Amount</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="$" 
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Date of Goal</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="MM/YYYY" 
                    value={dateStr}
                    onChange={e => setDateStr(e.target.value)}
                  />
                </div>
              </>
            )}

            <div className="bs-actions">
              <button className="btn-close" onClick={() => setActiveModal(null)}>
                Close
              </button>
              <button className="btn-save" onClick={handleSaveGoal}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
