"use client";

import { useState } from "react";

const traits = [
  "Adventurous",
  "Clean",
  "Good listener",
  "Honest",
  "Inspiring",
  "Kind",
  "Knowledgeable",
];

const PraiseButton = () => {
  const [selected, setSelected] = useState([]);
  const handleClick = (value) => {
    // Check if the trait is already selected
    if (selected.includes(value)) {
      // If selected, remove it from the array
      setSelected(selected.filter((trait) => trait !== value));
    } else {
      // If not selected, add it to the array
      setSelected([...selected, value]);
    }
  };
  return (
    <div className="flex flex-wrap gap-2 my-2">
      {traits.map((trait) => (
        <div
          key={trait}
          className={`cursor-pointer text-xs hover:bg-green-200 ${
            selected.includes(trait)
              ? "bg-green-300 hover:bg-green-300"
              : "bg-gray-200"
          } p-3 my-1 rounded-full`}
          onClick={() => handleClick(trait)}
        >
          {trait}
        </div>
      ))}
    </div>
  );
};

export default PraiseButton;
