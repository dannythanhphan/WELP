import { combineReducers } from "redux";
import BusinessReducer from "./business_reducer";
import UserReducer from "./user_reducer";
import ReviewReducer from "./review_reducer";

const EntityReducer = combineReducers({
    users: UserReducer,
    businesses: BusinessReducer,
    reviews: ReviewReducer
});

export default EntityReducer