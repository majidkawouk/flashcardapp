"use client";
import { useEffect, useState } from "react";
import FlipCard from "@/app/FlipCard"; // Make sure FlipCard component is imported

export default function Cdeck() {
  const [parsedDecks, setParsedDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(null); // Track selected deck

  const colorOptions = [
    { bg: "bg-blue-400", from: "from-blue-400", to: "to-blue-600" },
    { bg: "bg-green-400", from: "from-green-400", to: "to-green-600" },
    { bg: "bg-yellow-400", from: "from-yellow-400", to: "to-yellow-600" },
    { bg: "bg-red-400", from: "from-red-400", to: "to-red-600" },
    { bg: "bg-purple-400", from: "from-purple-400", to: "to-purple-600" },
    { bg: "bg-pink-400", from: "from-pink-400", to: "to-pink-600" },
    { bg: "bg-indigo-400", from: "from-indigo-400", to: "to-indigo-600" },
    { bg: "bg-teal-400", from: "from-teal-400", to: "to-teal-600" },
  ];

  useEffect(() => {
    const stored = localStorage.getItem("allDecks");
    if (stored) {
      try {
        const decks = JSON.parse(stored);
        const formatted = decks.map((deck, index) => {
          const randomColor =
            colorOptions[Math.floor(Math.random() * colorOptions.length)];
          return {
            id: index,
            emoji: deck.emojin || "📚",
            title: deck.deckn || "Untitled",
            cardCount: deck.questions?.length || 0,
            color: randomColor,
            questions: deck.questions || [],
            answers: deck.answers || [],
          };
        });
        setParsedDecks(formatted);
      } catch (error) {
        console.error("Error parsing decks:", error);
      }
    }
  }, []);

  const handleDeckClick = (deck) => {
    if (selectedDeck?.id === deck.id) {
      setSelectedDeck(null); // Deselect the deck if it's already selected
    } else {
      setSelectedDeck(deck); // Set the selected deck
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-400">
      {/* Check if a deck is selected */}
      {!selectedDeck ? (
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full justify-center p-8">
          {parsedDecks.map((deck) => (
            <div key={deck.id} className="relative group w-56 h-72 mx-auto">
              {/* Background accent card */}
              <div
                className={`absolute -top-1 -left-4 w-56 h-72 ${deck.color.bg} rotate-[10deg] rounded-xl z-0 transition-all duration-500 ease-in-out group-hover:-top-3 group-hover:-left-6 group-hover:rotate-[15deg] opacity-80`}
              ></div>

              {/* Main card */}
              <div
                className={`relative w-full h-full bg-gradient-to-br ${deck.color.from} ${deck.color.to} rounded-xl p-4 shadow-lg hover:scale-105 transition-transform transform cursor-pointer z-10 flex flex-col`}
                onClick={() => handleDeckClick(deck)} // Set the selected deck on click
              >
                <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded-lg shadow">
                  {deck.cardCount} cards
                </div>
                <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                  <div className="text-5xl">{deck.emoji}</div>
                  <h1 className="font-bold text-center text-gray-800">
                    {deck.title}
                  </h1>
                </div>
                <button className="py-2 bg-white/90 mt-auto px-6 rounded-md text-sm shadow hover:bg-white transition-colors">
                  Try Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Display selected deck's cards
        <div className="p-8">
          <button
            className="text-blue-500 mb-6"
            onClick={() => setSelectedDeck(null)} // Reset to show all decks
          >
            Back to all decks
          </button>
          <h2 className="text-3xl font-bold mb-4">
            {selectedDeck.title} Cards
          </h2>
          <div className="flex flex-wrap gap-4">
            {selectedDeck.questions.map((question, index) => (
              <FlipCard
                key={index}
                card={{ question, answer: selectedDeck.answers[index] }}
                deck={{ emoji: selectedDeck.emoji, colors: selectedDeck.color }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
