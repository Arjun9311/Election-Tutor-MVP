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

  it('calls setShowGlossary(false) when overlay is clicked or Enter is pressed', () => {
    const setShowGlossaryMock = vi.fn();
    AppContextModule.useAppContext.mockReturnValue({ showGlossary: true, setShowGlossary: setShowGlossaryMock });
    render(<GlossaryPanel />);
    
    const overlay = screen.getByLabelText('Close glossary overlay');
    fireEvent.click(overlay);
    expect(setShowGlossaryMock).toHaveBeenCalledWith(false);

    fireEvent.keyDown(overlay, { key: 'Enter', code: 'Enter' });
    expect(setShowGlossaryMock).toHaveBeenCalledWith(false);
  });

  it('stops propagation when inner panel is clicked', () => {
    const setShowGlossaryMock = vi.fn();
    AppContextModule.useAppContext.mockReturnValue({ showGlossary: true, setShowGlossary: setShowGlossaryMock });
    render(<GlossaryPanel />);
    
    const overlay = screen.getByLabelText('Close glossary overlay');
    // The panel is the first child of the overlay
    const panel = overlay.firstChild;
    fireEvent.click(panel);
    
    // setShowGlossary should not be called because propagation is stopped
    expect(setShowGlossaryMock).not.toHaveBeenCalled();
  });
});

