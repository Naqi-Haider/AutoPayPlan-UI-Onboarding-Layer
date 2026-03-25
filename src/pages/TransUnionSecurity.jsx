import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import { CheckCircle2 } from 'lucide-react';
import transunionLogo from '../assets/transunion.svg';
import './GoalsComplete.css'; // flow container styles
import './TransUnionSecurity.css';

export default function TransUnionSecurity() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  });

  const isFormComplete = answers.q1 && answers.q2 && answers.q3 && answers.q4;

  const handleChange = (question, value) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  return (
    <div className="flow-container flinks-login-bg">
      <StatusBar theme="light" />
      <div className="flinks-header-wrapper">
        <BackHeader />
      </div>
      
      <div className="flow-content flinks-login-content">
        <h1 className="flinks-title">Security Questions</h1>
        <p className="success-subtitle" style={{ padding: '0', marginBottom: '24px' }}>
          Please answer the following questions to verify your identity.
        </p>

        <div className="login-card security-card">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '32px' }}>
            <img src={transunionLogo} alt="TransUnion" style={{ height: '36px' }} />
          </div>
          
          <div className="security-questions-list">
            <div className="security-question-item">
              <p className="security-question-text">
                <b>1.</b> What is the monthly payment of your student loan?
              </p>
              <div className="radio-group security-radio">
                {['$451 - $500', '$501 - $550', '$601 - $650', 'None of the above'].map(opt => (
                  <label className="radio-label" key={opt}>
                    <input type="radio" name="q1" value={opt} onChange={() => handleChange('q1', opt)} />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="security-question-item">
              <p className="security-question-text">
                <b>2.</b> Which of the following is a current or previous employer?
              </p>
              <div className="radio-group security-radio">
                {['Chewy', 'Valley Hospital and Health', 'Plante & Moran', 'Russell Investment Group', 'None of the above'].map(opt => (
                  <label className="radio-label" key={opt}>
                    <input type="radio" name="q2" value={opt} onChange={() => handleChange('q2', opt)} />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="security-question-item">
              <p className="security-question-text">
                <b>3.</b> What state was your social security number issued (this could be the state in which you were born or had your first job)?
              </p>
              <div className="radio-group security-radio">
                {['Colorado', 'Delaware', 'Hawaii', 'New Hampshire', 'None of the above'].map(opt => (
                  <label className="radio-label" key={opt}>
                    <input type="radio" name="q3" value={opt} onChange={() => handleChange('q3', opt)} />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="security-question-item">
              <p className="security-question-text">
                <b>4.</b> What is the balance of your most recent mortgage?
              </p>
              <div className="radio-group security-radio">
                {['$80,000 - $85,000', '$85,001 - $90,000', '$90,001 - $95,000', '$95,001 - $100,000'].map(opt => (
                  <label className="radio-label" key={opt}>
                    <input type="radio" name="q4" value={opt} onChange={() => handleChange('q4', opt)} />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flow-bottom-cta">
        <button 
          className="btn btn-primary" 
          disabled={!isFormComplete}
          onClick={() => navigate('/connect-success')}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
