"use client";

import { MdThumbUp } from "react-icons/md";
import { MdThumbDown } from "react-icons/md";
import { useState } from "react";

const Like = () => {
  const [liked, setLiked] = useState(true);
  const toggleLike = (value) => {
    liked !== value && setLiked(value);
  };
  return (
    <div className="flex flex-row items-center gap-10 my-3">
      <div
        className={`flex items-center ${
          !liked && "text-red-600"
        } text-gray-300 cursor-pointer`}
        onClick={() => toggleLike(false)}
      >
        <MdThumbDown size={40} />
        <div className="mx-2">No</div>
      </div>
      <div
        className={`flex items-center ${
          liked && "text-green-600"
        } text-gray-300 cursor-pointer`}
        onClick={() => toggleLike(true)}
      >
        <MdThumbUp size={40} />
        <div className="mx-2">Yes</div>
      </div>
    </div>
  );
};

export default Like;
