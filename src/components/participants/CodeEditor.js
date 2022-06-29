import React from "react";

const CodeEditor = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form>
      <div className="form-floating">
        <h5>Solution</h5>
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          name="codingArea"
          id="codingArea"
          style={{ height: "200px" }}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-2 my-1">
        Run
      </button>
      <button
        type="submit"
        className="btn btn-success mx-2 my-1"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default CodeEditor;
