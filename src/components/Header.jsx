import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      navigate("/");
    }
  };
  return (
    <header className="bg-black text-white p-4">
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="text-xl font-bold">
          <img src="/Preview.png" alt="Logo" className="w-32 h-18" />
        </Link>
        {isAuthenticated ? (
          <>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </nav>
          </>
        ) : (
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Signup</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
