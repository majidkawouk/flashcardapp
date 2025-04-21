"use client";
import { useState } from "react";
import FlipCard from "./FlipCard"; // Make sure FlipCard component is correctly implemented/imported
import { decks as staticDecks } from "./decks"; // Import the decks array

export default function Cdeck() {
  const [selectedDeck, setSelectedDeck] = useState(null); // Track selected deck

  const handleDeckClick = (deck) => {
    if (selectedDeck?.id === deck.id) {
      setSelectedDeck(null); // Deselect
    } else {
      setSelectedDeck(deck); // Select
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-400">
      {!selectedDeck ? (
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full justify-center p-8">
          {staticDecks.map((deck) => (
            <div key={deck.id} className="relative group w-56 h-72 mx-auto">
              {/* Background accent card */}
              <div
                className={`absolute -top-1 -left-4 w-56 h-72 ${deck.colors.bg} rotate-[10deg] rounded-xl z-0 transition-all duration-500 ease-in-out group-hover:-top-3 group-hover:-left-6 group-hover:rotate-[15deg] opacity-80`}
              ></div>

              {/* Main card */}
              <div
                className={`relative w-full h-full bg-gradient-to-br ${deck.colors.from} ${deck.colors.to} rounded-xl p-4 shadow-lg hover:scale-105 transition-transform transform cursor-pointer z-10 flex flex-col`}
                onClick={() => handleDeckClick(deck)}
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
        <div className="p-8">
          <button
            className="text-blue-500 mb-6"
            onClick={() => setSelectedDeck(null)}
          >
            Back to all decks
          </button>
          <h2 className="text-3xl font-bold mb-4">{selectedDeck.title} Cards</h2>
          <div className="flex flex-wrap gap-4">
            {selectedDeck.cards.map((card, index) => (
              <FlipCard
                key={index}
                card={card}
                deck={{
                  emoji: selectedDeck.emoji,
                  colors: selectedDeck.colors,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
