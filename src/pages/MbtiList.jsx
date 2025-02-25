import React from "react";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { Link } from "react-router-dom";

export const MbtiList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 m-4">
      {Object.entries(mbtiDescriptions).map(([mbti, description]) => (
        <div
          key={mbti}
          className="p-4 border border-gray-400 rounded shadow-lg"
        >
          <h2 className="text-lg font-bold">{mbti}</h2>
          <p>{description}</p>
        </div>
      ))}
      <Link to={"/"}>
        <button className="block mt-4 px-4 w-full max-w-xs mx-auto py-2 bg-gray-800 text-white rounded-md hover:bg-black transition">
          돌아가기
        </button>
      </Link>
    </div>
  );
};
