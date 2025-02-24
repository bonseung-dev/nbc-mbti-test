import React, { useState } from "react";
import { questions } from "../data/questions";
import { mbtiDescriptions, calculateMBTI } from "../utils/mbtiCalculator";

const TestForm = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [mbtiResult, setMbtiResult] = useState(null);

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: option });
  };

  const handleShowMbti = (e) => {
    e.preventDefault();

    const answers = questions.map((q) => ({
      type: q.type,
      answer: selectedOptions[q.id],
    }));

    const result = calculateMBTI(answers);
    setMbtiResult(result);
    setModalOpen(true);
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
      <button
        className="block mt-4 px-4 w-1/3 mx-auto py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={handleShowMbti}
      >
        결과 보기
      </button>
      {/*결과 출력 modal*/}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">당신의 MBTI</h2>
            <p className="text-lg font-semibold text-center text-purple-600">
              {mbtiResult}
            </p>
            <p className="mt-2">{mbtiDescriptions[mbtiResult]}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestForm;
