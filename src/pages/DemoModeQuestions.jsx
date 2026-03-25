import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import './DemoModeQuestions.css';

export default function DemoModeQuestions() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  
  // Local state for selections just to make the UI interactive
  const [selections, setSelections] = useState({
    age: '18-30',
    credit: 'Under 600',
    debt: 'Under $2,500',
    income: 'Under $3,000'
  });

  const ageOptions = ['18-30', '31-45', '46-60', '61+'];
  const creditOptions = ['Under 600', '601 to 660', '661 to 780', 'Over 780'];
  const debtOptions = ['Under $2,500', '$2,500 - $4,500', '$4,501 to $6,500', 'Over $6,500'];
  const incomeOptions = ['Under $3,000', '$3,000 to $6,000', '$6,001 to $9,000', 'Over $9,000'];

  const handleSelect = (category, value) => {
    setSelections(prev => ({ ...prev, [category]: value }));
  };

  const handleExitClick = () => {
    setShowModal(true);
  };

  const handleConfirmExit = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="demo-container">
      <StatusBar theme="light" />
      
      <div className="preview-banner">
        <span className="preview-text">You are in preview mode</span>
        <button className="exit-btn" onClick={handleExitClick}>Exit</button>
      </div>

      <div className="demo-content">
        <h1 className="demo-title">Select the answers that best reflect you.</h1>
        <p className="demo-subtitle">
          Please answer a few questions to preview a sample scenario. (We don't save this data).
        </p>

        <div className="form-section">
          <div className="section-label">AGE RANGE:</div>
          <div className="options-grid">
            {ageOptions.map(opt => (
              <button 
                key={opt}
                className={`option-btn ${selections.age === opt ? 'selected' : ''}`}
                onClick={() => handleSelect('age', opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="form-section">
          <div className="section-label">CREDIT SCORE:</div>
          <div className="options-grid">
            {creditOptions.map(opt => (
              <button 
                key={opt}
                className={`option-btn ${selections.credit === opt ? 'selected' : ''}`}
                onClick={() => handleSelect('credit', opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="form-section">
          <div className="section-label">OVERALL CREDIT DEBT:</div>
          <div className="options-grid">
            {debtOptions.map(opt => (
              <button 
                key={opt}
                className={`option-btn ${selections.debt === opt ? 'selected' : ''}`}
                onClick={() => handleSelect('debt', opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="form-section">
          <div className="section-label">MONTHLY INCOME:</div>
          <div className="options-grid">
            {incomeOptions.map(opt => (
              <button 
                key={opt}
                className={`option-btn ${selections.income === opt ? 'selected' : ''}`}
                onClick={() => handleSelect('income', opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="demo-bottom-cta">
        <button 
          className="btn btn-primary primary-cta" 
          style={{width: '100%', padding: '16px'}}
          onClick={() => navigate('/questionnaire')}
        >
          Continue
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Leave preview mode</h2>
            </div>
            <div className="modal-body">
              Ready to connect your accounts and try the full experience?
            </div>
            <div className="modal-actions">
              <button className="btn-link" onClick={() => setShowModal(false)}>
                <u>Not yet</u>
              </button>
              <button className="btn-exit" onClick={handleConfirmExit}>
                Yes, exit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
