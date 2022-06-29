import React from "react";
import ProblemItem from "./ProblemItem";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../states/actionCreators";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";

const Problems = () => {
  const dispatch = useDispatch();
  const { fetchProblems } = bindActionCreators(actionCreators, dispatch);

  let problems = [];
  useEffect(() => {
    fetchProblems();
    // eslint-disable-next-line
  }, []);

  problems = useSelector((state) => state.problem);

  return (
    <div>
      <h2 className="my-3"> Problems for you !</h2>

      <div className="row">
        {problems !== [] ? problems.length === "No problems" : null}
        {problems.map((problem) => {
          return <ProblemItem key={problem._id} problem={problem} />;
        })}
      </div>
    </div>
  );
};

export default Problems;
