export const fetchBusinesses = (data) => {
    return $.ajax({
        method: "GET",
        url: "/api/businesses",
        data
    })
    // .then(response => {
    //
    // })
}

export const fetchBusiness = (businessId) => (
    $.ajax({
        method: "GET",
        url: `/api/businesses/${businessId}`
    })
)