import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import './GoalsComplete.css'; // flow container styles
import './FinancialSummary.css';

export default function DisplayIncome() {
  const navigate = useNavigate();

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
          <h2 className="summary-card-title">Income</h2>
          
          <div className="summary-list">
            <div className="summary-row">
              <div className="summary-label-col">
                <div className="summary-label">Income 1</div>
                <div className="summary-sublabel">Payday: Biweekly</div>
              </div>
              <div className="summary-value">$2,000.00</div>
            </div>

            <div className="summary-row">
              <div className="summary-label-col">
                <div className="summary-label">Income 2</div>
                <div className="summary-sublabel">Payday: Monthly</div>
              </div>
              <div className="summary-value">$1,500.00</div>
            </div>
          </div>
          
          <div className="add-other-link">+ Other Income</div>
        </div>
      </div>

      <div className="flow-bottom-cta">
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/display-needs')}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
