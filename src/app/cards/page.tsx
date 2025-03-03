import React from "react";
import { getAllCards } from "@/services/getAllCards";
import { ICard } from "@/models/ICard";
import Card from "@/components/Card";

const CardsPage = async () => {
  const cards: ICard[] = await getAllCards();

  if (!cards) return <h2>No cards found</h2>;

  cards.sort((a, b) => b.id - a.id);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-2">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardsPage;
