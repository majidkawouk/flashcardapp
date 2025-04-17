"use client";
import { useEffect, useState } from "react";

export default function Cdeck() {
  const [parsedDecks, setParsedDecks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("allDecks");
    if (stored) {
      setParsedDecks(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-600 p-8 justify-center">
      {parsedDecks.map((deck, deckIndex) =>
        deck.questions.map((question, questionIndex) => {
          const card = {
            question,
            answer: deck.answers[questionIndex],
          };
          return (
            <FlipCard
              key={`${deckIndex}-${questionIndex}`}
              card={card}
              deck={deck}
            />
          );
        })
      )}
    </div>
  );
}

function FlipCard({ card, deck }) {
  const [flipped, setFlipped] = useState(false);
  const backgroundColor = deck.colorn || "#eee";

  return (
    <div className="perspective w-56 h-72" onClick={() => setFlipped(!flipped)}>
      <div
        className={`relative w-full h-full duration-700 transition-transform transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div
          className="absolute backface-hidden w-full h-full rounded-xl p-4 shadow-lg flex flex-col justify-center items-center"
          style={{ backgroundColor }}
        >
          <div className="text-5xl">{deck.emojin}</div>
          <h1 className="font-bold text-2xl text-center text-gray-800">
            {card.question}
          </h1>
        </div>

        {/* Back Side - already rotated 180 degrees */}
        <div
          className="absolute backface-hidden rotate-y-180 w-full h-full rounded-xl p-4 shadow-lg flex items-center justify-center"
          style={{ backgroundColor }}
        >
          <h1 className="text-xl text-gray-800">{card.answer || "..."}</h1>
        </div>
      </div>
    </div>
  );
}