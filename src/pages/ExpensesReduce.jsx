import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BackHeader from '../components/BackHeader';
import { Lightbulb, ChevronDown } from 'lucide-react';
import './GoalsComplete.css'; // flow container styles
import './ExpensesReduce.css';

export default function ExpensesReduce() {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);

  const categories = [
    { id: 'entertainment', title: 'Entertainment', desc: 'Subscriptions, hobbies, concerts, dining, coffee shops' },
    { id: 'personal_care', title: 'Personal Care', desc: 'Haircuts, beauty products, gym memberships, spas' },
    { id: 'shopping', title: 'Shopping', desc: 'Clothing, electronics, household items' },
    { id: 'travel', title: 'Travel', desc: 'Flights, hotels, vacation expenses' },
    { id: 'gifts', title: 'Gifts', desc: 'Donations, charitable contributions' },
    { id: 'notsure', title: 'Not sure', desc: 'Do this for me' }
  ];

  const handleSelect = (id) => {
    // If 'notsure' is selected, maybe deselect others. But requirements loosely say multi-select.
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="flow-container flinks-login-bg">
      <StatusBar theme="light" />
      <div className="flinks-header-wrapper">
        <BackHeader />
      </div>
      
      <div className="flow-content flinks-login-content">
        <h1 className="flinks-title" style={{ padding: '0 8px' }}>Which expenses are you open to reducing?</h1>
        <p className="summary-subtitle" style={{ marginBottom: '16px' }}>
          Choose all that apply.
        </p>

        <div className="why-matters-accordion">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Lightbulb color="#F59E0B" size={18} fill="#FDE68A" />
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4B5563', letterSpacing: '0.05em' }}>WHY THIS MATTERS</span>
          </div>
          <ChevronDown color="#9CA3AF" size={20} />
        </div>

        <div className="expenses-grid">
          {categories.map(cat => {
            const isSelected = selectedItems.includes(cat.id);
            return (
               <div 
                 key={cat.id} 
                 className={`expense-card ${isSelected ? 'selected' : ''}`}
                 onClick={() => handleSelect(cat.id)}
               >
                 <div className="expense-title">{cat.title}</div>
                 <div className="expense-desc">{cat.desc}</div>
               </div>
            );
          })}
        </div>
      </div>

      <div className="flow-bottom-cta">
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/')}
        >
          View my dashboard
        </button>
      </div>
    </div>
  );
}
