import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, BarChart2, Car, MoreVertical } from 'lucide-react';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { id: 'accounts', label: 'Accounts', icon: BarChart2, path: '#' },
    { id: 'credit', label: 'Credit', icon: 'TU', path: '#' },
    { id: 'service', label: 'Service', icon: Car, path: '#' },
    { id: 'more', label: 'More', icon: MoreVertical, path: '#' },
  ];

  return (
    <div className="bottom-nav">
      <div className="nav-items-container">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || 
                          (location.pathname === '/' && item.id === 'dashboard') ||
                          (location.pathname.includes('kfi') && item.id === 'autopay');
          
          return (
            <button 
              key={item.id} 
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => {
                if (item.path !== '#') {
                  navigate(item.path);
                }
              }}
            >
              <div className="icon-wrapper">
                {item.icon === 'TU' ? (
                  <div style={{ border: '2px solid #4B5563', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', color: '#4B5563' }}>tu</div>
                ) : (
                  <Icon size={24} className="nav-icon" strokeWidth={isActive ? 2.5 : 2} />
                )}
              </div>
              <span className="nav-label">{item.label}</span>
              {isActive && <div className="active-indicator"></div>}
            </button>
          );
        })}
      </div>
      <div className="home-indicator" />
    </div>
  );
};

export default BottomNav;
