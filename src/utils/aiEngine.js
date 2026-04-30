import { detectIntent } from './intentDetector';
import { intents } from '../data/intents';

// Simulated delay to make the AI feel natural
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getFallbackResponse = () => {
  return "I'm currently running in local offline mode, so I only know about core election topics (like voting steps, registration, and ballots). Could you try asking about one of those?\n\n(Note: In the future, this is where the AI will connect to a live LLM like Gemini for custom answers!)";
};

export const getAiResponse = async (userInput, context) => {
  // Simulate network/thinking time
  await delay(1000 + Math.random() * 1000);

  // 1. Intent Detection
  const intentKey = detectIntent(userInput);

  // 2. Local Knowledge Match
  if (intentKey && intents[intentKey]) {
    let response = intents[intentKey].response;
    
    // 3. Simple Context Injection (Example)
    // If the user asks about registration, and they are already ON the registration step,
    // we can tailor the response slightly.
    if (intentKey === 'how_to_vote' && context.currentStep === 2) {
      response = "You are currently on the Voting phase! As you're learning right now, the main steps are to find your polling station, bring your ID, and cast your ballot. Let's keep going!";
    }
    
    return response;
  }

  // 4. LLM Fallback (Mocked for MVP)
  return getFallbackResponse(context);
};
