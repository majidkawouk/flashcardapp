'use client'; 
import { useParams } from "next/navigation";  
import { useState } from "react";
import { decks } from "@/components/decks";  
import FlipCard from "@/components/FlipCard";  

export default function DeckPage() {
  const { id } = useParams();  
  const [flipped, setFlipped] = useState(false);

  // Find the deck by ID (convert id to an integer)
  const deck = decks.find((d) => d.id === parseInt(id));

  if (!deck) {
    return <div className="p-8 text-red-500">Deck not found</div>;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-600 p-8 justify-center">
      {deck.cards?.map((card, index) => (
        <FlipCard
          key={index}
          card={card}
          deck={deck}
        />
      ))}
    </div>
  );
}
