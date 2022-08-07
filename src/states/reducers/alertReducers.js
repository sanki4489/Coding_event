const reducer = (state = null, action) => {
  if (action.type === "success") {
    const newState = { type: "success", msg: action.payload };
    return newState;
  } else if (action.type === "danger") {
    const newState = { type: "danger", msg: action.payload };
    return newState;
  } else {
    return null;
  }
};

export default reducer;
