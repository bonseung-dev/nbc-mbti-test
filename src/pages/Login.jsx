import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { authGetUserProfile, authlogin } from "../api/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  // 서버에 요구한 직후 accessToken을 저장?
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id.trim() || !password.trim()) {
      toast.error("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    try {
      const data = await authlogin({ id, password });
      if (data.success) {
        const token = data.accessToken;
        // accessToken을 이용하여 사용자 프로필 정보를 가져옴
        const userData = await authGetUserProfile(token);
        // userData에는 { id, nickname, ... } 등의 정보가 포함되어야 함
        login(token, userData);
        navigate("/");
        toast.dark("로그인 성공👋");
      } else {
        toast.error("로그인에 실패하였습니다.");
      }
    } catch (error) {
      toast.error("Login failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              아이디 :
            </label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디를 입력해주세요"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              비밀번호 :
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            로그인
          </button>
        </form>
        <p className="text-center">
          회원가입 하러가기 👉{" "}
          <Link to={"/register"}>
            <span className="font-bold text-blue-600">signup</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
