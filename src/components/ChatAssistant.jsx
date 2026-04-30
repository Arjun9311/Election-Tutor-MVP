import { useState, useRef, useEffect } from 'react';
import { Send, Bot, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import QuickPrompts from './QuickPrompts';
import { getAiResponse } from '../utils/aiEngine';
import './ChatAssistant.css';

const ChatAssistant = () => {
  const { isChatOpen, setIsChatOpen, currentStep, mode } = useAppContext();
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hi there! I am your Election Tutor AI. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen, isTyping]);

  if (!isChatOpen) return null;

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Get context
    const context = { currentStep, mode };

    // Fetch AI response
    const responseText = await getAiResponse(text, context);
    
    setIsTyping(false);
    
    // Add bot message
    setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: responseText }]);
  };

  const handlePromptSelect = (prompt) => {
    handleSendMessage(prompt);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <div className="chat-assistant-container animate-slide-in">
      <div className="chat-header">
        <div className="chat-header-title">
          <Bot size={20} />
          <h3>Election AI Assistant</h3>
        </div>
        <button className="btn-close-chat" onClick={() => setIsChatOpen(false)}>
          <X size={20} />
        </button>
      </div>

      <div className="chat-messages">
        {messages.map(msg => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isTyping && <TypingIndicator />}
        
        {messages.length === 1 && !isTyping && (
          <QuickPrompts onSelectPrompt={handlePromptSelect} />
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <form className="chat-input-area" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything about voting..."
          disabled={isTyping}
        />
        <button 
          type="submit" 
          className="btn-send" 
          disabled={!inputValue.trim() || isTyping}
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default ChatAssistant;
