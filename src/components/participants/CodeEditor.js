import { React, useState } from "react";
import Spinner from "../Spinner";
import Output from "./Output";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../states/actionCreators";

const CodeEditor = () => {
  const dispatch = useDispatch();
  const { loading } = bindActionCreators(actionCreators, dispatch);
  const [sol, setSol] = useState("");
  const [output, setOutput] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleRun = async () => {
    if (sol !== "") {
      loading(true);
      const url = `http://localhost:5500/api/code/runcode/62aef2186b1120ef09ca5356`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("token"),
        },
        body: JSON.stringify({ solution: sol, language: "py" }),
      });
      const json = await response.json();
      setOutput(json);
      loading(false);
    } else {
      alert("Cannot leave the solution empty !");
    }
  };
  const onChange = (e) => {
    setSol(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <h5>Solution</h5>
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            name="codingArea"
            id="codingArea"
            style={{ height: "200px" }}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={handleRun}
        >
          Run
        </button>
        <button type="submit" className="btn btn-success mx-2 my-1">
          Submit
        </button>
      </form>
      <Output output={output} />
      <Spinner />
    </>
  );
};

export default CodeEditor;
