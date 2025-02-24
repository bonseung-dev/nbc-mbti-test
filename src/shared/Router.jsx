import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import TestForm from "../pages/TestForm";
import Results from "../pages/Results";
import Layout from "./Layout";
import { AuthContext } from "../context/AuthContext";
import { MbtiList } from "../pages/MbtiList";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testform" element={<TestForm />} />
          <Route path="/results" element={<Results />} />
          <Route path="/mbtilist" element={<MbtiList />} />
          <Route path="/login" element={<PublicRoute element={Login} />} />
          <Route path="/register" element={<PublicRoute element={SignUp} />} />
          <Route path="/profile" element={<PrivateRoute element={Profile} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
