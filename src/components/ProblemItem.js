import React from "react";
import { Link } from "react-router-dom";

const ProblemItem = (props) => {
  const { problem } = props;
  return (
    <div className="card my-2">
      <div className="card-body">
        <p className="card-title" style={{ float: "right" }}>
          {new Date(problem.date).toLocaleDateString()}
        </p>
        <h5 className="card-text ">{problem.question}</h5>
        <Link to="/" className="btn btn-primary">
          Answer
        </Link>
      </div>
    </div>
  );
};

export default ProblemItem;
