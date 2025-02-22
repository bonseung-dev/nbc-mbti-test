import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col text-black ">
      {/* 공통 Header */}
      <Header />
      {/* 메인 콘텐츠 영역 */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
