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