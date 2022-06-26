import { combineReducers } from "redux";
import alertReducers from "./alertReducers";
import problemReducers from "./problemReducers";

const reducers = combineReducers({
  alert: alertReducers,
  problem: problemReducers,
});

export default reducers;
