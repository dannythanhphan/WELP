export const fetchBusinesses = (filter) => (
    $.ajax({
        method: "GET",
        url: "/api/businesses"
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