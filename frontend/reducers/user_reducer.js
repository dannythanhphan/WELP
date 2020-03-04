import { RECEIVE_USER, REMOVE_USER, RECEIVE_ALL_USERS } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const UserReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users
        case RECEIVE_USER:
            return Object.assign({}, state, action.user)
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user
            return nextState
        case REMOVE_USER:
            delete nextState[action.userId]
            return nextState
        default:
            return state
    }
}

export default UserReducer