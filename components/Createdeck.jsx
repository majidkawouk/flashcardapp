"use client";
import { useEffect, useState } from "react";

export default function DecksPage() {
  const [deckname, setdeckname] = useState("");
  const [color, setcolor] = useState("");
  const [emoji, setemoji] = useState("");
  const [cardnumber, setcardnumber] = useState("");
  const [cards, setCards] = useState([]);
  const [allDecks, setAllDecks] = useState([]);

  useEffect(() => {
    const num = parseInt(cardnumber);
    if (!isNaN(num) && num > 0) {
      const newCards = Array.from({ length: num }, (_, i) => ({
        question: cards[i]?.question || "",
        answer: cards[i]?.answer || "",
      }));
      setCards(newCards);
    }
  }, [cardnumber]);

  useEffect(() => {
    const stored = localStorage.getItem("allDecks");
    if (stored) {
      setAllDecks(JSON.parse(stored));
    }
  }, []);

  const handleCardChange = (index, field, value) => {
    const updated = [...cards];
    updated[index][field] = value;
    setCards(updated);
  };

  const handleSaveDeck = (e) => {
    e.preventDefault();
    const newDeck = {
      deckn: deckname,
      colorn: color,
      emojin: emoji,
      cardnumbern: cardnumber,
      questions: cards.map((c) => c.question),
      answers: cards.map((c) => c.answer),
    };

    const updatedDecks = [...allDecks, newDeck];
    setAllDecks(updatedDecks);
    localStorage.setItem("allDecks", JSON.stringify(updatedDecks));

    setdeckname("");
    setcolor("");
    setemoji("");
    setcardnumber("");
    setCards([]);
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-200 min-h-screen py-10 px-4 flex justify-center">
      <form
        onSubmit={handleSaveDeck}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Create a New Deck</h2>

        <div className="space-y-2">
          <label className="block font-semibold">Deck Name</label>
          <input
            value={deckname}
            onChange={(e) => setdeckname(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block font-semibold">Emoji</label>
          <input
            value={emoji}
            onChange={(e) => setemoji(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block font-semibold">Color</label>
          <input
            value={color}
            onChange={(e) => setcolor(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
           
          />
        </div>

        <div className="space-y-2">
          <label className="block font-semibold">Number of Cards</label>
          <input
            type="number"
            value={cardnumber}
            onChange={(e) => setcardnumber(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {cards.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Cards</h3>
            {cards.map((card, index) => (
              <div key={index} className="space-y-2 border p-4 rounded-lg bg-gray-50">
                <div>
                  <label className="block font-semibold">Question {index + 1}</label>
                  <input
                    value={card.question}
                    onChange={(e) =>
                      handleCardChange(index, "question", e.target.value)
                    }
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold">Answer {index + 1}</label>
                  <input
                    value={card.answer}
                    onChange={(e) =>
                      handleCardChange(index, "answer", e.target.value)
                    }
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Save Deck
        </button>

        {allDecks.length > 0 && (
          <div className="pt-6 border-t mt-6">
            <h3 className="text-xl font-bold mb-4">Saved Decks</h3>
            <ul className="space-y-2">
              {allDecks.map((deck, i) => (
                <li key={i} className="bg-gray-100 p-3 rounded-md">
                  <span className="font-medium">{deck.emojin} Deck {i + 1}:</span>{" "}
                  {deck.deckn}
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}
