import { useState } from 'react';
import { HelpCircle, AlertCircle, CheckCircle } from 'lucide-react';
import './QuizCard.css';

const QuizCard = ({ quiz, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(quiz);
  
  if (quiz !== currentQuiz) {
    setCurrentQuiz(quiz);
    setSelectedOption(null);
    setIsAnswered(false);
  }

  const handleOptionClick = (index) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    // Only mark step complete if they get it right
    if (index === quiz.correctAnswerIndex) {
      onComplete();
    }
  };

  const isCorrect = selectedOption === quiz.correctAnswerIndex;

  return (
    <div className="quiz-card glass-panel animate-slide-in">
      <div className="quiz-header">
        <HelpCircle size={20} className="icon-quiz" />
        <h3>Quick Check</h3>
      </div>
      
      <p className="quiz-question">{quiz.question}</p>
      
      <div className="quiz-options">
        {quiz.options.map((option, index) => {
          let className = "quiz-option";
          if (isAnswered) {
            if (index === quiz.correctAnswerIndex) className += " correct";
            else if (index === selectedOption) className += " incorrect";
            else className += " disabled";
          } else if (selectedOption === index) {
            className += " selected";
          }
          
          return (
            <button
              key={index}
              className={className}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
            >
              <div className="option-indicator">
                {String.fromCharCode(65 + index)}
              </div>
              <span className="option-text">{option}</span>
            </button>
          );
        })}
      </div>
      
      {isAnswered && (
        <div className={`quiz-feedback animate-fade-in ${isCorrect ? 'feedback-success' : 'feedback-error'}`}>
          <div className="feedback-icon">
            {isCorrect ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          </div>
          <p>{isCorrect ? quiz.feedback.correct : quiz.feedback.incorrect}</p>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
