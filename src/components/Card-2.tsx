import React from "react";
import { ICard } from "@/models/ICard";
import Link from "next/link";

const CardTwo = ({ card }: { card: ICard }) => {
  return (
    <div>
      <div
        className="grid grid-cols-2 gap-3 border border-orange-400 p-3"
        key={card.id}
      >
        <h2>
          {card.id} - {card.doctor}
        </h2>
        <Link href={`/cards/${card.id}`} className="btn btn-primary ">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default CardTwo;
