import React, { useState } from "react";
import { questions } from "../data/questions";
const Test = () => {
  const [testList, setTestList] = useState([]);
  return <div>{questions.question}</div>;
};

export default Test;
