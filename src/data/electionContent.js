export const electionContent = [
  {
    id: "registration",
    title: "Register to Vote",
    simpleExplanation: "Before you can vote, you must register. This adds your name to the official voter list.",
    steps: [
      "Check if you are eligible (age, citizenship).",
      "Fill out a registration form (online or by mail).",
      "Submit the form before the deadline."
    ],
    checklist: [
      "Verify eligibility",
      "Find registration deadline",
      "Submit application"
    ],
    quiz: {
      question: "What happens if you don't register before the deadline?",
      options: [
        "You can just show up and vote anyway.",
        "You usually cannot vote in that election.",
        "You have to pay a fine."
      ],
      correctAnswerIndex: 1,
      feedback: {
        correct: "Exactly! You must be on the voter list to cast a ballot in most places.",
        incorrect: "Not quite. In most places, if you aren't registered, you aren't allowed to vote. (Some states/regions allow same-day registration, but it's not guaranteed)."
      }
    }
  },
  {
    id: "campaign",
    title: "The Campaign Period",
    simpleExplanation: "Candidates explain their ideas and try to convince you to vote for them.",
    steps: [
      "Candidates hold rallies and debates.",
      "They run advertisements on TV and social media.",
      "Voters research the candidates to decide who to support."
    ],
    checklist: [
      "Find out who is running",
      "Research their policies",
      "Watch a debate or read a voter guide"
    ],
    quiz: {
      question: "What is the main goal of a political campaign?",
      options: [
        "To officially count the votes.",
        "To convince voters to support a candidate.",
        "To register people to vote."
      ],
      correctAnswerIndex: 1,
      feedback: {
        correct: "Right! Candidates use this time to share their vision and earn your vote.",
        incorrect: "Not exactly. The campaign is specifically about candidates trying to win your support before Election Day."
      }
    }
  },
  {
    id: "voting",
    title: "Voting Phase",
    simpleExplanation: "This is when you actually cast your ballot. You can often do this in person or by mail.",
    steps: [
      "Find your polling place or request a mail-in ballot.",
      "Bring necessary ID (if required in your area).",
      "Mark your choices privately on the ballot and submit it."
    ],
    checklist: [
      "Locate polling station",
      "Check ID requirements",
      "Cast your ballot"
    ],
    quiz: {
      question: "Can you tell other people who you voted for?",
      options: [
        "No, it is illegal.",
        "Yes, but you don't have to. Voting is private.",
        "Only if you vote by mail."
      ],
      correctAnswerIndex: 1,
      feedback: {
        correct: "Correct! Your vote is completely secret, but you are free to talk about it if you want to.",
        incorrect: "Actually, voting is private to protect you, but you have the right to tell people who you voted for if you choose to."
      }
    }
  },
  {
    id: "counting",
    title: "Counting & Results",
    simpleExplanation: "After voting ends, election officials carefully count every ballot to determine the winner.",
    steps: [
      "Polls close and voting stops.",
      "Officials count ballots securely.",
      "Results are certified and announced."
    ],
    checklist: [
      "Wait for polls to close",
      "Watch for official results",
      "Understand that counting takes time"
    ],
    quiz: {
      question: "Why might we not know the winner on Election Night?",
      options: [
        "Because officials take a break.",
        "Because counting mail-in ballots takes extra time.",
        "Because they wait for the candidates to agree."
      ],
      correctAnswerIndex: 1,
      feedback: {
        correct: "Yes! Many people vote by mail, and securely opening and counting those ballots takes time to get it right.",
        incorrect: "Not quite. The delay is usually because securely counting every single ballot (especially mail-in ones) is a careful, time-consuming process."
      }
    }
  }
];
