// CONSTANTS
const HOST = "http://localhost:5500";

// alerts
export const successAlert = (msg) => {
  return (dispatch) => {
    dispatch({ type: "success", payload: msg });
  };
};

export const dangerAlert = (msg) => {
  return (dispatch) => {
    dispatch({ type: "danger", payload: msg });
  };
};

// Spinner
export const loading = (condition) => {
  return (dispatch) => {
    dispatch({ type: "loading", payload: condition });
  };
};

// problems
// this can be impure same i/p --> different o/p
// we are returning a function

export const fetchProblems = () => {
  let payload = [];
  return async (dispatch) => {
    const url = `${HOST}/api/problem/fetchproblem`;
    // eslint-disable-next-line
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const payload = await response.json();
        dispatch({ type: "fetchProblems", payload: payload });
      })
      .catch((error) => {
        dispatch({ type: "fetchProblems", payload: payload });
      });
  };
};

// solutions
