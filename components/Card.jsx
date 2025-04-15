'use client'
import { decks } from "./decks";
import { useState } from "react";

export default function Card() {
  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-600 p-8 justify-center">
      {decks.map((deck) =>
        deck.cards?.map((card, index) => (
          <FlipCard
            key={`${deck.id}-${index}`}
            card={card}
            deck={deck}
          />
        ))
      )}
    </div>
  );
}

function FlipCard({ card, deck }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-56 h-72 perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`relative w-full h-full duration-700 transform-style-preserve-3d transition-transform ${flipped ? "rotate-y-180" : ""}`}>
        
        {/* Front Side */}
        <div className={`absolute backface-hidden w-full h-full bg-gradient-to-br ${deck.colors.from} ${deck.colors.to} rounded-xl p-4 shadow-lg flex flex-col justify-center items-center`}>
          <div className="text-5xl">{deck.emoji}</div>
          <h1 className="font-bold text-2xl text-center text-gray-800">
            {card.question}
          </h1>
        </div>

        {/* Back Side */}
        <div className={`absolute backface-hidden rotate-y-180 w-full h-full bg-gradient-to-br ${deck.colors.from} ${deck.colors.to} rounded-xl p-4 shadow-lg flex items-center justify-center`}>
          <h1 className="text-xl text-gray-800">{card.answer || "hiiiii"}</h1>
        </div>
      </div>
    </div>
  );
}
