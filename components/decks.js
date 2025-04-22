export const decks = [
  {
    id: 1,
    title: "JavaScript Essentials",
    emoji: "⚡",
    cardCount: 10,
    colors: {
      bg: "bg-yellow-400",
      from: "from-yellow-200",
      to: "to-yellow-400",
      badge: "bg-yellow-500"
    },
    cards: [
      { question: "What does `var` mean?", answer: "It declares a variable (function scoped)." },
      { question: "What is a closure?", answer: "A function with access to its outer scope even after the outer function has closed." },
      { question: "What is `this` in JS?", answer: "`this` refers to the context in which a function is called." },
      { question: "Difference between `let` and `var`?", answer: "`let` is block scoped, `var` is function scoped." },
      { question: "What is `undefined`?", answer: "A variable declared but not assigned a value." },
      { question: "What is `NaN`?", answer: "Not a Number — result of an invalid number operation." },
      { question: "What does `===` mean?", answer: "Strict equality — checks value and type." },
      { question: "What is hoisting?", answer: "Variables and functions are moved to the top of scope." },
      { question: "What is an arrow function?", answer: "A shorter syntax for writing functions using `=>`." },
      { question: "How do you create an object?", answer: "Using `{ key: value }` syntax." }
    ]
  },

  {
    id: 2,
    title: "English Basics",
    emoji: "📘",
    cardCount: 10,
    colors: {
      bg: "bg-blue-400",
      from: "from-blue-200",
      to: "to-blue-400",
      badge: "bg-blue-500"
    },
    cards: [
      { question: "What is a noun?", answer: "A word that names a person, place, thing, or idea." },
      { question: "What is a verb?", answer: "A word that expresses an action or state of being." },
      { question: "What is an adjective?", answer: "A word that describes a noun." },
      { question: "What is an adverb?", answer: "A word that modifies a verb, adjective, or another adverb." },
      { question: "What is a preposition?", answer: "A word showing relationship between a noun/pronoun and other words." },
      { question: "What is a pronoun?", answer: "A word that takes the place of a noun." },
      { question: "What is a conjunction?", answer: "A word used to connect clauses or sentences." },
      { question: "What is an interjection?", answer: "A word used to express emotion." },
      { question: "What is a subject?", answer: "The doer of the action in a sentence." },
      { question: "What is an object?", answer: "The receiver of the action in a sentence." }
    ]
  },

  {
    id: 3,
    title: "Spanish Basics",
    emoji: "🇪🇸",
    cardCount: 10,
    colors: {
      bg: "bg-red-400",
      from: "from-red-200",
      to: "to-red-400",
      badge: "bg-red-500"
    },
    cards: [
      { question: "How do you say 'hello' in Spanish?", answer: "Hola" },
      { question: "How do you say 'thank you' in Spanish?", answer: "Gracias" },
      { question: "What is 'cat' in Spanish?", answer: "Gato" },
      { question: "What is 'dog' in Spanish?", answer: "Perro" },
      { question: "How do you say 'goodbye' in Spanish?", answer: "Adiós" },
      { question: "What is 'please' in Spanish?", answer: "Por favor" },
      { question: "How do you say 'yes' in Spanish?", answer: "Sí" },
      { question: "How do you say 'no' in Spanish?", answer: "No" },
      { question: "What is 'house' in Spanish?", answer: "Casa" },
      { question: "What is 'water' in Spanish?", answer: "Agua" }
    ]
  },

  {
    id: 4,
    title: "Animal World",
    emoji: "🐾",
    cardCount: 10,
    colors: {
      bg: "bg-green-400",
      from: "from-green-200",
      to: "to-green-400",
      badge: "bg-green-500"
    },
    cards: [
      { question: "What is the largest land animal?", answer: "African Elephant" },
      { question: "What animal has black and white stripes?", answer: "Zebra" },
      { question: "Which bird mimics human speech?", answer: "Parrot" },
      { question: "What is the fastest land animal?", answer: "Cheetah" },
      { question: "What animal lives the longest?", answer: "Greenland Shark" },
      { question: "What mammal lays eggs?", answer: "Platypus" },
      { question: "What is a baby kangaroo called?", answer: "Joey" },
      { question: "What is the largest bird?", answer: "Ostrich" },
      { question: "What animal can regrow limbs?", answer: "Axolotl" },
      { question: "Which animal sleeps standing up?", answer: "Horse" }
    ]
  },

  {
    id: 5,
    title: "Arabic Basics",
    emoji: "🕌",
    cardCount: 10,
    colors: {
      bg: "bg-purple-400",
      from: "from-purple-200",
      to: "to-purple-400",
      badge: "bg-purple-500"
    },
    cards: [
      { question: "How do you say 'hello' in Arabic?", answer: "Marhaban (مرحباً)" },
      { question: "What is 'thank you' in Arabic?", answer: "Shukran (شكراً)" },
      { question: "How do you say 'yes' in Arabic?", answer: "Na'am (نعم)" },
      { question: "How do you say 'no' in Arabic?", answer: "La (لا)" },
      { question: "What is 'book' in Arabic?", answer: "Kitab (كتاب)" },
      { question: "What is 'water' in Arabic?", answer: "Ma'a (ماء)" },
      { question: "What is 'house' in Arabic?", answer: "Bayt (بيت)" },
      { question: "What is 'food' in Arabic?", answer: "Ta'am (طعام)" },
      { question: "What is 'friend' in Arabic?", answer: "Sadiq (صديق)" },
      { question: "What is 'goodbye' in Arabic?", answer: "Ma'a as-salama (مع السلامة)" }
    ]
  },

  {
    id: 6,
    title: "Cooking",
    emoji: "🍳",
    cardCount: 10,
    colors: {
      bg: "bg-orange-400",
      from: "from-orange-200",
      to: "to-orange-400",
      badge: "bg-orange-500"
    },
    cards: [
      { question: "What does 'sauté' mean?", answer: "To cook quickly in a small amount of oil." },
      { question: "What is 'al dente'?", answer: "Pasta that is cooked firm to the bite." },
      { question: "What is the boiling point of water?", answer: "100°C or 212°F" },
      { question: "What is a roux?", answer: "A mixture of flour and fat used to thicken sauces." },
      { question: "What is 'julienne'?", answer: "To cut into thin matchstick-like strips." },
      { question: "What is 'bake'?", answer: "Cooking food with dry heat in an oven." },
      { question: "What is 'broil'?", answer: "To cook food with direct heat from above." },
      { question: "What is 'poach'?", answer: "To cook gently in simmering liquid." },
      { question: "What is the main ingredient in guacamole?", answer: "Avocado" },
      { question: "What is 'whisking'?", answer: "Beating ingredients to incorporate air." }
    ]
  },

  {
    id: 7,
    title: "Math Fundamentals",
    emoji: "➗",
    cardCount: 10,
    colors: {
      bg: "bg-indigo-400",
      from: "from-indigo-200",
      to: "to-indigo-400",
      badge: "bg-indigo-500"
    },
    cards: [
      { question: "What is 7 + 5?", answer: "12" },
      { question: "What is 9 x 3?", answer: "27" },
      { question: "What is 15 ÷ 3?", answer: "5" },
      { question: "What is 10²?", answer: "100" },
      { question: "What is the square root of 64?", answer: "8" },
      { question: "What is π (pi) approximately?", answer: "3.14" },
      { question: "What is 25% of 200?", answer: "50" },
      { question: "What is the perimeter of a square with side 4?", answer: "16" },
      { question: "What is 5 factorial (5!)?", answer: "120" },
      { question: "What is an even number?", answer: "A number divisible by 2" }
    ]
  },

  {
    id: 8,
    title: "Science Facts",
    emoji: "🔬",
    cardCount: 10,
    colors: {
      bg: "bg-teal-400",
      from: "from-teal-200",
      to: "to-teal-400",
      badge: "bg-teal-500"
    },
    cards: [
      { question: "What planet is closest to the sun?", answer: "Mercury" },
      { question: "What is H₂O?", answer: "Water" },
      { question: "What gas do plants breathe in?", answer: "Carbon dioxide" },
      { question: "What part of the body pumps blood?", answer: "Heart" },
      { question: "What force keeps us on Earth?", answer: "Gravity" },
      { question: "What is the boiling point of water in Celsius?", answer: "100°C" },
      { question: "What does DNA stand for?", answer: "Deoxyribonucleic Acid" },
      { question: "How many planets are in our solar system?", answer: "8" },
      { question: "What is the center of an atom called?", answer: "Nucleus" },
      { question: "What is a meteorite?", answer: "A meteoroid that hits Earth's surface" }
    ]
  },

  {
    id: 9,
    title: "World Capitals",
    emoji: "🌍",
    cardCount: 10,
    colors: {
      bg: "bg-cyan-400",
      from: "from-cyan-200",
      to: "to-cyan-400",
      badge: "bg-cyan-500"
    },
    cards: [
      { question: "Capital of France?", answer: "Paris" },
      { question: "Capital of Japan?", answer: "Tokyo" },
      { question: "Capital of Brazil?", answer: "Brasília" },
      { question: "Capital of Canada?", answer: "Ottawa" },
      { question: "Capital of Australia?", answer: "Canberra" },
      { question: "Capital of Egypt?", answer: "Cairo" },
      { question: "Capital of South Korea?", answer: "Seoul" },
      { question: "Capital of India?", answer: "New Delhi" },
      { question: "Capital of Germany?", answer: "Berlin" },
      { question: "Capital of Mexico?", answer: "Mexico City" }
    ]
  },

  {
    id: 10,
    title: "Tech Terms",
    emoji: "💻",
    cardCount: 10,
    colors: {
      bg: "bg-gray-400",
      from: "from-gray-200",
      to: "to-gray-400",
      badge: "bg-gray-500"
    },
    cards: [
      { question: "What does CPU stand for?", answer: "Central Processing Unit" },
      { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
      { question: "What is RAM?", answer: "Random Access Memory" },
      { question: "What does CSS do?", answer: "Styles the layout of web pages" },
      { question: "What is a URL?", answer: "Uniform Resource Locator" },
      { question: "What is Git?", answer: "Version control system" },
      { question: "What is an API?", answer: "Application Programming Interface" },
      { question: "What is a bug?", answer: "An error in a program" },
      { question: "What is an algorithm?", answer: "A step-by-step solution" },
      { question: "What is JavaScript?", answer: "A scripting language for the web" }
    ]
  }
];
