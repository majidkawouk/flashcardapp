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
        deck.questions.map((question, questionIndex) => (
          <div
            key={`${deckIndex}-${questionIndex}`}
            className="w-56 h-72 bg-white rounded-xl shadow-lg p-4 flex flex-col justify-center items-center text-center"
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${deck.colorn}, #ffffff)`,
            }}
          >
            <div className="text-4xl mb-2">{deck.emojin}</div>
            <p className="font-bold text-xl text-gray-800">Q{questionIndex + 1}</p>
            <p className="text-gray-700 mt-2">{question}</p>
          </div>
        ))
      )}
    </div>
  );
}
