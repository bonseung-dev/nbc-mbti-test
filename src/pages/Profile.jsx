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
      alert("닉네임이 변경되었습니다. 메인 페이지로 이동합니다");
      navigate("/");
    } catch (error) {
      console.log("닉네임 변경 오류 발생 : ", error);
      alert("닉네임 변경 실패");
    }
  };
  return (
    <div>
      <h1>My page</h1>
      {userInfo ? (
        <div>
          <p>아이디 : {userInfo.id}</p>
          <p>닉네임 : {userInfo.nickname}</p>
        </div>
      ) : (
        <p>로딩중...</p>
      )}
      <form onSubmit={handleNicknameChange}>
        <input
          type="text"
          value={newNickname}
          onChange={(e) => setNewNickname(e.target.value)}
          placeholder={userInfo?.nickname}
        />
        <button type="submit">변경하기</button>
      </form>
    </div>
  );
};

export default Profile;
