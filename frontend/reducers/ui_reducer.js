import { combineReducers } from "redux";
import FilterReducer from "./filter_reducer";

const uiReducer = combineReducers({
    filter: FilterReducer
});

export default uiReducer;