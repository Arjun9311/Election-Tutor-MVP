import { Bot } from 'lucide-react';
import './TypingIndicator.css';

const TypingIndicator = () => {
  return (
    <div className="message-bubble-container bot">
      <div className="avatar bot-avatar">
        <Bot size={18} />
      </div>
      <div className="message-bubble bot-bubble typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default TypingIndicator;
