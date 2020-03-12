import * as reviewUtils from '../utils/review_utils'

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW"

const receiveReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})

const createReview = (review) => ({
    type: CREATE_REVIEW,
    review
})

export const receiveSpecificReviews = (businessId) => (dispatch) => (
    reviewUtils.fetchReviews(businessId)
        .then((reviews) => dispatch(receiveReviews(reviews)))
)

export const createNewReview = (businessId) => (dispatch) => (
    reviewUtils.createReview(businessId)
        .then((review) => dispatch(createReview(review)))
)