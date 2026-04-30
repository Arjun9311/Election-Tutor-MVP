import { intents } from '../data/intents';

export const detectIntent = (userInput) => {
  if (!userInput || userInput.trim() === '') return null;
  
  const normalizedInput = userInput.toLowerCase().trim();
  
  // Simple heuristic: check if any keyword matches the input exactly or is contained within it
  for (const [intentKey, intentData] of Object.entries(intents)) {
    for (const keyword of intentData.keywords) {
      if (normalizedInput.includes(keyword.toLowerCase())) {
        return intentKey;
      }
    }
  }
  
  return null; // No intent matched
};
