import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BottomNav from '../components/BottomNav';
import BackHeader from '../components/BackHeader';
import '../components/components.css';
import './OnboardingBenefits.css';

// Using provided images
import paydate from '../assets/paydate.png';
import iconMoney from '../assets/money.png';
import iconSound from '../assets/sound.png';

export default function OnboardingBenefits() {
  const navigate = useNavigate();

  return (
    <div className="benefits-container">
      <StatusBar theme="light" />
      <BackHeader />

      <div className="benefits-content">
        <h1 className="benefits-title">
          Other apps watch.<br />
          AutoPayPlan acts.<br />
          Here's how:
        </h1>

        <div className="benefits-list">

          <div className="benefit-item">
            <div className="benefit-icon-wrapper">
              <img src={paydate} alt="Automation" className="benefit-icon" />
            </div>
            <div className="benefit-text">
              <h3>Automated Payments</h3>
              <p>Automated biweekly payments help to reduce interest, accelerate payoff, avoid late fees, and protect your credit score.</p>
            </div>
          </div>

          <div className="benefit-divider" />

          <div className="benefit-item">
            <div className="benefit-icon-wrapper">
              <img src={iconMoney} alt="AI Intelligent Allocation" className="benefit-icon" />
            </div>
            <div className="benefit-text">
              <h3>AI-Intelligent Allocation</h3>
              <p>AutoPayPlan uses AI to create a personalized plan based on your income, spending, goals — and even your financial fears.</p>
            </div>
          </div>

          <div className="benefit-divider" />

          <div className="benefit-item selected-benefit">
            <div className="benefit-icon-wrapper">
              <img src={iconSound} alt="Listens to Financial Fears" className="benefit-icon" />
            </div>
            <div className="benefit-text">
              <h3>Listens to Financial Fears</h3>
              <p>Whether you're worried about debt, retirement, or just making it to the next paycheck, AutoPayPlan builds a plan that addresses your concerns and gives you peace of mind.</p>
            </div>
          </div>

        </div>

        <div className="action-container">
          <button
            className="btn btn-primary cta-btn"
            onClick={() => navigate('/kfis')}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
