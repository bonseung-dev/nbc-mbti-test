import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getTestResults } from "../api/testResults";
import TestResultItem from "../components/TestResultItem";

const TestResultList = () => {
  const [testResults, setTestResults] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    fetchTestResults();
  }, []);

  const fetchTestResults = async () => {
    try {
      const results = await getTestResults();
      const filtered = results.filter(
        (result) =>
          result.visibility || (currentUser && result.userId === currentUser.id)
      );
      setTestResults(filtered);
    } catch (error) {
      console.log("테스트 결과 가져오기 실패 : ", error);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">테스트 결과</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testResults.map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            onRefresh={fetchTestResults}
          />
        ))}
      </div>
    </div>
  );
};

export default TestResultList;
