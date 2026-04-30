import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [mode, setMode] = useState('intro'); // 'intro', 'guided', 'explore'
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showGlossary, setShowGlossary] = useState(false);
  const [showQuickHelp, setShowQuickHelp] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [region, setRegion] = useState('generic'); // 'generic' or 'india'

  const markStepComplete = (stepIndex) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  const nextStep = (totalSteps) => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const value = {
    currentStep,
    setCurrentStep,
    mode,
    setMode,
    completedSteps,
    markStepComplete,
    showGlossary,
    setShowGlossary,
    showQuickHelp,
    setShowQuickHelp,
    isChatOpen,
    setIsChatOpen,
    region,
    setRegion,
    nextStep,
    prevStep
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
