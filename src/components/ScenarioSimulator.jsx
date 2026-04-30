import { useState } from 'react';
import { scenarios } from '../data/scenarios';
import { Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import './ScenarioSimulator.css';

const ScenarioSimulator = ({ scenarioId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scenario = scenarios.find(s => s.id === scenarioId);

  if (!scenario) return null;

  return (
    <div className="scenario-simulator glass-panel animate-slide-in" style={{ animationDelay: '0.1s' }}>
      <button 
        className="scenario-header" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="scenario-title">
          <div className="icon-wrapper">
            <Lightbulb size={18} />
          </div>
          <h3>What if... {scenario.title}</h3>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className="scenario-content animate-fade-in">
          <div className="scenario-problem">
            <strong>Situation:</strong>
            <p>{scenario.problem}</p>
          </div>
          <div className="scenario-solution">
            <strong>Solution:</strong>
            <p>{scenario.solution}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenarioSimulator;
