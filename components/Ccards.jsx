"use client";

import { useEffect, useState } from "react";
import FlipCard from "./FlipCard";


export default function Cards2({ params }) {
  const { deckname } = params;
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("allDecks");
    if (stored) {
      const decks = JSON.parse(stored);
      const match = decks.find(d => d.deckn === decodeURIComponent(deckname));
      if (match) {
        const formatted = {
          emoji: match.emojin,
          name: match.deckn,
          colors: {
            from: "from-gray-200", // Default colors (can update)
            to: "to-gray-400",
          },
          cards: match.questions.map((q, i) => ({
            question: q,
            answer: match.answers[i] || "...",
          })),
        };
        setDeck(formatted);
      }
    }
  }, [deckname]);

  if (!deck) return <p className="p-6">Deck not found.</p>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        {deck.emoji} {deck.name}
      </h1>
      <div className="flex flex-wrap gap-4">
        {deck.cards.map((card, i) => (
          <FlipCard key={i} card={card} deck={deck} />
        ))}
      </div>
    </div>
  );
}