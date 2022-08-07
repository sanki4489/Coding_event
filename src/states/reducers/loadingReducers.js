const reducer = (state = false, action) => {
  if (action.type === "loading") {
    const newState = action.payload;
    return newState;
  } else {
    return state;
  }
};

export default reducer;
