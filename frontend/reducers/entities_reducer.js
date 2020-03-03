import { combineReducers } from "redux";
import BusinessReducer from "./business_reducer";
import UserReducer from "./user_reducer";

const EntityReducer = combineReducers({
    users: UserReducer,
    businesses: BusinessReducer
});

export default EntityReducer