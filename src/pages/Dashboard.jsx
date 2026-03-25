import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BottomNav from '../components/BottomNav';
import '../components/components.css';
import './Dashboard.css';
import heroImg from '../assets/hero.png';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <StatusBar theme="light" />

      <div className="dashboard-content">
        {/* Background shape removed as background is now fully blue */}
        {/* Main CTA Card */}
        <div className="cta-card">
          <div className="card-header">
            <h2>AutoPayPlan</h2>
          </div>

          <div className="card-body">
            <div className="hero-image-container">
              {/* Fallback styling for image in case hero.png is missing or taking time to load */}
              <img
                src={card1}
                alt="Financial wellness illustration"
                className="hero-image"
              />
            </div>

            <h1 className="cta-title">Your personalized plan to get financially fit!</h1>

            <p className="cta-subtitle">
              Improve your financial wellness and reach goals faster — using your current income.
            </p>

            <button
              className="btn btn-primary cta-btn"
              onClick={() => navigate('/onboarding')}
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Secondary Card */}
        <div className="secondary-card cta-card">
          <div className="card-header">
            <h2>My Insurance</h2>
          </div>
          <div className="card-body">
            <div className="hero-image-container">
              <img src={card2} alt="Insurance representation" className="hero-image" />
            </div>
            <h1 className="cta-title" style={{ textAlign: 'center', marginTop: '16px' }}>Ready, Set, Quote!</h1>
            <p className="cta-subtitle" style={{ textAlign: 'center' }}>
              Simplify your search for auto insurance and experience convenient, up-front pricing.
            </p>
            <button className="btn btn-primary cta-btn" style={{ marginTop: '16px' }}>
              Get Started
            </button>
          </div>
        </div>

      </div>

      <BottomNav />
    </div>
  );
}
