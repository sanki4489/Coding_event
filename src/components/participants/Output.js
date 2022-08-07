import React from "react";

const Output = (props) => {
  return (
    <div>
      <div className="card bg-dark my-2" style={{ color: "whitesmoke" }}>
        <div className="card-body">
          <h5 className="card-title">
            {`Output --${props.output.language ? props.output.language : ""}-${
              props.output.version ? props.output.version : ""
            }`}
          </h5>
          <p className="card-text">
            {props.output ? props.output.output : " ?"}
            {props.output ? props.output.error : "? "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Output;
