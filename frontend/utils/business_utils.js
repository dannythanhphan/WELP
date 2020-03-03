export const fetchBusinesses = () => (
    $.ajax({
        method: "GET",
        url: "/api/businesses"
    })
)

export const fetchBusiness = (businessId) => (
    $.ajax({
        method: "GET",
        url: `/api/business/${businessId}`
    })
)