import React from "react";

const Codearea = () => {
  return (
    <div className="form-floating">
      <h3 style={{ textAlign: "center" }}>Code here ...</h3>
      <textarea
        className="form-control"
        placeholder="Leave a comment here"
        name="codingArea"
        id="codingArea"
        style={{ height: "200px" }}
      ></textarea>
    </div>
  );
};

export default Codearea;
