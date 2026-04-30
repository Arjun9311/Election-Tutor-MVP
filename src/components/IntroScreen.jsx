import { useAppContext } from '../context/AppContext';
import { PlayCircle, Compass, HelpCircle, BookA } from 'lucide-react';
import './IntroScreen.css';

const IntroScreen = () => {
  const { setMode, setShowGlossary, setShowQuickHelp } = useAppContext();

  return (
    <div className="intro-screen animate-fade-in">
      <div className="hero-section">
        <h1>Understand Elections in 5 Minutes</h1>
        <p className="subtitle">A simple, guided tour through the democratic process. No jargon, just clear steps.</p>
        
        <button 
          className="btn-start-tour"
          onClick={() => setMode('guided')}
        >
          <PlayCircle size={24} />
          Start Guided Tour
        </button>
      </div>

      <div className="quick-actions-grid">
        <button className="action-card" onClick={() => setMode('explore')}>
          <div className="icon-wrapper blue">
            <Compass size={24} />
          </div>
          <h3>Explore Timeline</h3>
          <p>Browse the steps at your own pace</p>
        </button>

        <button className="action-card" onClick={() => setShowGlossary(true)}>
          <div className="icon-wrapper green">
            <BookA size={24} />
          </div>
          <h3>Election Glossary</h3>
          <p>Confused by a term? Look it up here</p>
        </button>

        <button className="action-card" onClick={() => setShowQuickHelp(true)}>
          <div className="icon-wrapper orange">
            <HelpCircle size={24} />
          </div>
          <h3>Quick Help</h3>
          <p>Find answers to common scenarios</p>
        </button>
      </div>
      
      <div className="disclaimer">
        <p><strong>Note:</strong> Election Tutor provides general educational information. Always verify details using official election websites.</p>
      </div>
    </div>
  );
};

export default IntroScreen;
