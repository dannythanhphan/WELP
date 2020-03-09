import { UPDATE_FILTERS } from "../actions/filter_actions";

const filtersState = {
    bounds: {},
    maxCost: 0,
    category: "",
}

const FilterReducer = (state = filtersState, action) => {
    Object.freeze(state)
    switch (action.type) {
        case UPDATE_FILTERS:
            return Object.assign({}, state, {[action.filter]: action.value})
        default:
            return state;
    }
}

export default FilterReducer;