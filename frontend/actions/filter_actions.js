import * as businessUtil from '../utils/business_utils'

export const UPDATE_BOUNDS = "UPDATE_BOUNDS"

const updateBound = (bounds) => ({
    type: UPDATE_BOUNDS,
    bounds
});

export const updateBounds = (bounds) => (
    businessUtil.fetchBusinesses(bounds)
        .then(() => dispatch(updateBound(bounds)))
)

export default updateBounds;