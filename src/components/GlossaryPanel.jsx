import { useState } from 'react';
import { glossary } from '../data/glossary';
import { X, Search, BookA } from 'lucide-react';
import './GlossaryPanel.css';
import { useAppContext } from '../context/AppContext';

const GlossaryPanel = () => {
  const { showGlossary, setShowGlossary } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');

  if (!showGlossary) return null;

  const filteredGlossary = glossary.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="glossary-overlay animate-fade-in" onClick={() => setShowGlossary(false)}>
      <div className="glossary-panel animate-slide-in" onClick={e => e.stopPropagation()}>
        <div className="glossary-header">
          <div className="header-title">
            <BookA size={24} />
            <h2>Election Glossary</h2>
          </div>
          <button className="btn-close" onClick={() => setShowGlossary(false)} aria-label="Close glossary">
            <X size={24} />
          </button>
        </div>

        <div className="glossary-search">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search terms (e.g., Ballot)" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="glossary-list">
          {filteredGlossary.length > 0 ? (
            filteredGlossary.map((item, index) => (
              <div key={index} className="glossary-item">
                <h4>{item.term}</h4>
                <p>{item.definition}</p>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No terms found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlossaryPanel;
