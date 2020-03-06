export const fetchBusinesses = (bounds) => (
    $.ajax({
        method: "GET",
        url: "/api/businesses",
        data: {bounds}
    })
    // .then(response => {
    //     debugger
    // })
)



export const fetchBusiness = (businessId) => (
    $.ajax({
        method: "GET",
        url: `/api/business/${businessId}`
    })
)