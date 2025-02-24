import React, { useState } from "react";
import { questions } from "../data/questions"; // 경로는 실제 위치에 맞게 수정

const TestForm = () => {
  // 각 질문별로 선택된 옵션을 저장하는 상태 (키는 question의 id)
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: option });
  };

  return (
    <div className="p-4">
      {questions.map((q) => (
        <div
          key={q.id}
          className="mb-6 p-4 w-2/3 mx-auto border border-gray-300 rounded shadow "
        >
          <h3 className="text-xl font-bold mb-2 text-center">{`${q.id}. ${q.question}`}</h3>
          <div className="flex justify-center gap-2 ">
            {q.options.map((option, idx) => (
              <label
                key={idx}
                className={`cursor-pointer px-4 py-2 border border-gray-400 rounded transition ${
                  selectedOptions[q.id] === option
                    ? "bg-white text-black border-2 border-purple-500 focus:outline-2 "
                    : "bg-gray-300 text-black"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${q.id}`} // 질문별 고유한 그룹
                  value={option}
                  checked={selectedOptions[q.id] === option}
                  onChange={() => handleOptionChange(q.id, option)}
                  className="hidden"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button>완료</button>
    </div>
  );
};

export default TestForm;
