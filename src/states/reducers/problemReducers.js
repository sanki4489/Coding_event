// const reducer = async (state = [], action) => {
//   const host = "http://localhost:5500";
//   if (action.type === "fetch") {
//     // API call
//     const url = `${host}/api/problem/fetchproblem`;
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     state = await response.json();
//     return state;
//   } else {
//     return state;
//   }
// };

const reducer = async (state = [], action) => {
  const host = "http://localhost:5500";
  if (action.type === "fetch") {
    // API call
    const url = `${host}/api/problem/fetchproblem`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    state = await response.json();
    return state;
  } else {
    return state;
  }
};

export default reducer;
