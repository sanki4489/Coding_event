import React from "react";
import ProblemItem from "./ProblemItem";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../states/actionCreators";
import { useEffect } from "react";

const Problems = () => {
  const dispatch = useDispatch();
  const { fetchProblems } = bindActionCreators(actionCreators, dispatch);

  let problems = [];
  problems = fetchProblems();
  // useEffect(() => {
  //   problems = fetchProblems();
  //   console.log(problems);
  // });
  // console.log(problems);
  return (
    <div>
      <h2 className="my-3"> Problems for you !</h2>

      <div className="row">
        {problems &&
          problems.map((problem) => {
            return <ProblemItem problem={problem} />;
          })}
      </div>
    </div>
  );
};

export default Problems;
