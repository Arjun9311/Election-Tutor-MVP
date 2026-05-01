import { useAppContext } from '../context/AppContext';
import { PlayCircle, Compass, HelpCircle, BookA, Sparkles } from 'lucide-react';
import './IntroScreen.css';

const IntroScreen = () => {
  const { setMode, setShowGlossary, setShowQuickHelp } = useAppContext();

  return (
    <div className="intro-screen animate-fade-in">
      <div className="hero-section mesh-bg">
        <div className="hero-content">
          <div className="badge animate-float">
            <Sparkles size={16} />
            <span>Interactive Learning</span>
          </div>
          <h1 className="hero-title">
            Master the <span className="text-gradient">Election Cycle</span> in Minutes
          </h1>
          <p className="hero-subtitle">
            Navigate the democratic process with a simple, guided tour. 
            No jargon, just clear, actionable steps for every voter.
          </p>
          
          <div className="hero-actions">
            <button 
              className="btn-primary glow-on-hover"
              onClick={() => setMode('guided')}
            >
              <PlayCircle size={22} />
              Start Guided Tour
            </button>
            <button 
              className="btn-secondary"
              onClick={() => setMode('explore')}
            >
              Learn More
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="image-container animate-float">
            <img src="/voter_hero.png" alt="Voter Education Illustration" className="hero-image" />
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>

      <div className="quick-actions-grid">
        <button className="action-card glass-panel glow-on-hover" onClick={() => setMode('explore')}>
          <div className="icon-wrapper blue">
            <Compass size={28} />
          </div>
          <div className="action-info">
            <h3>Explore Timeline</h3>
            <p>Browse every milestone at your own pace</p>
          </div>
        </button>

        <button className="action-card glass-panel glow-on-hover" onClick={() => setShowGlossary(true)}>
          <div className="icon-wrapper purple">
            <BookA size={28} />
          </div>
          <div className="action-info">
            <h3>Voter Glossary</h3>
            <p>Political terms explained in plain English</p>
          </div>
        </button>

        <button className="action-card glass-panel glow-on-hover" onClick={() => setShowQuickHelp(true)}>
          <div className="icon-wrapper cyan">
            <HelpCircle size={28} />
          </div>
          <div className="action-info">
            <h3>Quick Help</h3>
            <p>Find instant answers to common questions</p>
          </div>
        </button>
      </div>
      
      <div className="disclaimer glass-panel">
        <p><strong>Educational Resource:</strong> This tool provides general information based on standard procedures. Always cross-reference with official election board websites for your specific region.</p>
      </div>
    </div>
  );
};

export default IntroScreen;
