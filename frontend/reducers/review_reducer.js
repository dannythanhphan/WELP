import { RECEIVE_ALL_REVIEWS, CREATE_REVIEW } from '../actions/review_actions'

const ReviewReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews
        case CREATE_REVIEW:
            return action.review
        default:
            return state
    }
}

export default ReviewReducer