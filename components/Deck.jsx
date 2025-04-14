"use client";
import { decks } from "./decks";

export default function Deck() {
  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-600 p-8 justify-center">
      {decks.map((deck) => (
        <div key={deck.id} className="relative group w-56 h-72 mx-auto">
          {/* Background accent card */}
          <div 
            className={`absolute -top-1 -left-4 w-56 h-72 ${deck.colors.bg} rotate-[10deg] rounded-xl z-0 transition-all duration-500 ease-in-out group-hover:-top-3 group-hover:-left-6 group-hover:rotate-[15deg] opacity-70`}
          ></div>

          {/* Main card */}
          <div 
            className={`relative w-full h-full bg-gradient-to-br ${deck.colors.from} ${deck.colors.to} rounded-xl p-4 shadow-lg hover:scale-105 transition-transform transform cursor-pointer z-10 flex flex-col`}
          >
            <div className={`absolute top-2 right-2 ${deck.colors.badge} text-white text-xs px-2 py-1 rounded-lg shadow`}>
              {deck.cardCount} cards
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-3">
              <div className="text-5xl">{deck.emoji}</div>
              <h1 className="font-bold text-center text-gray-800">{deck.title}</h1>
            </div>
            <button className="py-2 bg-white/90 mt-auto px-6 rounded-md text-sm shadow hover:bg-white transition-colors">
              Try Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}