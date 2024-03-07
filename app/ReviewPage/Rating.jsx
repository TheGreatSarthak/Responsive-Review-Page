"use client";

import { FaStar } from "react-icons/fa6";
import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (clickedIndex) => {
    setRating(clickedIndex + 1);
  };
  return (
    <div className="flex flex-row gap-1 my-3">
      {[...Array(5).keys()].map((index) => (
        <FaStar
          key={index}
          className={`cursor-pointer text-2xl ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => handleStarClick(index)}
          size={40}
        />
      ))}
    </div>
  );
};

export default Rating;
