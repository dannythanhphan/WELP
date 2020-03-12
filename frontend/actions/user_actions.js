import * as userUtils from '../utils/user_utils';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

const receiveUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
})

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

const removeUser = (userId) => ({
    type: REMOVE_USER,
    userId
});

export const fetchUsers = () => (dispatch) => (
    userUtils.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
);

export const createUser = (user) => (dispatch) => (
    userUtils.createUser(user)
        .then(user => dispatch(receiveUser(user)))
);

export const updateUser = (user) => (dispatch) => (
    userUtils.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
);

export const deleteUser = (userId) => (dispatch) => (
    userUtils.deleteUser(userId)
        .then(() => dispatch(removeUser(userId)))
)