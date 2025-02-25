import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { authGetUserProfile, authPatchProfileChange } from "../api/auth";
import { toast } from "react-toastify";

const Profile = () => {
  const [userInfo, setUserInfo] = useState();
  const [newNickname, setNewNickname] = useState("");
  const { isAuthenticated, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.dark("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
      navigate("/login");
      return;
    }

    const fetchUserInfo = async () => {
      try {
        const data = await authGetUserProfile(token);
        setUserInfo(data);
      } catch (error) {
        console.error("프로필 정보를 가져오는 중 오류 발생:", error);
      }
    };

    fetchUserInfo();
  }, [isAuthenticated, token, navigate]);

  const handleNicknameChange = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (newNickname) formData.append("nickname", newNickname);
    try {
      const updatedProfile = await authPatchProfileChange(token, newNickname);
      setUserInfo(updatedProfile);
      toast.dark("닉네임이 변경되었습니다.");
      navigate("/");
    } catch (error) {
      console.log("닉네임 변경 오류 발생 : ", error);
      toast.error("닉네임 변경 실패");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">닉네임 변경</h2>
        {userInfo ? (
          <div className="mb-4">
            <p className="text-gray-700">
              <span className="font-semibold">현재 닉네임:</span>{" "}
              {userInfo.nickname}
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-600 mb-4">로딩중...</p>
        )}
        <form onSubmit={handleNicknameChange}>
          <div className="mb-6">
            <input
              type="text"
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value)}
              placeholder={userInfo?.nickname}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            변경하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
