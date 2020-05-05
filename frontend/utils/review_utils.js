export const fetchReviews = (businessId) => (
    $.ajax({
        method: "GET",
        url: `/api/businesses/${businessId}/reviews`
    })
)

export const createReview = (data) => {
    return $.ajax({
        method: "POST",
        url: `/api/businesses/${data.business_id}/reviews`,
        data
    })
}

export const deleteReview = (review) => {
    debugger
    return $.ajax({
        method: "DELETE",
        url: `/api/reviews/${review.id}`,
    })
}