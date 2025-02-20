import React from "react";
import { getCards } from "@/service-actions/api.service";
import { ICard } from "@/models/ICard";
import Card from "@/components/Card";

const Cards = async () => {
  const cards: ICard[] = await getCards();

  cards.sort((a, b) => b.id - a.id);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 p-3">
      {cards.map((card: ICard) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
