import React, { useContext, useEffect, useState } from "react";
import { questions } from "../data/questions";
import { mbtiDescriptions, calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResults } from "../api/testResults";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TestForm = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [mbtiResult, setMbtiResult] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      toast.error("로그인 후 테스트를 진행해주세요.");
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: option });
  };

  const handleShowMbti = async (e) => {
    e.preventDefault();

    if (Object.keys(selectedOptions).length < questions.length) {
      toast.error("모든 문항을 선택해주세요.");
      return;
    }
    const answers = questions.map((q) => ({
      type: q.type,
      answer: selectedOptions[q.id],
    }));

    const result = calculateMBTI(answers);
    setMbtiResult(result);
    setModalOpen(true);

    const newTestResult = {
      id: crypto.randomUUID(),
      nickname: currentUser.nickname,
      result,
      visibility: true,
      date: new Date(),
      userId: currentUser.id,
    };
    await createTestResults(newTestResult);
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
              onClick={() => navigate("/testresult")}
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200"
            >
              이동하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestForm;
