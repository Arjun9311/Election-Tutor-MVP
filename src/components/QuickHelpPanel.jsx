import { useState } from 'react';
import { scenarios } from '../data/scenarios';
import { X, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './QuickHelpPanel.css';
import { useAppContext } from '../context/AppContext';

const QuickHelpPanel = () => {
  const { showQuickHelp, setShowQuickHelp } = useAppContext();
  const [openScenario, setOpenScenario] = useState(null);

  if (!showQuickHelp) return null;

  const toggleScenario = (id) => {
    setOpenScenario(openScenario === id ? null : id);
  };

  return (
    <div className="quickhelp-overlay animate-fade-in" onClick={() => setShowQuickHelp(false)}>
      <div className="quickhelp-panel animate-slide-in" onClick={e => e.stopPropagation()}>
        <div className="quickhelp-header">
          <div className="header-title">
            <HelpCircle size={24} />
            <h2>Quick Help</h2>
          </div>
          <button className="btn-close" onClick={() => setShowQuickHelp(false)} aria-label="Close help">
            <X size={24} />
          </button>
        </div>

        <div className="quickhelp-content">
          <p className="quickhelp-intro">Select a scenario below to find a quick solution.</p>
          
          <div className="quickhelp-list">
            {scenarios.map((scenario) => {
              const isOpen = openScenario === scenario.id;
              
              return (
                <div key={scenario.id} className={`quickhelp-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="quickhelp-item-header" 
                    onClick={() => toggleScenario(scenario.id)}
                    aria-expanded={isOpen}
                  >
                    <h4>{scenario.title}</h4>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  
                  {isOpen && (
                    <div className="quickhelp-item-body animate-fade-in">
                      <div className="quickhelp-problem">
                        <strong>Situation:</strong>
                        <p>{scenario.problem}</p>
                      </div>
                      <div className="quickhelp-solution">
                        <strong>Solution:</strong>
                        <p>{scenario.solution}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickHelpPanel;
