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

// problems
export const fetchProblems = () => {
  return (dispatch) => {
    dispatch({ type: "fetch" });
  };
};

// solutions
