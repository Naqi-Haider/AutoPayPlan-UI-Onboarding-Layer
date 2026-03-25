import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import '../components/components.css';
import './KFIsOnLand.css';

// Using provided images
import iconNeeds from '../assets/cheque.png';
import iconWants from '../assets/shop.png';
import iconRemaining from '../assets/money-plant.png';
import iconCreditUsage from '../assets/credit-usage.png';
import iconDti from '../assets/accounting.png';
import iconCreditScore from '../assets/credit-score.png';

export default function KFIsOnLand() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [expandedItems, setExpandedItems] = useState({
    needs: false,
    wants: false,
    remaining: false,
    creditUsage: false,
    dti: false,
    creditScore: false
  });

  const toggleExpand = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <div className="kfis-container">
      <StatusBar theme="light" />
      <BackHeader />

      <div className="kfis-content">
        <h1 className="kfis-title">
          Factors we use to track your financial health
        </h1>

        <div className="kfis-card">
          <div className="kfis-card-header">
            6 KEY FINANCIAL INDICATORS*
          </div>
          
          <div className="kfis-list">
            
            {/* Needs Item */}
            <div className="kfi-item-wrapper">
              <div 
                className="kfi-item" 
                onClick={() => toggleExpand('needs')}
              >
                <div className="kfi-left">
                  <div className="kfi-icon-wrapper">
                    <img src={iconNeeds} alt="Needs" className="kfi-icon" />
                  </div>
                  <span className="kfi-label">Needs</span>
                </div>
                
                <div className="kfi-right">
                  <div className="kfi-target">
                    <span className="target-label">TARGET</span>
                    <span className="target-value blue-badge">≤ 50%</span>
                  </div>
                  {expandedItems.needs ? <ChevronUp size={20} color="#6B7280" /> : <ChevronDown size={20} color="#6B7280" />}
                </div>
              </div>
              
              {/* Needs Expanded Content */}
              {expandedItems.needs && (
                <div className="kfi-expanded-content">
                  <div style={{ marginBottom: '12px' }}>
                    <strong>Why it matters to you:</strong>
                    <div>Keeps housing, utilities &amp; groceries from crowding out savings.</div>
                  </div>
                  <div>
                    <strong>How AutoPayPlan uses it:</strong>
                    <div>Flags overspending and suggests reallocations.</div>
                  </div>
                </div>
              )}
            </div>

            <div className="kfi-divider" />

            {/* Wants Item */}
            <div className="kfi-item-wrapper">
              <div 
                className="kfi-item"
                onClick={() => toggleExpand('wants')}
              >
                <div className="kfi-left">
                  <div className="kfi-icon-wrapper">
                    <img src={iconWants} alt="Wants" className="kfi-icon" />
                  </div>
                  <span className="kfi-label">Wants</span>
                </div>
                
                <div className="kfi-right">
                  <div className="kfi-target">
                    <span className="target-label">TARGET</span>
                    <span className="target-value blue-badge">≤ 30%</span>
                  </div>
                  {expandedItems.wants ? <ChevronUp size={20} color="#6B7280" /> : <ChevronDown size={20} color="#6B7280" />}
                </div>
              </div>
              
              {/* Wants Expanded Content */}
              {expandedItems.wants && (
                <div className="kfi-expanded-content">
                  <div style={{ marginBottom: '12px' }}>
                    <strong>Why it matters to you:</strong>
                    <div>Maintains lifestyle flexibility without derailing goals.</div>
                  </div>
                  <div>
                    <strong>How AutoPayPlan uses it:</strong>
                    <div>Identifies trim-back candidates during cash crunches.</div>
                  </div>
                </div>
              )}
            </div>

            <div className="kfi-divider" />

            {/* Remaining Item */}
            <div className="kfi-item-wrapper">
              <div 
                className="kfi-item"
                onClick={() => toggleExpand('remaining')}
              >
                <div className="kfi-left">
                  <div className="kfi-icon-wrapper">
                    <img src={iconRemaining} alt="Remaining" className="kfi-icon" />
                  </div>
                  <span className="kfi-label">Remaining</span>
                </div>
                
                <div className="kfi-right">
                  <div className="kfi-target">
                    <span className="target-label">TARGET</span>
                    <span className="target-value blue-badge">≤ 20%</span>
                  </div>
                  {expandedItems.remaining ? <ChevronUp size={20} color="#6B7280" /> : <ChevronDown size={20} color="#6B7280" />}
                </div>
              </div>
              
              {/* Remaining Expanded Content */}
              {expandedItems.remaining && (
                <div className="kfi-expanded-content">
                  <div style={{ marginBottom: '12px' }}>
                    <strong>Why it matters to you:</strong>
                    <div>Drives emergency fund, retirement, and big-ticket goals.</div>
                  </div>
                  <div>
                    <strong>How AutoPayPlan uses it:</strong>
                    <div>Auto-routes surplus income toward the highest-impact milestone.</div>
                  </div>
                </div>
              )}
            </div>

            {/* Show All Section */ }
            <div className="kfi-divider" />
            
            {showAll && (
              <div className="kfi-extra-items">
                {/* Credit Usage Item */}
                <div className="kfi-item-wrapper">
                  <div 
                    className="kfi-item"
                    onClick={() => toggleExpand('creditUsage')}
                  >
                    <div className="kfi-left">
                      <div className="kfi-icon-wrapper">
                        <img src={iconCreditUsage} alt="Credit Usage" className="kfi-icon" />
                      </div>
                      <span className="kfi-label">Credit Usage</span>
                    </div>
                    
                    <div className="kfi-right">
                      <div className="kfi-target">
                        <span className="target-label">TARGET</span>
                        <span className="target-value blue-badge">&lt; 30%</span>
                      </div>
                      {expandedItems.creditUsage ? <ChevronUp size={20} color="#6B7280" /> : <ChevronDown size={20} color="#6B7280" />}
                    </div>
                  </div>
                  
                  {expandedItems.creditUsage && (
                    <div className="kfi-expanded-content">
                      <div style={{ marginBottom: '12px' }}>
                        <strong>Why it matters to you:</strong>
                        <div>High utilization can shave 100+ points off your score.</div>
                      </div>
                      <div>
                        <strong>How AutoPayPlan uses it:</strong>
                        <div>Sends balance alerts before scores drop.</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="kfi-divider" />

                {/* DTI Item */}
                <div className="kfi-item-wrapper">
                  <div 
                    className="kfi-item"
                    onClick={() => toggleExpand('dti')}
                  >
                    <div className="kfi-left">
                      <div className="kfi-icon-wrapper">
                        <img src={iconDti} alt="Debt-to-income" className="kfi-icon" />
                      </div>
                      <span className="kfi-label">Debt-to-income (DTI)</span>
                    </div>
                    
                    <div className="kfi-right">
                      <div className="kfi-target">
                        <span className="target-label">TARGET</span>
                        <span className="target-value blue-badge">&lt; 35%</span>
                      </div>
                      {expandedItems.dti ? <ChevronUp size={20} color="#6B7280" /> : <ChevronDown size={20} color="#6B7280" />}
                    </div>
                  </div>
                  
                  {expandedItems.dti && (
                    <div className="kfi-expanded-content">
                      <div style={{ marginBottom: '12px' }}>
                        <strong>Why it matters to you:</strong>
                        <div>Lenders view &lt; 35% as "healthy," unlocking better mortgage or refi offers.</div>
                      </div>
                      <div>
                        <strong>How AutoPayPlan uses it:</strong>
                        <div>Re-prioritizes debt pay-down once DTI creeps upward.</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="kfi-divider" />

                {/* Credit Score Item */}
                <div className="kfi-item-wrapper">
                  <div 
                    className="kfi-item"
                    onClick={() => toggleExpand('creditScore')}
                  >
                    <div className="kfi-left">
                      <div className="kfi-icon-wrapper">
                        <img src={iconCreditScore} alt="Credit Score" className="kfi-icon" />
                      </div>
                      <span className="kfi-label">Credit Score</span>
                    </div>
                    
                    <div className="kfi-right">
                      <div className="kfi-target">
                        <span className="target-label">TARGET</span>
                        <span className="target-value blue-badge">700 +</span>
                      </div>
                      {expandedItems.creditScore ? <ChevronUp size={20} color="#6B7280" /> : <ChevronDown size={20} color="#6B7280" />}
                    </div>
                  </div>
                  
                  {expandedItems.creditScore && (
                    <div className="kfi-expanded-content">
                      <div style={{ marginBottom: '12px' }}>
                        <strong>Why it matters to you:</strong>
                        <div>"Good" range that earns lower rates and fees.</div>
                      </div>
                      <div>
                        <strong>How AutoPayPlan uses it:</strong>
                        <div>Projects interest savings and surfaces credit-building tips.</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="kfi-divider" />
              </div>
            )}
            
            <button 
              className="show-all-btn"
              onClick={() => setShowAll(!showAll)}
            >
              <u>{showAll ? 'Show less' : 'Show all'}</u>
            </button>
            
          </div>
        </div>

        <div className="kfis-actions">
          <button 
            className="btn btn-primary primary-cta"
            onClick={() => navigate('/questionnaire')}
          >
            Start your first free 6 months*
          </button>
          
          <button 
            className="btn secondary-cta"
            onClick={() => navigate('/demo')}
          >
            Try preview mode
          </button>
        </div>

        <p className="kfis-disclaimer">
          *These are key financial indicators (KFIs) standard across all Americans, but not all Americans view money the same way. That's why AutoPayPlan personalizes your strategy based on your financial fears, not just your finances.
        </p>

      </div>
    </div>
  );
}
