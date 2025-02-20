"use client";

import React from "react";
import { deleteCard } from "@/service-actions/api.service";
import { ICard } from "@/models/ICard";

interface Props {
  card: ICard;
}

const Card = ({ card }: Props) => {
  const handleButtonClick = async () => {
    await deleteCard(card.id); // Передаємо ID картки у функцію
  };
  return (
    <div className="card bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{card.doctor}</h2>
        <p>{card.id}</p>
        <div className="card-actions justify-end">
          <button onClick={handleButtonClick} className="btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
