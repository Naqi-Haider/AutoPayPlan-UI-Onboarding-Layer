import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import { Eye } from 'lucide-react';
import './GoalsComplete.css'; // flow container styles
import './FlinksLogin.css';

export default function FlinksLogin() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flow-container flinks-login-bg">
      <StatusBar theme="light" />
      <div className="flinks-header-wrapper">
        <BackHeader />
      </div>
      
      <div className="flow-content flinks-login-content">
        <div className="login-card">
          <div className="bmo-logo-placeholder">
            <span style={{ color: '#0079C1', fontWeight: '900', fontSize: '1.5rem', marginRight: '4px' }}>BMO</span>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#EF4444' }}></div>
          </div>
          
          <h1 className="flinks-title">Log in to your BMO account</h1>
          
          <div className="login-form">
            <input 
              type="text" 
              className="login-input" 
              placeholder="Card Number" 
              value={cardNumber}
              onChange={e => setCardNumber(e.target.value)}
            />
            
            <div className="password-wrapper">
              <input 
                type="password" 
                className="login-input" 
                placeholder="Password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Eye className="pwd-eye-icon" color="#9CA3AF" size={20} />
            </div>

            <div className="forgot-pwd">
              Forgot your password?
            </div>

            <button 
              className="btn btn-primary login-continue-btn"
              disabled={!cardNumber || !password}
              onClick={() => navigate('/flinks-success')}
            >
              Continue
            </button>
          </div>
        </div>

        <p className="login-security-text">
          Your data is secured by 256-bit encryption. Flinks will never share your credentials.
        </p>
      </div>
    </div>
  );
}
