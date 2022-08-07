import { combineReducers } from "redux";
import alertReducers from "./alertReducers";
import problemReducers from "./problemReducers";
import loadingReducers from "./loadingReducers";

const reducers = combineReducers({
  alert: alertReducers,
  problem: problemReducers,
  loading: loadingReducers,
});

export default reducers;
