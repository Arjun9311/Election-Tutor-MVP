import { AppProvider, useAppContext } from './context/AppContext';
import IntroScreen from './components/IntroScreen';
import GuidedTour from './components/GuidedTour';
import ExploreTimeline from './components/ExploreTimeline';
import GlossaryPanel from './components/GlossaryPanel';
import QuickHelpPanel from './components/QuickHelpPanel';
import FloatingActionButton from './components/FloatingActionButton';
import ChatAssistant from './components/ChatAssistant';
import { Vote } from 'lucide-react';
import './App.css';

const AppContent = () => {
  const { mode, setMode } = useAppContext();

  return (
    <div className="app-container">
      <header className="app-header glass-panel">
        <div className="logo" onClick={() => setMode('intro')} style={{ cursor: 'pointer' }}>
          <Vote size={28} className="logo-icon" />
          <span>Election Tutor</span>
        </div>
        <div className="header-actions">
          {/* Future: Region toggle will go here */}
        </div>
      </header>

      <main className="main-content container">
        {mode === 'intro' && <IntroScreen />}
        {mode === 'guided' && <GuidedTour />}
        {mode === 'explore' && <ExploreTimeline />}
      </main>

      <GlossaryPanel />
      <QuickHelpPanel />
      <ChatAssistant />
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
