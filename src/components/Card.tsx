import React from "react";

interface CardProps {
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ title, body }) => {
  return (
    <div className="w-[180px] bg-white rounded-lg shadow-md p-4">
      <h2 className="text-l font-semibold mb-4">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Card;
