// @vitest-environment jsdom
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import GlossaryPanel from './GlossaryPanel';
import * as AppContextModule from '../context/AppContext';

// Mock the context module
vi.mock('../context/AppContext', () => ({
  useAppContext: vi.fn(),
}));

describe('GlossaryPanel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('does not render when showGlossary is false', () => {
    AppContextModule.useAppContext.mockReturnValue({ showGlossary: false, setShowGlossary: vi.fn() });
    render(<GlossaryPanel />);
    expect(screen.queryByText('Election Glossary')).not.toBeInTheDocument();
  });

  it('renders correctly when showGlossary is true', () => {
    AppContextModule.useAppContext.mockReturnValue({ showGlossary: true, setShowGlossary: vi.fn() });
    render(<GlossaryPanel />);
    expect(screen.getByText('Election Glossary')).toBeInTheDocument();
  });

  it('filters terms based on search input', () => {
    AppContextModule.useAppContext.mockReturnValue({ showGlossary: true, setShowGlossary: vi.fn() });
    render(<GlossaryPanel />);
    
    const searchInput = screen.getByPlaceholderText(/Search terms/i);
    fireEvent.change(searchInput, { target: { value: 'Ballot' } });
    
    expect(screen.getByText('Ballot')).toBeInTheDocument();
    expect(screen.queryByText('Campaign')).not.toBeInTheDocument();
  });

  it('shows no results message when no terms match', () => {
    AppContextModule.useAppContext.mockReturnValue({ showGlossary: true, setShowGlossary: vi.fn() });
    render(<GlossaryPanel />);
    
    const searchInput = screen.getByPlaceholderText(/Search terms/i);
    fireEvent.change(searchInput, { target: { value: 'xyz123nonexistent' } });
    
    expect(screen.getByText(/No terms found matching/i)).toBeInTheDocument();
  });
});

