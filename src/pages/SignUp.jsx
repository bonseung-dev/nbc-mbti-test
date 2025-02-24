import React, { useState } from "react";
import { authSignup } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authSignup({ id, password, nickname });
      if (data.success) {
        toast.dark("회원가입에 성공했습니다. 로그인 페이지로 이동합니다.");
        navigate("/login");
      } else {
        console.log("회원가입 실패 : ", data);
      }
    } catch (error) {
      console.log("signup error : ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              아이디 :
            </label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="새로운 아이디를 입력해주세요!"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              비밀번호 :
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="새로운 비밀번호를 입력해주세요!"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="nikname"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              닉네임 :
            </label>
            <input
              type="text"
              id="nikname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="새로운 닉네임를 입력해주세요!"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
