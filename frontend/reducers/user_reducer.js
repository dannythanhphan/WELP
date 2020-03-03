import { RECEIVE_USER, REMOVE_USER, RECEIVE_ALL_USERS } from "../actions/user_actions";

const UserReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users
        case RECEIVE_USER:
            return Object.assign({}, state, action.user)
        case REMOVE_USER:
            delete nextState[action.userId]
            return nextState
        default:
            return state
    }
}

export default UserReducer