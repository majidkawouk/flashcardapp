export const decks = [
  {   
    id: 1,
    title: "JavaScript Essentials",
    emoji: "⚡",
    cardCount: 3,
    colors: {
      bg: "bg-yellow-400",
      from: "from-yellow-200",
      to: "to-yellow-400",
      badge: "bg-yellow-500"
    },
    cards: [
      { question: "What does `var` mean?", answer: "It declares a variable (function scoped)." },
      { question: "What is a closure?", answer: "A function with access to its outer scope even after the outer function has closed." },
      { question: "What is `this` in JS?", answer: "`this` refers to the context in which a function is called." }
    ]
  },

  {
    id: 2,
    title: "English Basics",
    emoji: "📘",
    cardCount: 3,
    colors: {
      bg: "bg-blue-400",
      from: "from-blue-200",
      to: "to-blue-400",
      badge: "bg-blue-500"
    },
    cards: [
      { question: "What is a noun?", answer: "A word that names a person, place, thing, or idea." },
      { question: "What is a verb?", answer: "A word that expresses an action or state of being." },
      { question: "What is an adjective?", answer: "A word that describes a noun." }
    ]
  },

  {
    id: 3,
    title: "Spanish Basics",
    emoji: "🇪🇸",
    cardCount: 3,
    colors: {
      bg: "bg-red-400",
      from: "from-red-200",
      to: "to-red-400",
      badge: "bg-red-500"
    },
    cards: [
      { question: "How do you say 'hello' in Spanish?", answer: "Hola" },
      { question: "How do you say 'thank you' in Spanish?", answer: "Gracias" },
      { question: "What is 'cat' in Spanish?", answer: "Gato" }
    ]
  },

  {
    id: 4,
    title: "Animal World",
    emoji: "🐾",
    cardCount: 3,
    colors: {
      bg: "bg-green-400",
      from: "from-green-200",
      to: "to-green-400",
      badge: "bg-green-500"
    },
    cards: [
      { question: "What is the largest land animal?", answer: "African Elephant" },
      { question: "What animal is known for its black and white stripes?", answer: "Zebra" },
      { question: "Which bird can mimic human speech?", answer: "Parrot" }
    ]
  }
];
