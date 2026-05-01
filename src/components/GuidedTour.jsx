import { useAppContext } from '../context/AppContext';
import { electionContent } from '../data/electionContent';
import TimelineStep from './TimelineStep';
import QuizCard from './QuizCard';
import ScenarioSimulator from './ScenarioSimulator';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './GuidedTour.css';

const GuidedTour = () => {
  const { currentStep, nextStep, prevStep, markStepComplete, setMode, setCurrentStep } = useAppContext();
  const stepData = electionContent[currentStep];
  const totalSteps = electionContent.length;

  const handleComplete = () => {
    markStepComplete(currentStep);
    if (currentStep === totalSteps - 1) {
      setMode('intro');
      setCurrentStep(0);
    } else {
      nextStep(totalSteps);
    }
  };

  return (
    <div className="guided-tour animate-fade-in">
      <div className="tour-header glass-panel">
        <div 
          className="progress-indicator"
          role="progressbar"
          aria-valuenow={currentStep + 1}
          aria-valuemin="1"
          aria-valuemax={totalSteps}
          aria-label="Tour Progress"
        >
          <span aria-hidden="true">Step {currentStep + 1} of {totalSteps}</span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              aria-current="step"
            ></div>
          </div>
        </div>
        <h2 className="tour-title">{stepData.title}</h2>
      </div>

      <div className="tour-content">
        <TimelineStep key={stepData.id} data={stepData} />
        
        <div className="interactive-section">
          <QuizCard quiz={stepData.quiz} onComplete={() => markStepComplete(currentStep)} />
          
          {/* We'll just show the first relevant scenario if available, or a generic one */}
          {currentStep === 0 && <ScenarioSimulator scenarioId="missed_registration" />}
          {currentStep === 2 && <ScenarioSimulator scenarioId="lost_id" />}
        </div>
      </div>

      <div className="tour-navigation glass-panel">
        <button 
          className="btn-nav" 
          onClick={prevStep} 
          disabled={currentStep === 0}
        >
          <ChevronLeft size={20} />
          Back
        </button>
        
        <button 
          className="btn-primary" 
          onClick={handleComplete}
        >
          {currentStep === totalSteps - 1 ? 'Finish Tour' : 'Continue'}
          {currentStep !== totalSteps - 1 && <ChevronRight size={20} />}
        </button>
      </div>
    </div>
  );
};

export default GuidedTour;
