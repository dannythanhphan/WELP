import * as bizUtil from '../utils/business_utils';

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

const receiveAllBusinesses = (businesses) => ({
    type: RECEIVE_ALL_businesses,
    businesses
})

const receiveBusiness = (business) => ({
    type: RECEIVE_BUSINESS,
    business
})

export const fetchAllBusinesses = () => (dispatch) => (
    bizUtil.fetchBusinesses()
        .then(businesses => dispatch(receiveAllBusinesses(businesses)))
)

export const fetchBusiness = (businessId) => (dispatch) => (
    bizUtil.fetchBusiness(businessId)
        .then(business => dispatch(receiveBusiness(business)))
)