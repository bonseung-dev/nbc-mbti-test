import React from "react";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

export const MbtiList = () => {
  return (
    <div>
      {Object.entries(mbtiDescriptions).map(([mbti, description]) => (
        <div key={mbti} className="mb-4 p-4 border border-gray-300 rounded">
          <h2 className="text-lg font-bold">{mbti}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};
