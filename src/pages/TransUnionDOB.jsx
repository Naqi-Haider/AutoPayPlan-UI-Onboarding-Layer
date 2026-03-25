import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import { CheckCircle2 } from 'lucide-react';
import transunionLogo from '../assets/transunion.svg';
import './GoalsComplete.css'; // flow container styles
import './TransUnionDOB.css';

export default function TransUnionDOB() {
  const navigate = useNavigate();
  const [dob, setDob] = useState('');

  return (
    <div className="flow-container flinks-login-bg">
      <StatusBar theme="light" />
      <div className="flinks-header-wrapper">
        <BackHeader />
      </div>
      
      <div className="flow-content flinks-login-content">
        <h1 className="flinks-title">Please provide your<br/>date of birth.</h1>
        <p className="success-subtitle" style={{ padding: '0', marginBottom: '24px' }}>
          We need this to authenticate your identity with TransUnion to connect your loans.
        </p>

        <div className="login-card" style={{ padding: '24px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '48px' }}>
            <img src={transunionLogo} alt="TransUnion" style={{ height: '36px' }} />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#111827' }}>
              Enter date of birth
            </div>
            <div>
              <input 
                type="text" 
                placeholder="MM/DD/YYYY"
                style={{ 
                  width: '120px', 
                  padding: '8px', 
                  border: '1px solid #D1D5DB', 
                  borderRadius: '6px', 
                  fontSize: '0.85rem',
                  color: '#111827',
                  textAlign: 'center'
                }}
                value={dob}
                onChange={e => setDob(e.target.value)}
              />
              <div style={{ fontSize: '0.65rem', color: '#9CA3AF', textAlign: 'center', marginTop: '4px' }}>
                Example: 01/28/2000
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flow-bottom-cta">
        <button 
          className="btn btn-primary" 
          disabled={!dob}
          onClick={() => navigate('/transunion-validate')}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
