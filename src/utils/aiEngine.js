import { detectIntent } from './intentDetector';
import { intents } from '../data/intents';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

// Simulated delay to make the AI feel natural
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getFallbackResponse = async (userInput, context) => {
  if (!genAI) {
    return "I'm currently running in local offline mode, so I only know about core election topics (like voting steps, registration, and ballots). Could you try asking about one of those?\n\n(Note: Provide a VITE_GEMINI_API_KEY in your .env file to enable live AI responses!)";
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = `You are a friendly, neutral 'Election Tutor' AI assistant. Your goal is to help first-time voters understand the election process objectively. The user is currently on step: ${context.currentStep} and mode: ${context.mode}.
    
User Question: "${userInput}"

Please provide a concise, objective, and helpful answer.`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to my AI brain right now. Could you please try again later?";
  }
};

export const getAiResponse = async (userInput, context) => {
  // 1. Intent Detection
  const intentKey = detectIntent(userInput);

  // 2. Local Knowledge Match
  if (intentKey && intents[intentKey]) {
    // Simulate network/thinking time for local responses
    await delay(1000 + Math.random() * 1000);
    let response = intents[intentKey].response;
    
    // 3. Simple Context Injection (Example)
    // If the user asks about registration, and they are already ON the registration step,
    // we can tailor the response slightly.
    if (intentKey === 'how_to_vote' && context.currentStep === 2) {
      response = "You are currently on the Voting phase! As you're learning right now, the main steps are to find your polling station, bring your ID, and cast your ballot. Let's keep going!";
    }
    
    return response;
  }

  // 4. LLM Fallback (Live via Gemini)
  return await getFallbackResponse(userInput, context);
};
