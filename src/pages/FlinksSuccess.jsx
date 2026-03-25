import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import { Check } from 'lucide-react';
import flinksLogo from '../assets/flinks.svg';
import './FlinksSuccess.css';

export default function FlinksSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto redirect after 2.5 seconds
    const timer = setTimeout(() => {
      navigate('/connect-next');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flow-container flinks-success-bg">
      <StatusBar theme="light" />
      
      <div className="flinks-success-content">
        <div className="flinks-logo-top">
          <img src={flinksLogo} alt="Flinks" style={{ height: '28px' }} />
        </div>

        <div className="success-circle-container">
          <div className="success-circle">
            <Check size={48} color="white" strokeWidth={3} />
          </div>
        </div>

        <h1 className="success-title">Success! Your account is now<br/>connected!</h1>
        <p className="success-subtitle">
          If you have any questions, please contact the application's support team.
        </p>

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
