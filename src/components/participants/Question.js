import React from "react";
import { useSelector } from "react-redux/es/exports";

const Question = () => {
  let problems = useSelector((state) => state.problem);
  if (problems !== undefined) {
    console.log(problems);
    // question = problems[Math.floor(Math.random() * problems.length)].question;
  }
  console.log(problems);
  return (
    <div>
      <h2>Question :-</h2>
    </div>
  );
};

export default Question;
