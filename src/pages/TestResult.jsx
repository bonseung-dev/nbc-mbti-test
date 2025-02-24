import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getTestResults } from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResult = () => {
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    fetchTestResults();
  }, []);

  const fetchTestResults = async () => {
    try {
      const results = await getTestResults();
      setTestResults(results);
    } catch (error) {
      console.log("테스트 결과 가져오기 실패 : ", error);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">테스트 결과</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testResults.map((result) => (
          <div
            key={result.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <p className="text-lg font-semibold mb-2">
              닉네임: {result.nickname}
            </p>
            <p className="text-gray-700 mb-2">결과: {result.result}</p>
            <p>{mbtiDescriptions[result.result]}</p>
            <p className="text-sm text-gray-500">날짜: {result.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestResult;
