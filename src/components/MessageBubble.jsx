import { Bot, User } from 'lucide-react';
import './MessageBubble.css';

const MessageBubble = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <div className={`message-bubble-container ${isBot ? 'bot' : 'user'}`}>
      {isBot && (
        <div className="avatar bot-avatar">
          <Bot size={18} />
        </div>
      )}
      
      <div className={`message-bubble ${isBot ? 'bot-bubble' : 'user-bubble'}`}>
        <p>{message.text}</p>
      </div>

      {!isBot && (
        <div className="avatar user-avatar">
          <User size={18} />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
