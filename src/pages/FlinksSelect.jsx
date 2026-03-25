import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import { Search, ChevronRight, Lock } from 'lucide-react';
import './GoalsComplete.css'; // flow container styles
import './FlinksSelect.css';
import flinksLogo from '../assets/flinks.svg';

export default function FlinksSelect() {
  const navigate = useNavigate();

  const banks = [
    { name: 'Flinks Capital', url: 'flinks.com', color: '#00A1E0', initials: 'FC' },
    { name: 'TD', url: 'td.com', color: '#10B981', initials: 'TD' },
    { name: 'RBC', url: 'rbcroyalbank.com', color: '#3B82F6', initials: 'RBC' },
    { name: 'BMO', url: 'bmo.com', color: '#EF4444', initials: 'BMO' },
    { name: 'Scotiabank', url: 'scotiaonline.scotiabank.com', color: '#EF4444', initials: 'S' }
  ];

  return (
    <div className="flow-container">
      <StatusBar theme="light" />
      <div className="flinks-header-wrapper">
        <BackHeader />
        <div className="flinks-logo-center">
          <img src={flinksLogo} alt="Flinks" style={{ height: '24px' }} />
        </div>
      </div>
      
      <div className="flow-content flinks-content">
        <h1 className="flinks-title">Select your institution</h1>
        
        <div className="search-container">
          <Search color="#9CA3AF" size={20} className="search-icon" />
          <input type="text" placeholder="Search 100+ financial institutions" className="search-input" />
        </div>

        <div className="security-notice">
          <Lock size={16} color="#4B5563" />
          <p>
            <b>Flinks</b> is trusted by <b>500k+</b> monthly users to securely connect their account.
          </p>
        </div>

        <div className="bank-list">
          {banks.map((bank, idx) => (
            <div key={idx} className="bank-item" onClick={() => navigate('/flinks-login')}>
              <div className="bank-icon" style={{ backgroundColor: bank.color }}>{bank.initials}</div>
              <div className="bank-details">
                <div className="bank-name">{bank.name}</div>
                <div className="bank-url">{bank.url}</div>
              </div>
              <ChevronRight color="#9CA3AF" size={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
