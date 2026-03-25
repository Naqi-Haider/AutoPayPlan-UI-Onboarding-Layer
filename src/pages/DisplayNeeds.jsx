import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import './GoalsComplete.css'; // flow container styles
import './FinancialSummary.css';

export default function DisplayNeeds() {
  const navigate = useNavigate();

  const needsList = [
    { label: 'Housing', value: '$1,600.00' },
    { label: 'Utilities', value: '$225.00' },
    { label: 'Transportation', value: '$500.00' },
    { label: 'Groceries', value: '$250.00' },
    { label: 'Healthcare', value: '$240.00' },
    { label: 'Debt Payments', value: '$300.00' },
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
          <h2 className="summary-card-title">Needs (Essential Bills)</h2>
          
          <div className="summary-list">
            {needsList.map(item => (
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
          onClick={() => navigate('/display-wants')}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
