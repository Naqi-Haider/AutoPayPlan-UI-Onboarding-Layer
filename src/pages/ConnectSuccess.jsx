import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import { Lock, CheckCircle } from 'lucide-react';
import flinksLogo from '../assets/flinks.svg';
import transunionLogo from '../assets/transunion.svg';
import './GoalsComplete.css'; // flow container styles
import './ConnectConsent.css'; // providers list
import './ConnectSuccess.css';

export default function ConnectSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/display-income');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flow-container flinks-success-bg">
      <StatusBar theme="light" />
      
      <div className="flinks-success-content" style={{ justifyContent: 'center' }}>
        <h1 className="success-title" style={{ fontSize: '1.5rem', marginBottom: '32px' }}>
          Connected!
        </h1>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', zIndex: 10 }}>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px', border: '1px solid #E5E7EB', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <Lock fill="#4ADE80" color="#4ADE80" size={48} />
          </div>
        </div>

        <div className="providers-list" style={{ width: 'auto', display: 'flex', flexDirection: 'column', gap: '24px', zIndex: 10, background: 'transparent', border: 'none', boxShadow: 'none' }}>
          <div className="provider-item" style={{ border: 'none', padding: '0', justifyContent: 'center' }}>
            <CheckCircle fill="#22C55E" color="white" size={24} />
            <img src={flinksLogo} alt="Flinks" style={{ height: '32px', marginLeft: '16px' }} />
          </div>
          <div className="provider-item" style={{ border: 'none', padding: '0', justifyContent: 'center' }}>
            <CheckCircle fill="#22C55E" color="white" size={24} />
            <img src={transunionLogo} alt="TransUnion" style={{ height: '32px', marginLeft: '16px' }} />
          </div>
        </div>

        {/* CSS Confetti */}
        <div className="confetti-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`confetti piece-${i}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
