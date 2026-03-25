import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import { CheckCircle2 } from 'lucide-react';
import './GoalsComplete.css'; // Reuse flow styles
import './ConnectConsent.css';
import flinksLogo from '../assets/flinks.svg';
import transunionLogo from '../assets/transunion.svg';

export default function ConnectConsent() {
  const navigate = useNavigate();

  return (
    <div className="flow-container">
      <StatusBar theme="light" />
      <BackHeader />
      
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '100%' }}></div>
      </div>

      <div className="flow-content">
        <h1 className="flow-title">Let's connect your<br/>accounts</h1>
        
        <div className="consent-required-label">Consent required</div>
        <p className="consent-desc">
          AutoPayPlus® needs your permission to access your bank account information with (on average this takes 2 minutes):
        </p>

        <div className="providers-list" style={{ display: 'flex', flexDirection: 'column', margin: '32px auto 0', width: 'fit-content' }}>
          <div className="provider-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <CheckCircle2 color="#9CA3AF" size={20} />
            <img src={flinksLogo} alt="Flinks" style={{ height: '32px', marginLeft: '12px' }} />
          </div>
          <div className="provider-item" style={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircle2 color="#9CA3AF" size={20} />
            <img src={transunionLogo} alt="TransUnion" style={{ height: '32px', marginLeft: '12px' }} />
          </div>
        </div>

      </div>

      <div className="flow-bottom-cta">
        <p className="consent-fineprint">
          By clicking the button, you allow AutoPayPlus® to use Flinks' Services and TransUnion to access your data.
        </p>
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/flinks-select')}
        >
          Agree and Continue
        </button>
      </div>
    </div>
  );
}
