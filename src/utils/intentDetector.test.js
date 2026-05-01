import { describe, it, expect } from 'vitest';
import { detectIntent } from './intentDetector';

describe('detectIntent', () => {
  it('returns null for empty or whitespace input', () => {
    expect(detectIntent('')).toBeNull();
    expect(detectIntent('   ')).toBeNull();
    expect(detectIntent(null)).toBeNull();
    expect(detectIntent(undefined)).toBeNull();
  });

  it('detects "how_to_vote" intent based on keywords', () => {
    expect(detectIntent('tell me how to vote please')).toBe('how_to_vote');
    expect(detectIntent('what are the voting steps')).toBe('how_to_vote');
  });

  it('detects "missed_registration" intent based on keywords', () => {
    expect(detectIntent('i missed registration what now')).toBe('missed_registration');
    expect(detectIntent('missed deadline')).toBe('missed_registration');
  });

  it('returns null for unrecognized inputs (fallback)', () => {
    expect(detectIntent('what is the meaning of life?')).toBeNull();
    expect(detectIntent('who will win the election')).toBeNull();
  });
});
