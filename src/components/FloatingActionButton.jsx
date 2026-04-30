import { MessageCircle, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import './FloatingActionButton.css';

const FloatingActionButton = () => {
  const { isChatOpen, setIsChatOpen } = useAppContext();

  return (
    <button 
      className={`fab ${isChatOpen ? 'open' : ''}`}
      onClick={() => setIsChatOpen(!isChatOpen)}
      aria-label="Toggle AI Assistant"
    >
      {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
    </button>
  );
};

export default FloatingActionButton;
