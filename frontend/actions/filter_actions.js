import * as businessUtil from '../utils/business_utils'
import { fetchAllBusinesses } from './business_actions';


export const UPDATE_FILTERS = "UPDATE_FILTERS";

export const updateFilter = (filter, value) => ({
    type: UPDATE_FILTERS,
    filter,
    value
});

export const updateFilters = (filter, value) => (dispatch, getState) => {
    dispatch(updateFilter(filter, value));
    return fetchAllBusinesses(getState().ui.filter)(dispatch)
}

// export const UPDATE_BOUNDS = "UPDATE_BOUNDS"

// const updateBound = (bounds) => ({
//     type: UPDATE_BOUNDS,
//     bounds
// });

// export const updateBounds = (bounds) => (dispatch, getState) => {
//     dispatch(updateBound(bounds));
//     return fetchAllBusinesses(getState().ui.filter)(dispatch)
// }

// export default updateBounds;