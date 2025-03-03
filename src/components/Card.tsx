"use client";

import React from "react";
import { ICard } from "@/models/ICard";
import { deleteCard } from "@/services/deleteCard";

const Card = ({ card }: { card: ICard }) => {
  return (
    <div>
      <div
        className="grid grid-cols-2 gap-3 border border-orange-400 p-3"
        key={card.id}
      >
        <h2>
          {card.id} - {card.doctor}
        </h2>
        <button
          onClick={() => deleteCard(card.id)}
          className="btn btn-primary "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
