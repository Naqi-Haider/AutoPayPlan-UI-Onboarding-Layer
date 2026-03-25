import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import { CheckCircle, Unlock } from 'lucide-react';
import flinksLogo from '../assets/flinks.svg';
import transunionLogo from '../assets/transunion.svg';
import './GoalsComplete.css'; // flow container styles
import './ConnectConsent.css'; // provider list styles

export default function ConnectNext() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto redirect after 2 seconds to TransUnion flow
    const timer = setTimeout(() => {
      navigate('/transunion-dob');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flow-container">
      <StatusBar theme="light" />
      <BackHeader />

      <div className="flow-content">
        <h1 className="flow-title" style={{ marginTop: '0', marginBottom: '24px' }}>
          One more connection...
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px', border: '1px solid #E5E7EB', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <Unlock fill="#4ADE80" color="#4ADE80" size={48} />
          </div>
        </div>

        <div className="providers-list" style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
          <div className="provider-item" style={{ marginBottom: '24px', justifyContent: 'center', border: 'none' }}>
            <CheckCircle fill="#22C55E" color="white" size={24} />
            <img src={flinksLogo} alt="Flinks" style={{ height: '32px', marginLeft: '16px' }} />
          </div>
          <div className="provider-item" style={{ justifyContent: 'center', border: 'none' }}>
            <CheckCircle fill="#9CA3AF" color="white" size={24} />
            <img src={transunionLogo} alt="TransUnion" style={{ height: '32px', marginLeft: '16px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
