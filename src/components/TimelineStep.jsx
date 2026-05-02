/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import './TimelineStep.css';

const TimelineStep = ({ data }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [activeReadIndex, setActiveReadIndex] = useState(0);

  const handleStepClick = (index) => {
    if (index === activeReadIndex) {
      setActiveReadIndex(prev => prev + 1);
    }
  };

  const toggleCheck = (index) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="timeline-step glass-panel">
      <div className="step-explanation">
        <p>{data.simpleExplanation}</p>
      </div>

      <div className="step-details">
        <h3>How it works</h3>
        <ul className="details-list">
          {data.steps.map((step, index) => {
            const isRead = index < activeReadIndex;
            const isActive = index === activeReadIndex;
            const isLocked = index > activeReadIndex;

            return (
              <li 
                key={index}
                className={`detail-item ${isRead ? 'read' : ''} ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                onClick={() => handleStepClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleStepClick(index); }}
              >
                <span className="step-number">
                  {isRead ? <CheckCircle2 size={16} /> : index + 1}
                </span>
                <p style={{ margin: 0, flex: 1, color: isRead ? 'var(--text-muted)' : 'var(--text-main)' }}>{step}</p>
                {isActive && <span className="click-hint">Click to continue</span>}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="step-checklist">
        <h3>Your Checklist</h3>
        <ul className="checklist">
          {data.checklist.map((item, index) => {
            const isChecked = checkedItems[index];
            return (
              <li 
                key={index} 
                className={`checklist-item ${isChecked ? 'checked' : ''}`}
                onClick={() => toggleCheck(index)}
                style={{ cursor: 'pointer', opacity: isChecked ? 0.7 : 1 }}
                role="checkbox"
                aria-checked={isChecked}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCheck(index); } }}
              >
                {isChecked ? (
                  <CheckCircle2 size={18} className="icon-check" />
                ) : (
                  <Circle size={18} color="var(--text-muted)" className="icon-uncheck" />
                )}
                <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TimelineStep;
