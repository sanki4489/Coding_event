// this is a pure function
const reducer = (state = [], action) => {
  if (action.type === "fetchProblems") {
    return action.payload;
  } else {
    return state;
  }
};

export default reducer;
