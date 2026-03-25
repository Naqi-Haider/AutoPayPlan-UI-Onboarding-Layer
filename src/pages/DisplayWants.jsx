import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import './GoalsComplete.css'; // flow container styles
import './FinancialSummary.css';

export default function DisplayWants() {
  const navigate = useNavigate();

  const wantsList = [
    { label: 'Entertainment', value: '$200.00' },
    { label: 'Personal Care', value: '$240.00' },
    { label: 'Shopping', value: '$175.00' },
    { label: 'Travel', value: '$340.00' },
    { label: 'Gifts', value: '$60.00' },
  ];

  return (
    <div className="flow-container flinks-login-bg">
      <StatusBar theme="light" />
      <div className="flinks-header-wrapper">
        <BackHeader />
      </div>
      
      <div className="flow-content flinks-login-content">
        <h1 className="flinks-title">Review your summary</h1>
        <p className="summary-subtitle">
          Here is a snapshot of your income, bills, and spending buckets we detected.
        </p>

        <div className="login-card" style={{ padding: '24px 20px' }}>
          <h2 className="summary-card-title">Wants (Lifestyle Extras)</h2>
          
          <div className="summary-list">
            {wantsList.map(item => (
              <div className="summary-row" key={item.label} style={{ alignItems: 'center' }}>
                <div className="summary-label">{item.label}</div>
                <div className="summary-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flow-bottom-cta">
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/expenses-reduce')}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
