import { combineReducers } from "redux";
import alertReducers from "./alertReducers"

const reducers = combineReducers({alert: alertReducers});

export default reducers;