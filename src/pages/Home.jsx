import React from "react";
import { Link, Links } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-screen bg-slate-200 flex flex-col items-center py-8">
      {/* 타이틀 */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        무료 성격 테스트
      </h1>

      {/* 설명 */}
      <p className="text-sm text-gray-600 mb-8 text-center max-w-xl">
        이 웹사이트는 당신의 성격을 분석하여 최적의 팀 평가와 성격 유형 이해를
        도와드립니다.
      </p>

      {/* 섹션 소개: 카드 형태로 구성 */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <Link to={"/testform"}>
          <div className="flex-1 p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl text-gray-800 font-semibold mb-2">
              성격 유형 검사
            </h2>
            <p className="text-gray-600">자신의 성격을 확인해보세요.</p>
          </div>
        </Link>
        <Link to={"/mbtilist"}>
          <div className="flex-1 p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl text-gray-800 font-semibold mb-2">
              성격 유형 이해
            </h2>
            <p className="text-gray-600">다양한 성격 유형에 대해 알아보세요.</p>
          </div>
        </Link>
        <div className="flex-1 p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl text-gray-800 font-semibold mb-2">팀 평가</h2>
          <p className="text-gray-600">팀의 역량을 평가해보세요.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
