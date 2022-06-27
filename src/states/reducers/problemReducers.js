// this is a pure function
const reducer = (state = [], action) => {
  if (action.type === "fetchProblems") {
    console.log(1);
    return { ...state, problems: action.payload };
  } else {
    return state;
  }
};

export default reducer;
