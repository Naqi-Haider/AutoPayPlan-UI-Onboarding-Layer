import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import { CheckCircle2 } from 'lucide-react';
import transunionLogo from '../assets/transunion.svg';
import './GoalsComplete.css'; // flow container styles
import './TransUnionValidate.css';

export default function TransUnionValidate() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleContinue = () => {
    if (selectedMethod === 'sms' || selectedMethod === 'voice') {
      navigate('/transunion-sms');
    } else if (selectedMethod === 'security') {
      navigate('/transunion-security');
    }
  };

  return (
    <div className="flow-container flinks-login-bg">
      <StatusBar theme="light" />
      <div className="flinks-header-wrapper">
        <BackHeader />
      </div>
      
      <div className="flow-content flinks-login-content">
        <h1 className="flinks-title">Validate your identity</h1>
        <p className="success-subtitle" style={{ padding: '0', marginBottom: '24px' }}>
          We need to authenticate your identity to connect your credit and loan information with TransUnion.
        </p>

        <div className="login-card" style={{ padding: '24px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '32px' }}>
            <img src={transunionLogo} alt="TransUnion" style={{ height: '36px' }} />
          </div>
          
          <h2 className="validate-method-title">Select one preferred method to send a passcode:</h2>
          <p className="validate-method-subtitle">Standard text message and voice rates apply.</p>

          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                name="authMethod" 
                value="sms" 
                onChange={(e) => setSelectedMethod(e.target.value)}
              />
              <span>SMS to phone number ending in <b>***7895</b></span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="authMethod" 
                value="voice" 
                onChange={(e) => setSelectedMethod(e.target.value)}
              />
              <span>Voice call to phone number ending in <b>***7895</b></span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="authMethod" 
                value="security" 
                onChange={(e) => setSelectedMethod(e.target.value)}
              />
              <span>Security questions from TransUnion</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flow-bottom-cta">
        <button 
          className="btn btn-primary" 
          disabled={!selectedMethod}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
