import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../states/actionCreators";
import CodeEditor from "./CodeEditor";
import { useSelector } from "react-redux/es/exports";

const Dahboard = () => {
  const dispatch = useDispatch();
  const { fetchProblems } = bindActionCreators(actionCreators, dispatch);

  let problems = [];
  useEffect(() => {
    fetchProblems();
    // eslint-disable-next-line
  }, []);

  problems = useSelector((state) => state.problem);
  let questionNo = Math.floor(Math.random() * problems.length);

  // console.log(questionNo);
  return (
    <div className="container">
      <h2>
        {problems === [] ? "No problems to solve" : null}
        Question : -{problems.length > 0 ? problems[questionNo].question : null}
      </h2>
      <CodeEditor />
    </div>
  );
};

export default Dahboard;
