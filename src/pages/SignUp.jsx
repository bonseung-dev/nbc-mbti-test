import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nikname, setNikname] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <form></form>
    </>
  );
};

export default SignUp;
