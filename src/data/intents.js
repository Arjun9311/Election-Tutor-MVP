export const intents = {
  "how_to_vote": {
    keywords: ["how to vote", "voting steps", "cast vote", "cast a ballot"],
    response: "Voting is simple! Here are the general steps:\n\n1. Make sure you are registered to vote.\n2. Find your local polling station or request a mail-in ballot.\n3. Bring a valid ID (if your region requires it).\n4. Mark your choices on the ballot and submit it securely.\n\nWould you like me to test you on this, or explain how registration works?"
  },
  "missed_registration": {
    keywords: ["missed deadline", "late registration", "missed registration", "forgot to register"],
    response: "Don't panic! Some regions allow 'Same-Day Registration', which means you can register and vote on Election Day at your polling place.\n\nIf your area doesn't allow this, you unfortunately cannot vote in this specific election, but you should register now so you are ready for the next one."
  },
  "definition_ballot": {
    keywords: ["what is ballot", "what is a ballot", "define ballot"],
    response: "A ballot is simply the paper form or digital screen where you mark your choices for an election. Once you submit it, your vote is officially recorded."
  },
  "where_to_vote": {
    keywords: ["polling station", "where do i vote", "where to vote", "voting location"],
    response: "You vote at a specific 'polling station' assigned to your home address. You can usually find this exact location by visiting your local government's official election website and entering your address."
  },
  "lost_id": {
    keywords: ["lost id", "no id", "lost my id"],
    response: "Many places accept alternative forms of ID, like a utility bill, bank statement, or passport. In some areas, you can even sign a sworn statement (affidavit) to confirm your identity. Check your local election website for 'acceptable forms of ID'."
  },
  "explain_elections": {
    keywords: ["explain elections", "how do elections work", "election basics"],
    response: "Think of an election as a timeline:\n\n1. **Registration:** People sign up to vote.\n2. **Campaign:** Candidates share their ideas.\n3. **Voting:** People cast their secret ballots.\n4. **Counting:** Officials tally the votes to find the winner.\n\nWould you like to start the Guided Tour to walk through this step-by-step?"
  },
  "greeting": {
    keywords: ["hi", "hello", "hey", "help", "start"],
    response: "Hello! I am your Election Tutor AI. I can explain election concepts simply, guide you through the voting process, or answer questions like 'What is a ballot?' or 'How do I vote?'. How can I help you today?"
  }
};
