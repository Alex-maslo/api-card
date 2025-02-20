import React from "react";
import { ICard } from "@/models/ICard";

const Card = ({ card }: { card: ICard }) => {
  return (
    <div className="card bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{card.doctor}</h2>
        <p>{card.id}</p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
