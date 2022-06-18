export const successAlert = (msg) => {
    return (dispatch) => {
        dispatch({type: "success", payload: msg });
    };
}

export const dangerAlert = (msg) => {
    return (dispatch) => {
        dispatch({type: "danger", payload: msg});
    };
}