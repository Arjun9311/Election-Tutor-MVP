import { useAppContext } from '../context/AppContext';
import { electionContent } from '../data/electionContent';
import { ArrowLeft } from 'lucide-react';
import './ExploreTimeline.css';

const ExploreTimeline = () => {
  const { setMode } = useAppContext();

  return (
    <div className="explore-timeline animate-fade-in">
      <div className="explore-header">
        <button className="btn-back" onClick={() => setMode('intro')}>
          <ArrowLeft size={20} />
          Back to Start
        </button>
        <h2>The Election Process</h2>
        <p>Explore the steps at your own pace.</p>
      </div>

      <div className="timeline-container">
        {electionContent.map((step, index) => (
          <div key={step.id} className="timeline-card glass-panel">
            <div className="card-number">{index + 1}</div>
            <div className="card-content">
              <h3>{step.title}</h3>
              <p>{step.simpleExplanation}</p>
              
              <ul className="simple-list">
                {step.steps.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreTimeline;
