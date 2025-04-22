'use client';  // Ensure you're using the client-side rendering approach
import { useState } from "react";  // Ensure useState is imported for handling flip state

export default function FlipCard({ card, deck }) {
  const [flipped, setFlipped] = useState(false);

  // Make sure the deck and card are valid
  if (!deck || !card) return null;  // Safety check

  return (
    <div
      className="w-56 h-72 perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d transition-transform ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div
          className={`absolute backface-hidden w-full h-full bg-gradient-to-br ${deck.colors.from} ${deck.colors.to} rounded-xl p-4 shadow-lg flex flex-col justify-center items-center`}
        >
          <div className="text-5xl">{deck.emoji}</div>
          <h1 className="font-bold text-2xl text-center text-gray-800">
            {card.question}
          </h1>
        </div>

        {/* Back */}
        <div
          className={`absolute backface-hidden rotate-y-180 w-full h-full bg-gradient-to-br ${deck.colors.from} ${deck.colors.to} rounded-xl p-4 shadow-lg flex items-center justify-center`}
        >
          <h1 className="text-xl text-gray-800">{card.answer || "..."}</h1>
        </div>
      </div>
    </div>
  );
}
