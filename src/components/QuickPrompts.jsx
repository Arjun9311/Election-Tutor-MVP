import './QuickPrompts.css';

const prompts = [
  "How do I vote?",
  "Explain elections simply",
  "I missed registration",
  "What is a ballot?"
];

const QuickPrompts = ({ onSelectPrompt }) => {
  return (
    <div className="quick-prompts">
      <p className="quick-prompts-title">Suggested questions:</p>
      <div className="prompts-grid">
        {prompts.map((prompt, index) => (
          <button 
            key={index} 
            className="prompt-chip"
            onClick={() => onSelectPrompt(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickPrompts;
