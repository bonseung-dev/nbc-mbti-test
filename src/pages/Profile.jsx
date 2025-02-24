import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { authGetUserProfile } from "../api/auth";

const Profile = () => {
  const [userInfo, setUserInfo] = useState();
  const [newNickname, setNewNickname] = useState("");
  const { isAuthenticated, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
      navigate("/login");
      return;
    }

    const fetchUserInfo = async () => {
      try {
        const data = await authGetUserProfile(token);
        setUserInfo(data);
      } catch (error) {
        console.error("❌ 프로필 정보를 가져오는 중 오류 발생:", error);
      }
    };

    fetchUserInfo();
  }, [isAuthenticated, token, navigate]);
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
      <form>
        <input
          type="text"
          value={newNickname}
          onChange={(e) => setNewNickname(e.target.value)}
          placeholder={newNickname}
        />
        <button>변경하기</button>
      </form>
    </div>
  );
};

export default Profile;
