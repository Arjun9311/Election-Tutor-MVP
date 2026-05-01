import { createContext, useState, useContext, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [mode, setMode] = useState('intro'); // 'intro', 'guided', 'explore'
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showGlossary, setShowGlossary] = useState(false);
  const [showQuickHelp, setShowQuickHelp] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [region, setRegion] = useState('generic'); // 'generic' or 'india'
  
  // Auth state
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    if (!auth) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAuthLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser && db) {
        // Fetch user progress from Firestore
        const userRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setCompletedSteps(docSnap.data().completedSteps || []);
        }
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const markStepComplete = async (stepIndex) => {
    const newSteps = [...completedSteps];
    if (!newSteps.includes(stepIndex)) {
      newSteps.push(stepIndex);
      setCompletedSteps(newSteps);
      
      // Sync to Firestore if logged in
      if (user && db) {
        const userRef = doc(db, 'users', user.uid);
        try {
          await setDoc(userRef, { completedSteps: newSteps }, { merge: true });
        } catch (error) {
          console.error("Error saving progress:", error);
        }
      }
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
    prevStep,
    user,
    authLoading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
