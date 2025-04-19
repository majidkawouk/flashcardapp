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

  const handleSaveDeck = () => {
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

    // Reset form
    setdeckname("");
    setcolor("");
    setemoji("");
    setcardnumber("");
    setCards([]);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <div>
        <label>Deck Name:</label>
        <input value={deckname} onChange={(e) => setdeckname(e.target.value)} />
      </div>

     

      <div>
        <label>Emoji:</label>
        <input value={emoji} onChange={(e) => setemoji(e.target.value)} />
      </div>

      <div>
        <label>Card Number:</label>
        <input
          type="number"
          value={cardnumber}
          onChange={(e) => setcardnumber(e.target.value)}
        />
      </div>

      <hr />
      <h3>Cards</h3>
      {cards.map((card, index) => (
        <div key={index}>
          <label>Question {index + 1}:</label>
          <input
            value={card.question}
            onChange={(e) => handleCardChange(index, "question", e.target.value)}
          />
          <label>Answer {index + 1}:</label>
          <input
            value={card.answer}
            onChange={(e) => handleCardChange(index, "answer", e.target.value)}
          />
        </div>
      ))}

      <button onClick={handleSaveDeck}>Save Deck</button>

      <hr />
      <h3>Saved Decks</h3>
      {allDecks.map((deck, i) => (
        <div key={i}>
          <p>Deck {i + 1}: {deck.deckn}</p>
        </div>
      ))}
    </div>
  );
}
