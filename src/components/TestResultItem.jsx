import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  deleteTestResults,
  updateTestResultVisibility,
} from "../api/testResults";
import { toast } from "react-toastify";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultItem = ({ result, onRefresh }) => {
  const { currentUser } = useContext(AuthContext);
  const isOwner = currentUser && result.userId === currentUser.id;

  const handleToggleVisibility = async () => {
    try {
      await updateTestResultVisibility(result.id, !result.visibility);
      toast.success("공개 여부가 변경되었습니다.");
      onRefresh();
    } catch (error) {
      toast.error("공개 여부 변경에 실패했습니다.");
    }
  };

  const handleDelete = async () => {
    if (!isOwner) return;
    try {
      await deleteTestResults(result.id);
      toast.dark("삭제되었습니다.");
      onRefresh();
    } catch (error) {
      toast.error("삭제에 실패했습니다.");
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <p className="text-lg font-semibold mb-2">닉네임: {result.nickname}</p>
      <p className="text-gray-700 mb-2">결과: {result.result}</p>
      <p className="mb-2">{mbtiDescriptions[result.result]}</p>
      <p className="text-sm text-gray-500 mb-4">
        날짜: {new Date(result.date).toLocaleString()}
      </p>
      {isOwner && (
        <div className="flex justify-between">
          <button
            onClick={handleToggleVisibility}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            {result.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
