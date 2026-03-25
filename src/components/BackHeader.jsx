import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackHeader = ({ title = '' }) => {
  const navigate = useNavigate();
  
  return (
    <div className="back-header">
      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft size={24} color="#1F2937" />
      </button>
      {title && <h2 className="header-title">{title}</h2>}
    </div>
  );
};

export default BackHeader;
