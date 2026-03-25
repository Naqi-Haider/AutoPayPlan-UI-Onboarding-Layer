import { Wifi, Battery, Signal } from 'lucide-react';

const StatusBar = ({ theme = 'light' }) => {
  // theme can be 'light' (black text for white bg) or 'dark' (white text for dark bg)
  const isDark = theme === 'dark';
  const color = isDark ? '#FFFFFF' : '#000000';

  return (
    <div className={`status-bar ${theme}`}>
      <div className="time">9:41</div>
      <div className="status-icons">
        <Signal size={16} fill={color} strokeWidth={0} />
        <Wifi size={16} color={color} strokeWidth={2.5} />
        <Battery size={22} color={color} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default StatusBar;
