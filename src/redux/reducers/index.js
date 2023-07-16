import counterReducers from "./counterReducers";

import { combineReducers } from "redux";

export default combineReducers({
    counter: counterReducers
})