import React, { Suspense } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { signInWithGoogle, logout } from './config/firebase';
import IntroScreen from './components/IntroScreen';
import GuidedTour from './components/GuidedTour';
import ExploreTimeline from './components/ExploreTimeline';
import FloatingActionButton from './components/FloatingActionButton';
import { Vote, LogIn, LogOut } from 'lucide-react';
import './App.css';

// Lazy loaded components
const GlossaryPanel = React.lazy(() => import('./components/GlossaryPanel'));
const QuickHelpPanel = React.lazy(() => import('./components/QuickHelpPanel'));
const ChatAssistant = React.lazy(() => import('./components/ChatAssistant'));

const AppContent = () => {
  const { mode, setMode, user, authLoading } = useAppContext();

  return (
    <div className="app-container">
      <header className="app-header glass-panel">
        <div 
          className="logo" 
          onClick={() => setMode('intro')} 
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setMode('intro'); }}
          aria-label="Go to Intro Screen"
          style={{ cursor: 'pointer' }}
        >
          <Vote size={28} className="logo-icon" aria-hidden="true" />
          <span>Election Tutor</span>
        </div>
        <div className="header-actions">
          {!authLoading && user ? (
            <button className="btn-secondary btn-small" onClick={logout}>
              <LogOut size={16} />
              Sign Out
            </button>
          ) : !authLoading ? (
            <button className="btn-primary btn-small" onClick={signInWithGoogle}>
              <LogIn size={16} />
              Sign In
            </button>
          ) : null}
        </div>
      </header>

      <main className="main-content container">

        {mode === 'intro' && <IntroScreen />}
        {mode === 'guided' && <GuidedTour />}
        {mode === 'explore' && <ExploreTimeline />}
      </main>

      <Suspense fallback={null}>
        <GlossaryPanel />
        <QuickHelpPanel />
        <ChatAssistant />
      </Suspense>
      <FloatingActionButton />
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};


export default App;
